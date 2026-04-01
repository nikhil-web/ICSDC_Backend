// seed/veeam-backup.js
// Field name rules (CLAUDE.md):
//   ds.icon-card    → { title, desc }          (NOT description)
//   ds.numbered-tip → { title, description }   (NOT desc)
//   ds.cta-link     → { text, link }
//   ds.cta-band     → { title, description, ctaPrimary, ctaSecondary }

module.exports = {
  seo: {
    metaTitle: 'ICSDC Veeam Backup & Recovery | Managed Data Protection Services',
    metaDescription: 'Protect critical business data with ICSDC-managed Veeam backup and recovery. Automated backups, ransomware-resilient storage, fast restores, and 24/7 monitoring for on-premises and cloud workloads.',
  },

  heroEyebrow: '🛡 Veeam Backup & Recovery',
  heroTitle: 'Veeam Backup & Recovery for Mission-Critical Workloads',
  heroSubtitle: 'Get Complete Backup, Fast Recovery, Zero Data Worries',
  heroDescription: 'Protect your critical business data with Veeam\'s powerful backup and recovery solutions. Ensure fast restores, strong security, and uninterrupted operations across on-premises and cloud environments.',
  heroTopBadge: '🛡 ICSDC Managed Veeam',
  heroStatusTitle: 'Recovery Ready',
  heroStatusSubtitle: '24/7 Monitored',
  heroCtaPrimary: { text: 'Get Started With Veeam Backup', link: '#veeam-plans' },
  heroCtaSecondary: { text: 'Get a Quote', link: '/contact' },

  pillars: [
    { title: 'Reliable Data Backup', desc: 'Automated and consistent backups for virtual, physical, and cloud workloads.' },
    { title: 'Instant & Granular Recovery', desc: 'Recover full systems or individual files in minutes with minimal downtime.' },
    { title: 'Ransomware Protection', desc: 'Secure backups with encryption, immutability, and controlled access.' },
    { title: 'Cloud & Hybrid Support', desc: 'Protect data across on-prem, cloud, and hybrid environments from one platform.' },
  ],

  featuresLabel: 'WHY VEEAM',
  featuresTitle: 'Why Businesses Trust Veeam for Modern Data Protection',
  featuresSubtitle: 'Veeam delivers enterprise-grade data protection across every layer of your infrastructure.',
  features: [
    { title: 'Near-Zero Downtime Recovery', desc: 'Veeam enables fast and reliable recovery of systems, applications, and data, ensuring business operations continue even during failures or cyber incidents.' },
    { title: 'Intelligent Backup Automation', desc: 'Automated, policy-based backups remove manual dependency, reduce errors, and ensure your data is protected consistently without daily intervention.' },
    { title: 'Ransomware-Resilient Backups', desc: 'With immutable backup storage and advanced security controls, Veeam safeguards your data from ransomware, unauthorized deletion, and malicious tampering.' },
    { title: 'Wide Infrastructure Coverage', desc: 'Veeam protects virtual machines, physical servers, cloud workloads, and SaaS platforms through a single, unified backup solution.' },
    { title: 'Application-Consistent Protection', desc: 'Built-in application awareness ensures reliable backups for critical workloads like databases and enterprise applications without data corruption.' },
    { title: 'Optimized Storage Efficiency', desc: 'Advanced compression and deduplication technologies significantly reduce storage consumption while maintaining high backup performance.' },
    { title: 'Centralized Monitoring & Reporting', desc: 'Gain complete visibility into backup health, compliance, and recovery readiness through a centralized management dashboard.' },
    { title: 'End-to-End Data Encryption', desc: 'Enterprise-grade encryption secures data both in transit and at rest, helping meet regulatory and compliance requirements.' },
    { title: 'Designed to Scale Seamlessly', desc: 'Veeam grows with your business, allowing you to protect expanding workloads and data volumes without changing your backup strategy.' },
  ],

  compareLabel: 'WHY CHOOSE ICSDC',
  compareTitle: 'ICSDC Managed Veeam vs Direct Veeam Backup',
  compareRows: [
    { title: 'Deployment & Setup', desc: 'Fully handled by ICSDC experts | User-managed setup' },
    { title: 'Ongoing Management', desc: '24/7 monitoring and maintenance | Self-managed' },
    { title: 'Backup Strategy Design', desc: 'Customized to your workload and risk profile | Generic configuration' },
    { title: 'Ransomware Readiness', desc: 'Proactive security hardening and immutability setup | Depends on user configuration' },
    { title: 'Recovery Support', desc: 'Assisted restores with expert guidance | Self-service recovery' },
    { title: 'Compliance & Reporting', desc: 'Regular health checks and compliance reports | Limited out-of-the-box reporting' },
    { title: 'Cost Predictability', desc: 'Bundled pricing with managed services | Licensing only' },
    { title: 'Single Point of Contact', desc: 'One team for backup, recovery, and support | Vendor-only support' },
  ],

  statsLabel: 'RANSOMWARE REALITY',
  statsTitle: 'Backup & Recovery Built to Resist Modern Malware',
  statsSubtitle: 'Cyber attackers increasingly target backup environments. ICSDC strengthens your backup strategy with immutable storage, verified recovery points, and strict access governance.',
  stats: [
    { title: '69%', desc: 'of organizations experienced at least one malware or ransomware incident in the past year.' },
    { title: '89%', desc: 'of affected organizations reported attempts to compromise backup repositories during an attack.' },
    { title: '32%', desc: 'Only 32% had immutable backup storage enabled before initiating recovery.' },
    { title: '30%', desc: 'Just 30% of organizations had a predefined incident response workflow and approval process in place.' },
  ],

  stepsLabel: 'HOW IT WORKS',
  stepsTitle: 'How ICSDC Backup & Recovery Works',
  // ds.numbered-tip uses 'description' (NOT 'desc')
  steps: [
    { title: 'Assess & Design', description: 'We analyze your infrastructure, data criticality, and compliance needs to design a backup and recovery strategy aligned with your business goals.', order: 1 },
    { title: 'Secure Backup Setup', description: 'ICSDC configures automated backups with encryption, immutability, and access controls across on-premises, cloud, or hybrid environments.', order: 2 },
    { title: 'Continuous Monitoring', description: 'Backups are continuously monitored for health, performance, and anomalies to ensure recoverability at all times.', order: 3 },
    { title: 'Verify Restore Readiness', description: 'Recovery points are regularly validated to confirm data integrity and ensure clean, usable restores when needed.', order: 4 },
    { title: 'Rapid Recovery Execution', description: 'In the event of data loss or cyber incidents, our experts assist with fast, controlled recovery to meet RPO and RTO objectives.', order: 5 },
  ],

  ctaBand1: {
    title: 'Get Your ICSDC Veeam Backup Quote',
    description: 'Customized Veeam Backup pricing based on workload type, storage requirements, and RPO/RTO goals — backed by ICSDC managed services.',
    ctaPrimary: { text: 'Get a Veeam Quote', link: '/contact' },
    ctaSecondary: { text: 'Call +91 98109 58857', link: 'tel:+919810958857' },
  },

  whyLabel: 'WHY ICSDC',
  whyTitle: 'Why Choose ICSDC for Veeam Backup & Recovery?',
  whySubtitle: 'From deployment to daily monitoring — ICSDC delivers end-to-end backup management so your data is always protected and recoverable.',
  whyCards: [
    { title: 'Managed by Backup Experts', desc: 'Our certified specialists design, deploy, and manage your Veeam environment so your backups are always optimized, secure, and recovery-ready.' },
    { title: 'Security-First Architecture', desc: 'ICSDC implements immutability, zero-trust access, encryption, and multi-layer approvals to protect backups from ransomware and internal threats.' },
    { title: 'Business-Aligned Recovery Goals', desc: 'We configure backup policies to meet your exact RPOs and RTOs, ensuring data protection supports real business continuity needs.' },
    { title: '24/7 Monitoring & Proactive Support', desc: 'Your backup environment is monitored around the clock, with proactive issue resolution before failures impact recovery.' },
    { title: 'Hybrid & Cloud Expertise', desc: 'Protect workloads across on-premises, cloud, and hybrid platforms with seamless management and portable recovery options.' },
    { title: 'Assisted Recovery When It Matters Most', desc: 'During incidents, ICSDC experts guide and execute restores to minimize downtime and operational stress.' },
    { title: 'Transparent Reporting & Compliance Readiness', desc: 'Receive clear reports, audit-ready logs, and recovery testing insights for compliance and internal assurance.' },
    { title: 'One Partner, End-to-End Responsibility', desc: 'From strategy to recovery, ICSDC serves as a single point of accountability — no vendor handoffs, no confusion.' },
  ],

  whoLabel: 'USE CASES',
  whoTitle: 'Who Should Choose ICSDC Veeam Backup?',
  whoSubtitle: 'From ransomware recovery to compliance-ready backups — Veeam protects every critical workload.',
  whoCards: [
    { title: 'Ransomware Recovery for Live Production Systems', desc: 'Quickly restore business-critical servers and applications after ransomware or malware attacks without rebuilding entire environments.' },
    { title: 'Virtual Machine Protection in Active Data Centers', desc: 'Continuously back up running virtual machines to ensure fast recovery during hardware failures or unexpected outages.' },
    { title: 'Cloud Workload Backup & Restore', desc: 'Protect workloads running on public or private cloud platforms and restore them across environments when needed.' },
    { title: 'Database & Application-Level Recovery', desc: 'Restore specific databases, tables, or application components without impacting full systems.' },
    { title: 'Business Continuity for E-Commerce Platforms', desc: 'Ensure high availability and fast recovery for online stores during peak sales periods or infrastructure disruptions.' },
    { title: 'SaaS Data Protection', desc: 'Back up critical data from platforms like Microsoft 365 to prevent loss from accidental deletion or security incidents.' },
    { title: 'Compliance & Audit Readiness', desc: 'Maintain verifiable backup records, logs, and reports to meet regulatory and audit requirements.' },
    { title: 'Development & Testing Rollbacks', desc: 'Quickly revert environments to known stable states during application testing or failed deployments.' },
    { title: 'Disaster Recovery Across Sites', desc: 'Replicate data to secondary locations and recover operations rapidly during site-level failures or natural disasters.' },
  ],

  testimonialTitle: 'What Our Clients Say About ICSDC Veeam Backup',
  testimonials: [
    { name: 'Rajesh Khanna', role: 'IT Manager', company: 'Healthcare Group', quote: 'ICSDC set up Veeam backup for our hospital systems and the difference in recovery confidence is night and day. We tested a full restore and it completed in under 20 minutes.' },
    { name: 'Priya Mehta', role: 'Head of Infrastructure', company: 'E-Commerce Company', quote: 'After a ransomware scare last year, we needed a bulletproof backup strategy. ICSDC designed an immutable storage setup that gave us complete peace of mind.' },
    { name: 'Anil Sharma', role: 'CTO', company: 'Financial Services Firm', quote: 'We needed compliance-ready backup reporting for audits. ICSDC\'s Veeam setup delivered exactly that — automated reports, verified recovery points, and no gaps.' },
    { name: 'Deepika Nair', role: 'DevOps Lead', company: 'Technology Company', quote: 'Rolling back failed deployments used to be painful. With Veeam snapshots managed by ICSDC, we can revert any environment to a clean state in minutes.' },
  ],

  faqTitle: 'FAQs About Veeam Backup & Recovery',
  faqContactTitle: 'Talk to Our Backup Team',
  faqContactDesc: 'Our Veeam specialists are available to help design the right backup strategy for your infrastructure.\n\n📞 +91 98109 58857',
  faq: [
    { question: 'What is Veeam Backup & Recovery?', answer: 'Veeam is an enterprise backup and recovery platform that protects virtual, physical, and cloud workloads with fast, reliable, and secure data protection.' },
    { question: 'How does ICSDC manage Veeam for my business?', answer: 'ICSDC handles full lifecycle management including design, deployment, configuration, monitoring, and recovery support for your Veeam environment.' },
    { question: 'Is Veeam backup suitable for cloud workloads?', answer: 'Yes. Veeam supports backup and recovery for major cloud platforms including AWS, Azure, and hybrid environments alongside on-premises infrastructure.' },
    { question: 'How quickly can data be recovered with Veeam?', answer: 'Veeam supports near-instant recovery options, allowing systems and applications to be restored within minutes depending on workload size and configuration.' },
    { question: 'Can Veeam protect against ransomware?', answer: 'Yes. Veeam supports immutable backup storage, encryption, and strict access controls to help ensure backups remain clean and recoverable even during active attacks.' },
    { question: 'What is RPO and RTO in the context of Veeam?', answer: 'RPO (Recovery Point Objective) defines how much data you can afford to lose; RTO (Recovery Time Objective) defines how quickly you need to restore. ICSDC configures Veeam policies aligned to your specific targets.' },
    { question: 'Do you provide reporting for compliance purposes?', answer: 'Yes. ICSDC provides regular backup health reports, audit logs, and recovery test summaries to support regulatory compliance requirements.' },
    { question: 'Can ICSDC migrate our existing backup setup to Veeam?', answer: 'Yes. Our experts can assess your current environment and migrate to Veeam with minimal disruption to ongoing operations.' },
  ],

  ctaBand2: {
    title: 'Start Protecting Your Business Data With Veeam',
    description: 'ICSDC-managed Veeam backup — fully configured, 24/7 monitored, and recovery-ready for your exact workload. Get started today.',
    ctaPrimary: { text: 'Get Started With Veeam', link: '/contact' },
    ctaSecondary: { text: 'Talk to an Expert', link: '/contact' },
  },
};
