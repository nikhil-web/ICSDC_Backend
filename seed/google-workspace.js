/**
 * Seed data — Google Workspace Page
 * Schema: api::google-workspace-page.google-workspace-page
 *
 * Component field reference:
 *   ds.seo-meta         → { metaTitle, metaDescription }
 *   ds.cta-link         → { text, link }
 *   ds.icon-card        → { icon, title, desc, order }          ← "desc" not "description"
 *   ds.pricing-plan     → { tier, price, currency, period, tagline, isFeatured, badge,
 *                           features:[{label}], ctaText, ctaStyle, order }
 *   ds.cta-band         → { title, description, ctaPrimary:{text,link}, ctaSecondary:{text,link} }
 *   ds.numbered-tip     → { order, number, title, description }
 *   ds.testimonial-card → { name, title, company, quote, rating }
 *   ds.faq-entry        → { question, answer, order }
 */

module.exports = {
  seo: {
    metaTitle: 'Google Workspace India | Business Email & Collaboration | ICSDC',
    metaDescription:
      'Get Google Workspace with business email, Meet, Drive & Docs starting at ₹125/user/mo. Official Google partner in India. Free migration included.',
  },

  heroEyebrow: '☁ Google Workspace',
  heroTitle: 'Professional Collaboration Suite for Your Business',
  heroSubtitle: 'Starting at ₹125/user/month',
  heroDescription:
    'Business email, video meetings, shared drives, and productivity tools — all powered by Google and managed by ICSDC.',
  heroTopBadge: 'Official Google Partner',
  heroStatusTitle: '99.9% Uptime',
  heroStatusSubtitle: 'SLA Guaranteed',

  heroCtaPrimary:   { text: 'Get Started',  link: '/contact' },
  heroCtaSecondary: { text: 'View Plans',   link: '#plans'   },

  pillars: [
    { icon: 'mail',     title: 'Business Email',     desc: 'Professional @yourdomain.com email powered by Gmail',             order: 0 },
    { icon: 'video',    title: 'Google Meet',         desc: 'HD video meetings with up to 500 participants',                   order: 1 },
    { icon: 'drive',    title: 'Shared Drive',        desc: 'Team storage with 30 GB to unlimited space per user',            order: 2 },
    { icon: 'security', title: 'Enterprise Security', desc: 'Advanced protection with 2FA, admin controls, and audit logs',   order: 3 },
  ],

  plansLabel:    'PRICING PLANS',
  plansTitle:    'Choose the Right Google Workspace Plan',
  plansSubtitle: 'All plans include Gmail, Meet, Chat, Drive, Docs, Sheets, and Slides.',

  plans: [
    {
      tier:       'Business Starter',
      price:      '125',
      currency:   '&#8377;',
      period:     '/user/mo',
      tagline:    'Best for small teams getting started',
      isFeatured: false,
      badge:      '',
      features: [
        { label: '30 GB Cloud Storage per user' },
        { label: 'Business Email (@yourdomain)' },
        { label: 'Google Meet — up to 100 participants' },
        { label: 'Google Docs, Sheets & Slides' },
        { label: '24/7 ICSDC Support' },
      ],
      ctaText:  'Get Started',
      ctaStyle: 'outline',
      order: 0,
    },
    {
      tier:       'Business Standard',
      price:      '672',
      currency:   '&#8377;',
      period:     '/user/mo',
      tagline:    'Enhanced storage and collaboration for growing teams',
      isFeatured: true,
      badge:      'Most Popular',
      features: [
        { label: '2 TB Cloud Storage per user' },
        { label: 'Business Email (@yourdomain)' },
        { label: 'Google Meet — 150 participants + recording' },
        { label: 'Shared Drives for team collaboration' },
        { label: 'Advanced Security Controls' },
        { label: 'Priority 24/7 ICSDC Support' },
      ],
      ctaText:  'Get Started',
      ctaStyle: 'primary',
      order: 1,
    },
    {
      tier:       'Business Plus',
      price:      '1260',
      currency:   '&#8377;',
      period:     '/user/mo',
      tagline:    'Premium features for larger teams',
      isFeatured: false,
      badge:      '',
      features: [
        { label: '5 TB Cloud Storage per user' },
        { label: 'Business Email with eDiscovery & Archiving' },
        { label: 'Google Meet — 500 participants + recording' },
        { label: 'Enhanced Security & Compliance' },
        { label: 'Audit & Reporting Tools' },
        { label: 'Dedicated Account Manager' },
      ],
      ctaText:  'Get Started',
      ctaStyle: 'outline',
      order: 2,
    },
  ],

  featuresLabel:    'FEATURES',
  featuresTitle:    'Everything Your Team Needs to Collaborate',
  featuresSubtitle: 'Google Workspace brings together all the tools your business needs in one integrated platform.',

  features: [
    { icon: 'mail',     title: 'Gmail for Business',  desc: 'Professional email with custom domain, spam protection, and 99.9% uptime SLA.',  order: 0 },
    { icon: 'video',    title: 'Google Meet',          desc: 'HD video conferencing with screen sharing, recording, and live captions.',        order: 1 },
    { icon: 'chat',     title: 'Google Chat',          desc: 'Team messaging with spaces, direct messages, and file sharing.',                  order: 2 },
    { icon: 'drive',    title: 'Google Drive',         desc: 'Secure cloud storage with real-time collaboration and version history.',          order: 3 },
    { icon: 'docs',     title: 'Docs, Sheets & Slides', desc: 'Create and collaborate on documents simultaneously in real time.',              order: 4 },
    { icon: 'calendar', title: 'Google Calendar',      desc: 'Smart scheduling, shared calendars, and meeting room management.',               order: 5 },
  ],

  ctaBand1: {
    title:       'Migrate to Google Workspace Today',
    description: 'Our experts handle the complete migration from your existing email system — zero downtime guaranteed.',
    ctaPrimary:   { text: 'Start Migration', link: '/contact'  },
    ctaSecondary: { text: 'Learn More',      link: '#features' },
  },

  whyIcsdcLabel:    'WHY ICSDC',
  whyIcsdcTitle:    'Your Trusted Google Workspace Partner in India',
  whyIcsdcSubtitle: 'Authorized Google reseller with 10+ years of enterprise IT experience.',

  whyCards: [
    { icon: 'partner',   title: 'Official Google Partner',     desc: 'Authorized reseller with certified expertise in Google Workspace deployment.',       order: 0 },
    { icon: 'migration', title: 'Free Migration Assistance',   desc: 'Complete email migration from any platform — Gmail, Outlook, Zoho, or cPanel.',      order: 1 },
    { icon: 'support',   title: '24/7 Expert Support',         desc: 'Dedicated support team available round-the-clock via phone, chat, and email.',        order: 2 },
    { icon: 'billing',   title: 'Flexible Billing',            desc: 'Monthly or annual billing, add/remove users anytime without penalties.',              order: 3 },
  ],

  howItWorksLabel:    'HOW IT WORKS',
  howItWorksTitle:    'Get Started in 4 Simple Steps',
  howItWorksSubtitle: 'Our streamlined onboarding gets your team productive in less than 24 hours.',

  steps: [
    { order: 0, number: '01', title: 'Choose Your Plan',    description: 'Select the Google Workspace plan that best fits your team size and requirements.' },
    { order: 1, number: '02', title: 'Verify Your Domain',  description: 'Add a simple DNS record to verify your domain ownership — we guide you through it.' },
    { order: 2, number: '03', title: 'Migrate Your Data',   description: 'We migrate your existing emails, contacts, and calendar events with zero downtime.' },
    { order: 3, number: '04', title: 'Go Live',             description: 'Your team gets their @yourdomain email accounts and can start collaborating immediately.' },
  ],

  testimonialTitle: 'What Our Clients Say',

  testimonials: [
    { name: 'Rajan Mehta',  title: 'CEO',              company: 'TechVenture India', quote: 'Switching to Google Workspace through ICSDC was seamless. The migration team was outstanding.', rating: 5 },
    { name: 'Priya Sharma', title: 'IT Manager',       company: 'FinServ Corp',      quote: 'Our 200-user migration completed overnight with zero disruption. Highly recommended.', rating: 5 },
    { name: 'Amit Verma',   title: 'Operations Head',  company: 'RetailPlus',        quote: 'Google Meet and shared Drives have transformed how our remote teams collaborate daily.', rating: 5 },
  ],

  faqTitle:        'Frequently Asked Questions',
  faqContactTitle: 'Still have questions?',
  faqContactDesc:  'Our Google Workspace experts are available 24/7 to help you choose the right plan.',

  faq: [
    { question: 'Can I use my existing domain?',             answer: 'Yes! You can use any existing domain. We help you verify ownership via DNS and configure MX records to route email through Google.',                                         order: 0 },
    { question: 'How long does migration take?',             answer: 'Most migrations complete within 24–48 hours. Larger organizations (500+ users) are handled in a phased migration over 3–5 days.',                                             order: 1 },
    { question: 'Can I add or remove users anytime?',        answer: 'Absolutely. Add or suspend users at any time through the Google Admin Console. Billing adjusts automatically on your next cycle.',                                           order: 2 },
    { question: 'What happens to my data if I cancel?',      answer: 'You have 30 days after cancellation to export all data including emails, Drive files, and contacts. Google provides full data portability tools.',                           order: 3 },
    { question: 'Is Google Workspace GDPR compliant?',       answer: 'Yes. Google provides Data Processing Agreements and data residency options for enterprise customers.',                                                                       order: 4 },
  ],

  ctaBand2: {
    title:       'Ready to Transform Your Business Communication?',
    description: 'Join thousands of Indian businesses using Google Workspace through ICSDC.',
    ctaPrimary:   { text: 'Get Google Workspace', link: '/contact' },
    ctaSecondary: { text: 'Talk to an Expert',    link: '/contact' },
  },
};
