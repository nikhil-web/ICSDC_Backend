/**
 * Seed data — NVMe Dedicated Server Page
 * Schema: api::nvme-dedicated-server-page.nvme-dedicated-server-page
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
    metaTitle:       'NVMe Dedicated Servers India | Bare-Metal NVMe Performance | ICSDC',
    metaDescription: 'ICSDC NVMe Dedicated Servers deliver bare-metal performance with enterprise NVMe SSDs, unmetered bandwidth, and 24/7 managed support. Starting at ₹4,999/month.',
  },

  heroEyebrow:        '⚡ NVMe Dedicated Servers',
  heroTitle:          'Bare-Metal NVMe Performance — Dedicated Servers Built for Speed',
  heroSubtitle:       'Starting at ₹4,999/month',
  heroDescription:    'Experience the raw power of a dedicated server with next-generation NVMe SSD storage. No virtualisation overhead, no shared resources — just maximum performance for your most demanding workloads.',
  heroTopBadge:       '⚡ NVMe Powered',
  heroStatusTitle:    'Server Online',
  heroStatusSubtitle: '100% Dedicated',

  heroCtaPrimary:   { text: 'Get Your Server Now', link: '/contact' },
  heroCtaSecondary: { text: 'View Configurations', link: '#plans'   },

  pillars: [
    { order: 0, icon: 'zap',      title: 'NVMe Speed',          desc: 'Up to 7,000 MB/s sequential read — 10x faster than traditional SSD dedicated servers.' },
    { order: 1, icon: 'server',   title: '100% Dedicated',       desc: 'Every resource is yours alone — no hypervisor overhead, no noisy neighbours, ever.' },
    { order: 2, icon: 'shield',   title: 'DDoS Protected',       desc: 'Enterprise DDoS mitigation up to 1 Tbps included with every dedicated server plan.' },
    { order: 3, icon: 'clock',    title: '4-Hour Provisioning',  desc: 'Your dedicated server is configured, secured, and handed over within 4 hours of order.' },
  ],

  plansLabel:    'SERVER CONFIGS',
  plansTitle:    'NVMe Dedicated Server Configurations',
  plansSubtitle: 'All servers include free setup, DDoS protection, remote console access, and 24/7 support.',

  plans: [
    {
      order:      0,
      tier:       'NVMe DS Starter',
      price:      '4,999',
      currency:   '&#8377;',
      period:     '/mo',
      tagline:    'Entry-level bare-metal for applications and mid-traffic sites',
      isFeatured: false,
      badge:      '',
      features: [
        { label: 'Intel Xeon E-2234 (4c/8t)' },
        { label: '32 GB DDR4 ECC RAM' },
        { label: '2× 480 GB NVMe SSD (RAID-1)' },
        { label: '1 Gbps Unmetered Port' },
        { label: 'Free DDoS Protection' },
        { label: '5 Dedicated IPs' },
      ],
      ctaText:  'Order Now',
      ctaStyle: 'outline',
    },
    {
      order:      1,
      tier:       'NVMe DS Pro',
      price:      '9,999',
      currency:   '&#8377;',
      period:     '/mo',
      tagline:    'High-performance server for production apps and databases',
      isFeatured: true,
      badge:      'Most Popular',
      features: [
        { label: 'Intel Xeon E-2288G (8c/16t)' },
        { label: '64 GB DDR4 ECC RAM' },
        { label: '2× 960 GB NVMe SSD (RAID-1)' },
        { label: '1 Gbps Unmetered Port' },
        { label: 'Free DDoS Protection' },
        { label: '10 Dedicated IPs' },
        { label: 'Free IPMI / Remote Console' },
        { label: 'Free OS Reinstall' },
      ],
      ctaText:  'Order Now',
      ctaStyle: 'primary',
    },
    {
      order:      2,
      tier:       'NVMe DS Elite',
      price:      '18,999',
      currency:   '&#8377;',
      period:     '/mo',
      tagline:    'Enterprise-grade server for mission-critical workloads',
      isFeatured: false,
      badge:      '',
      features: [
        { label: 'Dual Intel Xeon Silver 4210 (20c/40t)' },
        { label: '128 GB DDR4 ECC RAM' },
        { label: '4× 960 GB NVMe SSD (RAID-10)' },
        { label: '10 Gbps Unmetered Port' },
        { label: 'Advanced DDoS Protection' },
        { label: '20 Dedicated IPs' },
        { label: 'Hardware RAID Controller' },
        { label: 'Dedicated Account Manager' },
      ],
      ctaText:  'Contact Sales',
      ctaStyle: 'outline',
    },
  ],

  infraLabel:    'INFRASTRUCTURE',
  infraTitle:    'Enterprise-Grade Infrastructure in Every Server',
  infraSubtitle: 'Every NVMe dedicated server is built with components designed for 24/7 production workloads.',

  infraFeatures: [
    { order: 0, icon: 'hard-drive', title: 'Gen 4 NVMe SSDs',          desc: 'PCIe 4.0 NVMe drives with up to 7,000 MB/s read — the fastest storage available in a dedicated server.' },
    { order: 1, icon: 'cpu',        title: 'Latest Intel Xeon CPUs',    desc: 'Current-gen Xeon processors with high clock speeds and large caches for latency-sensitive workloads.' },
    { order: 2, icon: 'database',   title: 'ECC RAM',                   desc: 'Error-correcting memory prevents silent data corruption — essential for databases and financial applications.' },
    { order: 3, icon: 'wifi',       title: '1–10 Gbps Network',         desc: 'Redundant uplinks with unmetered bandwidth — no throttling, no overage charges on inbound or outbound traffic.' },
    { order: 4, icon: 'shield',     title: 'Hardware RAID',             desc: 'RAID-1 or RAID-10 configurations with hot-swap drives ensure storage redundancy and instant failover.' },
    { order: 5, icon: 'monitor',    title: 'IPMI Remote Console',        desc: 'Out-of-band management via IPMI — reboot, reinstall OS, and access BIOS even if the server is offline.' },
  ],

  whyNvmeLabel:    'WHY NVMe',
  whyNvmeTitle:    'Why NVMe Over Traditional SSD Dedicated Servers?',
  whyNvmeSubtitle: 'The difference between NVMe and SATA SSD is not incremental — it is transformational for I/O-heavy workloads.',

  whyNvmeCards: [
    { order: 0, icon: 'zap',       title: '10× Faster I/O',         desc: 'NVMe delivers 500K+ IOPS versus 100K for SATA SSD — the difference is immediately felt in database and file operations.' },
    { order: 1, icon: 'trending-up', title: 'Lower Latency',         desc: 'Sub-100µs access times versus 500µs+ for SATA — critical for real-time applications and high-frequency operations.' },
    { order: 2, icon: 'layers',    title: 'Parallel Workloads',      desc: 'NVMe handles thousands of concurrent I/O queues versus a single queue for SATA — perfect for multi-threaded applications.' },
    { order: 3, icon: 'thermometer', title: 'Better Efficiency',     desc: 'NVMe draws less power per IOPS than SATA, resulting in lower heat generation and better overall system efficiency.' },
  ],

  useCasesLabel:    'USE CASES',
  useCasesTitle:    'What Workloads Run Best on NVMe Dedicated Servers?',
  useCasesSubtitle: 'Any application that demands maximum I/O performance, low latency, or high throughput benefits from NVMe bare metal.',

  useCases: [
    { order: 0, icon: 'database',   title: 'High-Traffic Databases',   desc: 'MySQL, PostgreSQL, MongoDB — NVMe IOPS eliminate database bottlenecks for high-concurrency applications.' },
    { order: 1, icon: 'code',       title: 'Game Servers',              desc: 'Low-latency NVMe storage and dedicated CPU cores deliver the performance game servers demand.' },
    { order: 2, icon: 'bar-chart-2', title: 'Big Data & Analytics',    desc: 'Process large datasets at full NVMe speed — ETL pipelines, log analytics, and BI workloads.' },
    { order: 3, icon: 'globe',      title: 'High-Traffic Web Apps',    desc: 'eCommerce, SaaS platforms, and media sites that need consistent sub-50ms response times.' },
  ],

  whenLabel:    'WHEN TO CHOOSE',
  whenTitle:    'When Is an NVMe Dedicated Server the Right Choice?',
  whenSubtitle: 'Not every workload needs bare metal — but when yours does, NVMe dedicated is the only answer.',

  whenCards: [
    { order: 0, number: '01', title: 'You Need Maximum I/O Performance',   description: 'If your application is I/O-bound and cloud VMs or shared hosting can not keep up, NVMe bare metal eliminates the bottleneck entirely.' },
    { order: 1, number: '02', title: 'You Have Compliance Requirements',    description: 'Dedicated hardware ensures physical isolation required for PCI-DSS, HIPAA, or SOC 2 compliance — no shared hardware, ever.' },
    { order: 2, number: '03', title: 'Your Traffic Is High and Consistent', description: 'At high sustained traffic volumes, a dedicated server becomes more cost-effective than equivalent cloud compute with predictable performance.' },
    { order: 3, number: '04', title: 'You Run Latency-Sensitive Workloads', description: 'Financial trading, real-time gaming, live streaming, and VoIP all require the consistent low-latency that only bare metal delivers.' },
  ],

  testimonialTitle: 'What Our Dedicated Server Clients Say',
  faqTitle:         'FAQs About ICSDC NVMe Dedicated Servers',
  faqContactTitle:  'Talk to Our Server Specialists',
  faqContactDesc:   'Our dedicated server team is available 24/7 for consultations, custom configurations, and technical support.\n\n📞 +91 98109 58857',

  faq: [
    { order: 0, question: 'How quickly will my dedicated server be provisioned?', answer: 'Standard NVMe dedicated server configurations are provisioned within 4 hours of payment confirmation. Custom configurations (specific RAM, storage, or network requirements) may take up to 24 hours.' },
    { order: 1, question: 'Can I choose my operating system?', answer: 'Yes. We support CentOS, AlmaLinux, Rocky Linux, Ubuntu Server, Debian, and Windows Server. OS reinstalls via IPMI remote console are available at any time.' },
    { order: 2, question: 'Is the bandwidth truly unmetered?', answer: 'Yes. All NVMe dedicated servers include unmetered bandwidth on a 1 Gbps or 10 Gbps port. There are no monthly transfer caps or overage charges for standard usage.' },
    { order: 3, question: 'What DDoS protection is included?', answer: 'All servers include enterprise DDoS mitigation up to 1 Tbps at the network level. Traffic scrubbing occurs automatically with zero latency impact for legitimate traffic.' },
    { order: 4, question: 'Can I add more storage or RAM later?', answer: 'Yes. RAM and storage upgrades are available on request and typically performed during a short maintenance window. For major hardware changes, we can also migrate you to a higher-spec server with minimal downtime.' },
  ],

  ctaBand2: {
    title:       'Deploy Your NVMe Dedicated Server Today',
    description: 'Bare-metal NVMe performance, enterprise networking, and expert support from ₹4,999/month.',
    ctaPrimary:   { text: 'Order Your Server Now', link: '/contact' },
    ctaSecondary: { text: 'Call +91 98109 58857',  link: 'tel:+919810958857' },
  },

  testimonials: [
    { name: 'Sandeep Kulkarni', title: 'CTO',               company: 'RealTime Analytics Ltd',  quote: 'Migrated our ClickHouse cluster to ICSDC NVMe DS Elite servers. Query times dropped from 800ms to under 80ms. The NVMe performance difference is extraordinary.',              rating: 5 },
    { name: 'Priya Sharma',     title: 'Lead DevOps',        company: 'GameZone India',           quote: 'Running 3 high-traffic game servers on ICSDC NVMe DS Pro. Zero lag complaints since migration. The dedicated resources and NVMe I/O handle peak player counts flawlessly.', rating: 5 },
    { name: 'Arjun Nair',       title: 'Infrastructure Lead', company: 'FinEdge Technologies',   quote: 'Compliance required dedicated hardware. ICSDC delivered a fully configured NVMe server in under 4 hours. The IPMI access and 24/7 support give us complete operational control.', rating: 5 },
  ],
};
