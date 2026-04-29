/**
 * seed/footer.js
 * Run: node seed/footer.js
 *
 * Seeds the footer single type.
 * Address, phone, email, socialLinks and linkGroups taken from live footer data.
 *
 * NOTE: logo is a media relation — already uploaded in Strapi admin, not seeded here.
 */

'use strict';

const http = require('http');

const BASE_URL = 'http://127.0.0.1:1338';
const TOKEN    = '5e685bd788588b5db88df3d3d47ad9a446f82768a2514d7dce437f6dc10c872d61b83b91763e6ea54acb9f7d7aac432e1714eef2dd12d718aae5c3bbae246aa90a85d22938474559dd9327dc2f7c9114b06bfdbb4ce9daf5d4e8f45b7a608c7d80eea92ac9896b47238380007a7d592b3825db93c9f9e5fbdab95be79a2c8e6e';

function putJSON(path, body) {
  return new Promise(function (resolve, reject) {
    var payload = JSON.stringify({ data: body });
    var url     = new URL(BASE_URL + path);
    var options = {
      hostname : url.hostname,
      port     : url.port || 80,
      path     : url.pathname,
      method   : 'PUT',
      headers  : {
        'Content-Type'  : 'application/json',
        'Content-Length': Buffer.byteLength(payload),
        'Authorization' : 'Bearer ' + TOKEN,
      },
    };
    var req = http.request(options, function (res) {
      var data = '';
      res.on('data', function (c) { data += c; });
      res.on('end', function () {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error('HTTP ' + res.statusCode + ': ' + data));
        }
      });
    });
    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

/* ════════════════════════════════════════
   PAGE DATA
════════════════════════════════════════ */

var pageData = {

  commonFooter: {
    address: 'B - 406 \nAims Green Avenue\nGreater Noida\nIndia',
    phone: '+1 5589 55488 55',
    email: 'info@icsdc.com',

    socialLinks: [
      { platform: 'facebook',  url: 'https://www.facebook.com',  name: 'Facebook'  },
      { platform: 'twitter',   url: 'https://www.twitter.com',   name: 'Twitter'   },
      { platform: 'instagram', url: 'https://www.instagram.com', name: 'Instagram' },
    ],

    linkGroups: [
      {
        title: 'Hosting Solutions',
        links: [
          { label: 'Cloud Hosting',        url: '/cloud-hosting.html'        },
          { label: 'VPS Hosting',          url: '/vps-hosting.html'          },
          { label: 'Dedicated Server',     url: '/dedicated-server.html'     },
          { label: 'Managed VPS Hosting',  url: '/managed-vps-hosting.html'  },
          { label: 'VPS cPanel Hosting',   url: '/vps-cpanel.html'           },
          { label: 'Forex VPS',            url: '/forex-vps.html'            },
        ],
      },
      {
        title: 'Web & Domains',
        links: [
          { label: 'Shared Hosting',       url: '/shared-hosting.html'       },
          { label: 'WordPress Hosting',    url: '/wordpress-hosting.html'    },
          { label: 'Reseller Hosting',     url: '/reseller-hosting.html'     },
          { label: 'Email Hosting',        url: '/email-hosting.html'        },
          { label: 'Zimbra Hosting',       url: '/zimbra-hosting.html'       },
          { label: 'Domain Transfer',      url: '/domain-transfer.html'      },
        ],
      },
      {
        title: 'Security & Backup',
        links: [
          { label: 'Firewall Security',    url: '/firewall-security.html'    },
          { label: 'VAPT',                 url: '/vapt.html'                 },
          { label: 'Acronis Backup',       url: '/acronis-backup.html'       },
          { label: 'Veeam Backup',         url: '/veeam-backup.html'         },
          { label: 'Cloud Storage',        url: '/cloud-storage.html'        },
        ],
      },
      {
        title: 'Productivity & Cloud',
        links: [
          { label: 'Google Workspace',     url: '/google-workspace.html'     },
          { label: 'Microsoft 365',        url: '/microsoft-365.html'        },
          { label: 'Tally on Cloud',       url: '/tally-on-cloud.html'       },
          { label: 'Virtual Machine',      url: '/virtual-machine.html'      },
          { label: 'AWS Cloud Hosting',    url: '/aws-cloud-hosting.html'    },
          { label: 'Azure Cloud Hosting',  url: '/azure-cloud-hosting.html'  },
          { label: 'Google Cloud Hosting', url: '/google-cloud-hosting.html' },
        ],
      },
    ],
  },

};

/* ════════════════════════════════════════
   RUN
════════════════════════════════════════ */
putJSON('/api/footer', pageData)
  .then(function () { console.log('\u2705  footer seeded successfully'); })
  .catch(function (err) { console.error('\u274c  Seed failed:', err.message); process.exit(1); });
