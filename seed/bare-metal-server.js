module.exports = {
  seo: {
    metaTitle: 'ICSDC Dedicated Bare Metal Servers | Single-Tenant Physical Infrastructure',
    metaDescription: 'Deploy dedicated bare metal servers with full hardware control, zero virtualization overhead, and guaranteed performance. Single-tenant infrastructure built for mission-critical workloads.'
  },
  heroEyebrow: '⚙ Dedicated Bare Metal Servers',
  heroTitle: 'Dedicated Bare Metal Server Without Virtual Limits',
  heroSubtitle: 'Engineered for Workloads That Demand the Entire Server',
  heroDescription: 'ICSDC Bare Metal Servers deliver single-tenant physical infrastructure with zero virtualization overhead, giving your workloads full access to dedicated hardware. Built for performance-critical and compliance-driven environments, they ensure consistent power, low latency, and complete control.',
  heroTopBadge: '⚙ ICSDC Bare Metal',
  heroStatusTitle: '99.9% Uptime',
  heroStatusSubtitle: 'Single-Tenant Hardware',
  heroCtaPrimary: { text: 'Get Started with Bare Metal', link: '#bms-configs' },
  heroCtaSecondary: { text: 'View Configurations', link: '#bms-configs' },

  pillars: [
    { title: 'Dedicated Physical Resources', desc: 'Your workloads run on single-tenant hardware with no resource sharing, ensuring consistent and predictable performance.' },
    { title: 'Zero Virtualization Overhead', desc: 'Direct access to CPU, RAM, and storage delivers maximum efficiency, lower latency, and higher throughput.' },
    { title: 'Full Hardware & OS Control', desc: 'Choose your operating system, configure hardware, and customize the environment to meet exact workload requirements.' },
    { title: 'Enhanced Security & Compliance', desc: 'Physical isolation reduces attack surfaces and supports strict compliance needs for regulated industries.' }
  ],

  configsLabel: 'SERVER CONFIGURATIONS',
  configsTitle: 'Dedicated Bare Metal Server Configurations',
  configsSubtitle: 'Single-tenant physical servers with full hardware access — choose the configuration that matches your workload requirements.',

  serverConfigs: [
    { title: 'Entry Level', desc: 'Intel Xeon E3-1230 V3 · 4/8 Cores · 32 GB DDR3 · 480 GB SSD · 10 TB BW · 1 Gbps' },
    { title: 'Performance Tier 1', desc: 'Intel Xeon E-2136 · 6/12 Cores · 32 GB DDR4 · 480 GB SSD · 10 TB BW · 1 Gbps' },
    { title: 'Balanced Power', desc: 'AMD Ryzen 9700X · 8/16 Cores · 64 GB DDR5 · 960 GB NVMe · 10 TB BW · 1 Gbps' },
    { title: 'Gold Class Server', desc: 'Intel Xeon Gold 6244 · 8/16 Cores · 64 GB DDR4 · 960 GB NVMe · 10 TB BW · 1 Gbps' },
    { title: 'High-Throughput', desc: 'AMD Ryzen 9950X · 16/32 Cores · 64 GB DDR5 · 960 GB NVMe · 10 TB BW · 1 Gbps' },
    { title: 'Dual Gold Config', desc: '2× Intel Xeon Gold 6244 · 16/32 Cores · 64 GB DDR4 · 960 GB NVMe · 10 TB BW · 1 Gbps' },
    { title: 'Heavy Compute', desc: 'Intel Xeon Gold 6254 · 18/36 Cores · 64 GB DDR4 · 960 GB NVMe · 10 TB BW · 1 Gbps' },
    { title: 'Extreme Dual Gold', desc: '2× Intel Xeon Gold 6254 · 36/72 Cores · 128 GB DDR4 · 960 GB NVMe · 10 TB BW · 1 Gbps' },
    { title: 'EPYC Mid-Range', desc: 'AMD EPYC 7543 · 32/64 Cores · 128 GB DDR4 · 960 GB NVMe · 15 TB BW · 1 Gbps' },
    { title: 'EPYC High-Core', desc: 'AMD EPYC 7763 · 64/128 Cores · 256 GB DDR4 · 1.92 TB NVMe · 15 TB BW · 1 Gbps' },
    { title: 'EPYC Top Tier', desc: 'AMD EPYC 9554 · 64/128 Cores · 256 GB DDR5 · 1.92 TB NVMe · 25 TB BW · 1 Gbps' }
  ],

  compareLabel: 'MANAGEMENT OPTIONS',
  compareTitle: 'Self-Managed vs. Managed Bare Metal',

  managedFeatures: [
    { title: 'Hardware Issue Support', desc: 'managed' },
    { title: 'Network Uptime Support', desc: 'managed' },
    { title: 'On-Demand OS Updates', desc: 'managed' },
    { title: 'DNS Configuration', desc: 'managed' },
    { title: 'Installation of Third-Party Apps', desc: 'managed' },
    { title: 'Preliminary Server Hardening', desc: 'managed' },
    { title: 'Protection Against Server Blacklisting', desc: 'managed' },
    { title: 'Installation of Web & DB Server', desc: 'managed' },
    { title: 'ICMP Monitoring', desc: 'managed' },
    { title: 'Backup Configuration & Restoration', desc: 'managed' },
    { title: 'Malware Scanning', desc: 'managed' },
    { title: 'Data Migration', desc: 'managed' },
    { title: 'Full Root / Admin Access', desc: 'both' },
    { title: '24×7 Priority Support', desc: 'managed' }
  ],

  ctaBand1: {
    title: 'Need dedicated performance without shared limits?',
    description: 'Talk to our bare metal experts and get a server configured to your exact workload, compliance, and performance requirements.',
    ctaPrimary: { text: 'Talk to Our Bare Metal Experts', link: '/contact' },
    ctaSecondary: { text: 'Call +91 98109 58857', link: 'tel:+919810958857' }
  },

  whyLabel: 'WHY CHOOSE ICSDC',
  whyTitle: 'Why Choose ICSDC Bare Metal Servers?',
  whySubtitle: 'Built for the most demanding workloads, ICSDC Bare Metal delivers consistent performance, strong security, and complete control.',
  whyCards: [
    { title: 'Reliable Infrastructure for Critical Workloads', desc: 'Our bare metal servers are built to support always-on applications, delivering stability and consistency for business-critical operations.' },
    { title: 'High Uptime Commitment', desc: 'Designed to minimize downtime, our platform ensures your services remain accessible and performant even under demanding conditions.' },
    { title: 'Strong Security by Design', desc: 'Physical isolation and hardened configurations help protect your workloads from threats, supporting data safety and compliance requirements.' },
    { title: '24×7 Expert Technical Support', desc: 'Our experienced engineers are available round the clock to assist with setup, optimization, and issue resolution whenever you need help.' },
    { title: 'High-Performance Storage Capabilities', desc: 'Optimized storage options ensure fast data access and smooth performance for applications, databases, and intensive workloads.' },
    { title: 'Complete Administrative Control', desc: 'Full root access allows you to customize your environment, install preferred software, and fine-tune performance based on your needs.' },
    { title: 'Quick Deployment', desc: 'Get your server up and running quickly, reducing setup delays and helping you move from planning to production faster.' }
  ],

  whoLabel: "WHO IT'S FOR",
  whoTitle: 'Who Should Choose ICSDC Bare Metal Servers?',
  whoSubtitle: 'From enterprises to developers, anyone who needs dedicated physical infrastructure and maximum control.',
  whoCards: [
    { title: 'Enterprises Running Mission-Critical Applications', desc: 'Organizations that require consistent performance, high availability, and full hardware control for core business systems.' },
    { title: 'SaaS & Product-Based Companies', desc: 'Teams building performance-intensive platforms that need predictable resources, stable environments, and scalable infrastructure.' },
    { title: 'Fintech & Regulated Businesses', desc: 'Companies handling sensitive data or operating under compliance requirements where physical isolation and security are essential.' },
    { title: 'High-Traffic Websites & Digital Platforms', desc: 'Businesses managing large volumes of users, transactions, or content that demand steady throughput and low latency.' },
    { title: 'Data-Intensive Workloads', desc: 'Teams working with large databases, analytics, or processing pipelines that benefit from dedicated compute and storage.' },
    { title: 'AI, ML & Compute-Heavy Projects', desc: 'Organizations running training models, simulations, or parallel processing workloads that need direct hardware access.' },
    { title: 'Gaming & Real-Time Applications', desc: 'Platforms require fast response times and uninterrupted performance for multiplayer, streaming, or real-time interactions.' },
    { title: 'Agencies & IT Service Providers', desc: 'Teams managing infrastructure for multiple clients who need dedicated resources, customization, and full administrative control.' }
  ],

  testimonialTitle: 'What Our Bare Metal Clients Say',
  testimonials: [
    {
      name: 'Rohit Mehra',
      role: 'CTO',
      company: 'Fintech Services Company',
      quote: 'We moved our core transaction engine to ICSDC Bare Metal Servers to eliminate performance inconsistency. The difference was immediate, predictable latency and complete control over our environment, which is critical for our operations.'
    },
    {
      name: 'Ananya Kulkarni',
      role: 'Head of Engineering',
      company: 'SaaS Product Company',
      quote: 'Our SaaS platform handles high concurrent workloads, and shared infrastructure is becoming a bottleneck. ICSDC Bare Metal gave us the stability and scalability we needed without compromising on security.'
    },
    {
      name: 'Vikram Singh',
      role: 'IT Director',
      company: 'Financial Consulting Firm',
      quote: 'Compliance and data isolation were non-negotiable for us. ICSDC Bare Metal Servers provided the physical separation and reliability required to meet regulatory expectations while maintaining performance.'
    },
    {
      name: 'Neha Sharma',
      role: 'Lead Data Engineer',
      company: 'Analytics Solutions Provider',
      quote: 'We run data-heavy analytics workloads that demand consistent throughput. Since switching to ICSDC Bare Metal, our processing times have reduced significantly and system reliability has improved.'
    },
    {
      name: 'Amit Verma',
      role: 'Infrastructure Manager',
      company: 'Enterprise Technology Services Firm',
      quote: 'Our legacy applications were not designed for virtualized environments. ICSDC Bare Metal allowed us to modernize our infrastructure without re-architecting critical systems.'
    }
  ],

  faqTitle: 'FAQs About ICSDC Bare Metal Servers',
  faqContactTitle: 'Talk to Our Bare Metal Experts',
  faqContactDesc: 'Our bare metal specialists are available to help you choose the right configuration, discuss compliance requirements, and get your infrastructure deployed quickly.\n\n📞 +91 98109 58857',
  faq: [
    { question: 'What is a bare metal server?', answer: 'A bare metal server is a dedicated physical server allocated to a single customer, offering full access to hardware resources without any virtualization layer.' },
    { question: 'How is a bare metal server different from a VPS or cloud server?', answer: 'Bare metal servers provide exclusive hardware access and consistent performance, whereas VPS and cloud servers share resources across multiple users.' },
    { question: 'Who should choose bare metal servers over virtual servers?', answer: 'Businesses with performance-critical, compliance-driven, or hardware-dependent workloads benefit most from bare metal infrastructure.' },
    { question: 'Do I get full administrative control with ICSDC Bare Metal Servers?', answer: 'Yes, you receive full root or administrator access, allowing complete control over the operating system and server configuration.' },
    { question: 'How secure are bare metal servers?', answer: 'Bare metal servers offer enhanced security through physical isolation, reducing risks associated with shared environments.' },
    { question: 'Can I run custom or legacy applications on bare metal servers?', answer: 'Yes, bare metal servers are ideal for custom, legacy, or specialized applications that require direct hardware access.' },
    { question: 'How quickly can my bare metal server be deployed?', answer: 'Servers are typically provisioned quickly after order confirmation, enabling fast deployment of your workloads.' },
    { question: 'Does ICSDC provide support for bare metal servers?', answer: 'Yes, ICSDC offers round-the-clock technical support to assist with setup, troubleshooting, and ongoing server management.' }
  ],

  ctaBand2: {
    title: 'Ready to deploy uncompromised infrastructure?',
    description: 'Single-tenant bare metal servers with full hardware control, zero virtualization, and 99.9% uptime. Built for businesses that demand the best.',
    ctaPrimary: { text: 'Get Started with Bare Metal', link: '#bms-configs' },
    ctaSecondary: { text: 'Talk to an Expert', link: '/contact' }
  }
};
