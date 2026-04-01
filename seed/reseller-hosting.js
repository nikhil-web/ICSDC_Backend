/**
 * Seed data — Reseller Hosting Page
 * Schema: api::reseller-hosting-page.reseller-hosting-page
 *
 * Component field reference:
 *   ds.seo-meta         → { metaTitle, metaDescription }
 *   ds.cta-link         → { text, link }
 *   ds.icon-card        → { icon, title, desc, order }          ← "desc" not "description"
 *   ds.pricing-plan     → { tier, price, currency, period, tagline, isFeatured, badge,
 *                           features:[{label}], ctaText, ctaStyle, order }
 *   ds.cta-band         → { title, description, ctaPrimary:{text,link}, ctaSecondary:{text,link} }
 *   ds.testimonial-card → { name, title, company, quote, rating }
 *   ds.faq-entry        → { question, answer, order }
 */

module.exports = {
  seo: {
    metaTitle:       'ICSDC Reseller Hosting | Scale Your Web Hosting Business',
    metaDescription: 'Launch your own hosting business with ICSDC Reseller Hosting. Get white-label cPanel & WHM, NVMe performance, scalable resources, free migration, and 24/7 expert support.',
  },

  heroEyebrow:        '🌐 Reseller Hosting',
  heroTitle:          'Start Your Own Web Hosting Business With ICSDC Reseller Hosting',
  heroSubtitle:       'Scalable Reseller Hosting Built for Long-Term Growth',
  heroDescription:    'Start your hosting business with confidence using ICSDC Reseller Hosting. Get white-label control, reliable infrastructure, and easy client management tools — all designed to help you sell hosting under your own brand without technical complexity.',
  heroTopBadge:       '✅ White-Label Ready',
  heroStatusTitle:    'Unlimited Clients',
  heroStatusSubtitle: 'White-Label cPanel',

  heroCtaPrimary:   { text: 'Start Your Reseller Business Today', link: '/contact'    },
  heroCtaSecondary: { text: 'View Reseller Plans',                 link: '#rh-plans'  },

  pillars: [
    { order: 0, icon: 'layout',       title: 'White-Label cPanel & WHM Access',    desc: 'Sell hosting under your own brand with fully white-labeled cPanel and WHM for complete control and professional client management.' },
    { order: 1, icon: 'users',        title: 'Host Multiple Websites Effortlessly', desc: 'Create and manage unlimited client accounts from a single dashboard with flexible resource allocation.' },
    { order: 2, icon: 'shield',       title: 'Built-In Security & Backups',         desc: 'Keep client data safe with server-level security, automated backups, and proactive monitoring.' },
    { order: 3, icon: 'trending-up',  title: 'Scalable Resources as You Grow',     desc: 'Upgrade storage, bandwidth, and resources anytime to match your business growth — without downtime.' },
  ],

  plansLabel:    'RESELLER PLANS',
  plansTitle:    'Choose the Right Reseller Hosting Plan',
  plansSubtitle: 'Powerful features, predictable pricing, and complete control over your hosting business.',

  plans: [
    {
      order: 0, tier: 'Reseller Starter', price: '799', currency: '&#8377;', period: '/mo',
      tagline: 'Perfect for freelancers and small agencies starting out',
      isFeatured: false, badge: '',
      features: [
        { label: '25 cPanel Accounts' },
        { label: '50 GB NVMe SSD' },
        { label: 'Unlimited Bandwidth' },
        { label: 'White-Label WHM' },
        { label: 'Free SSL Certificates' },
        { label: 'Softaculous Installer' },
      ],
      ctaText: 'Get Started', ctaStyle: 'outline',
    },
    {
      order: 1, tier: 'Reseller Pro', price: '1,499', currency: '&#8377;', period: '/mo',
      tagline: 'Ideal for growing agencies and web developers',
      isFeatured: true, badge: 'Most Popular',
      features: [
        { label: '75 cPanel Accounts' },
        { label: '150 GB NVMe SSD' },
        { label: 'Unlimited Bandwidth' },
        { label: 'White-Label WHM + Branded Nameservers' },
        { label: 'Free SSL + Daily Backups' },
        { label: 'WHMCS-Ready Billing Integration' },
        { label: 'Priority 24/7 Support' },
        { label: 'Free Migration' },
      ],
      ctaText: 'Get Started', ctaStyle: 'primary',
    },
    {
      order: 2, tier: 'Reseller Business', price: '2,999', currency: '&#8377;', period: '/mo',
      tagline: 'For established hosting businesses with large client bases',
      isFeatured: false, badge: '',
      features: [
        { label: 'Unlimited cPanel Accounts' },
        { label: '300 GB NVMe SSD' },
        { label: 'Unlimited Bandwidth' },
        { label: 'Full White-Label Stack' },
        { label: 'Real-Time Backups' },
        { label: 'Dedicated Account Manager' },
        { label: 'API & Automation Access' },
      ],
      ctaText: 'Contact Sales', ctaStyle: 'outline',
    },
  ],

  featuresLabel:    'WHAT YOU GET',
  featuresTitle:    'Everything You Need to Build, Brand & Scale a Hosting Business',
  featuresSubtitle: 'Every reseller plan includes the complete toolkit for running a professional hosting business under your own brand.',

  features: [
    { order: 0,  icon: 'award',        title: 'Complete White-Label Freedom',          desc: 'Run your hosting business entirely under your own brand. ICSDC stays invisible while you own the relationship, identity, and trust.' },
    { order: 1,  icon: 'layout',       title: 'Powerful cPanel & WHM Management',      desc: 'Manage all client accounts, domains, resources, and permissions from a single WHM dashboard designed for efficiency.' },
    { order: 2,  icon: 'sliders',      title: 'Flexible Resource Allocation',          desc: 'Customize storage, bandwidth, email accounts, and features for each client — create tailored hosting plans.' },
    { order: 3,  icon: 'zap',          title: 'High-Speed NVMe Infrastructure',        desc: 'Deliver noticeably faster websites using NVMe-powered servers that improve load times and client satisfaction.' },
    { order: 4,  icon: 'users',        title: 'Unlimited Client Hosting Capability',   desc: 'Host multiple customers and websites without account limitations, making it easy to grow your reseller business.' },
    { order: 5,  icon: 'globe',        title: 'Custom Branded Nameservers',            desc: 'Strengthen your brand presence by using your own nameservers, giving clients a professional branded experience.' },
    { order: 6,  icon: 'shield',       title: 'Advanced Server-Level Security',        desc: 'Protect client websites with firewalls, malware scanning, and proactive threat monitoring.' },
    { order: 7,  icon: 'save',         title: 'Automated Backup Protection',           desc: 'Safeguard critical data with scheduled backups and easy restore options, ensuring business continuity.' },
    { order: 8,  icon: 'server',       title: 'High Availability & Reliable Uptime',  desc: 'Host client websites on stable, redundant infrastructure designed for consistent uptime and dependable performance.' },
    { order: 9,  icon: 'trending-up',  title: 'Instant Scalability as You Grow',      desc: 'Upgrade resources anytime without downtime, allowing your hosting business to scale smoothly.' },
    { order: 10, icon: 'code',         title: 'Developer-Ready Hosting Environment',  desc: 'Support modern applications with multiple PHP versions, databases, and popular CMS platforms.' },
    { order: 11, icon: 'headphones',   title: '24/7 Expert Technical Support',        desc: 'Round-the-clock assistance from experienced hosting professionals who help resolve issues quickly.' },
  ],

  whyLabel:    'WHY ICSDC',
  whyTitle:    'Why Choose ICSDC Linux Reseller Hosting?',
  whySubtitle: 'Build, manage, and scale your hosting business with confidence — designed for performance, flexibility, and long-term growth.',

  whyCards: [
    { order: 0, icon: 'check-circle',  title: 'Free Reseller Account Setup',        desc: 'Start selling instantly with a ready-to-use reseller environment. Resell hosting, domains, email, and more under your own brand.' },
    { order: 1, icon: 'shield',        title: '30-Day Money-Back Assurance',         desc: 'Try our reseller hosting risk-free. If it doesn\'t meet your expectations, get a full refund — no questions asked.' },
    { order: 2, icon: 'layout',        title: 'Free WHM & cPanel Access',            desc: 'Create, manage, and customize hosting plans easily using industry-standard WHM and cPanel tools.' },
    { order: 3, icon: 'headphones',    title: '24/7 Reseller-Focused Support',       desc: 'Round-the-clock assistance from experienced engineers who understand reseller environments and business needs.' },
    { order: 4, icon: 'package',       title: 'Softaculous App Installer',           desc: 'Install 400+ applications like WordPress, Joomla, and Magento in just one click — no manual setup required.' },
    { order: 5, icon: 'zap',           title: 'Cloudflare-Powered Protection',       desc: 'Boost website speed and security with built-in CDN, DDoS protection, and global network optimization.' },
    { order: 6, icon: 'server',        title: 'Performance-Optimized Infrastructure', desc: 'Run client websites on powerful hardware tuned for speed, stability, and consistent performance.' },
    { order: 7, icon: 'arrow-right-circle', title: 'Free Website Migration',         desc: 'Move existing client websites from your current provider with expert assistance and minimal disruption.' },
  ],

  toolsLabel:    'BUSINESS TOOLS',
  toolsTitle:    'ICSDC Reseller Hosting — Technical Capabilities & Business Tools',
  toolsSubtitle: 'Everything you need to run a professional hosting business from a single, unified platform.',

  toolsCards: [
    { order: 0, icon: 'grid',        title: 'Unified Business Management Panel',   desc: 'Manage hosting products, client accounts, orders, and services from a single dashboard.' },
    { order: 1, icon: 'smartphone',  title: 'Anytime Access Across Devices',       desc: 'Monitor accounts, track usage, and manage services from anywhere using mobile-friendly interfaces.' },
    { order: 2, icon: 'dollar-sign', title: 'Competitive Pricing & Margins',       desc: 'Cost-effective pricing models and regular offers that help you stay competitive and maximize profitability.' },
    { order: 3, icon: 'file-text',   title: 'Automated Billing & Client Mgmt',    desc: 'Streamline invoicing, renewals, and account provisioning with automation-ready systems.' },
    { order: 4, icon: 'code',        title: 'Easy Setup & API Integration',        desc: 'Get started quickly with seamless integrations, API access, and ready-to-use storefront options.' },
    { order: 5, icon: 'book-open',   title: 'Knowledge Resources & Learning',      desc: 'Access helpful guides, documentation, and expert insights to stay updated on hosting best practices.' },
  ],

  ctaBand1: {
    title:       'Start Your Reseller Hosting Business Today',
    description: 'Free reseller account setup, free migration, and 24/7 expert support included with every plan.',
    ctaPrimary:   { text: 'Get Free Reseller Setup',  link: '/contact'         },
    ctaSecondary: { text: 'Call +91 98109 58857', link: 'tel:+919810958857' },
  },

  testimonialTitle: 'What Our Reseller Hosting Clients Say',
  faqTitle:         'FAQs About ICSDC Reseller Hosting',
  faqContactTitle:  'Talk to Our Reseller Experts',
  faqContactDesc:   'Our dedicated reseller support team is available round the clock to guide you, resolve issues, and help your hosting business grow smoothly.\n\n📞 +91 98109 58857',

  faq: [
    { order: 0, question: 'Do I need technical knowledge to start reseller hosting?', answer: 'Basic hosting knowledge is helpful, but not mandatory. ICSDC manages the server infrastructure, security, and maintenance, while you manage client accounts through an easy-to-use control panel.' },
    { order: 1, question: 'Can I sell hosting under my own brand?',                   answer: 'Yes. ICSDC Reseller Hosting is fully white-label, allowing you to use your own brand name, nameservers, and pricing when selling hosting services.' },
    { order: 2, question: 'Is there a limit on how many clients I can host?',         answer: 'No fixed limit. You can host as many client accounts as your plan resources allow, and upgrade anytime as your business grows.' },
    { order: 3, question: 'Can I upgrade my reseller plan later?',                    answer: 'Absolutely. Resources like storage and bandwidth can be increased without downtime, making it easy to scale as your client base expands.' },
    { order: 4, question: 'Will ICSDC help migrate my existing client websites?',     answer: 'Yes. ICSDC provides migration assistance to help move your existing websites smoothly with minimal or no downtime.' },
    { order: 5, question: 'Is reseller hosting suitable for agencies and freelancers?', answer: 'Yes. Reseller hosting is ideal for web agencies, freelancers, IT consultants, and entrepreneurs who want to offer hosting as an additional service or standalone business.' },
  ],

  ctaBand2: {
    title:       'Launch Your Hosting Business With ICSDC Today',
    description: 'White-label cPanel & WHM, NVMe performance, and 24/7 reseller support from ₹799/month.',
    ctaPrimary:   { text: 'Start Reseller Hosting',   link: '/contact'         },
    ctaSecondary: { text: 'Call +91 98109 58857', link: 'tel:+919810958857' },
  },

  testimonials: [
    { name: 'Amit Verma',    title: 'Founder',             company: 'Web Development Agency',  quote: 'We started reseller hosting mainly to support our existing clients. ICSDC made the setup simple, and the servers have been stable enough that we rarely get support calls from clients now.',         rating: 5 },
    { name: 'Neha Sharma',   title: 'Operations Manager',  company: 'Digital Marketing Agency', quote: 'Our clients often asked for hosting along with website and SEO work. ICSDC helped us add hosting without extra complexity. The panel is easy to handle, even for non-technical team members.',       rating: 5 },
    { name: 'Karan Patel',   title: 'Technical Lead',      company: 'Software Services Provider', quote: 'What stood out for us was the support. Whenever we had account-level or server-related questions, the responses were clear and practical, not scripted replies.',                                  rating: 5 },
  ],
};
