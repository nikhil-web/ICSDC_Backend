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

  // Microsoft 365 "When to Choose" section: one text box per point.
  const m365Key = 'configuration_content_types::api::microsoft-365-page.microsoft-365-page';
  const m365 = await store.get({ key: m365Key });
  if (m365 && m365.metadatas) {
    let changed = false;
    const labels: Record<string, [string, string]> = {
      whenTitle: ['When to choose — heading', ''],
      whenPoints: ['When to choose — points', 'One point per item, shown as a checklist.'],
    };
    for (const [field, [label, description]] of Object.entries(labels)) {
      const m = m365.metadatas[field];
      if (!m) continue;
      if (m.edit.label === field) { m.edit.label = label; changed = true; }
      if (description && !m.edit.description) { m.edit.description = description; changed = true; }
    }
    if (changed) await store.set({ key: m365Key, value: m365 });
  }

  // VPS cPanel features card: groups of points, one text box per point.
  const groupKey = 'configuration_components::ds.feature-group';
  const group = await store.get({ key: groupKey });
  if (group && group.metadatas) {
    let changed = false;
    const labels: Record<string, [string, string]> = {
      category: ['Heading', 'Card heading. With two or more groups it is also the tab name.'],
      subtitle: ['Subtitle', 'Optional line under the heading.'],
      items: ['Points', 'One point per item, shown as a checklist.'],
    };
    for (const [field, [label, description]] of Object.entries(labels)) {
      const m = group.metadatas[field];
      if (!m) continue;
      if (m.edit.label === field) { m.edit.label = label; changed = true; }
      if (!m.edit.description) { m.edit.description = description; changed = true; }
    }
    if (changed) await store.set({ key: groupKey, value: group });
  }
  const vpcKey = 'configuration_content_types::api::vps-cpanel-page.vps-cpanel-page';
  const vpc = await store.get({ key: vpcKey });
  if (vpc && vpc.metadatas) {
    let changed = false;
    const labels: Record<string, string> = {
      cpanelFeaturesTitle: 'cPanel features — section heading',
      cpanelFeaturesDesc: 'cPanel features — section text',
      cpanelFeaturesList: 'cPanel features — groups',
      cpanelFeaturesCta: 'cPanel features — button',
    };
    for (const [field, label] of Object.entries(labels)) {
      const m = vpc.metadatas[field];
      if (m && m.edit.label === field) { m.edit.label = label; changed = true; }
    }
    if (changed) await store.set({ key: vpcKey, value: vpc });
  }

  // Tick/cross table rows (Web Hosting "What's included" table).
  const checkKey = 'configuration_components::ds.check-row';
  const check = await store.get({ key: checkKey });
  if (check && check.metadatas) {
    let changed = false;
    const labels: Record<string, [string, string]> = {
      feature: ['Feature', 'Text shown in the first column.'],
      included: ['Included', 'On = tick (✔). Off = cross (✘).'],
    };
    for (const [field, [label, description]] of Object.entries(labels)) {
      const m = check.metadatas[field];
      if (!m) continue;
      if (m.edit.label === field) { m.edit.label = label; changed = true; }
      if (!m.edit.description) { m.edit.description = description; changed = true; }
      if (m.list && m.list.label === field) { m.list.label = label; changed = true; }
    }
    if (changed) await store.set({ key: checkKey, value: check });
  }
  // Text comparison rows (Web Hosting "vs Typical Shared Hosting" table).
  const tcrKey = 'configuration_components::ds.text-compare-row';
  const tcr = await store.get({ key: tcrKey });
  if (tcr && tcr.metadatas) {
    let changed = false;
    const labels: Record<string, [string, string]> = {
      feature: ['Feature', 'Text shown in the first column.'],
      icsdc: ['ICSDC value', 'Second column. Shown with a tick in front.'],
      others: ['Other providers value', 'Third column.'],
    };
    for (const [field, [label, description]] of Object.entries(labels)) {
      const m = tcr.metadatas[field];
      if (!m) continue;
      if (m.edit.label === field) { m.edit.label = label; changed = true; }
      if (!m.edit.description) { m.edit.description = description; changed = true; }
      if (m.list && m.list.label === field) { m.list.label = label; changed = true; }
    }
    if (changed) await store.set({ key: tcrKey, value: tcr });
  }
  // Solution cards (Email Hosting "Choose the right email hosting partner").
  const solKey = 'configuration_components::shared.solution-card';
  const sol = await store.get({ key: solKey });
  if (sol && sol.metadatas) {
    let changed = false;
    const labels: Record<string, [string, string]> = {
      ctaText: ['Button text', 'Leave empty to hide the button.'],
      ctaLink: ['Button link', 'A page like /google-workspace#gws-plans, a full URL, or contact-popup to open the contact form. Empty = plain button.'],
      ctaStyle: ['Button style', 'primary = filled, outline = outlined.'],
    };
    for (const [field, [label, description]] of Object.entries(labels)) {
      const m = sol.metadatas[field];
      if (!m) continue;
      if (m.edit.label === field) { m.edit.label = label; changed = true; }
      if (!m.edit.description) { m.edit.description = description; changed = true; }
    }
    if (changed) await store.set({ key: solKey, value: sol });
  }

  // Homepage sale banner (sections.promo-hero).
  const promoKey = 'configuration_components::sections.promo-hero';
  const promo = await store.get({ key: promoKey });
  if (promo && promo.metadatas) {
    let changed = false;
    const labels: Record<string, [string, string]> = {
      enabled: ['Show sale banner', 'On = this banner replaces the normal homepage hero. Off = the normal hero comes back.'],
      headlineTop: ['Headline — first line', 'e.g. BLACK'],
      headlineScript: ['Headline — script word', 'Red handwritten word across the headline, e.g. Friday'],
      headlineBottom: ['Headline — second line', 'e.g. SALE'],
      tagline: ['Tagline', 'White part, e.g. Power Your Business.'],
      taglineHighlight: ['Tagline — red part', 'e.g. Save 25%.'],
      offerHighlight: ['Offer box — red part', 'e.g. 25%'],
      offerText: ['Offer box — white part', 'e.g. OFF'],
      offerNote: ['Offer box — small line', 'e.g. On New Orders & Advance Annual Payments'],
      description: ['Description', 'Bold words show bold on the page.'],
      cta: ['Button', 'Link contact-popup opens the contact form.'],
      finePrint: ['Small print', 'Line under the button. Use | to separate parts.'],
      image: ['Artwork (optional)', 'Right-hand picture. Upload on the live admin (admin.icsdc.com). Empty = the built-in Black Friday artwork.'],
    };
    for (const [field, [label, description]] of Object.entries(labels)) {
      const m = promo.metadatas[field];
      if (!m) continue;
      if (m.edit.label === field) { m.edit.label = label; changed = true; }
      if (!m.edit.description) { m.edit.description = description; changed = true; }
    }
    if (changed) await store.set({ key: promoKey, value: promo });
  }
  const homeKey = 'configuration_content_types::api::home-page.home-page';
  const home = await store.get({ key: homeKey });
  if (home && home.metadatas && home.metadatas.promoHero && home.metadatas.promoHero.edit.label === 'promoHero') {
    home.metadatas.promoHero.edit.label = 'Sale banner (replaces the hero while on)';
    await store.set({ key: homeKey, value: home });
  }
  const whKey = 'configuration_content_types::api::web-hosting-page.web-hosting-page';
  const wh = await store.get({ key: whKey });
  if (wh && wh.metadatas) {
    let changed = false;
    const labels: Record<string, string> = {
      compareTitle: 'Comparison table — heading',
      compareHeadFeature: 'Comparison table — first column header',
      compareHeadIcsdc: 'Comparison table — second column header',
      compareHeadOthers: 'Comparison table — third column header',
      compareRows: 'Comparison table — rows',
      compareTitle2: "What's included table — heading",
      compare2HeadFeature: "What's included table — first column header",
      compare2HeadIcsdc: "What's included table — second column header",
      compareRows2: "What's included table — rows",
    };
    for (const [field, label] of Object.entries(labels)) {
      const m = wh.metadatas[field];
      if (m && m.edit.label === field) { m.edit.label = label; changed = true; }
    }
    if (changed) await store.set({ key: whKey, value: wh });
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
