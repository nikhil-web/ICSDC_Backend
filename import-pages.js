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
    name: 'GPU Dedicated Server',
    endpoint: 'gpu-dedicated-server-page',
    uid: 'api::gpu-dedicated-server-page.gpu-dedicated-server-page',
    data: require('./seed/gpu-dedicated-server'),
  },
  {
    name: 'Microsoft 365',
    endpoint: 'microsoft-365-page',
    uid: 'api::microsoft-365-page.microsoft-365-page',
    data: require('./seed/microsoft-365'),
  },
  {
    name: 'Cloud Storage',
    endpoint: 'cloud-storage-page',
    uid: 'api::cloud-storage-page.cloud-storage-page',
    data: require('./seed/cloud-storage'),
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
