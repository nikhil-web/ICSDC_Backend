// seed/firewall-security.js
// Field name rules (CLAUDE.md):
//   ds.icon-card       → { title, desc }          (NOT description)
//   ds.cta-link        → { text, link }
//   ds.cta-band        → { title, description, ctaPrimary, ctaSecondary }
//   ds.testimonial-card → { name, role, company, quote }
//   ds.faq-entry       → { question, answer }

module.exports = {
  seo: {
    metaTitle: 'Firewall Security & Managed Firewall Services | ICSDC',
    metaDescription: 'Protect your network with ICSDC\'s managed firewall security. Real-time threat prevention, traffic control, continuous monitoring, and expert-managed protection.',
  },

  heroTitle: 'Firewall Security Built for Real-World Attacks, Not Assumptions',
  heroSubtitle: 'Advanced traffic inspection designed to prevent unauthorized access and attacks',
  heroDescription: 'Our firewall security actively monitors and controls network traffic to block unauthorized access and threats before they reach your systems.',
  heroCtaPrimary: { text: 'Talk to Our Firewall Security Experts', link: '/contact' },
  heroCtaSecondary: { text: 'Learn More', link: '#fw-services' },

  pillars: [
    { title: 'Real-Time Threat Filtering', desc: 'Continuously inspect and filter network traffic to block malicious activity before it enters your environment.' },
    { title: 'Granular Access Control', desc: 'Define precise rules for users, applications, and services to ensure only authorized traffic is allowed.' },
    { title: 'Advanced Threat Prevention', desc: 'Detects and prevents modern attacks using deep packet inspection, intrusion prevention, and threat intelligence.' },
    { title: 'Continuous Monitoring & Updates', desc: 'Keep your firewall policies up to date with ongoing monitoring, logging, and regular security updates.' },
  ],

  strengthLabel: 'HOW ICSDC STRENGTHENS YOUR SECURITY',
  strengthTitle: 'How ICSDC Strengthens Your Network Security',
  strengthCards: [
    { title: 'Fewer Security Incidents, Fewer Surprises', desc: 'By controlling what enters and leaves your network, firewalls reduce exposure to common attacks and unauthorized access attempts that often lead to security incidents.' },
    { title: 'Clear Visibility Into Network Traffic', desc: 'Understand who and what is accessing your network. Detailed logs and monitoring help your team identify unusual activity early and respond before it becomes a problem.' },
    { title: 'Better Control as Your Network Grows', desc: 'As applications, users, and locations increase, firewall rules help maintain structure and control, preventing security gaps caused by rapid expansion.' },
    { title: 'Reduced Risk From Misconfigurations', desc: 'With expert configuration and ongoing reviews, firewall policies remain aligned with your actual infrastructure, minimizing risks caused by outdated or incorrect rules.' },
    { title: 'Stronger Protection at the Network Edge', desc: 'Firewalls act as the first checkpoint, stopping unwanted traffic before it reaches critical systems and applications deeper in your environment.' },
    { title: 'Support for Compliance and Audits', desc: 'Well-configured firewall policies and logs help demonstrate controlled access and security practices during audits and compliance reviews.' },
    { title: 'Less Burden on Internal Teams', desc: 'ICSDC helps manage firewall setup, updates, and monitoring, allowing your IT team to focus on core operations instead of day-to-day security management.' },
    { title: 'Security That Adapts Over Time', desc: 'As threats evolve, firewall rules and protections are updated to stay relevant, ensuring your defenses don\'t become outdated or ineffective.' },
  ],

  adaptsLabel: 'ADAPTS AS YOUR NETWORK GROWS',
  adaptsTitle: 'Firewall Security That Adapts as Your Network Grows',
  adaptsCards: [
    { title: 'Security That Understands Context', desc: 'Our firewall policies are designed around how your applications and users actually behave, reducing unnecessary blocks while still stopping real threats.' },
    { title: 'Faster Threat Containment, Less Manual Effort', desc: 'When suspicious activity is detected, responses are triggered quickly and intelligently, helping contain issues before they spread across your network.' },
    { title: 'Designed for Encrypted, Modern Traffic', desc: 'Most traffic today is encrypted. Our firewall setup ensures visibility and protection even within encrypted connections, without creating blind spots.' },
    { title: 'Stability Comes First', desc: 'Security controls are implemented with performance in mind, ensuring protection does not disrupt critical business applications or network availability.' },
    { title: 'Understandable Security Logs', desc: 'You don\'t just get logs, you get clarity. Firewall activity is logged in a way that helps teams quickly understand what happened and why.' },
    { title: 'Scales Without Rebuilding Everything', desc: 'As your network grows, firewall policies and configurations can scale smoothly without forcing redesigns or frequent rule rewrites.' },
    { title: 'Reduced Risk from Human Error', desc: 'Structured rule management and expert oversight help prevent misconfigurations, which are one of the most common causes of firewall-related breaches.' },
    { title: 'Backed by Ongoing Expertise, Not Just Setup', desc: 'Firewall security is not a one-time task. ICSDC supports continuous tuning, updates, and reviews to keep your protection relevant over time.' },
  ],

  threatTitle: 'Faster Threat Detection with Clear Response',
  threatDesc: 'Modern workloads change fast, and threats move even faster. ICSDC helps you spot malicious activity early and respond with precision - before attackers can establish persistence or cause disruption. Our security approach delivers unified visibility across servers, containers, and cloud environments, allowing unusual behavior and attack attempts to stand out quickly. Instead of isolated alerts, related events are correlated to help teams understand the full picture without delay. Advanced behavior-based detection techniques identify suspicious actions such as privilege misuse, exploit attempts, and abnormal process activity - even when traditional signatures fail. When action is required, secure remote access enables controlled investigation and remediation without exposing systems to additional risk.',

  envLabel: 'ENVIRONMENT COVERAGE',
  envTitle: 'Protection Across Every Environment',
  envCards: [
    { title: 'Linux & Container Environment Protection', desc: 'We secure Linux systems across on-prem, cloud, and containerized environments. Protection is designed for modern workloads, covering container runtimes and cloud-native architectures while monitoring behavior that traditional tools often miss.' },
    { title: 'Windows Server & Endpoint Security', desc: 'Our security controls help protect Windows servers and connected systems from ransomware, exploits, and emerging threats. We also support application control, configuration hardening, and continuous monitoring of critical system changes.' },
    { title: 'Hybrid & Multi-Cloud Coverage', desc: 'Whether your workloads run in data centers or across multiple cloud platforms, ICSDC helps maintain consistent security visibility and control. Protection extends across hybrid and multi-cloud environments from a unified management approach.' },
  ],

  ctaBand1: {
    title: 'Request a custom pricing plan tailored to your environment',
    description: 'Talk to an expert about your firewall needs',
    ctaPrimary: { text: 'Contact Us', link: '/contact' },
    ctaSecondary: null,
  },

  servicesLabel: 'MANAGED FIREWALL SERVICES',
  servicesTitle: 'Our Managed Firewall Services',
  servicesCards: [
    { title: 'Firewall Configuration & Deployment', desc: 'Secure installation and configuration tailored to your network architecture and security requirements.' },
    { title: 'Firewall Policy Management', desc: 'Ongoing rule creation, optimization, and review to ensure secure and efficient traffic flow.' },
    { title: 'Intrusion Prevention (IPS)', desc: 'Active detection and blocking of malicious traffic and known attack patterns.' },
    { title: 'VPN Setup & Management', desc: 'Secure remote access for users, branches, and partners with encrypted VPN configurations.' },
    { title: 'Threat Intelligence Integration', desc: 'Firewall policies updated with the latest threat intelligence to block emerging risks.' },
    { title: 'Firewall Upgrades & Patch Management', desc: 'Timely updates to firmware and security features to prevent exposure from known vulnerabilities.' },
    { title: 'Firewall Auditing & Reviews', desc: 'Regular audits to identify misconfigurations, unused rules, and potential security gaps.' },
    { title: 'Web Content Filtering', desc: 'Control access to risky or non-business websites to reduce exposure and improve productivity.' },
    { title: 'Network Traffic Monitoring & Analysis', desc: 'Continuous analysis of traffic patterns to detect anomalies and suspicious behavior early.' },
    { title: '24/7 Backend Support', desc: 'Round-the-clock monitoring and expert support to respond quickly to incidents and issues.' },
  ],

  useCasesLabel: 'USE CASES',
  useCasesTitle: 'Firewall Security Use Cases',
  useCasesCards: [
    { title: 'Securing Business Networks', desc: 'Firewalls protect corporate networks by controlling incoming and outgoing traffic, preventing unauthorized access to internal systems and sensitive data.' },
    { title: 'Protecting Cloud & Hybrid Environments', desc: 'As workloads move to cloud and hybrid setups, firewalls help enforce consistent security controls across on-premises infrastructure and cloud platforms.' },
    { title: 'Enabling Secure Remote Access', desc: 'Firewalls support secure VPN connections for remote employees and branch offices, ensuring encrypted access without exposing internal resources.' },
    { title: 'Protecting Web-Facing Applications', desc: 'Firewalls help shield public-facing applications from malicious traffic, scanning attempts, and unauthorized access before threats reach the application layer.' },
    { title: 'Controlling Third-Party & Vendor Access', desc: 'Firewall rules restrict and monitor access for partners and vendors, reducing risk while maintaining necessary connectivity.' },
    { title: 'Preventing Lateral Movement Inside Networks', desc: 'By segmenting network traffic, firewalls limit how far attackers can move if a breach occurs, containing threats early.' },
    { title: 'Supporting Compliance Requirements', desc: 'Firewall logging and access controls help organizations meet audit, regulatory, and security policy requirements.' },
    { title: 'Monitoring Traffic for Anomalies', desc: 'Continuous traffic analysis helps identify unusual behavior, allowing early detection of potential security incidents.' },
  ],

  testimonialTitle: 'What Our Clients Say About ICSDC Firewall Security',
  testimonials: [
    { name: 'Aakash Verma', role: 'IT Operations Manager', company: 'Manufacturing Company', quote: 'We were struggling to keep our firewall rules updated as our network grew. Having this managed for us brought clarity and consistency without disrupting daily operations.' },
    { name: 'Ritika Malhotra', role: 'Infrastructure Lead', company: 'Professional Services Firm', quote: 'Our main concern was visibility. After onboarding the managed firewall service, we finally had a clear view of network traffic and potential risks without digging through complex logs.' },
    { name: 'Sandeep Kulkarni', role: 'Systems Administrator', company: 'Technology Consulting Company', quote: 'Remote access was becoming risky with more people working outside the office. The firewall and VPN setup helped us secure access while keeping things simple for users.' },
    { name: 'Neha Arora', role: 'Head of IT', company: 'Retail Business', quote: 'What we appreciated most was the proactive monitoring. Issues were identified and handled before they turned into real problems for our business.' },
    { name: 'Kunal Mehta', role: 'Engineering Manager', company: 'Enterprise Services Company', quote: 'Our internal team didn\'t have the bandwidth to manage firewall updates and audits. This service reduced that load and helped us maintain a stronger security posture.' },
  ],

  faqTitle: 'FAQs About Managed Firewall Security',
  faq: [
    { question: 'What is a managed firewall service?', answer: 'A managed firewall service handles the setup, configuration, monitoring, and maintenance of your firewall so your network stays protected without requiring constant internal effort.' },
    { question: 'How is managed firewall different from a regular firewall?', answer: 'A regular firewall is a tool. Managed firewall includes expert oversight—policy management, monitoring, updates, and response, ensuring the firewall works effectively at all times.' },
    { question: 'Will managed firewall affect network performance?', answer: 'No. Firewall policies are designed and optimized to balance security and performance, ensuring protection without disrupting business operations.' },
    { question: 'Can managed firewall support remote and hybrid work environments?', answer: 'Yes. Managed firewall services support secure VPN access, remote users, branch offices, and hybrid cloud environments.' },
    { question: 'Do you provide 24/7 monitoring and support?', answer: 'Yes. Our managed firewall services include continuous monitoring and backend support to detect and respond to issues promptly.' },
    { question: 'How are firewall rules and policies managed?', answer: 'Firewall rules are reviewed, updated, and optimized regularly based on network changes, security requirements, and threat intelligence.' },
    { question: 'Can managed firewall help with compliance and audits?', answer: 'Yes. Firewall logging, policy control, and regular audits help support compliance and audit requirements.' },
    { question: 'Is the service suitable for small and large businesses?', answer: 'Yes. Managed firewall services are scalable and can be tailored for both growing businesses and complex enterprise networks.' },
  ],

  ctaBand2: {
    title: 'Ready to strengthen your network security?',
    description: 'Get Started with Managed Firewall Services',
    ctaPrimary: { text: 'Get Started', link: '/contact' },
    ctaSecondary: { text: 'Talk to an Expert', link: '/contact' },
  },
};
