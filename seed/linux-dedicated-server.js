/**
 * Seed data — Linux Dedicated Server Page
 * Schema: api::linux-dedicated-server-page.linux-dedicated-server-page
 *
 * Component field reference:
 *   ds.seo-meta         → { metaTitle, metaDescription }
 *   ds.cta-link         → { text, link }
 *   ds.icon-card        → { icon, title, desc, order }        ← "desc" not "description"
 *   ds.pricing-plan     → { tier, price, currency, period, tagline, isFeatured, badge,
 *                           features:[{label}], ctaText, ctaStyle, order }
 *   ds.comparison-row   → { order, feature, icsdc, icsdcStatus, others, othersStatus }
 *   ds.checklist-item   → { order, label, description }
 *   ds.cta-band         → { title, description, ctaPrimary:{text,link}, ctaSecondary:{text,link} }
 *   ds.testimonial-card → { name, title, company, quote, rating }
 *   ds.faq-entry        → { question, answer, order }
 */

module.exports = {

  // ── SEO ──────────────────────────────────────────────────────────────────
  seo: {
    metaTitle:       'Linux Dedicated Servers: Engineered for Growth | ICSDC',
    metaDescription: 'ICSDC Linux Dedicated Servers — full root access, enterprise NVMe hardware, GPU-ready, 99.99% uptime SLA. Managed and self-managed plans. Deploy in hours.',
  },

  // ── HERO ─────────────────────────────────────────────────────────────────
  heroEyebrow:     'Enterprise Linux Infrastructure',
  heroTitle:       'Linux Dedicated Servers: Engineered for Growth & Dedicated for Tomorrow',
  heroSubtitle:    'Where open-source freedom meets dedicated server strength',
  heroDescription: 'Get the performance, security, and control your workloads truly deserve — without the complexity. Choose the Linux dedicated server configuration that fits your growth and scale with confidence.',

  heroCtaPrimary:   { text: 'Get Your Server →', link: '#' },
  heroCtaSecondary: { text: 'View Plans',         link: '#lds-pricing' },

  // ── FOUR PILLAR HIGHLIGHTS ────────────────────────────────────────────────
  pillars: [
    { order: 0, icon: 'lock',    title: 'Full Root Access & Complete Control', desc: 'Take full command of your environment with unrestricted root access, custom configurations, and total server freedom.' },
    { order: 1, icon: 'monitor', title: 'Enterprise-Grade Performance',        desc: 'Run high-demand workloads on dedicated CPU, RAM, NVMe storage, and rock-solid network speeds optimized for Linux.' },
    { order: 2, icon: 'shield',  title: 'Advanced Security & Isolation',       desc: 'Protect your applications with dedicated hardware, firewall options, DDoS protection, and a hardened Linux ecosystem.' },
    { order: 3, icon: 'users',   title: 'Reliable 24/7 ICSDC Expert Support',  desc: 'Get always-on technical support from Linux specialists who ensure your server stays fast, secure, and running without interruptions.' },
  ],

  // ── PRICING ───────────────────────────────────────────────────────────────
  pricingLabel:    'Pricing',
  pricingTitle:    'Choose the Right Linux Dedicated Server Plan',
  pricingSubtitle: "Find the perfect balance of performance, scalability, and control with ICSDC's purpose-built Linux dedicated server configurations.",

  pricingPlans: [
    {
      order: 1, tier: 'Entry', price: '4,999', currency: '&#8377;', period: '/mo',
      tagline: 'Ideal for staging, dev environments & small workloads.',
      isFeatured: false, badge: '',
      features: [
        { label: 'Intel Xeon 4-Core / 8 Threads' },
        { label: '32 GB DDR4 ECC RAM' },
        { label: '500 GB NVMe SSD' },
        { label: '1 Gbps Unmetered Bandwidth' },
        { label: '5 Dedicated IPv4' },
        { label: 'DDoS Protection Included' },
      ],
      ctaText: 'Get Started', ctaStyle: 'outline',
    },
    {
      order: 2, tier: 'Professional', price: '9,999', currency: '&#8377;', period: '/mo',
      tagline: 'Best for production apps, databases & SaaS platforms.',
      isFeatured: true, badge: 'Most Popular',
      features: [
        { label: 'Intel Xeon 8-Core / 16 Threads' },
        { label: '64 GB DDR4 ECC RAM' },
        { label: '1 TB NVMe SSD RAID' },
        { label: '1 Gbps Unmetered Bandwidth' },
        { label: '10 Dedicated IPv4' },
        { label: 'Managed Backups Included' },
      ],
      ctaText: 'Get Started', ctaStyle: 'primary',
    },
    {
      order: 3, tier: 'Enterprise', price: '18,999', currency: '&#8377;', period: '/mo',
      tagline: 'For AI/ML pipelines, high-traffic & mission-critical systems.',
      isFeatured: false, badge: '',
      features: [
        { label: 'Dual Intel Xeon 16-Core / 32 Threads' },
        { label: '128 GB DDR4 ECC RAM' },
        { label: '2 TB NVMe SSD RAID' },
        { label: '10 Gbps Premium Network' },
        { label: '20 Dedicated IPv4 + VLAN' },
        { label: 'Full Managed + GPU-Ready' },
      ],
      ctaText: 'Contact Sales', ctaStyle: 'outline',
    },
  ],

  // ── WHAT ARE LINUX DEDICATED SERVERS ─────────────────────────────────────
  whatLabel:       'What We Offer',
  whatTitle:       'What Are ICSDC Linux Dedicated Servers?',
  whatDescription: 'ICSDC Linux Dedicated Servers are high-performance, single-tenant machines designed to give your business complete control, unmatched speed, and enterprise-grade security. Unlike shared or virtual hosting, every resource — CPU, RAM, storage, and bandwidth — is reserved exclusively for your workloads, ensuring consistent performance even under heavy demand.\n\nPowered by a hardened Linux environment, these servers are built for everything from mission-critical applications to large-scale databases, DevOps pipelines, SaaS platforms, and custom deployments. It\'s your own dedicated Linux-powered engine — optimized, isolated, and ready for anything your business needs to run.',

  // ── WHY BUSINESSES CHOOSE ────────────────────────────────────────────────
  whyLabel:    'Advantages',
  whyTitle:    'Why Businesses Choose ICSDC Linux Dedicated Servers',
  whySubtitle: '',

  whyCards: [
    { order: 0,  icon: 'lightning',   title: 'Guaranteed Dedicated Performance',               desc: 'You get fixed, non-shared CPU, RAM, and NVMe storage, ensuring your applications stay fast and responsive even during peak usage.' },
    { order: 1,  icon: 'code',        title: 'Full Root Access & Developer Freedom',            desc: 'Install custom packages, optimize kernels, configure firewalls, run containers, or deploy your tech stack exactly the way you want.' },
    { order: 2,  icon: 'shield',      title: 'Hardened Security With Real Protections',         desc: 'Enjoy DDoS mitigation, isolated hardware, SSH hardening, real-time intrusion checks, and optional WAF setup for secure deployments.' },
    { order: 3,  icon: 'trending-up', title: '99.995% Uptime Built on Redundant Architecture',  desc: 'Multi-layered power, network redundancy, and enterprise data-center standards ensure uninterrupted availability for critical workloads.' },
    { order: 4,  icon: 'globe',       title: 'Zero-Noise, Single-Tenant Infrastructure',        desc: 'Your server is fully isolated — no noisy neighbors, no shared resources, no performance dips caused by other users.' },
    { order: 5,  icon: 'scale',       title: 'Effortless Scalability With Instant Upgrades',    desc: 'Need more RAM, CPU cores, or storage? Scale instantly without downtime or migrations, keeping your operations running smoothly.' },
    { order: 6,  icon: 'monitor',     title: 'Multi-Distro Flexibility',                        desc: 'Run Ubuntu, CentOS, Debian, AlmaLinux, Rocky Linux, or your preferred distro — optimized for stability and security.' },
    { order: 7,  icon: 'pulse',       title: 'Proactive Performance Monitoring & Alerts',       desc: 'Real-time server monitoring, resource tracking, and alerts help detect issues before they affect your workload.' },
    { order: 8,  icon: 'database',    title: 'Managed Backup & Recovery Options',               desc: 'Automated backups, offsite storage, and rapid restore capabilities safeguard your data against accidental loss or failures.' },
    { order: 9,  icon: 'wifi',        title: 'High-Speed Bandwidth & Low-Latency Routing',      desc: 'Premium network routes ensure fast global connectivity, ideal for apps, APIs, websites, and latency-sensitive services.' },
    { order: 10, icon: 'grid',        title: 'Dedicated IPs & Custom Network Configuration',    desc: 'Get multiple IPv4/IPv6 addresses, private VLANs, firewall rules, and routing options tailored to your architecture.' },
    { order: 11, icon: 'users',       title: '24/7 Support From Certified Linux Engineers',     desc: 'A dedicated team of Linux specialists available day and night to troubleshoot, optimize, and resolve server issues — not just generic support.' },
  ],

  // ── COMPARISON TABLE ─────────────────────────────────────────────────────
  comparisonLabel:   'Managed vs Self-Managed',
  comparisonTitle:   'Self-Managed vs Fully Managed Dedicated Server Hosting',
  comparisonSubtitle: '',
  comparisonColumns: ['Feature', 'Self-Managed', 'Fully Managed'],

  comparisonRows: [
    { order: 1,  feature: 'Full Server Control',            icsdc: 'You manage everything',          icsdcStatus: 'check', othersStatus: 'check', others: 'Control + ICSDC handles system-level tasks' },
    { order: 2,  feature: 'OS & Software Installation',     icsdc: 'Done by your team',              icsdcStatus: 'check', othersStatus: 'check', others: 'Handled and configured by ICSDC' },
    { order: 3,  feature: 'Firewall, Security & Patching',  icsdc: 'Not included',                   icsdcStatus: 'cross', othersStatus: 'check', others: 'Fully maintained and monitored' },
    { order: 4,  feature: '24/7 Monitoring & Alerts',       icsdc: 'You must set it up',             icsdcStatus: 'cross', othersStatus: 'check', others: 'ICSDC monitors uptime, load, and health' },
    { order: 5,  feature: 'Performance Optimization',       icsdc: 'Requires in-house expertise',    icsdcStatus: 'cross', othersStatus: 'check', others: 'Kernel tuning, caching, and optimization done for you' },
    { order: 6,  feature: 'Backup & Restore Management',    icsdc: 'Manual setup required',          icsdcStatus: 'cross', othersStatus: 'check', others: 'Automated backups + assisted restore' },
    { order: 7,  feature: 'Troubleshooting & Fixes',        icsdc: 'You resolve issues',             icsdcStatus: 'cross', othersStatus: 'check', others: 'ICSDC engineers handle issues end-to-end' },
    { order: 8,  feature: 'Time Required From Your Team',   icsdc: 'High — daily upkeep',            icsdcStatus: 'cross', othersStatus: 'check', others: 'Low — focus on business, not servers' },
    { order: 9,  feature: 'Risk of Misconfiguration',       icsdc: 'Higher',                         icsdcStatus: 'cross', othersStatus: 'check', others: 'Lower with expert oversight' },
    { order: 10, feature: 'Support Scope',                  icsdc: 'Limited (hardware only)',        icsdcStatus: 'cross', othersStatus: 'check', others: 'Full-stack support (OS, apps, configurations)' },
    { order: 11, feature: 'Best Suited For',                icsdc: 'Developers & sysadmins',         icsdcStatus: 'check', othersStatus: 'check', others: 'Businesses needing reliability & peace of mind' },
    { order: 12, feature: 'Overall Cost',                   icsdc: 'Lower monthly, higher effort',   icsdcStatus: 'check', othersStatus: 'check', others: 'Higher monthly, lower operational burden' },
  ],

  // ── SPECIFICATIONS ────────────────────────────────────────────────────────
  specsLabel:       'Technical Specs',
  specsTitle:       'ICSDC Linux Dedicated Server Specifications',
  specsDescription: 'Built on enterprise-class hardware, high-speed networking, and flexible software environments — engineered for reliability, speed, and complete control.',

  specsItems: [
    { order: 1, label: 'High-Performance Compute Power',     description: 'Latest-generation Intel Xeon scalable processors. Optimized for AI, ML, virtualization, and high-traffic enterprise applications.' },
    { order: 2, label: 'Enterprise-Grade Storage Options',   description: 'NVMe U3 SSDs for ultra-fast workloads & Enterprise SSDs for high IOPS and low latency. Storage ranging from 100 GB to multi-terabytes.' },
    { order: 3, label: 'High-Speed Network Infrastructure',  description: '1 Gbps bandwidth as standard & L3-private network for tenant isolation. Built-in shared firewall protection.' },
    { order: 4, label: 'Backup & Data Protection',           description: 'Immutable S3 backup options (MinIO, Scality). Guaranteed 2-hour RPO for critical environments.' },
    { order: 5, label: 'Developer Tools & Control Options',  description: 'cPanel / custom control panels & one-click software installation. Unlimited MySQL/MariaDB databases.' },
    { order: 6, label: 'Email & Communication Tools',        description: 'Unlimited email accounts & up to 2,000 outbound emails per hour. Unlimited forwarders & webmail access from any device.' },
  ],

  // ── 24/7 SUPPORT ─────────────────────────────────────────────────────────
  supportLabel:    'Support',
  supportTitle:    'Here When You Need Us — 24/7 Expert Linux Support',
  supportSubtitle: 'Access round-the-clock assistance from certified Linux engineers who understand your infrastructure, workloads, and business goals.',

  supportCards: [
    { order: 0, icon: 'chat',  title: 'Live Chat',   desc: 'Instant Technical Assistance, Anytime. Connect directly with a Linux specialist in seconds.' },
    { order: 1, icon: 'clock', title: 'Get Support', desc: 'Real Experts. Real Solutions. 24/7. Raise a ticket and get a response from a certified engineer.' },
    { order: 2, icon: 'phone', title: 'Call Us',     desc: 'Talk to an ICSDC Linux Specialist Anytime. Reach us at +91-98109 58857.' },
  ],

  // ── AI/ML INNOVATION ─────────────────────────────────────────────────────
  innovationLabel:    'AI & ML Ready',
  innovationTitle:    'Why ICSDC Linux Dedicated Servers Are Ideal for AI, ML & Modern IT Innovation',
  innovationSubtitle: 'The perfect foundation for future-focused workloads — combining raw compute power, GPU acceleration, scalable architecture, and a development-friendly ecosystem.',

  innovationCards: [
    { order: 0, icon: 'lightning',   title: 'Optimized Resource Management',                           desc: 'Handles CPU-heavy models, GPU workloads, and memory-intensive training cycles with efficient resource distribution.' },
    { order: 1, icon: 'shield',      title: 'Long-Term Security & OS Stability',                        desc: 'LTS-based Linux environments provide consistent performance, long-term patching, strong kernel protection, and dependable security.' },
    { order: 2, icon: 'code',        title: 'Cloud and DevOps Ready Architecture',                      desc: 'Seamlessly supports hybrid cloud setups, CI/CD pipelines, Kubernetes, Docker, Ansible, Terraform, and GitOps workflows.' },
    { order: 3, icon: 'document',    title: 'Advanced GPU & Driver Support',                            desc: 'Compatible with NVIDIA CUDA, cuDNN, TensorRT, and high-performance GPU drivers for accelerated AI/ML training and deep learning models.' },
    { order: 4, icon: 'trending-up', title: 'High-Performance Compute for Data-Driven Tasks',           desc: 'Handles large datasets, training clusters, inference engines, ETL processes, and real-time data analytics with ease.' },
    { order: 5, icon: 'scale',       title: 'Scalable Infrastructure for Growing AI Models',            desc: 'Expand CPU cores, GPU units, RAM, or NVMe storage instantly — no rebuilds or downtime required.' },
    { order: 6, icon: 'monitor',     title: 'Open-Source Flexibility for Developers',                   desc: 'Supports Ubuntu, Debian, AlmaLinux, Rocky Linux, CentOS Stream, and custom builds — giving engineers full control and customization freedom.' },
    { order: 7, icon: 'sun',         title: 'Compatible With Modern Development Stacks',                desc: 'Built to run TensorFlow, PyTorch, Scikit-learn, Hugging Face, Jupyter environments, microservices, and modern frameworks without constraints.' },
    { order: 8, icon: 'globe',       title: 'Ideal for Automation & Edge Deployments',                  desc: 'Provides stable environments for IoT, robotics, automation systems, and AI-driven edge applications.' },
    { order: 9, icon: 'pulse',       title: 'Reliable for High-Demand Research & Enterprise Computing', desc: 'Trusted for scientific computing, simulation engines, HPC workloads, and enterprise-scale AI transformations.' },
  ],

  // ── USE CASES ─────────────────────────────────────────────────────────────
  useCasesLabel:    'Use Cases',
  useCasesTitle:    'Best Use Cases for Linux Dedicated Servers',
  useCasesSubtitle: '',

  useCases: [
    { order: 0, icon: 'globe',     title: 'High-Traffic Websites & Web Applications',  desc: 'Ideal for platforms that handle thousands of concurrent users, ensuring fast load times and uninterrupted performance.' },
    { order: 1, icon: 'database',  title: 'Large Databases & Data-Intensive Systems',  desc: 'Perfect for running heavy SQL/NoSQL databases that demand consistent stability and high compute power.' },
    { order: 2, icon: 'lightning', title: 'AI, ML & Deep Learning Workloads',          desc: 'Supports GPU acceleration, large model training, and high-memory pipelines with exceptional resource optimization.' },
    { order: 3, icon: 'code',      title: 'DevOps, CI/CD & Container Orchestration',   desc: 'A stable, flexible environment for running Kubernetes clusters, Docker workloads, and automated deployment pipelines.' },
    { order: 4, icon: 'shield',    title: 'Enterprise SaaS & Mission-Critical Applications', desc: 'Designed for always-on platforms that require strong security, high uptime, and dedicated compute resources.' },
    { order: 5, icon: 'pulse',     title: 'Big Data Processing & Real-Time Analytics', desc: 'Handles large datasets, ETL workflows, and real-time analytics engines with scalable compute and fast NVMe storage.' },
  ],

  // ── TESTIMONIALS ─────────────────────────────────────────────────────────
  testimonialTitle: 'Read Our Client Stories about ICSDC Linux Dedicated Servers',

  testimonials: [
    {
      name: 'Arjun Mehta', title: 'CTO', company: 'FinTech Startup',
      quote: "Our AI-driven fraud detection system needed consistent GPU performance and zero downtime. ICSDC's Linux dedicated servers delivered exactly that. The stability and resource optimization allowed us to scale our models faster than expected.",
      rating: 5,
    },
    {
      name: 'Priya Nambiar', title: 'Head of Engineering', company: 'E-Commerce Platform',
      quote: 'Peak-season traffic used to crash our old infrastructure. After switching to ICSDC Linux dedicated servers, our platform stayed fast even with 5x traffic. The difference in load handling is unbelievable.',
      rating: 5,
    },
    {
      name: 'Karan Deshpande', title: 'DevOps Manager', company: 'SaaS Product Company',
      quote: "Our CI/CD pipelines and Kubernetes clusters run flawlessly on ICSDC's Linux servers. The network isolation and performance tuning helped us cut deployment times by nearly 40%.",
      rating: 5,
    },
    {
      name: 'Sana Qureshi', title: 'Data Science Lead', company: 'Analytics & Research Firm',
      quote: 'Training large ML models requires stable GPU servers. ICSDC provided hardware-level GPU optimization along with Linux environments tailored for our workflow. It has improved our training speeds significantly.',
      rating: 5,
    },
    {
      name: 'Raghav Bansal', title: 'IT Director', company: 'Healthcare Solutions Provider',
      quote: "Security and uptime are critical for patient data systems. ICSDC gave us a Linux server environment with strong compliance, proactive monitoring, and reliable backups. It's the most dependable hosting experience we've had.",
      rating: 5,
    },
  ],

  // ── FAQ ───────────────────────────────────────────────────────────────────
  faq: [
    {
      order: 0,
      question: 'What is a Linux Dedicated Server from ICSDC?',
      answer:   'An ICSDC Linux Dedicated Server is a fully isolated, high-performance physical server running enterprise Linux distributions. It provides dedicated CPU, RAM, storage, and complete control for demanding workloads like AI, ML, SaaS, DevOps, and large databases.',
    },
    {
      order: 1,
      question: 'Which Linux distributions does ICSDC support?',
      answer:   'ICSDC supports all major Linux distros including Ubuntu, CentOS, Debian, AlmaLinux, Rocky Linux, RHEL variants, and custom OS installations as per business requirements.',
    },
    {
      order: 2,
      question: 'Can I upgrade server resources later?',
      answer:   'Yes. ICSDC offers seamless scalability. You can upgrade CPU cores, RAM, storage, and network capacity at any time without reinstallation or downtime in most cases.',
    },
    {
      order: 3,
      question: 'Do ICSDC Linux servers support GPUs?',
      answer:   'Absolutely. ICSDC provides GPU-ready Linux servers supporting NVIDIA CUDA, cuDNN, TensorRT, and other GPU drivers required for AI, ML, deep learning, and high-performance computing.',
    },
    {
      order: 4,
      question: 'What level of security do ICSDC Linux servers offer?',
      answer:   'You get enterprise-grade security including DDoS protection, isolated L3 networking, firewalls, regular patching, kernel-level hardening, immutable backups, and secure snapshot protection.',
    },
    {
      order: 5,
      question: 'Do you offer managed support for Linux dedicated servers?',
      answer:   'Yes. You can choose between self-managed and fully managed plans. Managed support includes monitoring, optimization, security updates, troubleshooting, backups, and configuration assistance.',
    },
    {
      order: 6,
      question: 'How does ICSDC ensure uptime and reliability?',
      answer:   'ICSDC provides a 99.99% uptime architecture backed by redundant power, multi-tier networking, multiple ISPs, enterprise hardware, and proactive 24/7 monitoring by expert engineers.',
    },
    {
      order: 7,
      question: 'Can I run databases or heavy applications on Linux dedicated servers?',
      answer:   'Yes. ICSDC servers are optimized for SQL/NoSQL databases, analytics engines, enterprise apps, SaaS platforms, AI pipelines, and any workload requiring consistent compute power.',
    },
    {
      order: 8,
      question: 'What control panel options are available?',
      answer:   'You can choose cPanel, DirectAdmin, or custom control panels. SSH access, cron jobs, software installers, and full root access are also available for advanced setups.',
    },
    {
      order: 9,
      question: 'How do I get support if I need help?',
      answer:   'ICSDC provides 24/7 support via live chat, support tickets, and phone. Our certified Linux engineers are available round-the-clock to assist with any technical issue, configuration, or optimization need.',
    },
  ],

  // ── FINAL CTA BAND ────────────────────────────────────────────────────────
  ctaBand1: {
    title:       'ICSDC Linux Dedicated Servers Give You a Powerful, Stable, and Scalable Foundation',
    description: 'Built for AI, cloud, DevOps, and enterprise workloads — delivering consistent performance and complete control without compromise.',
    ctaPrimary:   { text: 'Get Started Today →', link: '#' },
    ctaSecondary: { text: 'Talk to an Expert',   link: '#' },
  },

};
