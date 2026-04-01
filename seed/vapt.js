// seed/vapt.js
// Field name rules (CLAUDE.md):
//   ds.icon-card       → { title, desc }          (NOT description)
//   ds.numbered-tip    → { title, description, order }   (NOT desc)
//   ds.cta-link        → { text, link }
//   ds.cta-band        → { title, description, ctaPrimary, ctaSecondary }
//   ds.testimonial-card → { name, role, company, quote }
//   ds.faq-entry       → { question, answer }

module.exports = {
  seo: {
    metaTitle: 'VAPT Security Services | Real-World Penetration Testing by ICSDC',
    metaDescription: 'ICSDC provides practical VAPT services to identify, exploit, and fix security gaps across your digital infrastructure.',
  },

  heroTitle: 'Hackers Don\'t Ask for Permission - Is Your System Ready?',
  heroSubtitle: 'A real-world approach to finding, exploiting, and fixing security gaps across your digital infrastructure',
  heroDescription: 'Our VAPT services uncover hidden vulnerabilities by simulating real-world attacks across your applications, networks, and cloud environments. You get clear, prioritized insights with practical fixes - not just technical reports.',
  heroCtaPrimary: { text: 'Schedule a VAPT Assessment', link: '/contact' },
  heroCtaSecondary: { text: 'Learn More', link: '#vapt-offerings' },

  pillars: [
    { title: 'Real-World Attack Simulation', desc: 'We don\'t rely only on automated scans. Our experts mimic real attacker techniques to uncover vulnerabilities that tools often miss.' },
    { title: 'Actionable & Prioritized Reports', desc: 'Get clear risk rankings with step-by-step remediation guidance, helping your team fix what matters most, fast.' },
    { title: 'Compliance-Ready Security Testing', desc: 'Our VAPT assessments align with industry standards and regulatory requirements, making audits and compliance easier.' },
    { title: 'Coverage Across Your Entire Stack', desc: 'From web and mobile apps to networks, APIs, and cloud infrastructure, we test everything attackers can reach.' },
  ],

  whyLabel: 'WHY ICSDC VAPT',
  whyTitle: 'Why ICSDC for Your VAPT Needs',
  whyCards: [
    { title: 'Real-World Exploit Validation', desc: 'We don\'t stop at identifying vulnerabilities. Our security experts actively validate whether discovered weaknesses can be exploited in real attack scenarios, helping you clearly distinguish theoretical risks from genuine, high-impact threats.' },
    { title: 'Manual + Automated Testing Approach', desc: 'ICSDC combines industry-leading automated vulnerability scanners with in-depth manual testing. This hybrid approach minimizes false positives, uncovers complex attack chains, and reveals logic flaws that automated tools alone often miss.' },
    { title: 'OWASP & Industry Framework Alignment', desc: 'All VAPT engagements follow globally accepted security standards such as OWASP Top 10, SANS, and NIST. This ensures your security posture is measured against recognized benchmarks while supporting regulatory and audit requirements.' },
    { title: 'Network & Infrastructure Penetration Testing', desc: 'We assess both internal and external network surfaces, testing exposed services, open ports, firewall rules, and system configurations to identify weaknesses that attackers commonly target during lateral movement and privilege escalation.' },
    { title: 'Application & API Security Testing', desc: 'Our team performs deep testing of web applications, mobile apps, and APIs, focusing on authentication flaws, access control issues, injection vulnerabilities, business logic errors, and insecure data handling.' },
    { title: 'Cloud & Configuration Security Review', desc: 'We evaluate cloud environments across platforms such as AWS and Azure, identifying misconfigured identity policies, exposed storage, insecure services, and gaps that could lead to unauthorized access or data leaks.' },
    { title: 'Risk-Based Severity Classification', desc: 'Each finding is categorized based on impact, exploitability, and business risk. This allows your technical and security teams to prioritize remediation efforts efficiently and focus on vulnerabilities that matter most.' },
    { title: 'Clear Remediation & Retesting Support', desc: 'Our reports include detailed remediation steps tailored to your environment. Post-fix retesting is available to verify that vulnerabilities are properly resolved before production rollout.' },
  ],

  whatTitle: 'What VAPT Means for Your Security',
  whatDesc: 'VAPT (Vulnerability Assessment and Penetration Testing) is a structured security exercise that shows how attackers see your systems. Instead of guessing where risks exist, VAPT identifies weaknesses and actively tests how far an attacker could go if those gaps were exploited. At ICSDC, VAPT combines two critical layers: Vulnerability Assessment to detect security gaps across applications, networks, and infrastructure; and Penetration Testing to simulate real attacks and validate which vulnerabilities pose real business risk. The outcome is not just visibility, but clarity - clear insights into your security posture, real-world attack paths, and actionable steps to strengthen defenses before a breach occurs.',

  whyChooseLabel: 'WHY CHOOSE ICSDC',
  whyChooseTitle: 'Why Choose ICSDC for VAPT?',
  whyChooseCards: [
    { title: 'Trusted Cybersecurity Experts', desc: 'Our team combines certified cybersecurity professionals with deep hands-on experience across industries and technologies. We focus on real threats, not just surface-level checks.' },
    { title: 'Practical Insights, Not Just Reports', desc: 'You\'ll receive detailed findings and clear, actionable guidance you can implement, prioritized by real business impact. No vague jargon, no filler.' },
    { title: 'Customized Testing, Every Time', desc: 'No one-size-fits-all solutions here: we tailor the VAPT scope to your architecture, regulatory needs, and risk profile. Whether you\'re protecting APIs, cloud environments, or critical infrastructure, we adapt our approach accordingly.' },
    { title: 'Proactive Protection You Can Act On', desc: 'Identifying vulnerabilities is only half the battle. We help you understand what they mean for your business and how to fix them with confidence, boosting resilience before threats hit.' },
    { title: 'Aligned With Modern Threats & Compliance', desc: 'Our services align with global standards and frameworks, helping you strengthen security posture and stay prepared for audits, compliance assessments, and customer assurance reviews.' },
    { title: 'Ongoing Partnership, Not One-Time Engagement', desc: 'We\'re not just testers, we\'re your security partner. From follow-up support to retesting and improvement planning, we stay aligned with your evolving risk landscape.' },
    { title: 'We Treat Your Security Like It\'s Our Own', desc: 'At ICSDC, VAPT isn\'t just another test, it\'s a strategic defense initiative backed by real expertise, proven methodology, and human-first delivery.' },
  ],

  ctaBand1: {
    title: 'Ready to elevate your security posture?',
    description: 'Partner with ICSDC for proactive VAPT that delivers clarity, protection, and confidence.',
    ctaPrimary: { text: 'Request a personalized VAPT assessment plan today', link: '/contact' },
    ctaSecondary: null,
  },

  offeringsLabel: 'OUR OFFERINGS',
  offeringsTitle: 'VAPT Services We Offer',
  offeringsCards: [
    { title: 'Vulnerability Assessment', desc: 'We identify security weaknesses across your systems using structured scanning and analysis. This helps uncover misconfigurations, outdated components, and known vulnerabilities before they can be exploited.' },
    { title: 'Penetration Testing', desc: 'Our experts simulate real-world attacks to validate how far an attacker could actually go. This helps confirm which vulnerabilities are truly exploitable and pose real business risk.' },
    { title: 'Web Application VAPT', desc: 'Security testing for web applications to identify issues such as authentication flaws, access control weaknesses, injection vulnerabilities, and logic gaps that attackers commonly target.' },
    { title: 'Network & Infrastructure VAPT', desc: 'Assessment of internal and external networks, servers, firewalls, and exposed services to detect weaknesses that could allow unauthorized access or lateral movement.' },
    { title: 'API & Mobile Application Testing', desc: 'Focused testing of APIs and mobile apps to identify insecure endpoints, improper authentication, data exposure, and configuration issues.' },
    { title: 'Cloud Security Assessment', desc: 'Review of cloud environments to identify risky configurations, identity and access issues, and exposed services across modern cloud setups.' },
  ],

  processLabel: 'OUR PROCESS',
  processTitle: 'How Our VAPT Process Works',
  // ds.numbered-tip uses 'description' (NOT 'desc')
  steps: [
    { title: 'Scope & Planning', description: 'We begin by defining what needs to be tested, such as applications, networks, APIs, or cloud environments. This ensures the assessment stays focused on the systems that matter most to your business.', order: 1 },
    { title: 'Asset Discovery & Reconnaissance', description: 'Our team maps your digital assets and identifies possible entry points. This step helps us understand how your systems are exposed and how attackers might attempt to access them.', order: 2 },
    { title: 'Vulnerability Identification', description: 'Using a mix of automated tools and expert analysis, we identify security weaknesses such as misconfigurations, outdated components, and common vulnerabilities across your environment.', order: 3 },
    { title: 'Penetration Testing', description: 'We simulate real-world attack scenarios to validate which vulnerabilities can actually be exploited. This reveals the true impact of security gaps and how far an attacker could go.', order: 4 },
    { title: 'Risk Analysis & Reporting', description: 'Findings are clearly documented with severity levels, potential impact, and practical remediation steps. Reports are designed to be useful for both technical teams and decision-makers.', order: 5 },
    { title: 'Remediation & Retesting', description: 'Once fixes are applied, we offer retesting to confirm vulnerabilities are properly resolved, helping ensure your security posture is genuinely strengthened.', order: 6 },
  ],

  testimonialTitle: 'What Our Clients Say About ICSDC VAPT',
  testimonials: [
    { name: 'Pooja Nair', role: 'Compliance Manager', company: 'Fintech Company', quote: 'We needed a security assessment that would stand up during audits. The process was structured, transparent, and easy to follow. The final report made compliance discussions much smoother.' },
    { name: 'Siddharth Jain', role: 'Head of IT', company: 'E-commerce Business', quote: 'What stood out was that the testing felt realistic, not automated or generic. The findings were relevant to our application and helped us improve security in areas we hadn\'t considered earlier.' },
    { name: 'Meenal Deshpande', role: 'Cloud Operations Lead', company: 'Technology Startup', quote: 'As we scaled our cloud setup, we wanted to be sure we weren\'t carrying hidden risks. The VAPT helped us identify configuration issues early and secure our environment with confidence.' },
    { name: 'Rahul Khanna', role: 'Engineering Manager', company: 'Enterprise Services Company', quote: 'The recommendations were practical and easy for our developers to understand. Instead of just listing problems, the team helped us know what to fix first and why it mattered.' },
  ],

  faqTitle: 'FAQs About ICSDC VAPT Services',
  faq: [
    { question: 'What is VAPT and why is it important?', answer: 'VAPT helps identify security weaknesses and validates how they could be exploited in real-world attacks. It gives you a clear understanding of actual risks so you can fix issues before they are misused.' },
    { question: 'How is VAPT different from a regular vulnerability scan?', answer: 'A vulnerability scan only detects potential issues. VAPT goes further by validating exploitability through controlled penetration testing, helping prioritize real threats over theoretical ones.' },
    { question: 'Which systems can be covered under a VAPT assessment?', answer: 'VAPT can be performed on web applications, mobile apps, APIs, networks, servers, cloud environments, and internal infrastructure, based on the agreed scope.' },
    { question: 'Will VAPT affect my live systems or operations?', answer: 'Testing is conducted in a controlled manner to avoid disruption. Any high-risk actions are discussed in advance, and assessments are planned to ensure system stability.' },
    { question: 'How often should VAPT be performed?', answer: 'VAPT should be conducted at least annually, and whenever there are major changes such as new deployments, code updates, integrations, or infrastructure upgrades.' },
    { question: 'Do you provide remediation guidance after testing?', answer: 'Yes. Each finding includes clear remediation steps and prioritization, enabling technical teams to fix vulnerabilities efficiently.' },
    { question: 'Can VAPT help with compliance and audits?', answer: 'Yes. VAPT supports regulatory and audit requirements by providing documented security validation aligned with industry standards.' },
    { question: 'Is retesting available after fixes are applied?', answer: 'Yes. Retesting can be performed to confirm that vulnerabilities have been properly resolved and no new risks remain.' },
  ],

  ctaBand2: {
    title: 'Take Control of Your Security Before It\'s Tested for You',
    description: 'Every system has risks. Knowing them early gives you the power to fix them on your terms. Let our experts help you uncover real vulnerabilities and strengthen your security with clarity and confidence.',
    ctaPrimary: { text: 'Start Your VAPT Assessment Today', link: '/contact' },
    ctaSecondary: { text: 'Talk to an Expert', link: '/contact' },
  },
};
