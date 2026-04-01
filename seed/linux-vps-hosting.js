/**
 * Seed data — Linux VPS Hosting Page
 * Schema: api::linux-vps-hosting-page.linux-vps-hosting-page
 *
 * Component field reference:
 *   ds.seo-meta         → { metaTitle, metaDescription }
 *   ds.cta-link         → { text, link }
 *   ds.icon-card        → { icon, title, desc, order }          ← "desc" not "description"
 *   ds.vps-plan         → { order, name, price, priceNote, isPopular, vcpu, ram, storage, bandwidth }
 *   ds.cta-band         → { title, description, ctaPrimary:{text,link}, ctaSecondary:{text,link} }
 *   ds.os-option        → { order, icon, name, desc }
 *   ds.control-panel    → { order, icon, name, desc }
 *   ds.testimonial-card → { name, title, company, quote, rating }
 *   ds.faq-entry        → { question, answer, order }
 */

module.exports = {
  seo: {
    metaTitle: 'Linux VPS Hosting India | Managed & Unmanaged VPS | ICSDC',
    metaDescription:
      'Linux VPS hosting with dedicated resources starting at ₹399/mo. Choose Ubuntu, CentOS, or Debian. cPanel, Plesk, or DirectAdmin available.',
  },

  heroEyebrow: '🖥 Linux VPS Hosting',
  heroTitle:       'Powerful Linux VPS Hosting with Full Root Access',
  heroSubtitle:    'Starting at ₹399/month',
  heroDescription: 'Get dedicated virtual server resources with your choice of Linux distribution and control panel. Perfect for developers, agencies, and growing businesses.',
  heroTopBadge:       'Linux VPS',
  heroStatusTitle:    '99.9% Uptime',
  heroStatusSubtitle: 'SLA Guaranteed',

  heroCtaPrimary:   { text: 'Get Started', link: '/contact' },
  heroCtaSecondary: { text: 'View Plans',  link: '#plans'   },

  pillars: [
    { icon: 'cpu',  title: 'Dedicated vCPU', desc: 'Guaranteed CPU resources — no noisy neighbor problems',             order: 0 },
    { icon: 'ram',  title: 'Dedicated RAM',  desc: 'Fixed RAM allocation that is always available for your apps',       order: 1 },
    { icon: 'nvme', title: 'NVMe SSD',        desc: 'Ultra-fast NVMe storage for superior database and file I/O',       order: 2 },
    { icon: 'root', title: 'Full Root Access', desc: 'Complete control over your server environment via SSH',           order: 3 },
  ],

  plansLabel:    'VPS PLANS',
  plansTitle:    'Linux VPS Hosting Plans',
  plansSubtitle: 'All VPS plans include dedicated resources, free SSL, and root SSH access.',

  plans: [
    { order: 0, name: 'VPS Starter',      price: '399',  priceNote: '/mo', isPopular: false, vcpu: '1 vCPU', ram: '2 GB RAM',  storage: '40 GB NVMe SSD',  bandwidth: '2 TB'  },
    { order: 1, name: 'VPS Professional', price: '799',  priceNote: '/mo', isPopular: true,  vcpu: '2 vCPU', ram: '4 GB RAM',  storage: '80 GB NVMe SSD',  bandwidth: '3 TB'  },
    { order: 2, name: 'VPS Business',     price: '1599', priceNote: '/mo', isPopular: false, vcpu: '4 vCPU', ram: '8 GB RAM',  storage: '160 GB NVMe SSD', bandwidth: '5 TB'  },
    { order: 3, name: 'VPS Enterprise',   price: '2999', priceNote: '/mo', isPopular: false, vcpu: '8 vCPU', ram: '16 GB RAM', storage: '320 GB NVMe SSD', bandwidth: '10 TB' },
  ],

  powerLabel:    'POWER FEATURES',
  powerTitle:    'VPS Features Built for Production',
  powerSubtitle: 'Every Linux VPS comes with enterprise features that used to cost extra.',

  powerFeatures: [
    { icon: 'root',     title: 'Full Root Access',      desc: 'Complete SSH root access — install any software, configure anything.',                order: 0 },
    { icon: 'snapshot', title: 'Free Snapshots',        desc: 'Create server snapshots before major changes for instant rollback.',                  order: 1 },
    { icon: 'ddos',     title: 'DDoS Protection',       desc: 'Network-level DDoS mitigation included with all VPS plans.',                         order: 2 },
    { icon: 'firewall', title: 'Firewall Management',   desc: 'Configure iptables or use our web-based firewall manager.',                          order: 3 },
    { icon: 'monitor',  title: 'Resource Monitoring',   desc: 'Real-time CPU, RAM, and disk usage graphs with email alerts.',                       order: 4 },
    { icon: 'reboot',   title: 'Instant Reboot',        desc: 'Reboot your VPS from the dashboard or via API in seconds.',                         order: 5 },
  ],

  ctaBand1: {
    title:       'Get Your Linux VPS Running in 60 Seconds',
    description: 'Choose your OS, select your plan, and access your VPS via SSH immediately.',
    ctaPrimary:   { text: 'Deploy VPS Now',    link: '/contact' },
    ctaSecondary: { text: 'Talk to an Expert', link: '/contact' },
  },

  osOptionsLabel:    'OPERATING SYSTEMS',
  osOptionsTitle:    'Choose Your Linux Distribution',
  osOptionsSubtitle: 'Deploy with any major Linux distribution — all optimized for VPS environments.',

  osOptions: [
    { order: 0, icon: 'ubuntu',     name: 'Ubuntu',      desc: '20.04 LTS / 22.04 LTS — most popular for developers and web apps'           },
    { order: 1, icon: 'centos',     name: 'CentOS',      desc: 'Stream 8 / Stream 9 — enterprise-grade stability for production servers'     },
    { order: 2, icon: 'debian',     name: 'Debian',      desc: 'Debian 11 / 12 — ultra-stable and minimal for efficient resource usage'      },
    { order: 3, icon: 'almalinux', name: 'AlmaLinux',   desc: 'AlmaLinux 8/9 — RHEL-compatible, perfect CentOS replacement'                 },
    { order: 4, icon: 'rocky',      name: 'Rocky Linux', desc: 'Rocky Linux 8/9 — enterprise-class, community-driven RHEL alternative'       },
    { order: 5, icon: 'fedora',     name: 'Fedora',      desc: 'Fedora 38/39 — cutting-edge Linux for developers who want the latest'        },
  ],

  controlPanelLabel:    'CONTROL PANELS',
  controlPanelTitle:    'Your Choice of Control Panel',
  controlPanelSubtitle: 'Add a web-based control panel for easy server and website management.',

  controlPanels: [
    { order: 0, icon: 'cpanel',      name: 'cPanel',       desc: 'Industry-standard control panel for web hosting management'          },
    { order: 1, icon: 'plesk',       name: 'Plesk',        desc: 'Windows & Linux compatible panel with a modern interface'            },
    { order: 2, icon: 'directadmin', name: 'DirectAdmin',  desc: 'Lightweight and fast — great for resource-efficient hosting'         },
    { order: 3, icon: 'webmin',      name: 'Webmin',       desc: 'Free open-source web UI for Linux server administration'             },
  ],

  whyVpsLabel:    'WHY VPS HOSTING',
  whyVpsTitle:    'Why Upgrade to a VPS?',
  whyVpsSubtitle: 'VPS hosting gives you dedicated resources without the cost of a full dedicated server.',

  whyVpsCards: [
    { icon: 'isolation',   title: 'Complete Isolation',     desc: 'Your VPS is isolated from other users — no resource contention.',                         order: 0 },
    { icon: 'performance', title: 'Consistent Performance', desc: 'Guaranteed CPU and RAM — your app performs the same at 3 AM and 3 PM.',                   order: 1 },
    { icon: 'control',     title: 'Full Control',           desc: 'Root access means you control every aspect of your server environment.',                   order: 2 },
    { icon: 'cost',        title: 'Cost Effective',         desc: 'Dedicated server power at a fraction of bare-metal server pricing.',                       order: 3 },
  ],

  useCasesLabel:    'USE CASES',
  useCasesTitle:    'What Can You Do with a Linux VPS?',
  useCasesSubtitle: 'From web hosting to development environments — VPS adapts to your needs.',

  useCases: [
    { icon: 'web',  title: 'Web & App Hosting',        desc: 'Host multiple websites and web applications on a single VPS.',                          order: 0 },
    { icon: 'game', title: 'Game Servers',              desc: 'Low-latency VPS perfect for Minecraft, CS:GO, and other game servers.',                 order: 1 },
    { icon: 'dev',  title: 'Development Environments', desc: 'Isolated staging and testing environments for your development team.',                   order: 2 },
    { icon: 'vpn',  title: 'VPN & Proxy Servers',      desc: 'Run your own VPN or reverse proxy for secure, private networking.',                     order: 3 },
  ],

  testimonialTitle: 'What Our VPS Customers Say',

  testimonials: [
    { name: 'Sanjay Kumar', title: 'Web Developer',        company: 'DevForge Studios',  quote: 'Migrated from shared hosting to ICSDC VPS and my sites load 3x faster. Root access makes configuration so much easier.', rating: 5 },
    { name: 'Meera Pillai', title: 'System Administrator', company: 'NetOps India',      quote: 'Running 15 client websites on our VPS Business plan. Stable, fast, and the support team actually knows Linux.', rating: 5 },
    { name: 'Arjun Reddy',  title: 'Game Server Admin',    company: 'GamingHubIndia',   quote: 'Our Minecraft server runs flawlessly on ICSDC VPS. Low latency and instant reboot from the dashboard is a lifesaver.', rating: 5 },
  ],

  faqTitle:        'Frequently Asked Questions',
  faqContactTitle: 'Still have questions?',
  faqContactDesc:  'Our Linux VPS experts are available 24/7 for technical support.',

  faq: [
    { question: 'What is the difference between VPS and Cloud Hosting?',  answer: 'A VPS runs on a fixed physical server with guaranteed dedicated resources. Cloud Hosting runs across multiple servers for easier scaling and higher availability. VPS is more cost-effective for stable workloads; Cloud is better for variable traffic.', order: 0 },
    { question: 'Is root access included?',                                answer: 'Yes, all Linux VPS plans include full root access via SSH. You can install any software and configure the OS completely.',                                                                                                              order: 1 },
    { question: 'Can I install cPanel on my VPS?',                        answer: 'Yes. cPanel, Plesk, DirectAdmin, and Webmin are available as add-ons. Our team installs and configures your preferred control panel at no extra charge.',                                                                              order: 2 },
    { question: 'What happens if I exceed my bandwidth limit?',           answer: 'You are notified at 80% usage. Once exceeded, bandwidth is throttled to 10 Mbps — your server is never suspended. Purchase additional bandwidth or upgrade your plan.',                                                              order: 3 },
    { question: 'Do you offer managed VPS hosting?',                      answer: 'Yes. Our managed VPS service includes OS updates, security patches, performance optimization, and 24/7 proactive monitoring. Contact us for managed VPS pricing.',                                                                     order: 4 },
  ],

  ctaBand2: {
    title:       'Get Your Linux VPS Today',
    description: 'Powerful, isolated VPS resources starting at just ₹399/month.',
    ctaPrimary:   { text: 'Get Linux VPS',     link: '/contact' },
    ctaSecondary: { text: 'Talk to an Expert', link: '/contact' },
  },
};
