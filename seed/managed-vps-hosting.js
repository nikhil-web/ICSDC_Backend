/**
 * Seed data — Managed VPS Hosting Page
 * Schema: api::managed-vps-hosting-page.managed-vps-hosting-page
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
    metaTitle:       'Managed VPS Hosting India | Fully Managed VPS | ICSDC',
    metaDescription: 'ICSDC Managed VPS Hosting gives you dedicated server resources with a full management team. OS updates, security, monitoring & 24/7 support from ₹999/month.',
  },

  heroEyebrow:        '🔧 Managed VPS Hosting',
  heroTitle:          'Fully Managed VPS — Powerful Infrastructure, Zero Hassle',
  heroSubtitle:       'Starting at ₹999/month',
  heroDescription:    'Get the performance of a dedicated VPS with a full team of experts managing every aspect of it. ICSDC Managed VPS handles OS updates, security patches, performance tuning, monitoring, and backups — so you focus entirely on your business.',
  heroTopBadge:       '🔧 Managed VPS',
  heroStatusTitle:    '99.9% Uptime',
  heroStatusSubtitle: 'Fully Managed',

  heroCtaPrimary:   { text: 'Get Managed VPS Now', link: '/contact' },
  heroCtaSecondary: { text: 'View Plans',           link: '#plans'   },

  pillars: [
    { order: 0, icon: 'settings',   title: 'Fully Managed',       desc: 'Every aspect of your VPS is handled by ICSDC experts — from initial setup to ongoing maintenance.' },
    { order: 1, icon: 'cpu',        title: 'Dedicated Resources', desc: 'Guaranteed vCPU, RAM, and NVMe SSD — your resources are never shared with other users.' },
    { order: 2, icon: 'shield',     title: 'Proactive Security',  desc: 'Security patches, firewall management, malware scanning, and intrusion detection — always on.' },
    { order: 3, icon: 'headphones', title: '24/7 Expert Support', desc: 'Direct access to senior Linux engineers via phone, chat, or ticket — around the clock.' },
  ],

  plansLabel:    'VPS PLANS',
  plansTitle:    'Managed VPS Plans — Your Server, Our Responsibility',
  plansSubtitle: 'All plans include full management, NVMe SSD, dedicated IP, daily backups, and 24/7 support.',

  plans: [
    {
      order:      0,
      tier:       'VPS Starter',
      price:      '999',
      currency:   '&#8377;',
      period:     '/mo',
      tagline:    'Managed VPS for small websites and growing apps',
      isFeatured: false,
      badge:      '',
      features: [
        { label: '2 vCPU / 2 GB RAM' },
        { label: '40 GB NVMe SSD' },
        { label: '2 TB Bandwidth' },
        { label: 'Full Management Included' },
        { label: 'Daily Backups' },
        { label: 'Free SSL & Firewall' },
      ],
      ctaText:  'Get Started',
      ctaStyle: 'outline',
    },
    {
      order:      1,
      tier:       'VPS Business',
      price:      '2,499',
      currency:   '&#8377;',
      period:     '/mo',
      tagline:    'Managed VPS for business websites and APIs',
      isFeatured: true,
      badge:      'Most Popular',
      features: [
        { label: '4 vCPU / 8 GB RAM' },
        { label: '80 GB NVMe SSD' },
        { label: '5 TB Bandwidth' },
        { label: 'Full Management Included' },
        { label: 'Hourly Backups' },
        { label: 'Priority 24/7 Support' },
        { label: 'Free Control Panel Setup' },
        { label: 'Free Migration' },
      ],
      ctaText:  'Get Started',
      ctaStyle: 'primary',
    },
    {
      order:      2,
      tier:       'VPS Enterprise',
      price:      '4,999',
      currency:   '&#8377;',
      period:     '/mo',
      tagline:    'High-performance managed VPS for enterprise workloads',
      isFeatured: false,
      badge:      '',
      features: [
        { label: '8 vCPU / 16 GB RAM' },
        { label: '160 GB NVMe SSD' },
        { label: '10 TB Bandwidth' },
        { label: 'Dedicated Account Manager' },
        { label: 'Real-Time Backups' },
        { label: 'Custom Server Configuration' },
        { label: 'SLA-Backed 99.99% Uptime' },
      ],
      ctaText:  'Contact Sales',
      ctaStyle: 'outline',
    },
  ],

  featuresLabel:    'INCLUDED FEATURES',
  featuresTitle:    'Everything You Need, All Handled for You',
  featuresSubtitle: 'ICSDC Managed VPS includes the full operational stack — so you get VPS power without VPS complexity.',

  features: [
    { order: 0, icon: 'refresh-cw', title: 'OS & Software Updates',  desc: 'Kernel, OS, and software packages kept up to date automatically — zero manual work required.' },
    { order: 1, icon: 'bell',       title: '24/7 Uptime Monitoring', desc: 'Real-time monitoring with instant incident alerts and auto-recovery for maximum availability.' },
    { order: 2, icon: 'shield',     title: 'Security Management',    desc: 'Firewall rules, fail2ban, intrusion detection, and regular security audits — always in place.' },
    { order: 3, icon: 'save',       title: 'Automated Backups',      desc: 'Daily to real-time backups with point-in-time restore — your data is always recoverable.' },
    { order: 4, icon: 'terminal',   title: 'Control Panel Setup',    desc: 'cPanel, Plesk, DirectAdmin, or Webmin installed and configured by our team at no extra charge.' },
    { order: 5, icon: 'zap',        title: 'Performance Tuning',     desc: 'Web server, PHP, and database settings tuned for your specific workload by our Linux experts.' },
  ],

  whatWeManageLabel:    'WHAT WE MANAGE',
  whatWeManageTitle:    'We Handle Every Layer of Your VPS',
  whatWeManageSubtitle: 'From the OS to the application layer, our team manages everything so you never need to.',

  whatWeManage: [
    { order: 0, icon: 'server',   title: 'Operating System',    desc: 'Full OS management — updates, patches, kernel hardening, and security configurations.' },
    { order: 1, icon: 'shield',   title: 'Security & Firewall', desc: 'iptables/nftables rules, fail2ban, intrusion detection, and regular security scans.' },
    { order: 2, icon: 'activity', title: 'Performance Monitoring', desc: 'CPU, RAM, disk, and network metrics tracked 24/7 with proactive alerting.' },
    { order: 3, icon: 'save',     title: 'Backup & Recovery',   desc: 'Automated backups with offsite storage and tested restore procedures.' },
    { order: 4, icon: 'grid',     title: 'Control Panel',       desc: 'Installation, configuration, updates, and troubleshooting of your chosen control panel.' },
    { order: 5, icon: 'database', title: 'Database Management', desc: 'MySQL/MariaDB/PostgreSQL setup, optimisation, user management, and backup configuration.' },
  ],

  whyManagedLabel:    'WHY MANAGED VPS',
  whyManagedTitle:    'Why Managed VPS Over Self-Managed?',
  whyManagedSubtitle: 'Self-managed VPS requires constant attention. A missed patch or misconfiguration can cost far more than the management fee.',

  whyManagedCards: [
    { order: 0, icon: 'clock',       title: 'Reclaim Developer Time', desc: 'Stop spending engineering hours on server maintenance. Your team focuses on building, not administering.' },
    { order: 1, icon: 'lock',        title: 'Always Secure',          desc: 'Every security patch applied within hours of release — no vulnerability windows left open.' },
    { order: 2, icon: 'check-circle', title: 'Guaranteed Uptime',     desc: 'Our team responds to incidents in minutes — 99.9% uptime SLA on every plan.' },
    { order: 3, icon: 'users',       title: 'Expert Team on Call',    desc: 'Senior Linux engineers available 24/7 — more expertise than most in-house teams can provide.' },
  ],

  useCasesLabel:    'USE CASES',
  useCasesTitle:    'What Can You Run on a Managed VPS?',
  useCasesSubtitle: 'A managed VPS is the ideal hosting environment for any production workload that demands reliability.',

  useCases: [
    { order: 0, icon: 'globe',         title: 'Business Websites',  desc: 'Corporate sites, portfolios, and landing pages with guaranteed uptime and fast load times.' },
    { order: 1, icon: 'code',          title: 'Web Applications',   desc: 'Node.js, Python, PHP, and Ruby apps running on a stable, optimised managed environment.' },
    { order: 2, icon: 'shopping-cart', title: 'eCommerce Stores',   desc: 'WooCommerce and Magento stores with managed performance tuning and automatic security updates.' },
    { order: 3, icon: 'database',      title: 'Database Servers',   desc: 'Managed MySQL, PostgreSQL, or MongoDB with automated backups and replication.' },
  ],

  ctaBand1: {
    title:       'Get Your Managed VPS Set Up Today',
    description: 'Free migration, expert configuration, and 24/7 management included with every plan.',
    ctaPrimary:   { text: 'Get Managed VPS Now',   link: '/contact'         },
    ctaSecondary: { text: 'Call +91 98109 58857',  link: 'tel:+919810958857' },
  },

  testimonialTitle: 'What Our Managed VPS Clients Say',
  faqTitle:         'FAQs About ICSDC Managed VPS Hosting',
  faqContactTitle:  'Talk to Our VPS Experts',
  faqContactDesc:   'Our managed VPS team is available 24/7 for consultations, migrations, and support.\n\n📞 +91 98109 58857',

  faq: [
    { order: 0, question: 'What is the difference between managed and unmanaged VPS?', answer: 'An unmanaged VPS gives you a bare server — you handle everything from OS configuration to security and updates. A managed VPS from ICSDC includes a team of experts who handle all of that for you, so you just use the server without worrying about it.' },
    { order: 1, question: 'Do I still get root access with a managed VPS?', answer: 'Yes. You retain full root SSH access to your VPS at all times. Our management layer runs alongside your access — you can make changes, and our team continues managing the server-level operations.' },
    { order: 2, question: 'Which control panels do you support?', answer: 'We support cPanel/WHM, Plesk, DirectAdmin, and Webmin. Our team installs and configures your preferred control panel at no extra cost.' },
    { order: 3, question: 'Can you migrate my existing server to ICSDC Managed VPS?', answer: 'Yes. Free migration is included with all managed VPS plans. Our team handles file transfer, database migration, DNS cutover, and testing — with zero downtime.' },
    { order: 4, question: 'How quickly do you respond to server issues?', answer: 'Our monitoring detects issues within seconds. For critical incidents, an engineer responds within 15 minutes around the clock — 24 hours a day, 365 days a year.' },
  ],

  ctaBand2: {
    title:       'Start Your Managed VPS Journey Today',
    description: 'Dedicated resources, full management, and expert support from ₹999/month.',
    ctaPrimary:   { text: 'Get Managed VPS Now',   link: '/contact'         },
    ctaSecondary: { text: 'Call +91 98109 58857',  link: 'tel:+919810958857' },
  },

  testimonials: [
    { name: 'Rahul Gupta',   title: 'Founder',                 company: 'AppStack India',     quote: 'Switched from self-managing our VPS to ICSDC Managed VPS. Our team now focuses 100% on the product and incidents are handled before we even know about them.',                   rating: 5 },
    { name: 'Kavitha Reddy', title: 'Digital Marketing Director', company: 'BrandBoost Agency', quote: 'We host 12 client websites on ICSDC Managed VPS. The security updates, backups, and uptime monitoring give us and our clients complete confidence.',                              rating: 5 },
    { name: 'Vikram Joshi',  title: 'Backend Developer',        company: 'TechPulse Solutions', quote: 'The migration was done overnight with zero downtime. Performance improved immediately and the 24/7 support has been invaluable during our product launches.',                     rating: 5 },
  ],
};
