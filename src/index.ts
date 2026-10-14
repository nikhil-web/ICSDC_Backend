// import type { Core } from '@strapi/strapi';

/**
 * Action keys for the Public role on the builder-page content type.
 * Grants public read access so /builder/:slug can fetch published pages
 * via the Express proxy without authentication.
 */
const PUBLIC_BUILDER_ACTIONS = [
  'api::builder-page.builder-page.find',
  'api::builder-page.builder-page.findOne',
  // Builder contact-form component posts here from /builder/<slug> pages.
  // The hand-built contact-us page already relies on this too, but the original
  // bootstrap left it ungranted.
  'api::contact-submission.contact-submission.create',
  // Floating WhatsApp widget on every page POSTs a lead here before opening wa.me.
  'api::whatsapp-lead.whatsapp-lead.create',
  // Live chat widget — visitors create and update their own session via the Node proxy.
  'api::chat-session.chat-session.create',
  'api::chat-session.chat-session.update',
];

/**
 * Editor-friendly labels for the related-service cards (ds.related-card) and the
 * related-section fields on the pages that use them. The content manager shows
 * raw field names ("btnLabel", "btnUrl") until someone sets labels by hand, so
 * this fills them in — but only where a label is still the raw field name, so
 * anything an editor changes in "Configure the view" is kept.
 */
const RELATED_CARD_FIELDS: Record<string, { label: string; description: string }> = {
  order: { label: 'Order', description: 'Position of the card: 1 = first.' },
  icon: { label: 'Icon', description: 'Font Awesome icon name, e.g. server, cloud, envelope. Only shown on pages that display icons.' },
  title: { label: 'Title', description: 'Card heading. Not shown on Linux / Windows Cloud Hosting.' },
  tagline: { label: 'Tagline', description: 'Short line under the title. Only shown on WordPress Hosting.' },
  description: { label: 'Description', description: 'Card text. Not shown on Reseller Hosting.' },
  btnLabel: { label: 'Link text', description: 'Text of the card link. Leave empty to hide the link (on Reseller Hosting the title is used).' },
  btnUrl: { label: 'Link URL', description: 'A page like /cloud-hosting, a full URL, or contact-popup to open the contact form. Leave empty to hide the link.' },
};
const RELATED_CARD_LAYOUT = [
  [{ name: 'title', size: 6 }, { name: 'tagline', size: 6 }],
  [{ name: 'description', size: 12 }],
  [{ name: 'btnLabel', size: 6 }, { name: 'btnUrl', size: 6 }],
  [{ name: 'icon', size: 6 }, { name: 'order', size: 4 }],
];
const RELATED_PAGE_FIELDS: Record<string, string> = {
  relatedTitle: 'Related services — heading',
  relatedSubtitle: 'Related services — subtitle',
  relatedCards: 'Related services — cards',
};
const RELATED_PAGES = [
  'domain-transfer', 'veeam-backup', 'cloud-storage', 'gpu-cloud-hosting', 'linux-cloud-hosting',
  'microsoft-365', 'windows-cloud-hosting', 'wordpress-hosting', 'reseller-hosting',
].map((p) => `api::${p}-page.${p}-page`);

async function labelRelatedCardFields(strapi: any) {
  const store = strapi.store({ type: 'plugin', name: 'content_manager' });

  const compKey = 'configuration_components::ds.related-card';
  const comp = await store.get({ key: compKey });
  if (comp && comp.metadatas) {
    // First run = the link-text label is still the raw name; only then reorder the form.
    const firstRun = comp.metadatas.btnLabel && comp.metadatas.btnLabel.edit.label === 'btnLabel';
    let changed = false;
    for (const [field, { label, description }] of Object.entries(RELATED_CARD_FIELDS)) {
      const m = comp.metadatas[field];
      if (!m) continue;
      if (m.edit.label === field) { m.edit.label = label; changed = true; }
      if (!m.edit.description) { m.edit.description = description; changed = true; }
      if (m.list && m.list.label === field) { m.list.label = label; changed = true; }
    }
    if (firstRun) { comp.layouts.edit = RELATED_CARD_LAYOUT; changed = true; }
    if (changed) await store.set({ key: compKey, value: comp });
  }

  for (const uid of RELATED_PAGES) {
    const key = `configuration_content_types::${uid}`;
    const conf = await store.get({ key });
    if (!conf || !conf.metadatas) continue;
    let changed = false;
    for (const [field, label] of Object.entries(RELATED_PAGE_FIELDS)) {
      const m = conf.metadatas[field];
      if (m && m.edit.label === field) { m.edit.label = label; changed = true; }
    }
    if (changed) await store.set({ key, value: conf });
  }
}

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   */
  register({ strapi }: { strapi: any }) {
    // "Place" field for map pins: a searchable city/country picker. Stored as
    // JSON ({ label, lat, lng, … }); the admin input lives in src/admin/app.tsx,
    // its search in src/api/geo + src/utils/geo-places.ts.
    strapi.customFields.register({ name: 'place', type: 'json' });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * Ensures the Public role has `find` + `findOne` permission
   * on builder-page so the visual builder's published pages
   * are accessible via the Strapi REST API.
   */
  async bootstrap({ strapi }: { strapi: any }) {
    try {
      await labelRelatedCardFields(strapi);
    } catch (err: any) {
      strapi.log.error('[related-cards] Label setup failed: ' + err.message);
    }

    try {
      // Find the Public role (Users & Permissions plugin)
      const publicRole = await strapi
        .query('plugin::users-permissions.role')
        .findOne({ where: { type: 'public' } });

      if (!publicRole) {
        strapi.log.warn('[builder] Public role not found — skipping permission grant');
        return;
      }

      for (const action of PUBLIC_BUILDER_ACTIONS) {
        const existing = await strapi
          .query('plugin::users-permissions.permission')
          .findOne({ where: { action, role: publicRole.id } });

        if (!existing) {
          await strapi.query('plugin::users-permissions.permission').create({
            data: { action, role: publicRole.id },
          });
          strapi.log.info('[builder] Granted public permission: ' + action);
        }
      }
    } catch (err: any) {
      strapi.log.error('[builder] Permission bootstrap failed: ' + err.message);
    }
  },
};
