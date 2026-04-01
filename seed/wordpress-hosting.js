/**
 * Seed data — WordPress Hosting Page
 * Schema: api::wordpress-hosting-page.wordpress-hosting-page
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
    metaTitle: 'WordPress Hosting India | Managed WP Hosting | ICSDC',
    metaDescription:
      'Fast, secure WordPress hosting starting at ₹99/mo. NVMe SSD, free SSL, auto-updates, daily backups. Fully managed WordPress hosting in India.',
  },

  heroEyebrow: '⚡ WordPress Hosting',
  heroTitle:       'Blazing-Fast WordPress Hosting for Every Website',
  heroSubtitle:    'Starting at ₹99/month',
  heroDescription: 'Optimized WordPress hosting with NVMe SSDs, built-in caching, free SSL, and automatic updates — so you can focus on growing your business.',
  heroTopBadge:       'WordPress Optimized',
  heroStatusTitle:    '99.9% Uptime',
  heroStatusSubtitle: 'SLA Guaranteed',

  heroCtaPrimary:   { text: 'Get Started', link: '/contact' },
  heroCtaSecondary: { text: 'View Plans',  link: '#plans'   },

  pillars: [
    { icon: 'speed',  title: '10x Faster',    desc: 'NVMe SSD storage and LiteSpeed servers deliver blazing load times',  order: 0 },
    { icon: 'shield', title: 'Auto-Updates',  desc: 'WordPress core, themes, and plugins updated automatically',           order: 1 },
    { icon: 'backup', title: 'Daily Backups', desc: 'Automated daily backups with one-click restore',                       order: 2 },
    { icon: 'ssl',    title: 'Free SSL',       desc: "Let's Encrypt SSL certificate included with every plan",             order: 3 },
  ],

  plansLabel:    'PRICING PLANS',
  plansTitle:    'WordPress Hosting Plans for Every Need',
  plansSubtitle: 'All plans include WordPress pre-installed, free SSL, and 24/7 expert support.',

  plans: [
    {
      tier:       'WP Starter',
      price:      '99',
      currency:   '&#8377;',
      period:     '/mo',
      tagline:    'Perfect for personal blogs and small sites',
      isFeatured: false,
      badge:      '',
      features: [
        { label: '1 WordPress Website' },
        { label: '5 GB NVMe SSD Storage' },
        { label: 'Free SSL Certificate' },
        { label: 'Daily Backups' },
        { label: '24/7 Support' },
      ],
      ctaText:  'Get Started',
      ctaStyle: 'outline',
      order: 0,
    },
    {
      tier:       'WP Professional',
      price:      '249',
      currency:   '&#8377;',
      period:     '/mo',
      tagline:    'Ideal for business websites and blogs',
      isFeatured: true,
      badge:      'Most Popular',
      features: [
        { label: '5 WordPress Websites' },
        { label: '25 GB NVMe SSD Storage' },
        { label: 'Free SSL Certificate' },
        { label: 'Daily Backups + Restore' },
        { label: 'Free CDN' },
        { label: 'Priority 24/7 Support' },
      ],
      ctaText:  'Get Started',
      ctaStyle: 'primary',
      order: 1,
    },
    {
      tier:       'WP Business',
      price:      '499',
      currency:   '&#8377;',
      period:     '/mo',
      tagline:    'For high-traffic sites and WooCommerce stores',
      isFeatured: false,
      badge:      '',
      features: [
        { label: 'Unlimited WordPress Websites' },
        { label: '100 GB NVMe SSD Storage' },
        { label: 'Free SSL Certificate' },
        { label: 'Daily Backups + On-Demand Restore' },
        { label: 'Free CDN + DDoS Protection' },
        { label: 'WooCommerce Optimized' },
        { label: 'Dedicated Account Manager' },
      ],
      ctaText:  'Get Started',
      ctaStyle: 'outline',
      order: 2,
    },
  ],

  featuresLabel:    'FEATURES',
  featuresTitle:    'Everything You Need for a Great WordPress Site',
  featuresSubtitle: 'Our WordPress hosting is optimized at every layer — from server configuration to caching.',

  features: [
    { icon: 'speed',   title: 'LiteSpeed Web Server', desc: 'Up to 40x faster than Apache with built-in LSCache for WordPress.',                order: 0 },
    { icon: 'db',      title: 'MariaDB Database',     desc: 'High-performance database optimized for WordPress workloads.',                    order: 1 },
    { icon: 'ssl',     title: 'Free SSL & HTTPS',     desc: 'Auto-renewing Let\'s Encrypt SSL included with every hosting plan.',             order: 2 },
    { icon: 'cdn',     title: 'Free CDN',              desc: 'Cloudflare CDN integration for faster global content delivery.',                 order: 3 },
    { icon: 'staging', title: 'One-Click Staging',    desc: 'Test changes on a staging site before pushing to production.',                   order: 4 },
    { icon: 'php',     title: 'PHP 8.x Support',      desc: 'Latest PHP versions for maximum WordPress performance and security.',            order: 5 },
  ],

  ctaBand1: {
    title:       'Migrate Your WordPress Site for Free',
    description: 'Our experts migrate your existing WordPress site to ICSDC with zero downtime.',
    ctaPrimary:   { text: 'Free Migration', link: '/contact'  },
    ctaSecondary: { text: 'Learn More',     link: '#features' },
  },

  performanceLabel:    'PERFORMANCE',
  performanceTitle:    'Built for Speed at Every Level',
  performanceSubtitle: 'We have optimized every layer of our stack specifically for WordPress.',

  performanceCards: [
    { icon: 'nvme',      title: 'NVMe SSD Storage',  desc: '10x faster than traditional SSDs — dramatically improves database query times.', order: 0 },
    { icon: 'cache',     title: 'Full-Page Caching',  desc: 'LiteSpeed Cache plugin pre-built and configured for instant page loads.',        order: 1 },
    { icon: 'http2',     title: 'HTTP/2 & Brotli',    desc: 'Modern protocols for faster asset delivery and reduced page load times.',        order: 2 },
    { icon: 'opcache',   title: 'PHP OPcache',         desc: 'Compiled PHP bytecode caching for significantly faster PHP execution.',         order: 3 },
  ],

  managedLabel:    'MANAGED WORDPRESS',
  managedTitle:    'We Handle the Technical Side — You Focus on Content',
  managedSubtitle: 'Our managed WordPress service includes everything needed to keep your site secure and fast.',

  managedFeatures: [
    { icon: 'update',  title: 'Automatic Updates',  desc: 'WordPress core, themes, and plugins updated automatically on your schedule.',            order: 0 },
    { icon: 'scan',    title: 'Malware Scanning',   desc: 'Daily automated scans detect and remove malware before it impacts visitors.',            order: 1 },
    { icon: 'backup',  title: 'Automated Backups',  desc: 'Daily backups stored offsite with instant one-click restore capability.',               order: 2 },
    { icon: 'monitor', title: 'Uptime Monitoring',  desc: '24/7 monitoring with instant alerts and auto-recovery for maximum availability.',        order: 3 },
  ],

  whyChooseLabel:    'WHY ICSDC',
  whyChooseTitle:    'Why Choose ICSDC for WordPress Hosting?',
  whyChooseSubtitle: 'Thousands of WordPress site owners trust ICSDC for reliability, speed, and support.',

  whyChooseCards: [
    { icon: 'expert', title: 'WordPress Experts',    desc: 'Our team includes certified WordPress developers ready to help anytime.',               order: 0 },
    { icon: 'india',  title: 'India-Based Servers',  desc: 'Low-latency hosting from our Mumbai data center for Indian audiences.',                 order: 1 },
    { icon: 'price',  title: 'Transparent Pricing',  desc: 'No hidden fees — the price you see is what you pay, every month.',                     order: 2 },
    { icon: 'scale',  title: 'Easy Scaling',          desc: 'Upgrade your plan instantly as your site grows, with no migration needed.',            order: 3 },
  ],

  testimonialTitle: 'What Our WordPress Clients Say',

  testimonials: [
    { name: 'Sneha Kapoor', title: 'Blogger & Content Creator', company: 'LifeStyleBlog.in', quote: 'My site loads in under 1 second now. Free migration was smooth and support is always responsive.', rating: 5 },
    { name: 'Vikram Singh', title: 'E-commerce Manager',        company: 'ShopIndia.com',    quote: 'Our WooCommerce store handles Black Friday traffic without breaking a sweat. Excellent infrastructure.', rating: 5 },
    { name: 'Anita Desai',  title: 'Digital Agency Owner',      company: 'WebCraft Studios', quote: 'We host 20+ client sites on ICSDC WordPress hosting. Performance and reliability are outstanding.', rating: 5 },
  ],

  faqTitle:        'Frequently Asked Questions',
  faqContactTitle: 'Need more help?',
  faqContactDesc:  'Our WordPress experts are available 24/7 to help you get started.',

  faq: [
    { question: 'Is WordPress pre-installed?',              answer: 'Yes, WordPress is pre-installed on all plans. You can also use the one-click installer to add more sites.',                                                                    order: 0 },
    { question: 'Can you migrate my existing WordPress site?', answer: 'Yes! Free WordPress migration is included for all new customers. Our team migrates files, database, and settings with zero downtime.',                                     order: 1 },
    { question: 'Do you support WooCommerce?',              answer: 'Absolutely. Our WP Business plan is optimized for WooCommerce with dedicated resources, advanced caching, and priority support during high-traffic events.',                    order: 2 },
    { question: 'What PHP version do you support?',         answer: 'We support PHP 7.4, 8.0, 8.1, 8.2, and 8.3. Switch versions with one click from cPanel.',                                                                                      order: 3 },
    { question: 'How do backups work?',                     answer: 'Automated daily backups cover your entire WordPress installation including files and database. Backups are stored offsite for 30 days and can be restored with one click.',     order: 4 },
  ],

  ctaBand2: {
    title:       'Launch Your WordPress Site Today',
    description: 'Join thousands of happy WordPress users on ICSDC\'s optimized hosting platform.',
    ctaPrimary:   { text: 'Get WordPress Hosting', link: '/contact' },
    ctaSecondary: { text: 'Talk to an Expert',     link: '/contact' },
  },
};
