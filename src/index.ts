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

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

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
