export default {
  config: {
    locales: [],
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "ICSDC Admin",
        "app.components.LeftMenu.navbrand.workplace": "Control Panel",
        "Auth.form.welcome.title": "Welcome to ICSDC",
        "Auth.form.welcome.subtitle": "Log in to your account",
      },
    },
  },
  register(app: any) {
    // Map pins: a searchable city/country picker (server side: src/index.ts,
    // src/api/geo). Stored as JSON; the website reads its lat/lng.
    app.customFields.register({
      name: 'place',
      type: 'json',
      intlLabel: { id: 'global.place.label', defaultMessage: 'Place' },
      intlDescription: { id: 'global.place.description', defaultMessage: 'Searchable city or country for a map pin' },
      components: {
        Input: async () => import('./components/PlaceInput').then((m) => ({ default: m.PlaceInput })),
      },
    });
  },
  bootstrap() { },
}