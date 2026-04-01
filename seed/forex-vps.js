// seed/forex-vps.js
// Field name rules:
//   ds.icon-card        → { title, desc }          (NOT description)
//   ds.cta-link         → { text, link }
//   ds.cta-band         → { title, description, ctaPrimary, ctaSecondary }
//   ds.testimonial-card → { name, role, company, quote }
//   ds.faq-entry        → { question, answer }

module.exports = {
  seo: {
    metaTitle: 'High-Performance Forex VPS | MT4, MT5 & EA Trading | ICSDC',
    metaDescription: 'Trade without interruptions using ICSDC Forex VPS. Ultra-low latency, 24/7 uptime, MT4/MT5 support for automated and manual trading.',
  },

  heroTitle: 'Trade Without Interruptions With ICSDC High-Performance Forex VPS',
  heroSubtitle: 'Optimized for MT4, MT5, Expert Advisors & 24/7 Trading',
  heroDescription: 'Run your trading platforms and automated strategies on a reliable, always-on VPS built for speed, stability, and real trading conditions. Never miss a market move due to system downtime or connectivity issues.',
  heroCtaPrimary: { text: 'Check Plans & Get Started', link: '#fvps-plans' },
  heroCtaSecondary: { text: 'Talk to Us', link: '/contact' },

  pillars: [
    { title: 'Ultra-Low Latency Infrastructure', desc: 'Servers optimized for fast trade execution and minimal delays between your platform and broker.' },
    { title: 'Always-On VPS Availability', desc: '99.9%+ uptime ensures your trading bots and platforms run 24/7 without interruptions.' },
    { title: 'Platform-Ready Environment', desc: 'Pre-configured for MT4, MT5, cTrader, and other major trading platforms out of the box.' },
    { title: 'Dedicated & Secure Resources', desc: 'Your VPS runs on isolated resources, keeping performance stable and data protected.' },
  ],

  featuresLabel: 'WHY FOREX VPS',
  featuresTitle: 'Why Traders Choose ICSDC Forex VPS',
  features: [
    { title: 'Faster Trade Execution', desc: 'Low-latency infrastructure reduces time between order placement and execution.' },
    { title: 'Uninterrupted 24/7 Trading', desc: 'Platform runs continuously regardless of local system status.' },
    { title: 'Stable Performance During Market Peaks', desc: 'Dedicated resources ensure consistent performance during high-volatility periods.' },
    { title: 'Compatible With All Major Trading Platforms', desc: 'Supports MT4, MT5, cTrader, NinjaTrader, TradingView, and custom tools.' },
    { title: 'Predictable Performance', desc: 'Dedicated resources, no fluctuation from other users.' },
    { title: 'Global Server Locations', desc: 'Servers closer to broker infrastructure for minimum latency.' },
    { title: 'Fast Setup, No Complexity', desc: 'Ready-to-use environment with minimal configuration.' },
    { title: 'Scales With Your Trading Growth', desc: 'Easily upgrade CPU, RAM, or storage as strategies expand.' },
    { title: 'Human Support When You Need It', desc: 'Technical team that understands trading environments.' },
  ],

  useCasesLabel: 'USE CASES',
  useCasesTitle: 'Where Is Forex VPS Actually Used?',
  useCasesCards: [
    { title: 'Automated Trading & Expert Advisors', desc: 'Bots and EAs run continuously without local machine interruptions.' },
    { title: 'High-Frequency & Scalping Strategies', desc: 'Low-latency execution for strategies where delays impact profitability.' },
    { title: 'Multi-Account Trading Management', desc: 'Handle multiple accounts from a single stable VPS.' },
    { title: 'News & Event-Based Trading', desc: 'Stay active and responsive during volatile economic announcements.' },
    { title: 'Remote Trading From Anywhere', desc: 'Access platforms securely from any device or location.' },
    { title: 'Backup Trading Environment', desc: 'Protect trades from power cuts, hardware failures, and internet issues.' },
  ],

  whoLabel: 'WHO IT\'S FOR',
  whoTitle: 'Who Should Use a Forex VPS?',
  whoCards: [
    { title: 'Automated Traders & Bot Users', desc: 'Keep EAs and automated strategies active 24/7.' },
    { title: 'Scalpers & High-Frequency Traders', desc: 'Fast execution with low latency.' },
    { title: 'Traders Managing Multiple Accounts', desc: 'Centralized stable setup for multiple strategies.' },
    { title: 'News & Event-Based Traders', desc: 'Consistent uptime during high-impact announcements.' },
    { title: 'Remote or Traveling Traders', desc: 'Secure access from any location.' },
    { title: 'Traders Facing Power or Internet Issues', desc: 'VPS protects trades from local disruptions.' },
  ],

  testimonialTitle: 'Read ICSDC Forex VPS Client Stories',
  testimonials: [
    {
      name: 'Rahul Mehta',
      role: 'Independent Forex Trader',
      company: 'Retail Trading',
      quote: 'After shifting my automated strategies to ICSDC Forex VPS, my trades stopped failing during power cuts and internet drops. Setup was quick and execution feels noticeably smoother.',
    },
    {
      name: 'Ananya Kapoor',
      role: 'Algorithmic Trading Consultant',
      company: 'Financial Services',
      quote: 'I manage multiple client strategies, and running them on a Forex VPS helped centralize everything. Performance stays stable even during high-impact news events.',
    },
    {
      name: 'Siddharth Jain',
      role: 'Full-Time Scalper',
      company: 'Proprietary Trading',
      quote: 'Low latency really matters for scalping. Hosting my MT5 on ICSDC Forex VPS reduced execution delays and gave me more confidence during fast market moves.',
    },
    {
      name: 'Neha Verma',
      role: 'Part-Time Trader',
      company: 'Individual Investor',
      quote: 'I trade while traveling, and the ability to access my trading platform from anywhere has been a game changer. The VPS runs reliably without me worrying about my laptop.',
    },
    {
      name: 'Karan Malhotra',
      role: 'Trading Educator',
      company: 'Forex Coaching',
      quote: 'I use ICSDC Forex VPS to demonstrate live trading to students. The uptime and consistency make it easy to teach without technical interruptions.',
    },
  ],

  faqTitle: 'FAQs about ICSDC Forex VPS',
  faq: [
    { question: 'What is a Forex VPS and why do traders use it?', answer: 'A Forex VPS keeps your trading platform running 24/7, avoiding interruptions from power cuts, internet issues, or shutdowns.' },
    { question: 'Which trading platforms are supported?', answer: 'MT4, MT5, cTrader, NinjaTrader, TradingView, and custom trading tools.' },
    { question: 'Can I run automated bots and Expert Advisors?', answer: 'Yes, ideal for running EAs continuously without depending on your personal computer.' },
    { question: 'How quickly will my Forex VPS be activated?', answer: 'Typically provisioned within minutes after payment, with login details via email.' },
    { question: 'Is Forex VPS suitable for beginners?', answer: 'Yes, especially for those relying on automated strategies.' },
    { question: 'Can I access my Forex VPS from anywhere?', answer: 'Yes, securely via Remote Desktop from any device.' },
    { question: 'Will ICSDC help with setup and configuration?', answer: 'Yes, support team assists with VPS access and platform installation.' },
    { question: 'Can I upgrade my Forex VPS plan later?', answer: 'Absolutely, upgrade CPU, RAM, or storage anytime.' },
  ],

  ctaBand1: {
    title: 'Ready to Trade Without Interruptions?',
    description: 'Run your trading platforms on a reliable, always-on Forex VPS built for speed and real trading conditions. Whether you use manual strategies or automated bots, ICSDC Forex VPS keeps your trades live 24/7.',
    ctaPrimary: { text: 'Get Started', link: '/contact' },
    ctaSecondary: { text: 'View Plans', link: '#fvps-plans' },
  },
};
