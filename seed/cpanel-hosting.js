/**
 * Seed data — cPanel Hosting Page
 * Schema: api::cpanel-hosting-page.cpanel-hosting-page
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
    metaTitle:       'cPanel Hosting India | Affordable & Fast Web Hosting | ICSDC',
    metaDescription: 'Launch your website with ICSDC cPanel hosting. NVMe SSD, free SSL, daily backups, one-click WordPress install, and 24/7 expert support. Starting at ₹99/mo.',
  },

  heroEyebrow:        '🖥 cPanel Hosting',
  heroTitle:          'Launch & Manage Your Website Easily With cPanel Hosting',
  heroSubtitle:       'Starting at ₹99/month',
  heroDescription:    'From email to files to databases, control everything in one simple dashboard with top-tier NVMe speed and 99.9% uptime — all backed by ICSDC expert support around the clock.',
  heroTopBadge:       '🖥 cPanel Powered',
  heroStatusTitle:    '99.9% Uptime',
  heroStatusSubtitle: 'SLA Guaranteed',

  heroCtaPrimary:   { text: 'Launch Your Website', link: '/contact' },
  heroCtaSecondary: { text: 'View Plans',           link: '#plans'   },

  pillars: [
    { order: 0, icon: 'layout',    title: 'One-Click Management',       desc: 'Manage files, emails, domains, and databases from a clean, intuitive cPanel dashboard.' },
    { order: 1, icon: 'zap',       title: 'Fast & Optimised',           desc: 'NVMe SSD storage, LiteSpeed web server, and optimised PHP for lightning-fast websites.' },
    { order: 2, icon: 'shield',    title: 'Built-In Security',          desc: 'Firewalls, malware scanning, free SSL, and daily backups keep your site protected.' },
    { order: 3, icon: 'clock',     title: 'Instant Setup & 24/7 Help',  desc: 'Hosting activated instantly after purchase with round-the-clock support from ICSDC experts.' },
  ],

  plansLabel:    'PRICING PLANS',
  plansTitle:    'Affordable cPanel Hosting Plans for Every Need',
  plansSubtitle: 'All plans include free SSL, daily backups, cPanel access, and 24/7 support.',

  plans: [
    {
      order:      0,
      tier:       'cP Starter',
      price:      '99',
      currency:   '&#8377;',
      period:     '/mo',
      tagline:    'Perfect for personal websites, blogs, and portfolios',
      isFeatured: false,
      badge:      '',
      features: [
        { label: '1 Website' },
        { label: '5 GB NVMe SSD Storage' },
        { label: 'Free SSL Certificate' },
        { label: '5 Email Accounts' },
        { label: 'Daily Backups' },
        { label: '24/7 Support' },
      ],
      ctaText:  'Get Started',
      ctaStyle: 'outline',
    },
    {
      order:      1,
      tier:       'cP Professional',
      price:      '249',
      currency:   '&#8377;',
      period:     '/mo',
      tagline:    'Ideal for SMBs, agencies, and eCommerce stores',
      isFeatured: true,
      badge:      'Most Popular',
      features: [
        { label: '5 Websites' },
        { label: '25 GB NVMe SSD Storage' },
        { label: 'Free SSL Certificate' },
        { label: 'Unlimited Email Accounts' },
        { label: 'Daily Backups + Restore' },
        { label: 'Free CDN' },
        { label: 'One-Click WordPress Install' },
        { label: 'Priority 24/7 Support' },
      ],
      ctaText:  'Get Started',
      ctaStyle: 'primary',
    },
    {
      order:      2,
      tier:       'cP Business',
      price:      '499',
      currency:   '&#8377;',
      period:     '/mo',
      tagline:    'For high-traffic websites and growing businesses',
      isFeatured: false,
      badge:      '',
      features: [
        { label: 'Unlimited Websites' },
        { label: '100 GB NVMe SSD Storage' },
        { label: 'Free SSL Certificate' },
        { label: 'Unlimited Email Accounts' },
        { label: 'Daily Backups + Restore' },
        { label: 'Free CDN + Free Domain' },
        { label: 'Softaculous Auto-Installer' },
        { label: 'Dedicated IP Address' },
      ],
      ctaText:  'Get Started',
      ctaStyle: 'outline',
    },
  ],

  featuresLabel:    'FEATURES',
  featuresTitle:    'Everything You Need to Run a Successful Website',
  featuresSubtitle: 'Every ICSDC cPanel plan comes loaded with the tools and performance your website needs.',

  features: [
    { order: 0, icon: 'zap',        title: 'LiteSpeed Web Server',      desc: 'LiteSpeed delivers up to 6× faster page loads than Apache — your visitors experience instant load times.' },
    { order: 1, icon: 'lock',       title: 'Free SSL Certificates',     desc: "Let's Encrypt SSL included on every plan — HTTPS enabled from day one, with automatic renewal." },
    { order: 2, icon: 'layout',     title: 'Full cPanel Access',        desc: 'Industry-standard cPanel with File Manager, phpMyAdmin, Email Manager, DNS Manager, and Softaculous.' },
    { order: 3, icon: 'save',       title: 'Daily Automated Backups',   desc: 'Automatic daily backups with one-click restore — never lose your website data again.' },
    { order: 4, icon: 'mail',       title: 'Professional Email',        desc: 'Custom email addresses at your domain with webmail access, spam filters, and autoresponders.' },
    { order: 5, icon: 'download',   title: 'One-Click App Installer',   desc: 'Softaculous lets you install WordPress, Joomla, Drupal, and 300+ apps in a single click.' },
  ],

  whyLabel:    'WHY ICSDC',
  whyTitle:    'Why Choose ICSDC cPanel Hosting?',
  whySubtitle: 'Thousands of businesses in India trust ICSDC for reliable, fast, and affordable cPanel hosting.',

  whyCards: [
    { order: 0, icon: 'trending-up', title: 'NVMe SSD Performance',  desc: 'Our servers run on NVMe SSDs — delivering 10× faster disk I/O than traditional shared hosting.' },
    { order: 1, icon: 'shield',      title: 'Security First',         desc: 'ModSecurity, Imunify360, daily malware scanning, and DDoS protection included on every plan.' },
    { order: 2, icon: 'headphones',  title: '24/7 Expert Support',    desc: 'Real humans — not bots — available round the clock via phone, chat, and ticket.' },
    { order: 3, icon: 'globe',       title: 'India-Based Data Centre', desc: 'Servers hosted in India ensure low latency for Indian visitors and compliance with local data regulations.' },
  ],

  whoLabel:    'WHO IT\'S FOR',
  whoTitle:    'Who Can Use ICSDC cPanel Hosting?',
  whoSubtitle: 'Designed for a wide range of users who need a simple, reliable, and secure way to manage websites.',

  whoCards: [
    { order: 0, icon: 'briefcase', title: 'Small & Medium Businesses',  desc: 'Host corporate websites, service pages, and landing pages without managing complex server settings.' },
    { order: 1, icon: 'users',     title: 'Startups & Entrepreneurs',   desc: 'Affordable, easy-to-manage hosting with room to grow as traffic and operations scale.' },
    { order: 2, icon: 'edit',      title: 'Bloggers & Content Creators', desc: 'WordPress blogs, news websites, and content-driven platforms that need fast, stable performance.' },
    { order: 3, icon: 'shopping-cart', title: 'eCommerce Stores',       desc: 'Online shops built on WooCommerce, OpenCart, or Magento with smooth control and dependable uptime.' },
    { order: 4, icon: 'code',      title: 'Web Developers & Agencies',  desc: 'Reseller-ready hosting to manage multiple client sites from a single cPanel account.' },
  ],

  builtinLabel:    'BUILT-IN TOOLS',
  builtinTitle:    'Powerful Tools Built Right Into Your Hosting',
  builtinSubtitle: 'No extra software to install — everything you need is available the moment you log in.',

  builtinFeatures: [
    { order: 0, icon: 'database', title: 'phpMyAdmin',         desc: 'Manage MySQL/MariaDB databases with a powerful visual interface — no SQL command-line required.' },
    { order: 1, icon: 'globe',    title: 'DNS Manager',        desc: 'Full DNS zone editor — add A, CNAME, MX, TXT, and other records directly from cPanel.' },
    { order: 2, icon: 'mail',     title: 'Webmail (Roundcube)', desc: 'Access your professional email from any browser with the clean, full-featured Roundcube webmail client.' },
    { order: 3, icon: 'file',     title: 'File Manager',       desc: 'Upload, edit, compress, and manage your website files directly from the browser — no FTP required.' },
  ],

  ctaBand1: {
    title:       'Ready to Launch Your Website Today?',
    description: 'Get cPanel hosting with NVMe SSD, free SSL, and 24/7 support — starting at just ₹99/month.',
    ctaPrimary:   { text: 'Get Started Now',       link: '/contact'         },
    ctaSecondary: { text: 'Call +91 98109 58857', link: 'tel:+919810958857' },
  },

  testimonialTitle: 'What Our cPanel Hosting Clients Say',
  faqTitle:         'FAQs About ICSDC cPanel Hosting',
  faqContactTitle:  'Talk to Our Hosting Experts',
  faqContactDesc:   'Our cPanel hosting specialists are available 24/7 to help with setup, migration, and troubleshooting.\n\n📞 +91 98109 58857',

  faq: [
    { order: 0, question: 'What is cPanel and why do I need it?', answer: 'cPanel is the world\'s most popular web hosting control panel. It gives you a graphical interface to manage every aspect of your hosting — websites, databases, emails, FTP accounts, SSL certificates, and more — without needing technical command-line knowledge.' },
    { order: 1, question: 'Can I host WordPress on cPanel hosting?', answer: 'Yes. All ICSDC cPanel plans include Softaculous, which lets you install WordPress with one click. Our servers are optimised for WordPress with LiteSpeed cache, PHP 8.x support, and daily backups.' },
    { order: 2, question: 'Is there a free domain included?', answer: 'The Business plan includes a free domain registration for the first year. Starter and Professional plans can add a domain for an additional fee, or you can point an existing domain to our servers at no cost.' },
    { order: 3, question: 'Can you migrate my existing website to ICSDC?', answer: 'Yes. We offer free website migration for all new customers. Our team transfers your files, databases, emails, and DNS settings without any downtime on your end.' },
    { order: 4, question: 'What happens if my site gets too much traffic?', answer: 'If your site consistently exceeds your plan\'s resource limits, our team will proactively recommend an upgrade. You can move to a higher cPanel plan or upgrade to a VPS or cloud server — with zero downtime migration handled by us.' },
  ],

  ctaBand2: {
    title:       'Get Your Website Online with ICSDC cPanel Hosting',
    description: 'NVMe SSD, free SSL, daily backups, and 24/7 expert support from ₹99/month.',
    ctaPrimary:   { text: 'Launch Your Website',   link: '/contact'         },
    ctaSecondary: { text: 'Call +91 98109 58857', link: 'tel:+919810958857' },
  },

  testimonials: [
    { name: 'Neha Joshi',    title: 'Founder',          company: 'StyleBoutique India',  quote: 'Set up my WooCommerce store in under 10 minutes with Softaculous. The LiteSpeed caching made my product pages load instantly. ICSDC cPanel hosting is exactly what I needed.',     rating: 5 },
    { name: 'Rahul Mehta',   title: 'Web Developer',    company: 'Pixel Studio Delhi',   quote: 'Managing 8 client websites on the Business plan. cPanel makes it effortless — each client gets their own subdomain and email. The 24/7 support has saved me multiple times.',    rating: 5 },
    { name: 'Divya Nair',    title: 'Content Creator',  company: 'TravelDiaries Blog',   quote: 'Migrated from a slow shared host to ICSDC and the difference is remarkable. My blog pages load in under 1 second now and I have not had a single downtime incident in 6 months.', rating: 5 },
  ],
};
