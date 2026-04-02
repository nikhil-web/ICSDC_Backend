// seed/vps-cpanel.js
// Field name rules (CLAUDE.md):
//   ds.icon-card    → { title, desc }          (NOT description)
//   ds.cta-link     → { text, link }
//   ds.cta-band     → { title, description, ctaPrimary, ctaSecondary }
//   ds.testimonial-card → { name, role, company, quote }
//   ds.faq-entry    → { question, answer }

module.exports = {
  seo: {
    metaTitle: 'Managed VPS cPanel Hosting for Growing Businesses | ICSDC',
    metaDescription: 'Run your websites on high-performance VPS cPanel Hosting with dedicated resources, strong security, and easy management. Scalable plans, expert support, and reliable uptime by ICSDC.',
  },

  heroTitle: 'VPS cPanel Hosting for Growing Businesses',
  heroSubtitle: 'Advanced VPS Resources Made Simple with cPanel',
  heroDescription: 'Manage your websites with ease using VPS hosting powered by cPanel. Get dedicated resources, enhanced security, and optimized performance without the complexity of server management. Perfect for businesses that need reliability, speed, and control in one solution.',
  heroCtaPrimary: { text: 'Launch Your VPS cPanel Hosting Now', link: '/contact' },
  heroCtaSecondary: { text: 'View Plans', link: '#vpc-plans' },

  pillars: [
    { title: 'Easy Website Management', desc: 'Control domains, emails, databases, and files from a single cPanel dashboard.' },
    { title: 'Dedicated VPS Resources', desc: 'Guaranteed CPU, RAM, and storage for stable performance without shared hosting limits.' },
    { title: 'Enhanced Security & Isolation', desc: 'VPS-level isolation, firewall protection, and SSL support for safer hosting.' },
    { title: 'Scalable Performance on Demand', desc: 'Upgrade resources instantly as your traffic and business grow.' },
  ],

  aboutTitle: 'Who We Are',
  aboutDesc: 'We are a technology-driven hosting partner focused on delivering reliable, high-performance VPS solutions for businesses that need control without complexity. Our VPS cPanel Hosting is built on enterprise-grade infrastructure, backed by experienced engineers who understand performance, security, and scalability at every level. From server optimization to proactive monitoring and support, we simplify hosting so businesses can focus on growth — not backend management.',

  advantagesLabel: 'KEY ADVANTAGES',
  advantagesTitle: 'Key Advantages of ICSDC VPS cPanel Hosting',
  advantages: [
    { title: 'Dedicated Server Resources', desc: 'Guaranteed CPU, RAM, and storage not shared with other users. Stable performance, predictable speed, and better traffic spike handling.' },
    { title: 'Easy-to-Use cPanel Interface', desc: 'Manage domains, emails, files, and databases without technical complexity.' },
    { title: 'Improved Website Performance', desc: 'Faster load times, better user experience, and improved SEO with optimized server environments.' },
    { title: 'Stronger Security & Account Isolation', desc: 'Isolated VPS environment reducing security risks, with built-in security tools and server-level controls.' },
    { title: 'Scalable Resources as You Grow', desc: 'Scale CPU, RAM, or storage without migrating servers as traffic or requirements increase.' },
    { title: 'Full Root Access & Custom Control', desc: 'Complete control over server settings, configurations, and software installations for developers.' },
    { title: 'Host Multiple Websites Efficiently', desc: 'Manage multiple domains from a single server — ideal for agencies, resellers, and multi-site businesses.' },
    { title: 'Higher Uptime & Reliability', desc: 'Enterprise-grade infrastructure with better uptime and stability than shared hosting.' },
    { title: 'Support for Custom Applications', desc: 'Install custom software, frameworks, and tools not possible on shared hosting.' },
    { title: 'Cost-Effective Alternative to Dedicated Servers', desc: 'Near-dedicated server performance and control without the high costs of physical servers.' },
    { title: 'Simplified Account & Resource Management', desc: 'Use cPanel and WHM to easily create and manage accounts while monitoring resource usage in real time.' },
    { title: 'Built for Professional Use Cases', desc: 'Ideal for businesses, developers, and growing websites needing better performance, security, and flexibility.' },
  ],

  whyLabel: 'WHY ICSDC',
  whyTitle: 'Why Choose ICSDC for VPS cPanel Hosting?',
  whyCards: [
    { title: 'Consistent High Performance', desc: 'Optimized infrastructure with fast SSD storage for smooth performance, quick load times, and dependable uptime.' },
    { title: 'cPanel Included for Easy Control', desc: 'Manage websites, domains, emails, and databases with the industry-standard cPanel interface.' },
    { title: 'Flexible Resource Scaling', desc: 'Start with what you need today and scale CPU, RAM, or storage anytime as traffic and workload grow.' },
    { title: 'Free & Seamless Migration', desc: 'Our experts handle website migration safely and efficiently with minimal downtime and zero stress.' },
    { title: 'Transparent & Fair Pricing', desc: 'Simple pricing with no hidden charges, long-term lock-ins, or unexpected renewal shocks.' },
    { title: '24/7 Expert Support', desc: 'Round-the-clock assistance from experienced hosting professionals whenever you need help.' },
    { title: 'Enhanced Security & Isolation', desc: 'Each VPS operates in a secure, isolated environment to protect your data and applications.' },
    { title: 'Built for Growing Businesses', desc: 'Ideal for websites that have outgrown shared hosting and need better speed, control, and reliability.' },
  ],

  cpanelFeaturesTitle: 'What You Can Manage with cPanel',
  cpanelFeaturesDesc: 'cPanel gives you full control over your hosting environment through an intuitive dashboard.',
  cpanelFeaturesList: [
    'Manage websites and domains',
    'AI-powered website builder',
    'Create and manage databases',
    'Email accounts and mail settings',
    'Upload and download files',
    'FTP accounts and more',
  ],

  ctaBand1: {
    title: 'Launch Your VPS cPanel Hosting Now',
    description: 'Whether you\'re upgrading from shared hosting or scaling fast, our VPS cPanel plans offer the right balance of power, control, and value.',
    ctaPrimary: { text: 'Get Started', link: '/contact' },
    ctaSecondary: { text: 'View Plans', link: '#vpc-plans' },
  },

  testimonialTitle: 'What Our Clients Say About VPS cPanel Hosting',
  testimonials: [
    { name: 'Amit Verma', role: 'Technical Lead', company: 'Digital Marketing Agency', quote: 'We moved to VPS cPanel after shared hosting started slowing us down. The performance difference was immediate, and managing everything through cPanel feels effortless. Support has been responsive whenever we needed help.' },
    { name: 'Neha Sharma', role: 'Operations Manager', company: 'Ecommerce Business', quote: 'Our websites handle much higher traffic now without downtime. cPanel made the transition easy even for our non-technical team, and scaling resources has been smooth so far.' },
    { name: 'Rahul Mehta', role: 'Founder', company: 'Web Development Studio', quote: 'We needed more control for hosting multiple client sites, and VPS cPanel fit perfectly. Resource allocation is clear, performance is stable, and overall management is far simpler than expected.' },
    { name: 'Kunal Singh', role: 'Product Manager', company: 'SaaS Startup', quote: 'Security and uptime were our main concerns. Since switching to VPS cPanel Hosting, our applications run reliably, and we finally feel confident about our hosting setup.' },
    { name: 'Pooja Nair', role: 'IT Coordinator', company: 'Consulting Firm', quote: 'The balance of power and ease of use is what stood out for us. cPanel keeps daily tasks simple while the VPS gives us room to grow without changing platforms.' },
  ],

  faqTitle: 'FAQs about VPS cPanel Hosting',
  faq: [
    { question: 'What is VPS cPanel Hosting?', answer: 'VPS cPanel Hosting combines the power of a Virtual Private Server with the simplicity of cPanel, giving you dedicated resources and easy website management in one solution.' },
    { question: 'How is VPS cPanel Hosting different from shared hosting?', answer: 'Unlike shared hosting, VPS cPanel provides dedicated CPU, RAM, and storage, resulting in better performance, stronger security, and more control over your hosting environment.' },
    { question: 'Do I need technical knowledge to use VPS cPanel Hosting?', answer: 'Not necessarily. cPanel makes daily website and server management easy even for non-technical users. Advanced users can still access root-level controls if needed.' },
    { question: 'Can I host multiple websites on one VPS cPanel plan?', answer: 'Yes, you can host and manage multiple websites and domains efficiently from a single VPS using cPanel and WHM.' },
    { question: 'Is VPS cPanel Hosting scalable?', answer: 'Yes, you can easily upgrade CPU, RAM, or storage as your website traffic or business grows, without migrating to a new server.' },
    { question: 'How secure is VPS cPanel Hosting?', answer: 'VPS environments are isolated, which improves security. Combined with firewalls, SSL support, and server-level controls, your data and websites remain well protected.' },
    { question: 'Will you help with website migration?', answer: 'Yes, our team provides migration assistance to help move your websites safely with minimal downtime and no technical hassle.' },
    { question: 'Who should choose VPS cPanel Hosting?', answer: 'VPS cPanel Hosting is ideal for growing businesses, agencies, developers, and websites that have outgrown shared hosting and need better performance and control.' },
  ],

  ctaBand2: {
    title: 'Ready to Power Your Business with VPS cPanel Hosting?',
    description: 'Get reliable, scalable, and easy-to-manage VPS hosting with cPanel. Expert support, enterprise-grade infrastructure, and transparent pricing by ICSDC.',
    ctaPrimary: { text: 'Get Started Now', link: '/contact' },
    ctaSecondary: { text: 'Talk to an Expert', link: '/contact' },
  },
};
