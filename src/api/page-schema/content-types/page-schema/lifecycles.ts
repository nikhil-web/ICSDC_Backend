/**
 * page-schema lifecycles
 *
 * Normalise `path` on save so the unique constraint compares what the site
 * compares. The frontend (schemaNormalisePath in icsdc_node_fe/server.js)
 * lowercases and strips slashes before matching, so without this
 * '/cloud-hosting', '/cloud-hosting/' and '/Cloud-Hosting' could all be saved
 * as separate entries and silently collide on the page. Keep the two in sync.
 */

function normalisePath(p: unknown): string {
  let s = String(p == null ? '' : p).trim().toLowerCase();
  if (!s) return '/';
  s = s.replace(/^https?:\/\/[^/]+/, '');   // a full URL pasted in
  s = s.replace(/[?#].*$/, '');             // query / hash
  if (s.charAt(0) !== '/') s = '/' + s;
  s = s.replace(/\/{2,}/g, '/');
  if (s.length > 1) s = s.replace(/\/+$/, '');
  return s || '/';
}

function normaliseData(event: { params?: { data?: Record<string, unknown> } }) {
  const data = event.params && event.params.data;
  if (data && typeof data.path === 'string') data.path = normalisePath(data.path);
}

export default {
  beforeCreate(event) {
    normaliseData(event);
  },
  beforeUpdate(event) {
    normaliseData(event);
  },
};
