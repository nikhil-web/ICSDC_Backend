/**
 * Seed data — Linux Cloud Hosting Page
 * Schema: api::linux-cloud-hosting-page.linux-cloud-hosting-page
 *
 * Component field reference:
 *   ds.seo-meta         → { metaTitle, metaDescription }
 *   ds.cta-link         → { text, link }
 *   ds.icon-card        → { icon, title, desc, order }          ← "desc" not "description"
 *   ds.cloud-plan       → { order, name, price, priceNote, isPopular, vcpu, ram, storage, bandwidth, features(json) }
 *   ds.cta-band         → { title, description, ctaPrimary:{text,link}, ctaSecondary:{text,link} }
 *   shared.tech-badge   → { icon, name, order }                 ← icon is REQUIRED
 *   ds.testimonial-card → { name, title, company, quote, rating }
 *   ds.faq-entry        → { question, answer, order }
 */

module.exports = {
  seo: {
    metaTitle: 'Linux Cloud Hosting India | High-Performance Cloud Servers | ICSDC',
    metaDescription:
      'Scalable Linux cloud hosting with dedicated vCPU, RAM, and NVMe SSD. Deploy Node.js, Python, PHP, and more. Starting at ₹399/mo.',
  },

  heroEyebrow: '🐧 Linux Cloud Hosting',
  heroTitle:       'Scalable Linux Cloud Servers for Modern Applications',
  heroSubtitle:    'Starting at ₹399/month',
  heroDescription: 'Deploy your applications on high-performance Linux cloud servers with dedicated vCPU, NVMe SSD storage, and 99.9% uptime guarantee.',
  heroTopBadge:       'Linux Optimized',
  heroStatusTitle:    '99.9% Uptime',
  heroStatusSubtitle: 'SLA Guaranteed',

  heroCtaPrimary:   { text: 'Deploy Now',  link: '/contact' },
  heroCtaSecondary: { text: 'View Plans',  link: '#plans'   },

  pillars: [
    { icon: 'cpu',   title: 'Dedicated vCPU',  desc: 'No shared resources — guaranteed compute power for your workloads',   order: 0 },
    { icon: 'nvme',  title: 'NVMe SSD',         desc: 'Ultra-fast NVMe storage for superior I/O performance',               order: 1 },
    { icon: 'scale', title: 'Instant Scaling',  desc: 'Scale CPU, RAM, and storage up or down in minutes',                  order: 2 },
    { icon: 'linux', title: 'Any Linux Distro', desc: 'Ubuntu, CentOS, Debian, Fedora — choose your preferred OS',          order: 3 },
  ],

  plansLabel:    'CLOUD PLANS',
  plansTitle:    'Linux Cloud Hosting Plans',
  plansSubtitle: 'All plans include dedicated resources, free snapshots, and 24/7 expert support.',

  plans: [
    {
      order:     0,
      name:      'Cloud Starter',
      price:     '399',
      priceNote: '/mo',
      isPopular: false,
      vcpu:      '1 vCPU',
      ram:       '1 GB RAM',
      storage:   '20 GB NVMe SSD',
      bandwidth: '1 TB',
      features:  ['Free SSL', 'Root Access', '99.9% Uptime SLA', '24/7 Support'],
    },
    {
      order:     1,
      name:      'Cloud Pro',
      price:     '999',
      priceNote: '/mo',
      isPopular: true,
      vcpu:      '2 vCPU',
      ram:       '4 GB RAM',
      storage:   '80 GB NVMe SSD',
      bandwidth: '3 TB',
      features:  ['Free SSL', 'Root Access', 'Free Snapshots', 'DDoS Protection', 'Priority Support'],
    },
    {
      order:     2,
      name:      'Cloud Business',
      price:     '2499',
      priceNote: '/mo',
      isPopular: false,
      vcpu:      '4 vCPU',
      ram:       '8 GB RAM',
      storage:   '160 GB NVMe SSD',
      bandwidth: '5 TB',
      features:  ['Free SSL', 'Root Access', 'Free Snapshots', 'DDoS Protection', 'Private Networking', 'Dedicated Account Manager'],
    },
  ],

  powerLabel:    'POWER FEATURES',
  powerTitle:    'Cloud Infrastructure Built for Performance',
  powerSubtitle: 'Every Linux cloud server comes with enterprise-grade features included.',

  powerFeatures: [
    { icon: 'snapshot', title: 'Free Snapshots',      desc: 'Take full server snapshots before major changes — restore in seconds.',                   order: 0 },
    { icon: 'ddos',     title: 'DDoS Protection',     desc: 'Network-level DDoS mitigation protecting your cloud server 24/7.',                        order: 1 },
    { icon: 'network',  title: 'Private Networking',  desc: 'Secure internal networking between your cloud servers at no extra cost.',                  order: 2 },
    { icon: 'firewall', title: 'Cloud Firewall',       desc: 'Configure inbound/outbound rules via web console or API.',                               order: 3 },
    { icon: 'api',      title: 'Full API Access',      desc: 'Automate server provisioning, scaling, and management via REST API.',                    order: 4 },
    { icon: 'monitor',  title: 'Real-time Monitoring', desc: 'CPU, RAM, disk, and network metrics with customizable alerts.',                          order: 5 },
  ],

  ctaBand1: {
    title:       'Deploy Your Linux Cloud Server in Under 60 Seconds',
    description: 'Choose your distro, select your plan, and your server is ready to go.',
    ctaPrimary:   { text: 'Deploy Now',        link: '/contact' },
    ctaSecondary: { text: 'Talk to an Expert', link: '/contact' },
  },

  frameworksLabel:    'FRAMEWORKS & RUNTIMES',
  frameworksTitle:    'Deploy Any Technology Stack',
  frameworksSubtitle: 'Our Linux cloud servers run everything from classic LAMP stacks to modern containerized applications.',

  // shared.tech-badge: icon (REQUIRED) + name + order
  frameworks: [
    { icon: 'nodejs',    name: 'Node.js',       order: 0  },
    { icon: 'python',    name: 'Python',        order: 1  },
    { icon: 'php',       name: 'PHP',           order: 2  },
    { icon: 'ruby',      name: 'Ruby on Rails', order: 3  },
    { icon: 'java',      name: 'Java',          order: 4  },
    { icon: 'go',        name: 'Go',            order: 5  },
    { icon: 'docker',    name: 'Docker',        order: 6  },
    { icon: 'nginx',     name: 'Nginx',         order: 7  },
    { icon: 'mysql',     name: 'MySQL',         order: 8  },
    { icon: 'postgres',  name: 'PostgreSQL',    order: 9  },
    { icon: 'redis',     name: 'Redis',         order: 10 },
    { icon: 'mongodb',   name: 'MongoDB',       order: 11 },
  ],

  whyLinuxLabel:    'WHY LINUX CLOUD',
  whyLinuxTitle:    "Why Linux Cloud Hosting is the Developer's Choice",
  whyLinuxSubtitle: 'Linux powers over 96% of the world\'s top servers — for good reason.',

  whyLinuxCards: [
    { icon: 'open-source', title: 'Open Source Freedom',    desc: 'No licensing fees. Full control over your server environment and software stack.',    order: 0 },
    { icon: 'stable',      title: 'Rock-Solid Stability',   desc: 'Linux servers run for years without reboots — enterprise-grade reliability.',         order: 1 },
    { icon: 'secure',      title: 'Superior Security',      desc: 'Robust permission system, SELinux, and active security community patches.',           order: 2 },
    { icon: 'performance', title: 'Unmatched Performance',  desc: 'Efficient resource usage means more server power goes to your application.',          order: 3 },
  ],

  useCasesLabel:    'USE CASES',
  useCasesTitle:    'What Will You Build?',
  useCasesSubtitle: 'Linux cloud servers are the foundation for virtually every modern application.',

  useCases: [
    { icon: 'web',      title: 'Web Applications', desc: 'Host high-traffic web apps with Node.js, Django, Laravel, or any framework.',       order: 0 },
    { icon: 'store',    title: 'E-Commerce',        desc: 'WooCommerce, Magento, and custom storefronts with auto-scaling capability.',        order: 1 },
    { icon: 'api',      title: 'API Backends',      desc: 'RESTful and GraphQL APIs with dedicated resources and private networking.',         order: 2 },
    { icon: 'database', title: 'Database Servers',  desc: 'Run MySQL, PostgreSQL, MongoDB, or Redis with dedicated NVMe storage.',            order: 3 },
  ],

  workloadsLabel:    'WORKLOAD SPECS',
  workloadsTitle:    'Configured for Real-World Workloads',
  workloadsSubtitle: 'Every server is configured with workload-optimized settings out of the box.',

  workloadFeatures: [
    { icon: 'sysctl',  title: 'Optimized Kernel Params', desc: 'Production-ready sysctl settings for network and memory performance.',   order: 0 },
    { icon: 'swap',    title: 'Swap Configuration',       desc: 'Pre-configured swap space prevents OOM kills during traffic spikes.',   order: 1 },
    { icon: 'tcp',     title: 'TCP Tuning',                desc: 'BBR congestion control and optimized TCP stack for low-latency networking.', order: 2 },
    { icon: 'io',      title: 'I/O Scheduler',             desc: 'NVMe-optimized I/O scheduler for maximum disk throughput.',            order: 3 },
  ],

  testimonialTitle: 'Trusted by Developers Across India',

  testimonials: [
    { name: 'Rahul Nair',    title: 'Lead Developer',    company: 'CloudApps India', quote: 'Deployed our Node.js microservices on ICSDC Linux Cloud. Performance is rock-solid even at peak loads.', rating: 5 },
    { name: 'Deepika Joshi', title: 'DevOps Engineer',   company: 'TechStack Co.',   quote: 'The API access and snapshot features are exactly what we needed for our CI/CD pipeline.', rating: 5 },
    { name: 'Karan Mehta',   title: 'CTO',               company: 'StartupBase',     quote: 'Migrated from a major cloud provider and cut infrastructure costs by 40% without any performance loss.', rating: 5 },
  ],

  faqTitle:        'Frequently Asked Questions',
  faqContactTitle: 'Have technical questions?',
  faqContactDesc:  'Our Linux cloud experts are available 24/7 for technical guidance.',

  faq: [
    { question: 'Which Linux distributions are available?',  answer: 'Ubuntu (20.04, 22.04), CentOS (Stream 8/9), Debian (11, 12), AlmaLinux 8/9, and Rocky Linux 8/9. Custom ISOs available on Business plans.', order: 0 },
    { question: 'Do I get root access?',                      answer: 'Yes, all Linux cloud plans include full root access via SSH. You have complete control over your server environment.',                         order: 1 },
    { question: 'Can I upgrade my plan later?',               answer: 'Yes. Upgrade CPU, RAM, and storage instantly from your dashboard. Downgrades are available at the end of your billing cycle.',               order: 2 },
    { question: 'What is included in DDoS Protection?',       answer: 'All plans include network-level DDoS mitigation. Pro and Business plans include Layer 7 protection with up to 10 Gbps mitigation capacity.', order: 3 },
    { question: 'How do snapshots work?',                     answer: 'Snapshots capture the complete server state including OS, apps, and data. Use them to restore your server or create new servers from the same image.', order: 4 },
  ],

  ctaBand2: {
    title:       'Start Building on Linux Cloud Today',
    description: 'High-performance Linux servers deployed in under 60 seconds.',
    ctaPrimary:   { text: 'Deploy Your Server',  link: '/contact' },
    ctaSecondary: { text: 'Talk to an Expert',   link: '/contact' },
  },
};
