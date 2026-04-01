/**
 * Seed data — GPU Cloud Hosting Page
 * Schema: api::gpu-cloud-hosting-page.gpu-cloud-hosting-page
 *
 * Component field reference:
 *   ds.seo-meta         → { metaTitle, metaDescription }
 *   ds.cta-link         → { text, link }
 *   ds.icon-card        → { icon, title, desc, order }          ← "desc" not "description"
 *   ds.pricing-plan     → { tier, price, currency, period, tagline, isFeatured, badge,
 *                           features:[{label}], ctaText, ctaStyle, order }
 *   ds.cta-band         → { title, description, ctaPrimary:{text,link}, ctaSecondary:{text,link} }
 *   ds.testimonial-card → { name, title, company, quote, rating }
 *   ds.faq-entry        → { question, answer, order }
 */

module.exports = {
  seo: {
    metaTitle:       'GPU Cloud Hosting India | AI & ML GPU Servers | ICSDC',
    metaDescription: 'Enterprise-grade GPU cloud hosting for AI, ML, rendering and HPC workloads. NVIDIA A100, H100, AMD Instinct GPUs on demand. Fully managed, transparent pricing.',
  },

  heroEyebrow:        '⚡ GPU Cloud Hosting',
  heroTitle:          'GPU Cloud Hosting Built for AI, ML & High-Compute Workloads',
  heroSubtitle:       'Get On-Demand GPU Power With Zero Hardware Costs or Complexity',
  heroDescription:    'Get instant access to powerful GPU servers engineered for AI, ML, analytics and high-performance computing — without managing hardware or dealing with complexity.',
  heroTopBadge:       '⚡ NVIDIA & AMD GPUs',
  heroStatusTitle:    'Tier III & IV DCs',
  heroStatusSubtitle: 'Enterprise GPU Clusters',

  heroCtaPrimary:   { text: 'Start Your GPU Cloud Now', link: '/contact'   },
  heroCtaSecondary: { text: 'View GPU Plans',            link: '#gpu-plans' },

  pillars: [
    { order: 0, icon: 'cpu',         title: 'Ultra-Fast GPU Performance',   desc: 'Accelerate training, inference, rendering, and data workloads with industry-leading GPUs.' },
    { order: 1, icon: 'trending-up', title: 'Scalable Compute on Demand',   desc: 'Scale from a single GPU to multi-GPU clusters instantly as your workloads grow.' },
    { order: 2, icon: 'shield',      title: 'Fully Managed & Secure',       desc: 'Enjoy automatic updates, monitoring, and enterprise-grade security without any manual effort.' },
    { order: 3, icon: 'dollar-sign', title: 'Cost-Efficient Usage Billing', desc: 'Pay only for the GPU power you use with transparent, predictable pricing.' },
  ],

  plansLabel:    'GPU PLANS',
  plansTitle:    'Flexible GPU Plans for Modern AI & HPC',
  plansSubtitle: 'Access enterprise-grade GPUs with pricing that adapts to your workload — from single-GPU testing to large multi-node clusters.',

  plans: [
    {
      order: 0, tier: 'GPU Starter', price: '9,999', currency: '&#8377;', period: '/mo',
      tagline: 'Entry-level GPU cloud for AI experiments and rendering',
      isFeatured: false, badge: '',
      features: [
        { label: '1× NVIDIA A40 (24 GB VRAM)' },
        { label: '8 vCPU / 32 GB RAM' },
        { label: '500 GB NVMe SSD' },
        { label: '5 TB Bandwidth' },
        { label: 'Pre-Configured AI Stack' },
        { label: '24/7 Support' },
      ],
      ctaText: 'Get Started', ctaStyle: 'outline',
    },
    {
      order: 1, tier: 'GPU Pro', price: '24,999', currency: '&#8377;', period: '/mo',
      tagline: 'Full-featured GPU cloud for AI training and ML workloads',
      isFeatured: true, badge: 'Most Popular',
      features: [
        { label: '1× NVIDIA A100 (40 GB HBM2e)' },
        { label: '16 vCPU / 64 GB RAM' },
        { label: '1 TB NVMe SSD' },
        { label: '10 TB Bandwidth' },
        { label: 'PyTorch / TF / CUDA Ready' },
        { label: 'Priority 24/7 Support' },
        { label: 'Free Migration' },
        { label: 'Automated Backups' },
      ],
      ctaText: 'Get Started', ctaStyle: 'primary',
    },
    {
      order: 2, tier: 'GPU Enterprise', price: '59,999', currency: '&#8377;', period: '/mo',
      tagline: 'Multi-GPU clusters for large-scale AI and HPC enterprise workloads',
      isFeatured: false, badge: '',
      features: [
        { label: 'Multi-GPU Cluster (A100 / H100)' },
        { label: '32+ vCPU / 128+ GB RAM' },
        { label: '2 TB NVMe SSD' },
        { label: 'Unlimited Bandwidth' },
        { label: 'Custom Architecture Design' },
        { label: 'Dedicated Account Manager' },
        { label: '99.99% Uptime SLA' },
        { label: 'Compliance Support' },
      ],
      ctaText: 'Contact Sales', ctaStyle: 'outline',
    },
  ],

  featuresLabel:    'ENTERPRISE FEATURES',
  featuresTitle:    'What You Get With ICSDC\'s Enterprise-Grade GPU Cloud',
  featuresSubtitle: 'ICSDC GPU Cloud delivers world-class GPU performance with enterprise infrastructure and full management.',

  features: [
    { order: 0, icon: 'cpu',         title: 'Enterprise-Grade NVIDIA & AMD GPUs',           desc: 'Access A100, H100, RTX-class and AMD Instinct GPUs engineered for high-performance AI and ML workloads.' },
    { order: 1, icon: 'zap',         title: 'Instant Deployment With Pre-Configured Envs',   desc: 'Launch GPU instances in seconds using fully optimized environments for PyTorch, TensorFlow, CUDA, JAX.' },
    { order: 2, icon: 'hard-drive',  title: 'High-Speed NVMe Storage & Low-Latency Network', desc: 'Ultra-fast data access and high-throughput connectivity ideal for large datasets and batch training.' },
    { order: 3, icon: 'dollar-sign', title: 'Pay-As-You-Go & Transparent Pricing',           desc: 'Only pay for GPU power you consume with clear, predictable billing that eliminates hidden costs.' },
    { order: 4, icon: 'settings',    title: 'Fully Managed Infrastructure',                  desc: 'ICSDC handles updates, monitoring, optimization, and security so you focus on model development.' },
    { order: 5, icon: 'shield',      title: 'Secure, Isolated & Compliant Environment',      desc: 'Fully protected, isolated environments with enterprise encryption, DDoS protection, and advanced firewalls.' },
  ],

  builtinLabel:    'BUILT-IN FEATURES',
  builtinTitle:    'Built-In GPU Cloud Features That Accelerate Every Workload',
  builtinSubtitle: 'Everything you need to build, deploy, and scale GPU-powered applications from day one.',

  builtinFeatures: [
    { order: 0, icon: 'activity',   title: 'Cloud Monitoring',   desc: 'Real-time performance insights to proactively optimize and manage your GPU workloads.' },
    { order: 1, icon: 'key',        title: 'SSH Key Access',     desc: 'Secure, passwordless authentication ensures safe and seamless access to your cloud environments.' },
    { order: 2, icon: 'save',       title: 'Automated Backups',  desc: 'Reliable, scheduled backups that protect your data and enable instant recovery when needed.' },
    { order: 3, icon: 'database',   title: 'Object Storage',     desc: 'Scalable, cost-efficient storage designed for AI datasets, logs, media files, and unstructured data.' },
    { order: 4, icon: 'hard-drive', title: 'Block Storage',      desc: 'High-performance NVMe block storage ideal for databases, applications, and large training workloads.' },
    { order: 5, icon: 'sliders',    title: 'Load Balancers',     desc: 'Intelligent traffic distribution ensures high availability and consistent app performance.' },
    { order: 6, icon: 'copy',       title: 'Snapshots',          desc: 'Point-in-time instance copies for instant rollbacks, migrations, or environment cloning.' },
    { order: 7, icon: 'shield',     title: 'Cloud Firewalls',    desc: 'Advanced network-level protection securing your GPU workloads from threats and unauthorized access.' },
  ],

  ctaBand1: {
    title:       'Unlock the Power of ICSDC GPU Cloud Today',
    description: 'Enterprise GPU servers from ₹9,999/month. Deploy PyTorch, TensorFlow, and CUDA environments in seconds.',
    ctaPrimary:   { text: 'Launch Your GPU Cloud Now', link: '/contact'         },
    ctaSecondary: { text: 'Call +91 98109 58857',      link: 'tel:+919810958857' },
  },

  portfolioLabel:    'GPU PORTFOLIO',
  portfolioTitle:    'Next-Gen GPU Power for Modern Cloud Computing',
  portfolioSubtitle: 'Our GPU lineup supports everything from deep learning and LLM training to HPC simulations, rendering, and large-scale analytics.',

  gpuPortfolio: [
    { order: 0, icon: 'cpu', title: 'AMD Instinct™ MI355X',          desc: 'Designed for advanced AI pipelines — remarkable memory bandwidth for rapid processing of large datasets and complex models.' },
    { order: 1, icon: 'cpu', title: 'NVIDIA HGX B200',                desc: 'Engineered for modern AI innovation — ideal for training next-generation generative models and multi-node AI clusters.' },
    { order: 2, icon: 'cpu', title: 'AMD Instinct™ MI325X & MI300X', desc: 'New benchmark in energy-efficient, high-throughput computing — perfect for HPC, scientific simulations, and deep learning.' },
    { order: 3, icon: 'cpu', title: 'NVIDIA GH200 Grace Hopper™',    desc: 'Combining CPU and GPU acceleration — breakthrough performance for large-scale inference and LLM training.' },
    { order: 4, icon: 'cpu', title: 'NVIDIA HGX H100 & H200',        desc: 'The gold standard for AI training — exceptional throughput for AI training, analytics, and HPC pipelines.' },
    { order: 5, icon: 'cpu', title: 'NVIDIA A100 (HGX & PCIe)',      desc: 'Trusted across the AI community — balanced performance for simulation, advanced analytics, and deep learning.' },
  ],

  whyLabel:    'WHY ICSDC GPU',
  whyTitle:    'Why Choose ICSDC for GPU Cloud?',
  whySubtitle: 'ICSDC delivers enterprise-class GPU performance with the trust, transparency, and expert support your workloads demand.',

  whyCards: [
    { order: 0, icon: 'cpu',         title: 'Enterprise-Grade GPU Performance',    desc: 'Latest NVIDIA and AMD accelerators in Tier III & IV data centers — unmatched speed and compute for AI, ML, HPC.' },
    { order: 1, icon: 'dollar-sign', title: 'Transparent, Flexible Pricing',      desc: 'No hidden fees, no surprise invoices — predictable, cost-efficient GPU resources built for every budget.' },
    { order: 2, icon: 'zap',         title: 'Instant Deployment',                  desc: 'GPU instances launch in seconds with pre-built AI/ML environments — zero setup time.' },
    { order: 3, icon: 'settings',    title: 'Fully Managed Infrastructure',        desc: 'Our team manages all updates, monitoring, and security so you focus entirely on your models and applications.' },
    { order: 4, icon: 'globe',       title: 'Global Availability & 24/7 Support',  desc: 'Deploy GPU workloads across global data centers with round-the-clock expert support.' },
    { order: 5, icon: 'code',        title: 'API & Terraform Support',            desc: 'Fully control, automate, and scale instances through our API and Terraform integrations — ideal for DevOps teams.' },
  ],

  testimonialTitle: 'What Our GPU Cloud Clients Say',
  faqTitle:         'FAQs About ICSDC GPU Cloud',
  faqContactTitle:  'Talk to Our GPU Cloud Experts',
  faqContactDesc:   'Our GPU cloud engineers are available 24/7 for consultations, architecture reviews, and deployments.\n\n📞 +91 98109 58857',

  faq: [
    { order: 0, question: 'What types of GPUs does ICSDC offer?',       answer: 'ICSDC provides enterprise-grade NVIDIA and AMD GPUs including A100, H100, A40, AMD MI355X, MI300X — optimized for AI training, inference, rendering, HPC, and data-intensive workloads.' },
    { order: 1, question: 'Who should use ICSDC GPU Cloud?',            answer: 'Our GPU cloud is ideal for AI developers, researchers, data scientists, enterprises running high-compute tasks, creative studios, and teams needing scalable GPU resources without hardware investment.' },
    { order: 2, question: 'Can I scale GPU resources whenever I need?', answer: 'Yes, ICSDC allows seamless scaling from a single GPU instance to large multi-GPU clusters, ensuring your workloads can grow without disruption.' },
    { order: 3, question: 'How secure is ICSDC GPU Cloud?',             answer: 'Workloads are protected with multi-layer security including DDoS mitigation, firewalls, private networking, encryption, and highly secure Tier III & IV data centers.' },
    { order: 4, question: 'Do you support APIs or automation tools?',   answer: 'Yes, you can fully control, automate, and scale instances through our API and Terraform support, making ICSDC ideal for DevOps-driven teams.' },
  ],

  ctaBand2: {
    title:       'Launch Your AI & ML Workloads on ICSDC GPU Cloud',
    description: 'Enterprise-grade GPU hosting from ₹9,999/month. NVIDIA A100, H100, and AMD Instinct on demand.',
    ctaPrimary:   { text: 'Start GPU Cloud Now',      link: '/contact'         },
    ctaSecondary: { text: 'Call +91 98109 58857', link: 'tel:+919810958857' },
  },

  testimonials: [
    { name: 'Arjun Kapoor',  title: 'AI Research Lead',     company: 'DeepTech India',     quote: 'We migrated our LLM training pipeline to ICSDC GPU Cloud. The A100 cluster delivered 3× faster training times. The pre-configured CUDA environment saved us days of setup work.',                                                    rating: 5 },
    { name: 'Sneha Rajan',   title: 'Data Science Manager', company: 'Analytics Ventures', quote: 'ICSDC GPU Cloud handles our real-time inference workloads for computer vision. The managed infrastructure means we never worry about GPU availability during peak usage.',                                                              rating: 5 },
    { name: 'Prakash Menon', title: 'CTO',                  company: 'RenderStudio India', quote: 'Our 3D rendering workloads are now 5× faster on ICSDC A40 GPUs. The pay-as-you-go pricing means we only pay during active rendering jobs — significant cost savings over dedicated hardware.', rating: 5 },
  ],
};
