import { countries, cities } from '../../../utils/geo-places';

export default {
  async countries(ctx: any) {
    ctx.set('Cache-Control', 'public, max-age=86400');
    ctx.body = { data: countries(strapi.dirs.app.root) };
  },
  async cities(ctx: any) {
    const country = String(ctx.query.country || '').slice(0, 2);
    const q = String(ctx.query.q || '').slice(0, 60);
    ctx.set('Cache-Control', 'public, max-age=86400');
    ctx.body = { data: country ? cities(strapi.dirs.app.root, country, q) : [] };
  },
};
