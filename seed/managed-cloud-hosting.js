/**
 * Seed data — Managed Cloud Hosting Page
 * Schema: api::managed-cloud-hosting-page.managed-cloud-hosting-page
 *
 * Component field reference:
 *   ds.seo-meta         → { metaTitle, metaDescription }
 *   ds.cta-link         → { text, link }
 *   ds.icon-card        → { icon, title, desc, order }          ← "desc" not "description"
 *   ds.pricing-plan     → { tier, price, currency, period, tagline, isFeatured, badge,
 *                           features:[{label}], ctaText, ctaStyle, order }
 *   ds.numbered-tip     → { order, number, title, description }
 *   ds.cta-band         → { title, description, ctaPrimary:{text,link}, ctaSecondary:{text,link} }
 *   ds.testimonial-card → { name, title, company, quote, rating }
 *   ds.faq-entry        → { question, answer, order }
 */

module.exports = {
  seo: {
    metaTitle:       'Managed Cloud Hosting India | Fully Managed Cloud | ICSDC',
    metaDescription: 'Fully managed cloud hosting with 24/7 monitoring, auto-scaling, advanced security, and expert support. Start from ₹2,999/mo. Free migration included.',
  },

  heroEyebrow:        '☁ Managed Cloud Hosting',
  heroTitle:          'Fully Managed Cloud Hosting — Enterprise Power, Zero Complexity',
  heroSubtitle:       'Starting at ₹2,999/month',
  heroDescription:    'Stop worrying about infrastructure and focus on growing your business. ICSDC Managed Cloud delivers auto-scaling, 24/7 proactive monitoring, security hardening, and expert support — so you never have to touch a server.',
  heroTopBadge:       '✅ Fully Managed',
  heroStatusTitle:    '99.9% Uptime',
  heroStatusSubtitle: 'SLA Guaranteed',

  heroCtaPrimary:   { text: 'Get Managed Cloud Now', link: '/contact' },
  heroCtaSecondary: { text: 'View Plans',             link: '#plans'   },

  pillars: [
    { order: 0, icon: 'settings',    title: 'Fully Managed',     desc: 'OS updates, patches, security hardening, and performance tuning — all handled by our team on your behalf.' },
    { order: 1, icon: 'activity',    title: '24/7 Monitoring',   desc: 'Proactive monitoring catches issues before they impact users — with instant alerts and auto-recovery.' },
    { order: 2, icon: 'trending-up', title: 'Auto-Scaling',      desc: 'Traffic spikes handled automatically — your cloud scales up instantly and down to save cost.' },
    { order: 3, icon: 'shield',      title: 'Enterprise Security', desc: 'Firewall, DDoS protection, SSL, intrusion detection, and daily security audits included as standard.' },
  ],

  plansLabel:    'CLOUD PLANS',
  plansTitle:    'Managed Cloud Plans — Fully Handled, Always On',
  plansSubtitle: 'All plans include 24/7 managed support, monitoring, security, backups, and free migration.',

  plans: [
    {
      order:      0,
      tier:       'Cloud Essential',
      price:      '2,999',
      currency:   '&#8377;',
      period:     '/mo',
      tagline:    'Managed cloud for startups and small applications',
      isFeatured: false,
      badge:      '',
      features: [
        { label: '2 vCPU / 4 GB RAM' },
        { label: '80 GB NVMe SSD' },
        { label: '3 TB Bandwidth' },
        { label: '24/7 Managed Support' },
        { label: 'Daily Backups' },
        { label: 'Free SSL & Firewall' },
      ],
      ctaText:  'Get Started',
      ctaStyle: 'outline',
    },
    {
      order:      1,
      tier:       'Cloud Business',
      price:      '6,999',
      currency:   '&#8377;',
      period:     '/mo',
      tagline:    'Full-featured managed cloud for growing businesses',
      isFeatured: true,
      badge:      'Most Popular',
      features: [
        { label: '4 vCPU / 8 GB RAM' },
        { label: '160 GB NVMe SSD' },
        { label: '5 TB Bandwidth' },
        { label: '24/7 Priority Support' },
        { label: 'Hourly Backups' },
        { label: 'Auto-Scaling Enabled' },
        { label: 'Advanced DDoS Protection' },
        { label: 'Free Migration' },
      ],
      ctaText:  'Get Started',
      ctaStyle: 'primary',
    },
    {
      order:      2,
      tier:       'Cloud Enterprise',
      price:      '14,999',
      currency:   '&#8377;',
      period:     '/mo',
      tagline:    'High-performance managed cloud for enterprise workloads',
      isFeatured: false,
      badge:      '',
      features: [
        { label: '8 vCPU / 16 GB RAM' },
        { label: '320 GB NVMe SSD' },
        { label: '10 TB Bandwidth' },
        { label: 'Dedicated Account Manager' },
        { label: 'Real-Time Backups' },
        { label: 'Multi-Region Failover' },
        { label: 'SLA-Backed 99.99% Uptime' },
        { label: 'Custom Architecture Design' },
      ],
      ctaText:  'Contact Sales',
      ctaStyle: 'outline',
    },
  ],

  featuresLabel:    'WHAT\'S INCLUDED',
  featuresTitle:    'Everything Managed, Nothing Left to Chance',
  featuresSubtitle: 'Every managed cloud plan includes the full stack of services your business needs to run smoothly.',

  features: [
    { order: 0, icon: 'refresh-cw',  title: 'OS & Software Updates',  desc: 'Automated and supervised OS patches, kernel updates, and software upgrades applied on schedule.' },
    { order: 1, icon: 'bell',        title: 'Proactive Monitoring',   desc: 'CPU, RAM, disk, and network metrics tracked 24/7 with instant alerts and auto-remediation.' },
    { order: 2, icon: 'shield',      title: 'Security Hardening',     desc: 'Firewall rules, intrusion detection, malware scanning, and regular security audits by our team.' },
    { order: 3, icon: 'save',        title: 'Automated Backups',      desc: 'Daily to real-time backups with point-in-time recovery and 30-day retention.' },
    { order: 4, icon: 'zap',         title: 'Performance Tuning',     desc: 'Server and application performance optimised by our cloud experts — faster load times guaranteed.' },
    { order: 5, icon: 'headphones',  title: '24/7 Expert Support',    desc: 'Direct access to senior cloud engineers via phone, chat, or ticket — any time, day or night.' },
  ],

  whyManagedLabel:    'WHY MANAGED CLOUD',
  whyManagedTitle:    'Why Choose Managed Cloud Over Unmanaged?',
  whyManagedSubtitle: 'Unmanaged cloud is cheap — until a misconfiguration, security breach, or outage costs you far more.',

  whyManagedCards: [
    { order: 0, icon: 'clock',       title: 'Save Engineering Time',   desc: 'Your developers focus on product, not infrastructure. We handle all server-level operations.' },
    { order: 1, icon: 'lock',        title: 'Stay Secure by Default',  desc: 'Security patches, firewall rules, and vulnerability scans applied automatically — no gaps.' },
    { order: 2, icon: 'trending-up', title: 'Scale Without Worry',     desc: 'Auto-scaling handles traffic spikes instantly — no manual intervention required from your team.' },
    { order: 3, icon: 'dollar-sign', title: 'Predictable Costs',       desc: 'Fixed monthly pricing with no surprise bills. Our team optimises resource usage to control costs.' },
  ],

  servicesLabel:    'OUR SERVICES',
  servicesTitle:    'What Our Managed Cloud Team Does for You',
  servicesSubtitle: 'From initial setup to ongoing operations — we handle every layer of your cloud environment.',

  servicesCards: [
    { order: 0, icon: 'server',           title: 'Cloud Architecture Design',  desc: 'We design a cloud architecture tailored to your workload, traffic patterns, and growth plans.' },
    { order: 1, icon: 'arrow-right-circle', title: 'Zero-Downtime Migration',  desc: 'Free migration from any existing host — data transfer, DNS, and cutover without downtime.' },
    { order: 2, icon: 'cpu',              title: 'Resource Optimisation',      desc: 'Right-sizing of compute, memory, and storage to maximise performance and minimise cost.' },
    { order: 3, icon: 'shield',           title: 'Compliance & Hardening',     desc: 'GDPR, ISO 27001, and PCI-DSS alignment with documented security policies and audit reports.' },
    { order: 4, icon: 'refresh-cw',       title: 'Disaster Recovery',          desc: 'Automated DR plans with RTO/RPO SLAs — restore your entire environment in minutes.' },
    { order: 5, icon: 'bar-chart-2',      title: 'Monthly Reporting',          desc: 'Detailed monthly reports on uptime, performance, security events, and cost optimisation.' },
  ],

  howItWorksLabel:    'HOW IT WORKS',
  howItWorksTitle:    'From Sign-Up to Fully Managed in 4 Steps',
  howItWorksSubtitle: 'Getting started with ICSDC Managed Cloud is quick, simple, and guided by our team every step of the way.',

  howItWorksSteps: [
    { order: 0, number: '01', title: 'Consultation & Scoping',   description: 'We assess your current infrastructure, workloads, and requirements in a free 30-minute call.' },
    { order: 1, number: '02', title: 'Architecture & Provisioning', description: 'Our team designs and provisions your cloud environment — configured, secured, and optimised.' },
    { order: 2, number: '03', title: 'Migration & Testing',       description: 'We migrate your data and applications with zero downtime, then run full QA before go-live.' },
    { order: 3, number: '04', title: 'Ongoing Management',        description: '24/7 monitoring, patching, backups, and support — your cloud runs itself while you grow your business.' },
  ],

  useCasesLabel:    'USE CASES',
  useCasesTitle:    'Who Benefits from Managed Cloud Hosting?',
  useCasesSubtitle: 'Managed cloud is the right choice for any organisation that values uptime, security, and developer productivity.',

  useCases: [
    { order: 0, icon: 'briefcase',     title: 'SaaS Companies',     desc: 'Keep your platform always-on with auto-scaling, managed databases, and zero-downtime deployments.' },
    { order: 1, icon: 'shopping-cart', title: 'eCommerce Stores',   desc: 'Handle peak traffic during sales and festivals with auto-scaling and 99.9% uptime SLA.' },
    { order: 2, icon: 'globe',         title: 'Digital Agencies',   desc: 'Host dozens of client sites on a managed cloud with isolated environments and easy delegation.' },
    { order: 3, icon: 'database',      title: 'Data-Intensive Apps', desc: 'Managed PostgreSQL, MySQL, MongoDB, and Redis with automated backups and replication.' },
  ],

  ctaBand1: {
    title:       'Ready to Move to Managed Cloud?',
    description: 'Free migration, free consultation, and expert setup included with every plan.',
    ctaPrimary:   { text: 'Get Free Consultation', link: '/contact'         },
    ctaSecondary: { text: 'Call +91 98109 58857',  link: 'tel:+919810958857' },
  },

  testimonialTitle: 'What Our Managed Cloud Clients Say',
  faqTitle:         'FAQs About ICSDC Managed Cloud Hosting',
  faqContactTitle:  'Talk to Our Cloud Experts',
  faqContactDesc:   'Our managed cloud team is available 24/7 for consultations, migrations, and technical support.\n\n📞 +91 98109 58857',

  faq: [
    { order: 0, question: 'What does "fully managed" actually mean?', answer: 'It means ICSDC handles all server-level operations on your behalf — OS updates, security patches, performance tuning, monitoring, backups, and incident response. You never need to SSH into a server or worry about infrastructure.' },
    { order: 1, question: 'How is managed cloud different from a regular VPS or cloud server?', answer: 'An unmanaged server gives you raw compute resources and leaves everything else to you. Managed cloud includes a dedicated operations team that keeps your environment secure, updated, optimised, and running 24/7.' },
    { order: 2, question: 'Can you migrate my existing website or application?', answer: 'Yes. Free migration is included with all plans. Our team handles data transfer, application configuration, DNS cutover, and testing — with zero downtime for your users.' },
    { order: 3, question: 'What happens if my server goes down at 3 AM?', answer: 'Our monitoring system detects the issue within seconds and triggers automated recovery or alerts our on-call engineers. Critical incidents are responded to within 15 minutes around the clock.' },
    { order: 4, question: 'Can I scale resources up during peak traffic?', answer: 'Yes. Auto-scaling is available on Business and Enterprise plans — your cloud automatically provisions additional resources during spikes and scales down during off-peak hours to control costs.' },
  ],

  ctaBand2: {
    title:       'Let Us Manage Your Cloud — You Focus on Growth',
    description: 'Enterprise-grade managed cloud from ₹2,999/month. Free migration included.',
    ctaPrimary:   { text: 'Get Managed Cloud Now', link: '/contact'         },
    ctaSecondary: { text: 'Call +91 98109 58857',  link: 'tel:+919810958857' },
  },

  testimonials: [
    { name: 'Amit Verma',   title: 'CTO',          company: 'FinTech Solutions India', quote: 'Moved our entire platform to ICSDC Managed Cloud 6 months ago. Not a single outage since. Our engineers now focus on product features instead of firefighting infrastructure issues.', rating: 5 },
    { name: 'Priya Nair',   title: 'VP Engineering', company: 'EduLearn Pvt Ltd',      quote: 'The migration was seamless — zero downtime, zero data loss. The 24/7 monitoring caught a memory leak before it impacted our students. Worth every rupee.',                              rating: 5 },
    { name: 'Suresh Menon', title: 'Founder',        company: 'RetailMax India',        quote: 'Our Diwali sale traffic was 10× normal and the auto-scaling handled it perfectly. ICSDC Managed Cloud is the infrastructure backbone our business needed.',                              rating: 5 },
  ],
};
