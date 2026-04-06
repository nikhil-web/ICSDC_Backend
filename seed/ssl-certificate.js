// seed/ssl-certificate.js
// Field name rules (CLAUDE.md):
//   ds.icon-card        → { title, desc }          (NOT description)
//   ds.ssl-type         → { title, subtitle, desc, ctaText, ctaLink }
//   ds.cta-link         → { text, link }
//   ds.cta-band         → { title, description, ctaPrimary, ctaSecondary }
//   ds.testimonial-card → { name, role, company, quote }
//   ds.faq-entry        → { question, answer }

module.exports = {
  seo: {
    metaTitle: 'SSL Certificates for Website Security | ICSDC Secure Hosting',
    metaDescription: 'Protect your website with ICSDC SSL Certificates. Get fast issuance, strong encryption, full browser trust, and secure HTTPS for all domains and subdomains.',
  },

  heroTitle: 'Encrypt, Authenticate & Secure - With ICSDC SSL Certificates',
  heroSubtitle: 'Encrypt Every Connection and Safeguard Sensitive Information',
  heroDescription: 'Protect sensitive data, boost visitor trust, and enhance your SEO with a reliable SSL Certificate. At ICSDC, we offer fast and affordable SSL solutions for single domains, multiple domains, and subdomains - ensuring your website stays encrypted and secure at all times.',
  heroCtaPrimary: { text: 'Get Your SSL Certificate Now', link: '#contact' },
  heroCtaSecondary: { text: 'View SSL Plans', link: '#pricing' },

  pillars: [
    { title: 'Advanced Data Encryption', desc: 'Keep every interaction on your website fully encrypted with industry-standard 256-bit protection - safeguarding passwords, payments, forms, and user information from threats.' },
    { title: 'Boost Trust & Brand Credibility', desc: 'Show your visitors the secure padlock symbol and HTTPS. This instantly builds confidence, reduces bounce rates, and increases conversions by proving your website is trustworthy.' },
    { title: 'SEO & Browser Compliance Advantage', desc: 'Google prioritizes secure websites. With ICSDC SSL, you meet modern browser requirements, avoid "Not Secure" warnings, and gain better visibility on search engines.' },
    { title: 'Fast Issuance & Easy Installation', desc: 'Get your SSL certificate activated quickly with our streamlined setup process. ICSDC ensures smooth installation, renewal reminders, and full technical support.' },
  ],

  pricingTitle: 'SSL Pricing That Secures Without Complication',
  pricingDesc: 'Choose the right level of encryption for your website without overpaying or overthinking. Our SSL plans are simple, flexible, and designed to protect your users at every stage.',

  offersLabel: "What's Included",
  offersTitle: 'What ICSDC SSL Certificate Offers?',
  offersCards: [
    { title: 'Improved Search Visibility', desc: 'Secure websites are favored by search engines, helping you rank better and attract more organic traffic.' },
    { title: 'Powerful Encryption Standards', desc: 'Your data is protected with cutting-edge encryption technology, ensuring safe communication across every page.' },
    { title: 'Visible Security Assurance', desc: 'Your site displays a secure HTTPS badge, giving visitors instant confidence that their information is protected.' },
    { title: 'Verified Security Seal', desc: 'Showcase a dedicated security seal that reinforces trust and increases conversion rates.' },
    { title: 'Risk-Free Purchase Window', desc: 'Explore any SSL plan with confidence - enjoy a hassle-free money-back period if it doesn\'t fit your needs.' },
  ],

  sslTypesTitle: 'More ICSDC SSL Certificate Options',
  sslTypesSubtitle: 'Installed and configured by our experts or by you - your choice.',
  sslTypes: [
    {
      title: 'Organization Validation (OV) SSL Certificates',
      subtitle: 'For Growing Businesses',
      desc: 'Ideal for growing businesses, OV SSL Certificates verify your company\'s identity, adding a strong layer of credibility. Visitors can see verified business details, increasing trust and confidence in every interaction.',
      ctaText: 'Contact Us',
      ctaLink: '#contact',
    },
    {
      title: 'Extended Validation (EV) SSL Certificates',
      subtitle: 'Maximum Trust',
      desc: 'For brands that demand maximum trust, EV SSL Certificates offer the highest level of verification. Recommended for high-traffic websites, e-commerce platforms, and businesses handling sensitive customer data - ensuring unmatched authenticity and security.',
      ctaText: 'Contact Us',
      ctaLink: '#contact',
    },
  ],

  typesGlanceTitle: 'SSL Certificate Types at a Glance',
  typesGlanceCards: [
    { title: 'Domain Validation (DV)', desc: 'Fastest issuance in minutes. Verifies domain ownership only. Best for blogs and personal sites. No business verification required.' },
    { title: 'Organization Validation (OV)', desc: 'Verifies domain and business info. Takes 1-3 days. Ideal for business websites needing added credibility and visitor trust.' },
    { title: 'Extended Validation (EV)', desc: 'Full legal business verification. Takes 1-7 days. Best for e-commerce, banking, and sites handling sensitive customer data.' },
  ],

  powerLabel: 'Why SSL Matters',
  powerTitle: 'The Power of Securing Your Website with ICSDC',
  powerCards: [
    { title: 'Real-Time Security Protection', desc: 'ICSDC SSL Certificates ensure encrypted connections 24/7, preventing data theft, interception, and malicious attacks in real time.' },
    { title: 'Instant Trust Boost for Your Brand', desc: 'The moment visitors see HTTPS and the secure padlock, they\'re more likely to stay, browse, and convert - giving your brand an immediate credibility lift.' },
    { title: 'Higher Search Engine Visibility', desc: 'Search engines reward secure websites. ICSDC SSL helps improve ranking signals, making it easier for your audience to find you.' },
    { title: 'Seamless Compatibility Across All Devices', desc: 'Your website stays fully secure and accessible on all browsers and devices, including older systems - no broken padlocks or warning messages.' },
    { title: 'Strong Authentication of Your Business', desc: 'Beyond encryption, ICSDC SSL Certificates validate your identity, helping customers verify that they\'re interacting with the real, legitimate business.' },
    { title: 'Stronger Conversion Rates & Reduced Cart Abandonment', desc: 'Secure badges and trust indicators play a big role in buying decisions - especially for e-commerce. SSL helps turn hesitant visitors into paying customers.' },
    { title: 'Smooth Setup with Expert Support', desc: 'ICSDC provides fast activation, configuration assistance, installation guidance, and renewal reminders - making SSL management completely stress-free.' },
    { title: 'Support for All Domain Structures', desc: 'Whether it\'s a single domain, multiple domains, or all your subdomains, ICSDC offers flexible SSL options (DV, OV, EV, Wildcard, Multi-Domain) to match your exact needs.' },
  ],

  whyLabel: 'Why ICSDC',
  whyTitle: 'Why Choose ICSDC SSL Certificates',
  whyDesc: 'At ICSDC, our SSL solutions are engineered to deliver unmatched security, trust, and performance - ensuring your website stays protected, credible, and ready for growth.',
  whyCards: [
    { title: 'Enhanced Encryption & Data Protection', desc: 'ICSDC SSL Certificates deliver robust, industry-grade encryption that protects every data exchange on your website - keeping login details, financial information, and customer data safe from interception.' },
    { title: 'Verified Trust & Authentic Business Identity', desc: 'With ICSDC\'s validation options, your visitors instantly recognize that they\'re dealing with a legitimate, authenticated business - strengthening your brand\'s credibility and online reputation.' },
    { title: 'Superior Browser Compatibility & Security Indicators', desc: 'ICSDC SSL works seamlessly across all major browsers and devices. From padlocks to trust seals, your site displays clear security cues that reassure users at every touchpoint.' },
    { title: 'Stronger HTTPS Security for User Confidence', desc: 'Your website automatically shifts to HTTPS, removing "Not Secure" warnings and offering a smooth, safe browsing experience that keeps users on your site longer.' },
    { title: 'Phishing & Spoofing Protection', desc: 'ICSDC SSL Certificates authenticate your domain identity, making it significantly harder for attackers to impersonate your brand and launch phishing scams.' },
    { title: 'SEO Advantage & Better Conversions', desc: 'Secure websites rank higher. ICSDC SSL strengthens your SEO signals and increases conversions by ensuring visitors feel safe completing purchases, submitting forms, or sharing information.' },
    { title: 'Flexible Validation Levels for Every Need', desc: 'Whether you need DV for quick setup, OV for business authentication, or EV for maximum trust and identity display - ICSDC offers every validation tier to match your security goals.' },
    { title: 'Reliable Support & Seamless Installation', desc: 'ICSDC provides expert assistance at every step - from issuance to installation - ensuring your SSL is activated quickly, correctly, and without technical hurdles.' },
  ],

  ctaBand1: {
    title: 'Secure Your Website with ICSDC SSL',
    description: 'Get fast issuance, strong encryption, full browser trust, and secure HTTPS for all domains and subdomains. Our experts handle everything from activation to installation.',
    ctaPrimary: { text: 'Get Your SSL Certificate Now', link: '#contact' },
    ctaSecondary: { text: 'View SSL Plans', link: '#pricing' },
  },

  testimonialTitle: 'Read ICSDC SSL Certificates Client Stories',
  testimonials: [
    { name: 'Priya Malhotra', role: 'IT Manager', company: 'E-Commerce Retail Company', quote: 'We switched to ICSDC\'s SSL after facing constant browser security warnings. Their team installed it within hours, and our checkout abandonment dropped noticeably. The trust indicators alone made a massive difference for our customers.' },
    { name: 'Raghav Desai', role: 'Founder', company: 'Digital Marketing Agency', quote: 'As an agency handling multiple client sites, security is a top priority. ICSDC\'s Multi-Domain SSL saved us both time and money. The support team walked us through every step. Smoothest SSL experience we\'ve had so far.' },
    { name: 'Harleen Kaur', role: 'Operations Head', company: 'SaaS Product Company', quote: 'We needed EV SSL for higher credibility. ICSDC handled the documentation quickly and guided us till verification was complete. Our customers immediately felt more confident signing up for our platform.' },
    { name: 'Arjun Bhatia', role: 'Technical Lead', company: 'Financial Services Startup', quote: 'Our platform deals with sensitive customer data, so encryption was non-negotiable. ICSDC delivered powerful SSL protection with zero downtime during installation. The transition to HTTPS was seamless.' },
    { name: 'Sneha Rao', role: 'Co-Founder', company: 'EdTech Training Institute', quote: 'Before ICSDC, our site often showed \'Not Secure\', which affected student registrations. After installing their SSL, the site feels more professional, and our form submission rate has significantly improved.' },
  ],

  faqTitle: 'FAQs about ICSDC SSL Certificates',
  faq: [
    { question: 'What is an SSL Certificate and why do I need it?', answer: 'An SSL Certificate encrypts the data exchanged between your website and its visitors, preventing unauthorized access. It\'s essential for protecting sensitive information, building trust, and avoiding browser "Not Secure" warnings.' },
    { question: 'How long does it take to issue an SSL Certificate from ICSDC?', answer: 'DV SSL Certificates can be issued within minutes, while OV and EV SSL may take additional verification time. In most cases, issuance is completed within a few hours to a couple of days depending on the validation level.' },
    { question: 'Will ICSDC help me install and configure the SSL Certificate?', answer: 'Yes. ICSDC provides full assistance with installation, configuration, and renewal reminders. You can also choose to install it yourself if you prefer.' },
    { question: 'Will my website downtime be affected during SSL installation?', answer: 'No. SSL installation at ICSDC is seamless and does not require downtime. Your site remains accessible throughout the process.' },
    { question: 'What\'s the difference between DV, OV, and EV SSL Certificates?', answer: 'DV (Domain Validation): Quick, basic encryption for standard websites. OV (Organization Validation): Verifies business identity for added trust. EV (Extended Validation): Highest verification level with strong trust indicators.' },
    { question: 'Can I secure multiple domains or subdomains with one SSL certificate?', answer: 'Yes. ICSDC offers Multi-Domain SSL and Wildcard SSL options that can protect multiple domains or unlimited subdomains under a single certificate.' },
    { question: 'Will an SSL Certificate improve my website\'s search ranking?', answer: 'Yes. Search engines prefer secure HTTPS websites, and having an SSL Certificate can contribute to better visibility and higher ranking potential.' },
    { question: 'What happens if I choose the wrong SSL plan?', answer: 'No worries. ICSDC provides a hassle-free money-back period, allowing you to switch or upgrade your plan without risk.' },
  ],
};
