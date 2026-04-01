/**
 * Seed data — VPS Hosting Trial Page
 * Schema: api::vps-hosting-trial-page.vps-hosting-trial-page
 *
 * Component field reference:
 *   ds.icon-card        → { icon, title, desc, order }          ← "desc" not "description"
 *   ds.pricing-plan     → { tier, price, currency, period, tagline, isFeatured, badge, features:[{label}], ctaText, ctaStyle, order }
 *   ds.numbered-tip     → { order, number, title, description }  ← "description" not "desc"
 *   ds.cta-band         → { title, description, ctaPrimary:{text,link}, ctaSecondary:{text,link} }
 *   ds.testimonial-card → { name, title, company, quote, rating }
 *   ds.faq-entry        → { question, answer, order }
 */

module.exports = {
  seo: {
    metaTitle: 'VPS Hosting Trial India | Test VPS Risk-Free | ICSDC',
    metaDescription: 'Try ICSDC VPS Hosting risk-free with a full-featured live demo. Real NVMe performance, 1Gbps bandwidth, no credit card required. Upgrade instantly when satisfied.',
  },

  heroEyebrow: '⚡ VPS Hosting Trial',
  heroTitle: 'Test ICSDC VPS Hosting Risk-Free With a Live Demo',
  heroSubtitle: 'Try Our VPS With No Risk, No False Commitment & Full Features Enabled',
  heroDescription: 'Experience real VPS performance before making a decision. Test speed, reliability, storage, and all essential features in a fully functional demo environment — no risk, no commitment.',
  heroTopBadge: '⚡ Zero-Risk Trial',
  heroStatusTitle: '99.99% Uptime',
  heroStatusSubtitle: 'Real Infrastructure',

  heroCtaPrimary:   { text: 'Start Your VPS Trial Now', link: '/contact' },
  heroCtaSecondary: { text: 'View VPS Plans',            link: '#vht-plans' },

  pillars: [
    { order: 0, icon: 'server',   title: 'Test Real Performance Before You Buy',      desc: 'Experience actual VPS speed, uptime, and responsiveness so you know exactly what you\'re getting.' },
    { order: 1, icon: 'cpu',      title: 'Explore Full Features Effortlessly',        desc: 'Try control panels, storage, network performance, and management tools without limitations.' },
    { order: 2, icon: 'code',     title: 'Evaluate Compatibility With Your Workloads', desc: 'Run your apps, scripts, and use cases to ensure the VPS fits your requirements perfectly.' },
    { order: 3, icon: 'shield',   title: 'Zero-Risk, No-Commitment Testing',           desc: 'Try everything at no cost, no contracts, and no upfront payment — decide only when you\'re confident.' },
  ],

  plansLabel:    'VPS PLANS',
  plansTitle:    'VPS Plans Backed by Real Testing',
  plansSubtitle: 'You\'ve already seen how the VPS performs. Now pick a plan that matches your workload — transparent pricing, flexible upgrades, and zero guesswork.',

  plans: [
    {
      order: 0, tier: 'VPS Starter', price: '499', currency: '&#8377;', period: '/mo',
      tagline: 'Entry-level VPS for developers and small projects',
      isFeatured: false, badge: '',
      features: [
        { label: '1 vCPU / 1 GB RAM' },
        { label: '20 GB NVMe SSD' },
        { label: '1 TB Bandwidth' },
        { label: '1 IPv4 Address' },
        { label: 'Full SSH Access' },
        { label: 'Free Trial Available' },
      ],
      ctaText: 'Get Started', ctaStyle: 'outline',
    },
    {
      order: 1, tier: 'VPS Pro', price: '999', currency: '&#8377;', period: '/mo',
      tagline: 'Full-featured VPS for growing apps and businesses',
      isFeatured: true, badge: 'Most Popular',
      features: [
        { label: '2 vCPU / 4 GB RAM' },
        { label: '60 GB NVMe SSD' },
        { label: '3 TB Bandwidth' },
        { label: '1Gbps Network Port' },
        { label: 'Daily Backups' },
        { label: 'Free Control Panel' },
        { label: 'Priority Support' },
        { label: 'Free Migration' },
      ],
      ctaText: 'Get Started', ctaStyle: 'primary',
    },
    {
      order: 2, tier: 'VPS Elite', price: '1,999', currency: '&#8377;', period: '/mo',
      tagline: 'High-performance VPS for demanding workloads',
      isFeatured: false, badge: '',
      features: [
        { label: '4 vCPU / 8 GB RAM' },
        { label: '120 GB NVMe SSD' },
        { label: 'Unlimited Bandwidth' },
        { label: '1Gbps Dedicated Port' },
        { label: 'Real-Time Backups' },
        { label: 'Dedicated IP' },
        { label: 'SLA 99.99% Uptime' },
      ],
      ctaText: 'Contact Sales', ctaStyle: 'outline',
    },
  ],

  whyLabel:    'WHY CHOOSE',
  whyTitle:    'Why Choose the ICSDC VPS Trial & Demo?',
  whySubtitle: 'Because you deserve to feel the power before you pay for it.',

  whyCards: [
    { order: 0, icon: 'server',      title: 'Real Infrastructure — No Fake Demo Environments',    desc: 'Your trial runs on genuine VPS hardware with real NVMe storage, real bandwidth, and real compute power.' },
    { order: 1, icon: 'unlock',      title: 'Freedom to Experiment Without Limits',               desc: 'Deploy apps, run tests, upload files, break things, rebuild them — your trial VPS gives you true freedom.' },
    { order: 2, icon: 'code',        title: 'Test Your Actual Workloads, Not Just Sample Scripts', desc: 'Whether you\'re running APIs, ecommerce platforms, or automation tools — simulate real deployment conditions.' },
    { order: 3, icon: 'layout',      title: 'Experience the Dashboard & Tools Firsthand',         desc: 'Get comfortable with the control panel, backups, monitoring, and resource controls before making a purchase.' },
    { order: 4, icon: 'activity',    title: 'Evaluate Speed & Stability in Real Time',            desc: 'Measure load times, CPU usage, memory performance, and network speeds under real conditions.' },
    { order: 5, icon: 'check-circle', title: 'Zero Risk, Zero Cost — Only Confidence',            desc: 'No commitment, no contract, no hidden charges. Upgrade only when you\'re completely convinced.' },
  ],

  whenLabel:    'IDEAL SCENARIOS',
  whenTitle:    'When to Choose the ICSDC VPS Trial & Demo',
  whenSubtitle: 'The trial is perfect for any situation where you want proof before commitment.',

  whenCards: [
    { order: 0, number: '01', title: 'When You Want Proof of Performance Before Paying',      description: 'If you\'re tired of guessing how a VPS will perform, the trial lets you see it, feel it, and test it before spending a rupee.' },
    { order: 1, number: '02', title: 'When You\'re Evaluating Hosting Providers Side-by-Side', description: 'The trial is perfect when you want to compare ICSDC with your current host using real workloads instead of marketing promises.' },
    { order: 2, number: '03', title: 'When You\'re Unsure About the Right Server Configuration', description: 'Run your applications on the trial to understand exactly how many vCPUs, RAM, or NVMe storage you truly need.' },
    { order: 3, number: '04', title: 'When You Want to Test Deployment Speed & Workflow',     description: 'Developers and teams can try deployments, pipelines, SSH workflows, admin tools, and overall usability before committing.' },
    { order: 4, number: '05', title: 'When You Need to Check App Compatibility',              description: 'Use the trial VPS to test frameworks, DB performance, APIs, plugins, custom scripts, and software stack compatibility.' },
    { order: 5, number: '06', title: 'When You Want to Validate Network Speed & Latency',    description: 'Measure real 1Gbps bandwidth, ping times, and transfer speeds — crucial for live apps, ecommerce, and high-traffic platforms.' },
    { order: 6, number: '07', title: 'When You Want to Experience ICSDC Support Quality',    description: 'The trial gives you direct interaction with our support team — no assumptions about response time or expertise.' },
    { order: 7, number: '08', title: 'When You Need Confidence Before Migrating',            description: 'Test migration, stability, and performance before making the final move from another host.' },
  ],

  ctaBand1: {
    title:       'Get Your Free VPS Trial Set Up Today',
    description: 'No credit card. No contracts. Real VPS performance in minutes.',
    ctaPrimary:   { text: 'Start Free VPS Trial',     link: '/contact'         },
    ctaSecondary: { text: 'Call +91 98109 58857', link: 'tel:+919810958857' },
  },

  howLabel:    'HOW TO GET STARTED',
  howTitle:    'How to Get Free VPS Hosting From ICSDC',
  howSubtitle: 'Start your trial VPS in 6 simple steps — no paperwork, no credit card, no delays.',

  howSteps: [
    { order: 0, number: '01', title: 'Fill Out the Quick Trial Request Form',   description: 'Submit your basic details — no credit card, no commitments, no lengthy verification.' },
    { order: 1, number: '02', title: 'Select Your Preferred VPS Specs',         description: 'Choose the CPU, RAM, and storage configuration you want to test, or request a custom setup.' },
    { order: 2, number: '03', title: 'Get Instant VPS Provisioning',            description: 'Our team sets up your trial VPS within minutes and sends you the login credentials securely.' },
    { order: 3, number: '04', title: 'Log In Through SSH or Control Panel',     description: 'Access your VPS using your preferred method and explore the full management dashboard.' },
    { order: 4, number: '05', title: 'Deploy Your Applications & Test Performance', description: 'Install apps, upload files, test scripts, analyze speeds, and run real workloads — everything is unlocked.' },
    { order: 5, number: '06', title: 'Upgrade Instantly Once You\'re Satisfied', description: 'If the VPS meets your expectations, switch to a full plan with a single click — or continue testing.' },
  ],

  specsLabel:    'WHAT\'S INCLUDED',
  specsTitle:    'What\'s Included With Your VPS Trial',
  specsSubtitle: 'Your trial VPS comes fully loaded — the same infrastructure as our paid plans, nothing throttled.',

  specs: [
    { order: 0, icon: 'globe',    title: 'Global Data Centers',    desc: 'Choose from United States, United Kingdom, Germany, Russia, or India for optimal latency.' },
    { order: 1, icon: 'activity', title: '99.99% Uptime SLA',      desc: 'Enterprise-grade availability backed by redundant infrastructure and 24/7 monitoring.' },
    { order: 2, icon: 'hard-drive', title: 'NVMe SSD Storage',     desc: 'Next-generation NVMe storage for blazing-fast read/write speeds and low latency.' },
    { order: 3, icon: 'zap',      title: '1Gbps Bandwidth',        desc: 'External server connection up to 1 Gbit/s — unlimited traffic for your workloads.' },
    { order: 4, icon: 'headphones', title: '24/7 Expert Support',  desc: 'ISO 27001-certified data centers with round-the-clock technical support.' },
    { order: 5, icon: 'shield',   title: 'Enterprise Security',    desc: 'ISO 27001-certified data centers with multi-layer physical and network security.' },
  ],

  whoLabel:    'WHO CAN USE',
  whoTitle:    'Who Can Use the VPS Trial & Demo?',
  whoSubtitle: 'The ICSDC VPS Trial is designed for anyone who wants to test real performance before committing.',

  whoCards: [
    { order: 0, icon: 'code',          title: 'Developers Testing Applications',  desc: 'Test frameworks, APIs, and deployment pipelines on real server infrastructure.' },
    { order: 1, icon: 'briefcase',     title: 'Startups Evaluating Hosting',      desc: 'Validate your infrastructure choice before launch without spending a rupee.' },
    { order: 2, icon: 'trending-up',   title: 'Businesses Planning to Migrate',   desc: 'Test migration, stability, and performance before making the final provider switch.' },
    { order: 3, icon: 'shopping-cart', title: 'eCommerce Owners',                 desc: 'Check speed, load handling, and backend performance before going live.' },
    { order: 4, icon: 'layers',        title: 'SaaS Platforms',                   desc: 'Validate real-time responsiveness and scaling behaviour for your SaaS product.' },
    { order: 5, icon: 'users',         title: 'Agencies & IT Teams',              desc: 'Test client project deployments and hosting compatibility in a real environment.' },
    { order: 6, icon: 'database',      title: 'Database-Heavy Applications',      desc: 'Benchmark database performance, query speed, and storage I/O on real hardware.' },
    { order: 7, icon: 'cpu',           title: 'AI, Analytics & Automation',       desc: 'Run compute-intensive workloads to validate performance before scaling up.' },
  ],

  testimonialTitle: 'What Our VPS Trial Clients Say',
  faqTitle:         'FAQs About VPS Trial & Demo',
  faqContactTitle:  'Talk to Our VPS Experts',
  faqContactDesc:   'Our technical team is available 24/7 to set up your trial, answer questions, and help you choose the right plan.\n\n📞 +91 98109 58857',

  faq: [
    { order: 0, question: 'Do I need to make any payment to start the VPS Trial?',         answer: 'No. The ICSDC VPS Trial is completely free with no upfront payment, no credit card requirement, and no hidden charges.' },
    { order: 1, question: 'What resources do I get during the trial?',                     answer: 'You receive a fully functional VPS with real CPU, RAM, NVMe storage, and 1Gbps bandwidth — the same infrastructure used in our paid plans.' },
    { order: 2, question: 'How long does the VPS Trial last?',                             answer: 'The standard trial duration is long enough for testing deployments, app compatibility, performance, and workloads. You can request an extension if needed.' },
    { order: 3, question: 'Can I test my own website, code, or application during the trial?', answer: 'Yes. You can deploy your website, APIs, scripts, databases, or any application just like you would on a live VPS.' },
    { order: 4, question: 'Will the trial VPS have the same performance as the paid plan?', answer: 'Absolutely. We do not throttle or limit performance. The trial environment matches the real paid VPS infrastructure exactly.' },
  ],

  ctaBand2: {
    title:       'Ready to Move to a Full VPS Plan?',
    description: 'Upgrade instantly from your trial — all configurations and data remain intact.',
    ctaPrimary:   { text: 'Get Your VPS Now',         link: '/contact'         },
    ctaSecondary: { text: 'Call +91 98109 58857', link: 'tel:+919810958857' },
  },

  testimonials: [
    { name: 'Karan Desai',      title: 'DevOps Engineer',  company: 'Cloud Automation Startup', quote: 'We used the ICSDC VPS Trial to test our deployment pipeline before shifting providers. The speed and stability were far better than expected. Our CI/CD builds ran almost 40% faster.', rating: 5 },
    { name: 'Priya Mehta',      title: 'Founder',           company: 'E-Commerce Fashion Brand', quote: 'During the ICSDC VPS Trial, we tested product loading speed and backend operations — everything was smooth even with heavy sample traffic. We knew right away this was the hosting we needed.', rating: 5 },
    { name: 'Aditya Verma',     title: 'Software Architect', company: 'SaaS Productivity Platform', quote: 'We wanted to see if the VPS could handle our real-time collaboration features. During the trial, API latency dropped significantly compared to our old provider.', rating: 5 },
  ],
};
