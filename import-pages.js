/**
 * import-pages.js — Master import script for ICSDC Frontend pages
 *
 * Usage:
 *   node import-pages.js
 *
 * Environment overrides (optional):
 *   STRAPI_URL=http://localhost:1337
 *   STRAPI_EMAIL=admin@icsdc.in
 *   STRAPI_PASS=Admin@1234
 *
 * To import only specific pages, pass their names as arguments:
 *   node import-pages.js "Google Workspace"
 *   node import-pages.js "WordPress Hosting" "Linux VPS Hosting"
 *
 * To add a new page later:
 *   1. Create a seed file in ./seed/my-new-page.js
 *   2. Add an entry to the PAGES array below
 */

const { runImport } = require('./strapiImport');

const PAGES = [

  {
    name: 'Firewall Security',
    endpoint: 'firewall-security-page',
    uid: 'api::firewall-security-page.firewall-security-page',
    data: require('./seed/firewall-security'),
  },
  {
    name: 'VAPT',
    endpoint: 'vapt-page',
    uid: 'api::vapt-page.vapt-page',
    data: require('./seed/vapt'),
  },
  {
    name: 'Forex VPS',
    endpoint: 'forex-vps-page',
    uid: 'api::forex-vps-page.forex-vps-page',
    data: require('./seed/forex-vps'),
  },
  {
    name: 'Tally on Cloud',
    endpoint: 'tally-on-cloud-page',
    uid: 'api::tally-on-cloud-page.tally-on-cloud-page',
    data: require('./seed/tally-on-cloud'),
  },
  {
    name: 'VPS cPanel',
    endpoint: 'vps-cpanel-page',
    uid: 'api::vps-cpanel-page.vps-cpanel-page',
    data: require('./seed/vps-cpanel'),
  },
  {
    name: 'Navigation',
    endpoint: 'navigation',
    uid: 'api::navigation.navigation',
    data: require('./seed/navigation'),
  },
  {
    name: 'Footer',
    endpoint: 'footer',
    uid: 'api::footer.footer',
    data: require('./seed/footer'),
  },
];

// Filter pages if CLI args provided (e.g. node import-pages.js "WordPress Hosting")
const args = process.argv.slice(2);
const pagesToRun = args.length
  ? PAGES.filter((p) => args.some((a) => p.name.toLowerCase().includes(a.toLowerCase())))
  : PAGES;

if (pagesToRun.length === 0) {
  console.error('No matching pages found for:', args);
  process.exit(1);
}

console.log('ICSDC Strapi Import');
console.log('===================');
console.log(`Pages to import: ${pagesToRun.map((p) => p.name).join(', ')}`);

runImport(pagesToRun);
