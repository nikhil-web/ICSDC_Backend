/**
 * strapiImport.js — Reusable Strapi v5 import utility
 *
 * Usage:
 *   const { runImport } = require('./strapiImport');
 *   const PAGES = [
 *     { name: 'My Page', endpoint: 'my-page', uid: 'api::my-page.my-page', data: {...} }
 *   ];
 *   runImport(PAGES);
 *
 * Each page object:
 *   name     — Display name for logging
 *   endpoint — Strapi API path segment (e.g. 'google-workspace-page')
 *   uid      — Strapi content type UID (e.g. 'api::google-workspace-page.google-workspace-page')
 *   data     — Plain JS object matching the schema (no wrapping needed)
 */

const http = require('http');
const https = require('https');
const { URL } = require('url');

// ─── Config ────────────────────────────────────────────────────────────────
const STRAPI_BASE  = process.env.STRAPI_URL       || 'http://localhost:1337';
const ADMIN_EMAIL  = process.env.STRAPI_EMAIL     || 'nikhilpandey.pandey9@gmail.com';
const ADMIN_PASS   = process.env.STRAPI_PASS      || 'Tubelight@123';
// Optional: Strapi API Token (Settings → API Tokens in admin panel).
// When set, the script uses /api/* directly — no login step needed.
const API_TOKEN    = process.env.STRAPI_API_TOKEN || '';

// ─── HTTP helper ────────────────────────────────────────────────────────────
function request(method, path, body, token) {
  return new Promise((resolve, reject) => {
    const url = new URL(STRAPI_BASE + path);
    const isHttps = url.protocol === 'https:';
    const lib = isHttps ? https : http;
    const payload = body ? JSON.stringify(body) : null;

    const options = {
      hostname: url.hostname,
      port: url.port || (isHttps ? 443 : 80),
      path: url.pathname + url.search,
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(payload ? { 'Content-Length': Buffer.byteLength(payload) } : {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    };

    const req = lib.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: data ? JSON.parse(data) : {} });
        } catch {
          resolve({ status: res.statusCode, body: data });
        }
      });
    });

    req.on('error', reject);
    if (payload) req.write(payload);
    req.end();
  });
}

// ─── Auth ───────────────────────────────────────────────────────────────────
async function login(email = ADMIN_EMAIL, pass = ADMIN_PASS) {
  console.log(`\n🔐 Logging in as ${email}…`);
  const res = await request('POST', '/admin/login', { email, password: pass });
  if (res.status !== 200 || !res.body?.data?.token) {
    throw new Error(`Login failed (${res.status}): ${JSON.stringify(res.body)}`);
  }
  console.log('   ✓ Authenticated');
  return res.body.data.token;
}

// ─── Upsert single-type ─────────────────────────────────────────────────────
/**
 * Two modes depending on whether an API token is available:
 *
 * MODE A — API Token  (STRAPI_API_TOKEN is set)
 *   PUT /api/{endpoint}  with body { data: { ...fields, publishedAt } }
 *   Falls back to POST if 404.
 *
 * MODE B — Admin JWT  (login-based token)
 *   PUT /content-manager/single-types/{uid}  with flat body (no wrapper)
 *   Then POST /content-manager/single-types/{uid}/actions/publish
 */
async function upsertSingleType(token, endpoint, data, uid) {
  let res;

  if (API_TOKEN) {
    // ── Mode A: API Token on /api/* ──────────────────────────────────────
    const payload = { data: { ...data, publishedAt: new Date().toISOString() } };
    res = await request('PUT', `/api/${endpoint}`, payload, token);
    if (res.status === 404) {
      res = await request('POST', `/api/${endpoint}`, payload, token);
    }
  } else {
    // ── Mode B: Admin JWT on /content-manager/* ──────────────────────────
    const contentUid = uid || `api::${endpoint}.${endpoint}`;
    res = await request('PUT', `/content-manager/single-types/${contentUid}`, data, token);
  }

  if (res.status >= 400) {
    throw new Error(`Upsert failed for "${endpoint}" (${res.status}):\n${JSON.stringify(res.body, null, 2)}`);
  }

  return res.body;
}

// ─── Publish ────────────────────────────────────────────────────────────────
/**
 * Publish a single-type.
 * Mode A: publishedAt already set in the upsert payload — nothing more to do.
 * Mode B: POST /content-manager/single-types/{uid}/actions/publish
 */
async function publishSingleType(token, endpoint, uid) {
  if (API_TOKEN) return true; // publishedAt was included in the upsert
  const contentUid = uid || `api::${endpoint}.${endpoint}`;
  const res = await request('POST', `/content-manager/single-types/${contentUid}/actions/publish`, {}, token);
  return res.status < 400;
}

// ─── Permissions ────────────────────────────────────────────────────────────
/**
 * Grant public (unauthenticated) read access to a content-type's `find` action.
 *
 * Strapi v5 admin permissions API path:
 *   GET  /admin/roles   → find 'Public' role id
 *   GET  /admin/roles/:id/permissions → list all permissions
 *   PUT  /admin/roles/:id/permissions → update permissions
 */
