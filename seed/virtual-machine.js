// seed/virtual-machine.js
// Field name rules (CLAUDE.md):
//   ds.icon-card → { title, desc }   (NOT description)
//   ds.cta-link  → { text, link }
//   ds.cta-band  → { title, description, ctaPrimary, ctaSecondary }

module.exports = {
  seo: {
    metaTitle: 'ICSDC Virtual Machines | Flexible, Isolated Cloud Compute',
    metaDescription: 'Run isolated virtual machines with dedicated vCPU, RAM, and NVMe SSD storage. Custom OS, instant provisioning, scalable resources, and 24/7 expert support from ICSDC.',
  },

  heroEyebrow: '◈ Virtual Machines',
  heroTitle: 'Virtual Machines Designed for Continuous Work, Not Just Compute',
  heroSubtitle: 'Complete Control Over Resources, Configuration, and Runtime',
  heroDescription: 'Run isolated virtual environments with predictable resources, flexible configurations, and the freedom to deploy exactly what your applications require. Whether you\'re testing, scaling, or running production workloads, these virtual machines are built to fit into your workflow without friction.',
  heroTopBadge: '◈ ICSDC Virtual Machines',
  heroStatusTitle: '99.9% Uptime',
  heroStatusSubtitle: 'Instant Provisioning',
  heroCtaPrimary: { text: 'Launch Your Virtual Machine', link: '#vm-plans' },
  heroCtaSecondary: { text: 'View VM Plans', link: '#vm-plans' },

  pillars: [
    { title: 'Isolated Compute Environments', desc: 'Run workloads independently for stable and secure operations.' },
    { title: 'Flexible Resource Allocation', desc: 'Scale CPU, memory, and storage as your needs change.' },
    { title: 'Custom OS & Software Stack', desc: 'Choose your operating system and deploy your tools freely.' },
    { title: 'Fast Deployment & Recovery', desc: 'Launch, clone, or restore virtual machines in minutes.' },
  ],

  plansLabel: 'VM PLANS',
  plansTitle: 'Choose Your Virtual Machine Plan',
  plansSubtitle: 'Designed to give you the right balance of CPU power, memory, storage, and bandwidth — with flexible billing options including pay-as-you-go or prepaid plans.',
  // ds.icon-card: title = plan name, desc = spec string parsed by JS
  vmPlans: [
    { title: 'Standard 1',        desc: '1 Core · 2 GB RAM · 25 GB NVMe · 1 TB Transfer' },
    { title: 'Standard 2',        desc: '2 Cores · 4 GB RAM · 60 GB NVMe · 2 TB Transfer' },
    { title: 'Standard 3',        desc: '4 Cores · 8 GB RAM · 160 GB NVMe · 4 TB Transfer' },
    { title: 'Standard 4',        desc: '8 Cores · 16 GB RAM · 320 GB NVMe · 6 TB Transfer' },
    { title: 'CPU Optimized 1',   desc: '2 Cores · 2 GB RAM · 25 GB NVMe · 4 TB Transfer' },
    { title: 'CPU Optimized 2',   desc: '4 Cores · 4 GB RAM · 60 GB NVMe · 5 TB Transfer' },
    { title: 'CPU Optimized 3',   desc: '8 Cores · 8 GB RAM · 100 GB NVMe · 6 TB Transfer' },
    { title: 'Memory Optimized 1', desc: '2 Cores · 8 GB RAM · 50 GB NVMe · 4 TB Transfer' },
    { title: 'Memory Optimized 2', desc: '4 Cores · 16 GB RAM · 100 GB NVMe · 6 TB Transfer' },
  ],

  featuresLabel: 'FEATURES',
  featuresTitle: 'Everything Your Virtual Machine Needs to Perform',
  featuresSubtitle: 'Built with the right combination of isolation, performance, and flexibility to support any workload, team, or environment.',
  features: [
    { title: 'Dedicated Virtual Resources', desc: 'Each virtual machine is allocated its own CPU, RAM, and storage, ensuring predictable performance and avoiding resource contention.' },
    { title: 'Full OS-Level Control', desc: 'You get complete administrative access to install, configure, and manage the operating system and software stack as required.' },
    { title: 'Instant VM Provisioning', desc: 'Virtual machines are deployed quickly, allowing teams to start working without delays or complex setup processes.' },
    { title: 'Scalable Compute Capacity', desc: 'Easily scale resources up or down as workload requirements change, without needing to rebuild or migrate environments.' },
    { title: 'Snapshot & Image Management', desc: 'Create snapshots to capture system states, enabling quick recovery, cloning, or environment replication.' },
    { title: 'Secure Network Isolation', desc: 'Run your workloads in isolated virtual networks, improving security and reducing exposure to external threats.' },
    { title: 'High-Availability Infrastructure', desc: 'Built on reliable and redundant infrastructure to minimize downtime and maintain business continuity.' },
    { title: 'Custom Application Environments', desc: 'Support multiple environments such as development, testing, staging, and production with consistent configurations.' },
    { title: 'Centralized VM Management', desc: 'Manage all virtual machines from a unified control panel, simplifying monitoring and administration.' },
    { title: 'Backup & Recovery Support', desc: 'Safeguard your data with structured backup options and fast recovery to handle accidental loss or failures.' },
    { title: 'Multi-Use Workload Support', desc: 'Suitable for a wide range of use cases including websites, databases, internal tools, and enterprise applications.' },
    { title: '24/7 Expert Assistance', desc: 'Get round-the-clock access to ICSDC\'s technical team for troubleshooting, optimization, and ongoing support.' },
  ],

  ctaBand1: {
    title: 'Get Started — Select Your Configuration',
    description: 'Choose a VM plan that matches your workload, scale as needed, and get full OS control from day one.',
    ctaPrimary: { text: 'Launch Your Virtual Machine', link: '#vm-plans' },
    ctaSecondary: { text: 'Call +91 98109 58857', link: 'tel:+919810958857' },
  },

  whyLabel: 'WHY ICSDC',
  whyTitle: 'Why Choose ICSDC Virtual Machines?',
  whySubtitle: 'Enterprise-grade infrastructure, expert support, and transparent pricing — built for businesses that demand reliability.',
  whyCards: [
    { title: '24/7 Expert Support', desc: 'Our experienced technical team is available around the clock to help with setup, configuration, migrations, and issue resolution.' },
    { title: '99.9% Uptime Commitment', desc: 'Powered by enterprise-grade SSD infrastructure, our VM platform is engineered to keep your applications online at all times.' },
    { title: 'Best Value Without Compromise', desc: 'Get enterprise-level performance, security, and reliability at competitive pricing designed to scale with your business.' },
    { title: 'Strategically Located Data Centers', desc: 'Our data centers in Germany, USA, UK, Russia, and India are optimized for speed, stability, and low latency.' },
  ],

  blockStorageTitle: 'Expand Your Virtual Machine Capabilities',
  blockStorageSubtitle: 'Add dependable block storage to your virtual machines and keep your data available, movable, and scalable as your workloads evolve.',
  blockStorageDescription: 'Enhance your virtual machine capacity with high-performance cloud block storage built for flexibility. Allocate only the storage you need, attach or detach volumes effortlessly across prepaid or pay-as-you-go VMs, and resize anytime as application demands increase — all without disrupting operations.',

  useCasesLabel: 'USE CASES',
  useCasesTitle: 'Real-World Applications for ICSDC Virtual Machines',
  useCasesSubtitle: 'From development to enterprise production — virtual machines adapt to every workload and team size.',
  useCases: [
    { title: 'Software Developers & Engineering Teams', desc: 'Use virtual machines for development, testing, staging, and CI/CD pipelines. Maintain consistent environments across teams without impacting production systems.' },
    { title: 'Startups & SaaS Businesses', desc: 'Deploy applications quickly, scale resources as users grow, and control infrastructure costs while maintaining performance and uptime.' },
    { title: 'E-Commerce & Online Platforms', desc: 'Host websites, payment systems, and databases on isolated VMs to ensure stability during high traffic and sales events.' },
    { title: 'Enterprises & IT Departments', desc: 'Run internal tools, legacy applications, ERP systems, and business-critical workloads in secure, controlled virtual environments.' },
    { title: 'Data & Analytics Teams', desc: 'Process datasets, run analytics workloads, and manage databases with dedicated compute and storage resources.' },
    { title: 'Agencies & Managed Service Providers', desc: 'Host multiple client projects, manage separate environments, and deliver reliable services with full administrative control.' },
    { title: 'Education & Training Institutes', desc: 'Create virtual labs, sandbox environments, and training systems without investing in physical hardware.' },
    { title: 'Remote Teams & Businesses', desc: 'Support collaboration tools, internal apps, and secure access systems with centralized virtual infrastructure.' },
  ],

  whenLabel: 'DECISION GUIDE',
  whenTitle: 'When to Choose ICSDC Virtual Machines',
  whenSubtitle: 'Understand the scenarios where a virtual machine is the right infrastructure choice for your workload.',
  whenCards: [
    { title: 'You Need Custom Control', desc: 'When your application requires a specific operating system, software stack, or configuration that shared environments can\'t support.' },
    { title: 'Your Workloads Are Growing or Changing', desc: 'When traffic, usage, or processing demands fluctuate and you need the ability to scale resources without rebuilding infrastructure.' },
    { title: 'Stability and Isolation Matter', desc: 'When your applications must run independently without being affected by other workloads or users.' },
    { title: 'You Want Faster Deployment', desc: 'When you need to launch environments quickly for development, testing, or production without hardware delays.' },
    { title: "You're Migrating From Shared or On-Premise Systems", desc: 'When moving applications from shared hosting or physical servers to a more flexible, cloud-based setup.' },
    { title: 'Cost Predictability Is Important', desc: 'When you want enterprise-grade infrastructure with controlled, transparent pricing.' },
    { title: 'You Require Secure, Dedicated Environments', desc: 'When handling business data, customer applications, or internal systems that demand isolated and secure infrastructure.' },
  ],

  testimonialTitle: 'What Our Virtual Machine Clients Say',
  testimonials: [
    { name: 'Rohit Mehra', role: 'Lead Software Engineer', company: 'SaaS Product Company', quote: 'We moved from shared hosting to ICSDC Virtual Machines when our application traffic became unpredictable. The stability and control instantly solved our downtime issues, and scaling resources has been seamless.' },
    { name: 'Ananya Kapoor', role: 'Product Manager', company: 'Technology Startup', quote: 'Our development team needed isolated environments for testing and staging. ICSDC VMs gave us full OS control without the overhead of managing physical servers.' },
    { name: 'Sahil Verma', role: 'Technical Director', company: 'Digital Services Agency', quote: 'We manage multiple client environments and needed dedicated, isolated resources for each. ICSDC Virtual Machines made it easy to separate projects and maintain consistent performance.' },
    { name: 'Meera Pillai', role: 'Data Engineer', company: 'Analytics Firm', quote: 'Processing large datasets used to cause shared hosting timeouts. With ICSDC VMs, we have dedicated compute that handles our analytics workloads reliably.' },
  ],

  faqTitle: 'FAQs About ICSDC Virtual Machines',
  faqContactTitle: 'Talk to Our Virtual Machine Team',
  faqContactDesc: 'Our VM specialists are available to help you choose the right plan, configure your environment, and get your applications running.\n\n📞 +91 98109 58857',
  faq: [
    { question: 'What is a virtual machine?', answer: 'A virtual machine is an isolated software-based computing environment that runs on physical hardware, providing dedicated virtual CPU, RAM, and storage resources.' },
    { question: 'How is a virtual machine different from shared hosting?', answer: 'Virtual machines provide dedicated resources and full OS-level control, while shared hosting distributes resources among many users on the same server.' },
    { question: 'Can I choose my own operating system?', answer: 'Yes. ICSDC Virtual Machines support multiple Linux and Windows operating systems, giving you full control over your software environment.' },
    { question: 'How quickly can I get my virtual machine up and running?', answer: 'Virtual machines are provisioned quickly, allowing you to start deploying applications without lengthy setup delays.' },
    { question: 'Can I scale resources on my virtual machine?', answer: 'Yes. You can upgrade CPU, RAM, and storage as your workload requirements grow, without migrating to a new environment.' },
    { question: 'Is my virtual machine isolated from other users?', answer: 'Yes. Each VM operates in an isolated environment with dedicated resources, ensuring your workloads are not affected by other users.' },
    { question: 'Do you offer support for virtual machine setup and management?', answer: 'Yes. ICSDC provides 24/7 technical support for setup, configuration, troubleshooting, and ongoing management.' },
    { question: 'Can I use virtual machines for development and testing?', answer: 'Absolutely. VMs are ideal for creating isolated development, testing, and staging environments that mirror production without risk.' },
  ],

  ctaBand2: {
    title: 'Launch Your First Virtual Machine Today',
    description: 'Flexible, isolated VMs with dedicated resources, custom OS, and 24/7 expert support. Deploy in minutes.',
    ctaPrimary: { text: 'Launch Your Virtual Machine', link: '#vm-plans' },
    ctaSecondary: { text: 'Talk to an Expert', link: '/contact' },
  },
};
