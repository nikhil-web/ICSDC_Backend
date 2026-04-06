// seed/managed-dedicated-server.js
// Field name rules:
//   ds.icon-card        → { title, desc }          (NOT description)
//   ds.cta-link         → { text, link }
//   ds.cta-band         → { title, description, ctaPrimary, ctaSecondary }
//   ds.testimonial-card → { name, role, company, quote }
//   ds.faq-entry        → { question, answer }
//   ds.compare-row      → { feature, selfManaged, fullyManaged }

module.exports = {
  seo: {
    metaTitle: 'Fully Managed Dedicated Servers | ICSDC Hosting Solutions',
    metaDescription: 'Get high-performance, secure, fully managed dedicated servers with 24/7 support, proactive monitoring, and scalable infrastructure. Perfect for mission-critical workloads.',
  },

  heroTitle: 'Fully Managed Dedicated Servers Built for Speed, Security & Stability',
  heroSubtitle: 'Dedicated Resources Managed by Certified Professionals',
  heroDescription: 'Get the power of a dedicated server without the burden of managing it. Our experts handle security, monitoring, updates and performance - so your business stays fast, stable and secure.',
  heroCtaPrimary:  { text: 'Get Your Managed Server Now', link: '#contact' },
  heroCtaSecondary: { text: 'View Plans', link: '#plans' },

  pillars: [
    { title: '24/7 Proactive Server Management',    desc: 'Continuous monitoring, maintenance, and issue resolution handled by expert engineers.' },
    { title: 'Advanced Security & Protection',       desc: 'Firewall setup, malware defense, DDoS mitigation, and regular security audits included.' },
    { title: 'Optimized Performance Tuning',         desc: 'Server configuration, load optimization, and resource tuning for maximum speed and stability.' },
    { title: 'Regular Updates & Backup Management', desc: 'OS updates, patching, automated backups, and recovery support to keep your data safe and current.' },
  ],

  plansTitle:    'Choose the Power Plan That Fits Your Workload',
  plansSubtitle: 'From startup needs to enterprise workloads, we have a server that fits perfectly.',

  pricingPlans: [
    {
      order: 1,
      tier: 'Starter',
      price: '4,999',
      currency: '₹',
      period: '/mo',
      tagline: 'Perfect for growing businesses getting started with dedicated hosting.',
      isFeatured: false,
      badge: null,
      ctaText: 'Get Started',
      ctaStyle: 'outline',
      features: [
        { label: 'Intel Xeon E3 / 4-Core CPU' },
        { label: '16 GB DDR4 RAM' },
        { label: '500 GB SSD Storage' },
        { label: '1 Gbps Unmetered Bandwidth' },
        { label: '1 Dedicated IPv4' },
        { label: '24/7 Managed Support' },
        { label: 'Firewall & DDoS Protection' },
        { label: 'Automated Daily Backups' },
      ],
    },
    {
      order: 2,
      tier: 'Business',
      price: '9,999',
      currency: '₹',
      period: '/mo',
      tagline: 'Built for high-traffic applications and business-critical workloads.',
      isFeatured: true,
      badge: 'Most Popular',
      ctaText: 'Get Started',
      ctaStyle: 'primary',
      features: [
        { label: 'Intel Xeon E5 / 8-Core CPU' },
        { label: '32 GB DDR4 RAM' },
        { label: '1 TB NVMe SSD Storage' },
        { label: '1 Gbps Unmetered Bandwidth' },
        { label: '2 Dedicated IPv4' },
        { label: '24/7 Priority Managed Support' },
        { label: 'Advanced Firewall & DDoS Mitigation' },
        { label: 'Automated Daily Backups + Off-site Copy' },
        { label: 'OS Patch & Update Management' },
        { label: 'Performance Monitoring & Alerts' },
      ],
    },
    {
      order: 3,
      tier: 'Enterprise',
      price: '17,999',
      currency: '₹',
      period: '/mo',
      tagline: 'Maximum power for enterprises with intensive compute demands.',
      isFeatured: false,
      badge: null,
      ctaText: 'Contact Sales',
      ctaStyle: 'outline',
      features: [
        { label: 'Dual Xeon / 16-Core CPU' },
        { label: '64 GB DDR4 ECC RAM' },
        { label: '2 TB NVMe SSD (RAID 1)' },
        { label: '10 Gbps Premium Bandwidth' },
        { label: '4 Dedicated IPv4' },
        { label: 'Dedicated Account Manager' },
        { label: 'Enterprise Firewall + Intrusion Detection' },
        { label: 'Hourly Snapshots + Geo-Redundant Backups' },
        { label: 'Full OS & Application Management' },
        { label: 'SLA 99.99% Uptime Guarantee' },
        { label: 'Custom Configuration & Tuning' },
      ],
    },
  ],

  aboutTitle: 'Who We Are?',
  aboutDesc: 'ICSDC is a trusted datacenter and hosting solutions provider delivering high-performance infrastructure to businesses across the globe. With years of experience in managing mission-critical environments, we combine industry-leading technologies with a customer-first approach to ensure unmatched reliability, security, and uptime.\n\nOur team of certified experts operates round the clock, ensuring every server, every application, and every workflow runs at peak efficiency. From startups to large enterprises, we empower organizations with fully managed, scalable, and secure hosting solutions designed to support growth and long-term success.',
  aboutNote: 'At ICSDC, we don\'t just provide servers - we provide peace of mind.',

  standoutLabel: 'Why ICSDC',
  standoutTitle: 'What Makes Our Managed Servers Stand Out?',
  standoutCards: [
    { title: 'Complete Infrastructure Ownership',       desc: 'Your business gets a fully dedicated environment with full control over resources, configurations, and applications - without the burden of managing it.' },
    { title: 'True End-to-End Management',              desc: 'From deployment to continuous optimization, ICSDC handles every layer: hardware, OS, network, security, backups, and ongoing maintenance.' },
    { title: 'Enterprise-Grade Security Framework',     desc: 'A layered security architecture with firewalls, isolation, compliance-friendly configurations, and continuous threat monitoring.' },
    { title: 'Guaranteed Resource Availability',        desc: 'No shared CPU, RAM, or storage - your workloads run consistently, even during peak traffic or processing-heavy operations.' },
    { title: 'High-Speed Global Network Connectivity',  desc: 'Low-latency routes, premium bandwidth options, and multiple PoPs ensuring fast, stable performance across regions.' },
    { title: 'Intelligent Automation & Monitoring',     desc: 'Smart systems track performance, detect anomalies, automate updates, and ensure your server stays optimized 24/7.' },
    { title: 'Flexible Scaling Options',                desc: 'Easily upgrade hardware, expand storage, or enhance security layers as your applications grow - without migrations or downtime.' },
    { title: 'Strategic Support From Certified Experts', desc: 'Beyond technical support, ICSDC specialists guide you with best practices, architectural suggestions, and performance tuning tailored to your workloads.' },
  ],

  baremetalPromoTitle: 'Check Out Our Bare Metal Servers',
  baremetalPromoDesc:  'Raw hardware performance with complete control and enterprise-grade reliability.',
  baremetalPromoCta:   { text: 'View Bare Metal Servers', link: '/bare-metal-server.html' },

  cloudPromoTitle: 'Upgrade to Cloud Servers',
  cloudPromoDesc:  'Experience high availability and on-demand scalability for modern applications.',
  cloudPromoCta:   { text: 'Explore Cloud Servers', link: '/cloud-hosting.html' },

  whyChooseTitle: 'Why Choose ICSDC Fully Managed Dedicated Server?',
  whyChooseDesc:  'From global network connectivity to proactive support and intelligent automation, our managed servers ensure you get the highest level of reliability and long-term stability for mission-critical workloads.',
  whyChooseList: [
    'Complete Turnkey Management',
    'Superior Dedicated Performance',
    'Enterprise-Grade Security',
    'Global High-Speed Network',
    'Proactive Monitoring & Automation',
    'Seamless Scalability',
    'Expert Technical Support',
    'High Uptime & Reliability',
  ],

  whoLabel: 'Ideal For',
  whoTitle: 'Who Should Choose ICSDC Fully Managed Dedicated Server?',
  whoCards: [
    { title: 'Businesses',               desc: 'Ideal for companies that need a stable, high-performance hosting environment to support daily operations, customer interactions, and growth.' },
    { title: 'Enterprises',              desc: 'Perfect for large organizations managing heavy workloads, complex applications, and demanding infrastructure requirements.' },
    { title: 'Non-IT Teams',             desc: 'Designed for teams without in-house technical staff who want fully handled server management without dealing with configurations or troubleshooting.' },
    { title: 'High-Security Users',      desc: 'Suitable for industries that require strong data protection, compliance-friendly infrastructure, and advanced security measures.' },
    { title: 'E-Commerce',               desc: 'Built for online stores needing fast page loads, secure transactions, and dependable uptime during peak sales or traffic spikes.' },
    { title: 'SaaS Companies',           desc: 'Great for platforms that must deliver round-the-clock uptime, smooth performance, and reliable user experiences across all devices.' },
    { title: 'Agencies',                 desc: 'Helpful for creative, marketing, or tech agencies managing multiple client projects, resource-heavy tools, and continuous deliverables.' },
    { title: 'Uptime-Critical Operations', desc: 'Essential for businesses where downtime is unacceptable, such as fintech, healthcare, logistics, or enterprise software environments.' },
  ],

  osTitle: 'Your Server, Your Operating System',
  osDesc:  'Tailor your managed dedicated server with the operating system that aligns with your workflow. From popular Linux distros to modern Windows editions, pick the platform that best supports your applications and long-term goals.',

  compareTitle: 'Compare Self-Managed vs Fully Managed Dedicated Servers',
  compareRows: [
    { feature: 'Server Setup & Configuration',       selfManaged: '✕', fullyManaged: '✓' },
    { feature: 'OS Installation & Updates',          selfManaged: '✕', fullyManaged: '✓' },
    { feature: 'Security Monitoring',                selfManaged: '✕', fullyManaged: '✓' },
    { feature: 'Performance Optimization',           selfManaged: '✕', fullyManaged: '✓' },
    { feature: '24/7 Technical Support',             selfManaged: '✕', fullyManaged: '✓' },
    { feature: 'Troubleshooting & Issue Resolution', selfManaged: '✕', fullyManaged: '✓' },
    { feature: 'Backup & Restore Management',        selfManaged: '✕', fullyManaged: '✓' },
    { feature: 'Full Server Control',                selfManaged: '✓', fullyManaged: '✓' },
    { feature: 'Requires Technical Expertise',       selfManaged: '✓', fullyManaged: '✕' },
    { feature: 'Time & Resource Saving',             selfManaged: '✕', fullyManaged: '✓' },
  ],

  whenTitle: 'When to Choose a Managed Dedicated Server?',
  whenDesc:  'A Managed Dedicated Server is the right choice when your business needs powerful infrastructure without the burden of maintaining it.',
  whenList: [
    'Your applications require high performance and guaranteed resources',
    'You don\'t have an in-house IT team to manage servers',
    'Security, data protection, and compliance are critical',
    'You want predictable uptime with proactive monitoring',
    'Your website or platform handles heavy traffic or transactions',
    'You need expert support to manage and optimize your server',
    'Downtime can cause financial or operational loss',
    'Your business is scaling and needs reliable, hands-off management',
  ],

  testimonialTitle: 'Read ICSDC Managed Dedicated Server Client Stories',
  testimonials: [
    { name: 'Aarav Malhotra', role: 'CTO', company: 'Fintech Startup', quote: 'Our platform handles thousands of real-time transactions every hour, so downtime is simply not an option. After shifting to ICSDC\'s Managed Dedicated Server, our latency dropped significantly and our security posture improved. Their team handles everything - from monitoring to optimization - so we can focus entirely on scaling our product.' },
    { name: 'Rhea Kapoor',    role: 'Operations Head', company: 'E-Commerce Brand', quote: 'As our online store traffic grew, our old hosting setup couldn\'t keep up. ICSDC\'s managed server gave us the stability and speed we desperately needed during peak sale events. The 24/7 support and proactive monitoring have helped us maintain consistent uptime even on high-volume days.' },
    { name: 'Kunal Verma',    role: 'Founder', company: 'Digital Marketing Agency', quote: 'Our agency manages multiple client websites and applications, so performance and flexibility are crucial. With ICSDC\'s Managed Dedicated Server, we no longer worry about server issues or sudden slowdowns. Their team optimizes everything in the background while we stay focused on delivering campaigns.' },
    { name: 'Sana Sheikh',    role: 'Product Manager', company: 'SaaS Company', quote: 'Our SaaS tool requires uninterrupted uptime for users across regions. ICSDC provided a fully managed solution with great network speeds and continuous support. We\'ve seen a noticeable improvement in performance, and their quick response time has been a huge relief for our team.' },
    { name: 'Nikhil Jain',    role: 'IT Lead', company: 'Healthcare Services Provider', quote: 'We needed a secure, compliant hosting environment for handling sensitive patient data. ICSDC\'s Managed Dedicated Server gave us advanced security layers, reliable uptime, and peace of mind knowing experts are monitoring everything 24/7. It\'s been a completely worry-free experience.' },
  ],

  faqTitle: 'FAQs about Managed Dedicated Server',
  faq: [
    { question: 'What is a Fully Managed Dedicated Server?',                    answer: 'A fully managed dedicated server is a hosting solution where ICSDC\'s team handles all technical tasks - setup, monitoring, security, optimization, updates, and support - so you don\'t have to manage the server yourself.' },
    { question: 'How is a managed server different from a self-managed server?', answer: 'In a self-managed server, you handle everything yourself. In a managed server, ICSDC\'s experts take care of all backend operations while you focus on your business.' },
    { question: 'Do I need technical knowledge to use a managed dedicated server?', answer: 'No. Managed servers are designed for businesses that want powerful hosting without dealing with technical maintenance or configurations.' },
    { question: 'Can I customize the hardware or software on my server?',        answer: 'Yes. You can choose CPU, RAM, storage type, and operating system, and ICSDC will configure the server based on your needs.' },
    { question: 'What kind of security does ICSDC provide on managed servers?',  answer: 'Managed servers include firewall setup, proactive monitoring, malware protection, DDoS mitigation, and regular security updates to safeguard your data.' },
    { question: 'Will ICSDC handle backups and restoration?',                    answer: 'Yes. Automated backups and easy restoration options are included to ensure your data remains safe and recoverable.' },
    { question: 'What level of support can I expect?',                           answer: 'You get 24/7 expert support for troubleshooting, performance tuning, and any technical issues related to your server.' },
    { question: 'Can I upgrade my server resources later?',                      answer: 'Absolutely. You can scale RAM, CPU, storage, and bandwidth anytime without downtime, ensuring your server grows with your business.' },
  ],

  ctaBand1: {
    title: 'Start with a Managed Dedicated Server',
    description: 'Get high-performance, secure, fully managed dedicated servers with 24/7 support, proactive monitoring, and scalable infrastructure. Perfect for mission-critical workloads.',
    ctaPrimary:  { text: 'Get Your Managed Server Now', link: '#contact' },
    ctaSecondary: { text: 'View Plans', link: '#plans' },
  },
};