async function setPublicPermission(token, uid) {
  // 1. Find the Public role
  const rolesRes = await request('GET', '/admin/roles', null, token);
  if (rolesRes.status !== 200) {
    console.warn(`   ⚠ Could not list roles (${rolesRes.status}) — skipping permissions`);
    return;
  }
  const publicRole = (rolesRes.body?.data || []).find(
    (r) => r.code === 'strapi-public' || r.name?.toLowerCase() === 'public'
  );
  // Note: admin "Public" role doesn't exist in Strapi v5 — fall through to users-permissions check

  if (publicRole) {
    // 2. Fetch existing permissions for the admin Public role
    const permRes = await request('GET', `/admin/roles/${publicRole.id}/permissions`, null, token);
    if (permRes.status === 200) {
      const existing = permRes.body?.data || [];
      const alreadyHas = existing.some(
        (p) => p.subject === uid && p.action === 'plugin::content-manager.explorer.read'
      );
      if (alreadyHas) {
        console.log('   ✓ Public permission already set');
        return;
      }
    }
  }

  // 4. Add the find permission via the Users & Permissions plugin role
  const apiRolesRes = await request('GET', '/users-permissions/roles', null, token);
  if (apiRolesRes.status !== 200) {
    console.warn(`   ⚠ Could not list API roles (${apiRolesRes.status}) — skipping permissions`);
    return;
  }

  const apiPublicRole = (apiRolesRes.body?.roles || []).find(
    (r) => r.type === 'public' || r.name?.toLowerCase() === 'public'
  );
  if (!apiPublicRole) {
    console.warn('   ⚠ API Public role not found — skipping permissions');
    return;
  }

  // 5. Fetch current permissions for API public role
  const apiPermRes = await request(
    'GET', `/users-permissions/roles/${apiPublicRole.id}`, null, token
  );
  if (apiPermRes.status !== 200) {
    console.warn(`   ⚠ Could not fetch API role permissions — skipping`);
    return;
  }

  // 6. Enable find on the relevant controller
  //    uid is like 'api::google-workspace-page.google-workspace-page'
  //    The permissions key is 'api::<slug>' (without the repeated part)
  const controllerKey = uid.split('::')[1]?.split('.')[0]; // e.g. google-workspace-page
  const permKey = `api::${controllerKey}`; // e.g. api::microsoft-365-page
  const roleData = apiPermRes.body?.role || {};

  if (roleData.permissions?.[permKey]) {
    const ctrl = roleData.permissions[permKey];
    if (ctrl.controllers) {
      const ctrlName = Object.keys(ctrl.controllers)[0];
      if (ctrl.controllers[ctrlName]?.find) {
        ctrl.controllers[ctrlName].find.enabled = true;
      }
    }
  } else {
    console.warn(`   ⚠ Permission key '${permKey}' not found in role — you may need to set it manually`);
  }

  const updateRes = await request(
    'PUT',
    `/users-permissions/roles/${apiPublicRole.id}`,
    { permissions: roleData.permissions },
    token
  );

  if (updateRes.status < 400) {
    console.log('   ✓ Public read permission granted');
  } else {
    console.warn(`   ⚠ Permission update returned ${updateRes.status} — you may need to set it manually in the Strapi admin panel`);
  }
}

// ─── Main runner ────────────────────────────────────────────────────────────
/**
 * Run a full import for an array of page definitions.
 *
 * @param {Array<{name: string, endpoint: string, uid: string, data: object}>} pages
 * @param {object} [opts]
 * @param {string} [opts.email]    - Override admin email
 * @param {string} [opts.password] - Override admin password
 */
async function runImport(pages, opts = {}) {
  const apiToken = opts.apiToken || API_TOKEN;
  const email    = opts.email    || ADMIN_EMAIL;
  const pass     = opts.password || ADMIN_PASS;

  let token;
  if (apiToken) {
    // Use the API token directly — no login step needed
    token = apiToken;
    console.log('\n🔑 Using API token for authentication');
  } else {
    try {
      token = await login(email, pass);
    } catch (err) {
      console.error('\n❌ Authentication failed:', err.message);
      console.error('   Make sure Strapi is running at', STRAPI_BASE);
      process.exit(1);
    }
  }

  let passed = 0;
  let failed = 0;

  for (const page of pages) {
    console.log(`\n📄 Importing: ${page.name}`);
    try {
      await upsertSingleType(token, page.endpoint, page.data, page.uid);
      console.log(`   ✓ Content saved`);

      await publishSingleType(token, page.endpoint, page.uid);
      console.log(`   ✓ Published`);

      if (page.uid) {
        try {
          await setPublicPermission(token, page.uid);
        } catch (permErr) {
          // Strapi sometimes resets the connection when reloading permissions — non-fatal
          if (permErr.code === 'ECONNRESET') {
            console.warn('   ⚠ Connection reset after permissions update (Strapi may be reloading) — permissions likely saved');
          } else {
            console.warn('   ⚠ Permission update error:', permErr.message);
          }
        }
      }

      console.log(`   ✅ ${page.name} — done`);
      passed++;
    } catch (err) {
      console.error(`   ❌ ${page.name} — FAILED:`, err.message);
      failed++;
    }
  }

  console.log(`\n${'─'.repeat(50)}`);
  console.log(`Import complete: ${passed} succeeded, ${failed} failed`);
  if (failed > 0) process.exit(1);
}

module.exports = { login, upsertSingleType, publishSingleType, setPublicPermission, runImport };
