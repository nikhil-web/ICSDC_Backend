// seed/home-page-extras.js
// ─────────────────────────────────────────────────────────────────────────────
//  HOMEPAGE EXTRAS — seeds ONLY the three new homepage sections.
//  Safe to run independently: existing homepage fields (hero, FAQ, testimonials,
//  etc.) are NOT included here so Strapi will leave them untouched.
//
//  Run:  node import-pages.js "Home Page Extras"
// ─────────────────────────────────────────────────────────────────────────────
//
//  ds.map-location → { order, title, countryKey, description, pinColor }
//    countryKey must match MAP_COORDS keys in homepage-cms.js:
//    usa | uk | germany | russia | india | future-expansion
//
//  techPartners / trustedPartners → ds.partner-logo → { name, logo(media) }
// ─────────────────────────────────────────────────────────────────────────────

module.exports = {

  // ── SECTION: Global Presence / World Map ──────────────────────────────────
  globalPresenceTitle:    'Where We Are in the World',
  globalPresenceSubtitle: 'From Noida to the globe — ICSDC serves clients across 5+ countries with enterprise infrastructure and 24/7 expert support.',

  globalLocations: [
    {
      order:       1,
      title:       'USA',
      countryKey:  'usa',
      pinColor:    '#6D28D9',
      description: 'North America operations supporting enterprise clients and growing business partnerships across the region.',
    },
    {
      order:       2,
      title:       'UK',
      countryKey:  'uk',
      pinColor:    '#0D9488',
      description: 'European presence for Western market support with GDPR-compliant, low-latency hosting solutions.',
    },
    {
      order:       3,
      title:       'Germany',
      countryKey:  'germany',
      pinColor:    '#16A34A',
      description: 'Central European infrastructure hub offering compliance-friendly hosting and strong network connectivity.',
    },
    {
      order:       4,
      title:       'Russia',
      countryKey:  'russia',
      pinColor:    '#D97706',
      description: 'Eastern Europe and CIS region coverage delivering reliable, high-performance cloud infrastructure.',
    },
    {
      order:       5,
      title:       'India',
      countryKey:  'india',
      pinColor:    '#EA580C',
      description: 'Headquarters & primary data centers (Noida – CtrlS & Yotta, Mumbai – NTT) — our largest operational base.',
    },
    {
      order:       6,
      title:       'Future Expansion',
      countryKey:  'future-expansion',
      pinColor:    '#DC2626',
      description: 'New regions coming soon as we extend our global footprint to serve clients worldwide.',
    },
  ],

  // ── SECTION: World-class Technologies ────────────────────────────────────
  techPartnersTitle: 'Check our World-class Technologies',

  techPartners: [
    { name: 'VMware'         },
    { name: 'Veeam'          },
    { name: 'Pure Storage'   },
    { name: 'RDM'            },
    { name: 'Azure'          },
    { name: 'Google Cloud'   },
    { name: 'Symantec'       },
    { name: 'Forcepoint'     },
    { name: 'Dell'           },
    { name: 'webpros'        },
    { name: 'Acronis'        },
    { name: 'Red Hat'        },
    { name: 'VMware Cloud'   },
    { name: 'VMware Horizon' },
  ],

  // ── SECTION: Trusted by Industry Leaders ─────────────────────────────────
  trustedTitle: 'Trusted by Industry Leaders',

  trustedPartners: [
    { name: 'VMware'         },
    { name: 'Veeam'          },
    { name: 'Pure Storage'   },
    { name: 'RDM'            },
    { name: 'Azure'          },
    { name: 'Google Cloud'   },
    { name: 'Symantec'       },
    { name: 'Forcepoint'     },
    { name: 'Dell'           },
    { name: 'webpros'        },
    { name: 'Acronis'        },
    { name: 'Red Hat'        },
    { name: 'VMware Cloud'   },
    { name: 'VMware Horizon' },
  ],

};
