/**
 * Lists for the "Place" custom field (map pins). Public, read-only: public
 * place names and coordinates, nothing from the database.
 *   GET /api/geo/countries           → every country, A–Z
 *   GET /api/geo/cities?country=IN   → that country's biggest cities
 *   GET /api/geo/cities?country=IN&q=mum → cities matching the text
 */
export default {
  routes: [
    { method: 'GET', path: '/geo/countries', handler: 'geo.countries', config: { auth: false, policies: [] } },
    { method: 'GET', path: '/geo/cities', handler: 'geo.cities', config: { auth: false, policies: [] } },
  ],
};
