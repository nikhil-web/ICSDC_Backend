// seed/footer.js
// Mirrors the live footer data exactly.
// address, phone, email, socialLinks are unchanged.
// linkGroups replaced with real titles and .html URLs.
// logo is a media relation — already uploaded, omit here.

module.exports = {
  commonFooter: {
    address: 'B - 406 \nAims Green Avenue</br>\nGreater Noida</br>\nIndia \nMars',
    phone: '+1 5589 55488 55',
    email: 'info@icsdc.com',

    socialLinks: [
      { platform: 'facebook',  url: 'www.facebook.com',  name: 'Facebook'  },
      { platform: 'twitter',   url: 'www.twitter.com',   name: 'twitter'   },
      { platform: 'instagram', url: 'www.instagram.com', name: 'instagram' },
    ],

    linkGroups: [
      {
        title: 'Hosting Solutions',
        name: null,
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
        name: null,
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
        name: null,
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
        name: null,
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

    // logo: media relation — already uploaded in Strapi admin, omit here
  },
};
