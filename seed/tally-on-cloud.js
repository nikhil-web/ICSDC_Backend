// seed/tally-on-cloud.js
// Field name rules (CLAUDE.md):
//   ds.icon-card    → { title, desc }          (NOT description)
//   ds.cta-link     → { text, link }
//   ds.cta-band     → { title, description, ctaPrimary, ctaSecondary }
//   ds.testimonial-card → { name, role, company, quote }
//   ds.faq-entry    → { question, answer }

module.exports = {
  seo: {
    metaTitle: 'Tally on Cloud for Anywhere Accounting Access | ICSDC',
    metaDescription: 'Access Tally securely from anywhere with ICSDC Tally on Cloud. Enable multi-user access, improve data security, and ensure business continuity without local systems.',
  },

  heroTitle: 'Access Tally Anytime, Anywhere with Tally on Cloud',
  heroSubtitle: 'Simplify Accounting Operations with Cloud-Hosted Tally',
  heroDescription: 'Manage your accounting operations more efficiently by running Tally on a secure cloud environment. Access your data anytime, collaborate with your team in real time, and ensure business continuity without relying on local systems or physical servers.',
  heroCtaPrimary: { text: 'Get Started with Tally on Cloud', link: '/contact' },
  heroCtaSecondary: { text: 'Learn More', link: '#toc-improvements' },

  pillars: [
    { title: 'Anywhere Access', desc: 'Work on Tally securely from any location and device with internet access.' },
    { title: 'Multi-User Collaboration', desc: 'Allow multiple users to work on the same Tally data in real time.' },
    { title: 'Secure Cloud Environment', desc: 'Keep your accounting data protected with controlled access and cloud security.' },
    { title: 'No Local Setup Required', desc: 'Eliminate hardware dependency and access Tally without complex installations.' },
  ],

  aboutTitle: 'Who We Are',
  aboutDesc: 'We are a cloud solutions partner focused on helping businesses move their critical applications to secure, high-performance cloud environments. With deep expertise in cloud infrastructure and business software hosting, we make it easy to run Tally on the cloud without changing the way you work. At ICSDC, we combine reliable infrastructure, strong security practices, and responsive support to ensure your accounting systems stay accessible, protected, and always online. From small businesses to growing enterprises and CA firms, we help teams work smarter, collaborate better, and manage their financial data with confidence.',

  improvementsLabel: 'KEY BENEFITS',
  improvementsTitle: 'How Tally on Cloud Improves Your Business Operations',
  improvements: [
    { title: 'Access Tally Anytime, Anywhere', desc: 'Work on your Tally data securely from office, home, or while traveling, no dependency on a single system.' },
    { title: 'Multi-User Collaboration', desc: 'Multiple users work on the same Tally data in real time, improving team productivity and coordination.' },
    { title: 'Improved Data Security', desc: 'Accounting data stored in a secure cloud environment with controlled access and protection against local failures.' },
    { title: 'Business Continuity', desc: 'Operations continue smoothly even during hardware issues, power failures, or office downtime.' },
    { title: 'No Hardware Dependency', desc: 'Eliminate the need for expensive local servers or high-end systems — Tally runs smoothly on the cloud.' },
    { title: 'Faster Performance', desc: 'Optimized cloud infrastructure delivers consistent speed and responsiveness for daily accounting tasks.' },
    { title: 'Easy Scalability', desc: 'Add users or upgrade resources easily as your business grows, without complex reinstallation.' },
    { title: 'Centralized Data Management', desc: 'Maintain a single, centralized Tally database that stays updated and accessible to authorized users.' },
    { title: 'Secure Remote Access for CA Firms', desc: 'Share access with auditors or CA teams securely without sending files back and forth.' },
    { title: 'Reduced IT Maintenance', desc: 'No need to manage local servers, backups, or system upgrades — cloud hosting simplifies IT management.' },
    { title: 'Data Backup & Recovery', desc: 'Cloud environments support regular backups, helping protect your data from accidental loss or corruption.' },
    { title: 'Cost-Effective Solution', desc: 'Reduce infrastructure and maintenance costs while gaining enterprise-grade access and reliability.' },
  ],

  whyLabel: 'WHY ICSDC',
  whyTitle: 'Why Choose ICSDC for Tally on Cloud?',
  whyCards: [
    { title: 'Built Specifically for Tally Workloads', desc: 'Cloud infrastructure optimized to run Tally smoothly and reliably, ensuring consistent performance for daily accounting operations.' },
    { title: 'Secure & Controlled Access', desc: 'Secure cloud environment with restricted access, protecting financial data while allowing only authorized users.' },
    { title: 'Anywhere, Anytime Availability', desc: 'Access Tally data from the office, home, or on the go. ICSDC ensures your accounting system is always available.' },
    { title: 'Multi-User Friendly Setup', desc: 'Multiple users, teams, or CA partners work on the same Tally data simultaneously without conflicts.' },
    { title: 'No Hardware or Server Dependency', desc: 'Eliminate reliance on local systems, office servers, or physical storage completely.' },
    { title: 'Business Continuity Assured', desc: 'Power outages, system failures, or office closures won\'t stop your work. Tally stays operational in the cloud.' },
    { title: 'Simple & Hassle-Free Onboarding', desc: 'Our team assists with setup and migration, ensuring a smooth transition without disrupting your workflows.' },
    { title: 'Dedicated Support When You Need It', desc: 'Responsive support from professionals who understand both cloud hosting and Tally environments.' },
    { title: 'Cost-Effective Cloud Accounting', desc: 'Avoid large upfront investments while enjoying enterprise-grade reliability at predictable costs.' },
  ],

  compareLabel: 'COMPARISON',
  compareTitle: 'Tally on Cloud vs Desktop Tally',
  // ds.icon-card: title = feature name, desc = "Cloud value | Desktop value"
  compareRows: [
    { title: 'Access from Anywhere', desc: 'Work from any location with internet | Restricted to office system' },
    { title: 'Multi-User Access', desc: 'Multiple users simultaneously | Limited or complex setup' },
    { title: 'Data Security', desc: 'Secured cloud environment | Dependent on local system safety' },
    { title: 'Hardware Dependency', desc: 'No server needed | Requires dedicated systems' },
    { title: 'Business Continuity', desc: 'Works during power/office downtime | Stops during system failure' },
    { title: 'Remote CA / Auditor Access', desc: 'Secure shared access possible | File sharing required' },
    { title: 'Scalability', desc: 'Easily add users or resources | Hardware upgrade needed' },
    { title: 'Maintenance Responsibility', desc: 'Managed by ICSDC | Handled by business' },
    { title: 'Data Backup', desc: 'Cloud backups supported | Manual or local backups' },
    { title: 'Initial Setup Cost', desc: 'Low upfront investment | Higher hardware cost' },
    { title: 'Collaboration Speed', desc: 'Real-time access | Delayed file transfers' },
    { title: 'Mobility & Flexibility', desc: 'High | Low' },
  ],

  ctaBand1: {
    title: 'Choose Your ICSDC Tally Cloud Plan',
    description: 'Simple, predictable, and scalable pricing — so you only pay for what you need while getting secure access, reliable performance, and expert support.',
    ctaPrimary: { text: 'View Plans & Pricing', link: '/contact' },
    ctaSecondary: { text: 'Talk to an Expert', link: '/contact' },
  },

  whoCanLabel: 'WHO IT\'S FOR',
  whoCanTitle: 'Who Can Use Tally on Cloud?',
  whoCanDesc: 'Tally on Cloud is designed for any business that needs reliable, secure, and accessible accounting software.',
  whoCanCards: [
    { title: 'Small & Medium Businesses', desc: 'Access Tally from multiple locations without investing in local servers or complex IT setups.' },
    { title: 'CA Firms & Accounting Professionals', desc: 'Secure, remote access to client data for audits, compliance, and filings without exchanging files.' },
    { title: 'Growing Enterprises', desc: 'Distributed teams with centralized accounting data and controlled user access.' },
    { title: 'Startups', desc: 'Cost-effective way to run professional accounting software without upfront hardware or infrastructure costs.' },
    { title: 'Businesses Upgrading from Desktop Tally', desc: 'Users who have outgrown local Tally setups and need better accessibility, security, and continuity.' },
    { title: 'Remote & Hybrid Teams', desc: 'Teams working from different locations collaborate on the same Tally data in real time.' },
    { title: 'Multi-Branch Businesses', desc: 'Manage accounts for multiple offices or branches from a single cloud-hosted Tally environment.' },
  ],

  testimonialTitle: 'What Our Clients Say About Tally on Cloud',
  testimonials: [
    { name: 'Rakesh Gupta', role: 'Finance Manager', company: 'Manufacturing Business', quote: 'Moving Tally to the cloud solved our biggest problem of location dependency. Our accounts team and CA can now access data whenever required, and daily operations have become much smoother.' },
    { name: 'Sneha Iyer', role: 'Accounts Head', company: 'Service-Based Company', quote: 'We were hesitant at first, but Tally on Cloud turned out to be very simple to use. No system dependency, no data sharing issues, and performance has been consistent.' },
    { name: 'Ankit Jain', role: 'Practicing Chartered Accountant', company: 'CA Firm', quote: 'As a CA firm, remote access is critical for us. ICSDC\'s Tally on Cloud allows us to work on client data securely without constantly asking for backups or files.' },
    { name: 'Vikram Malhotra', role: 'Operations Director', company: 'Trading Business', quote: 'Power cuts and system failures used to disrupt our accounting work. Since shifting to cloud-hosted Tally, business continuity is no longer a concern.' },
    { name: 'Pallavi Deshmukh', role: 'Admin Manager', company: 'Multi-Branch Business', quote: 'The biggest advantage for us is multi-user access. Our team works from different locations, yet everyone stays on the same Tally data without conflicts.' },
  ],

  faqTitle: 'FAQs about Tally on Cloud',
  faq: [
    { question: 'What is Tally on Cloud?', answer: 'Tally on Cloud lets you run Tally on a secure cloud server, accessible from anywhere without relying on a local system or office server.' },
    { question: 'Can I access Tally on Cloud from any device?', answer: 'Yes, from laptops, desktops, or thin clients using an internet connection, regardless of your location.' },
    { question: 'Is my accounting data safe on the cloud?', answer: 'Yes, your data is hosted in a secure cloud environment with controlled access and protection against local system failures.' },
    { question: 'Can multiple users work on Tally at the same time?', answer: 'Yes, Tally on Cloud supports multi-user access, allowing teams and CA partners to work on the same data simultaneously.' },
    { question: 'Do I need to buy any special hardware?', answer: 'No, there is no need for dedicated servers or high-end systems. Tally runs on the cloud, reducing hardware dependency.' },
    { question: 'Will ICSDC help migrate my existing Tally data?', answer: 'Yes, our team assists with smooth migration of your existing Tally data to the cloud with minimal disruption.' },
    { question: 'What happens if my local system or office faces downtime?', answer: 'Your Tally data remains accessible on the cloud, ensuring business continuity even during power or system outages.' },
    { question: 'Who should choose ICSDC Tally on Cloud?', answer: 'It is ideal for businesses, CA firms, multi-branch organizations, and teams that need secure, remote, and reliable access to Tally.' },
  ],

  ctaBand2: {
    title: 'Move Your Accounting to the Cloud with ICSDC',
    description: 'Start running Tally on a secure, always-available cloud environment. No hardware dependency, no location restrictions, no downtime worries.',
    ctaPrimary: { text: 'Get Started Today', link: '/contact' },
    ctaSecondary: { text: 'Talk to an Expert', link: '/contact' },
  },
};
