module.exports = {
  seo: {
    metaTitle: 'ICSDC GPU Dedicated Servers | Bare-Metal GPU Power',
    metaDescription: 'Run AI training, inference, rendering, and simulations on ICSDC GPU Dedicated Servers. Dedicated NVIDIA GPUs, high memory bandwidth, and full root access.'
  },
  heroEyebrow: '⚙ GPU Dedicated Servers',
  heroTitle: 'GPU Dedicated Server Power for Workloads That Push Limits',
  heroSubtitle: "When CPUs Aren't Enough, GPU Dedicated Servers Are the Answer",
  heroDescription: 'Run compute-heavy workloads without bottlenecks. ICSDC GPU Dedicated Servers are built for tasks that demand parallel processing, high memory throughput, and consistent performance — ideal for AI training, rendering, simulations, and data-intensive workloads.',
  heroTopBadge: '⚙ Bare-Metal GPU',
  heroStatusTitle: '99.9% Uptime',
  heroStatusSubtitle: 'Dedicated Resources',
  heroCtaPrimary: { text: 'Explore GPU Dedicated Servers', link: '#gds-plans' },
  heroCtaSecondary: { text: 'View GPU Plans', link: '#gds-plans' },
  pillars: [
    { title: 'Dedicated GPU Compute Power', desc: 'Access full GPU resources exclusively allocated to your workloads, ensuring consistent performance without shared limitations.' },
    { title: 'High Memory & Fast Data Throughput', desc: 'Handle large datasets and parallel tasks efficiently with high-bandwidth memory and optimized data transfer.' },
    { title: 'Optimized for AI, ML & Rendering', desc: 'Designed to support training models, running simulations, video rendering, and other compute-intensive tasks smoothly.' },
    { title: 'Full Control & Custom Environments', desc: 'Install your preferred OS, drivers, frameworks, and libraries to build a setup tailored to your exact workload needs.' }
  ],
  plansLabel: 'GPU SERVER PLANS',
  plansTitle: 'Choose the Right GPU Server Plan',
  plansSubtitle: 'Simple pricing based on GPU type, resources, and performance level — no hidden complexity.',
  plans: [
    {
      order: 1, tier: 'GPU Entry', price: '14,999', currency: '₹', period: 'mo',
      tagline: 'Dedicated GPU server for inference, testing & mid-range compute',
      isFeatured: false, ctaText: 'Get Started',
      features: [
        { label: '1× NVIDIA L40S (48 GB GDDR6)' }, { label: '16 vCPU / 64 GB RAM' },
        { label: '1 TB NVMe SSD' }, { label: '10 TB Bandwidth' },
        { label: 'Full Root Access' }, { label: 'CUDA / Driver Pre-Install' }
      ]
    },
    {
      order: 2, tier: 'GPU Pro', price: '34,999', currency: '₹', period: 'mo',
      tagline: 'High-performance GPU server for AI training & large-scale workloads',
      isFeatured: true, badge: 'Most Popular', ctaText: 'Get Started',
      features: [
        { label: '1× NVIDIA A100 (80 GB HBM2e)' }, { label: '32 vCPU / 128 GB RAM' },
        { label: '2 TB NVMe SSD' }, { label: '20 TB Bandwidth' },
        { label: 'PyTorch / TF / CUDA Ready' }, { label: 'Priority 24/7 Support' },
        { label: 'Free Migration' }, { label: 'ECC Memory' }
      ]
    },
    {
      order: 3, tier: 'GPU Enterprise', price: '79,999', currency: '₹', period: 'mo',
      tagline: 'Multi-GPU bare-metal server for LLMs, HPC & enterprise AI',
      isFeatured: false, ctaText: 'Contact Sales',
      features: [
        { label: '1× NVIDIA H100 (80 GB HBM3)' }, { label: '64 vCPU / 256 GB RAM' },
        { label: '4 TB NVMe SSD' }, { label: 'Unlimited Bandwidth' },
        { label: 'Multi-GPU Config Available' }, { label: 'Dedicated Account Manager' },
        { label: '99.99% Uptime SLA' }
      ]
    }
  ],
  techLabel: 'TECHNOLOGY',
  techTitle: 'The Technology Behind High-Intensity Workloads',
  techSubtitle: 'Every ICSDC GPU Dedicated Server is built from the ground up for sustained, compute-heavy operations.',
  features: [
    { title: 'True Bare-Metal GPU Performance', desc: 'Physical hardware with no virtualization layers. Your workloads get uninterrupted GPU access with zero performance loss from shared environments.' },
    { title: 'Enterprise-Class NVIDIA GPU Options', desc: 'Choose from modern NVIDIA GPUs designed for AI training, ML, rendering, and HPC. Built for stability with GPU-accelerated frameworks.' },
    { title: 'Full Root-Level Server Control', desc: 'Get complete root access to configure your OS, install drivers, manage GPU settings, and optimize performance for your exact workload.' },
    { title: 'High-Speed Network Connectivity', desc: 'GPU servers are backed by high-bandwidth uplinks for low-latency data transfer, remote access, distributed processing, and real-time workloads.' },
    { title: 'Multi-GPU Configurations Available', desc: 'Scale compute power horizontally with multi-GPU server options — ideal for parallel processing, advanced model training, and rendering pipelines.' },
    { title: 'Global Deployment Options', desc: 'Deploy GPU servers in strategically located data centers to reduce latency, meet compliance needs, and support geographically distributed teams.' },
    { title: 'ECC Memory for Compute Stability', desc: 'Enterprise-grade ECC memory ensures data integrity, reduces errors, and maintains stability during long-running compute-intensive tasks.' },
    { title: 'Optimized Thermal & Power Design', desc: 'Advanced cooling and power management maintain consistent GPU performance during sustained high-load operations.' },
    { title: 'GPU Compatibility With Containers', desc: 'Support for GPU passthrough enables usage with container platforms and virtualization tools while retaining direct hardware access.' },
    { title: 'Ready-to-Use GPU Software Stack', desc: 'Optional pre-installed NVIDIA drivers and CUDA libraries let you start immediately with TensorFlow, PyTorch, and other frameworks.' },
    { title: 'Flexible Billing & Configuration', desc: 'Choose configurations and billing plans that align with your workload duration, performance needs, and budget — without long-term rigidity.' },
    { title: 'Secure & Isolated Infrastructure', desc: 'Secure data centers with network protection, private networking, and controlled access keep your workloads isolated and protected.' }
  ],
  usecasesLabel: 'USE CASES',
  usecasesTitle: 'Real-World Applications of ICSDC GPU Dedicated Servers',
  usecasesSubtitle: 'From AI model training to medical imaging — GPU Dedicated Servers power the workloads that matter most.',
  usecases: [
    { title: 'AI & Language Models', desc: 'Train and run large language models, NLP workloads, embeddings, and inference for chat systems, translation tools, and text analytics.' },
    { title: '3D Rendering & Visual Workloads', desc: 'Reduce rendering times for complex scenes with GPU-accelerated engines. High-resolution textures, lighting, and real-time previews for design studios.' },
    { title: 'Autonomous Systems & Simulation', desc: 'GPU-powered servers handle large datasets for simulations, sensor data processing, and decision models for autonomous and robotics systems.' },
    { title: 'AI Inference & Model Serving', desc: 'Deploy trained models for real-time inference at scale — image recognition, speech processing, and recommendation systems in production.' },
    { title: 'Medical Imaging & Data Analysis', desc: 'Process large imaging datasets — CT scans, MRI images — using GPU-accelerated models for healthcare analytics and diagnostic tooling.' },
    { title: 'Financial Analytics & Fraud Detection', desc: 'GPU-accelerated models analyse large transaction datasets in near real time for fraud detection, risk analysis, and financial modelling.' }
  ],
  ctaBand1: {
    title: 'Ready to See if a GPU Dedicated Server Fits Your Workload?',
    description: 'Talk to our GPU infrastructure experts and find the right configuration for your AI, rendering, or HPC needs.',
    ctaPrimary: { text: 'Explore GPU Server Configs', link: '#gds-plans' },
    ctaSecondary: { text: 'Call +91 98109 58857', link: 'tel:+919810958857' }
  },
  whyLabel: 'WHY ICSDC',
  whyTitle: 'Why Choose ICSDC GPU Dedicated Servers?',
  whySubtitle: 'Built for organisations that need dependable performance, consistent availability, and infrastructure that handles sustained compute-heavy workloads.',
  whyCards: [
    { title: 'Reliable 99.9% Uptime Commitment', desc: 'Redundant power, network connectivity, and continuous monitoring help ensure workloads remain accessible and operational.' },
    { title: 'Built for Long-Running, High-Load Tasks', desc: 'Designed to handle AI training, data processing, rendering, and simulations — maintaining stability even during prolonged resource-heavy operations.' },
    { title: 'Enterprise-Grade Data Center Environment', desc: 'Secure, professionally managed data centers with controlled access, power backups, and network redundancy for critical workloads.' },
    { title: 'Balanced Performance — No Bottlenecks', desc: 'GPU servers are configured to maintain an effective balance between GPU power, CPU capability, memory, and fast storage.' },
    { title: 'Consistent Performance Without Sharing', desc: 'Dedicated hardware means GPU, memory, and compute resources are never shared — predictable performance and better workload isolation.' },
    { title: 'Scalable Infrastructure as Requirements Grow', desc: "As workloads evolve, ICSDC's infrastructure allows for configuration flexibility, helping teams adapt without rebuilding their environments." }
  ],
  modelsLabel: 'GPU MODELS',
  modelsTitle: 'NVIDIA GPU Options Available With ICSDC Dedicated Servers',
  modelsSubtitle: 'From LLM training to VDI — we have the right GPU for every high-compute workload.',
  models: [
    { title: 'NVIDIA GH200 Grace Hopper Superchip', desc: 'Integrated CPU-GPU architecture with shared high-bandwidth memory, designed for large-scale AI training and HPC with low-latency data movement.' },
    { title: 'NVIDIA HGX H100 Tensor Core GPU', desc: 'Hopper-based GPU optimized for large language models, deep learning training, and high-throughput parallel compute with advanced tensor core support.' },
    { title: 'NVIDIA A100 Tensor Core GPU', desc: 'Multi-purpose GPU for AI training, inference, and analytics, supporting multi-instance GPU (MIG) for workload isolation and resource partitioning.' },
    { title: 'NVIDIA L40S GPU', desc: 'Data-center GPU combining AI inference and graphics acceleration, suitable for mixed workloads including rendering and visual compute.' },
    { title: 'NVIDIA A40 GPU', desc: 'Professional GPU focused on visual computing, ray tracing, and simulation with support for graphics and AI-assisted workflows.' },
    { title: 'NVIDIA A16 GPU', desc: 'VDI-focused GPU designed for high-density virtual desktops with efficient GPU sharing and consistent user performance.' }
  ],
  testimonialTitle: 'What Our GPU Server Clients Say',
  testimonials: [
    { name: 'Arjun Mehta', role: 'Machine Learning Engineer', company: 'AI Research Firm', quote: 'We moved to a GPU dedicated server when training times on CPUs started affecting our research timelines. With dedicated GPU resources, training large models became far more predictable.' },
    { name: 'Sneha Kulkarni', role: 'Lead Developer', company: 'Data Analytics Company', quote: 'Our team works with large datasets and runs multiple experiments daily. ICSDC GPU servers helped us reduce processing delays, especially during model testing and validation.' },
    { name: 'Rohit Khanna', role: 'Technical Director', company: 'Media Production Studio', quote: 'We handle heavy rendering workloads for video and 3D projects. Earlier, render times were hard to estimate. With a GPU dedicated server, jobs run faster and more consistently.' },
    { name: 'Ankit Verma', role: 'Backend Engineer', company: 'SaaS Platform', quote: 'Our use case is mainly inference and batch processing rather than training. The dedicated GPU setup has been reliable for production workloads, and isolation from shared environments helped us avoid performance variability.' },
    { name: 'Neha Iyer', role: 'Research Associate', company: 'Healthcare Technology Organisation', quote: 'We work with medical imaging data that requires long-running compute tasks. GPU acceleration significantly reduced processing time while maintaining accuracy.' }
  ],
  faqTitle: 'FAQs About ICSDC GPU Dedicated Servers',
  faqContactTitle: 'Talk to Our GPU Infrastructure Experts',
  faqContactDesc: 'Our GPU infrastructure team is available 24/7 to help you choose the right GPU configuration and get your workloads running at full speed.\n\n📞 +91 98109 58857',
  faq: [
    { question: 'What is a GPU Dedicated Server used for?', answer: 'A GPU Dedicated Server is used for workloads that benefit from parallel processing, such as AI training, machine learning, rendering, simulations, and large-scale data processing.' },
    { question: 'How is a GPU Dedicated Server different from a CPU server?', answer: 'GPU servers are designed to handle many computations simultaneously, while CPU servers handle tasks sequentially. This makes GPUs much faster for AI, graphics, and compute-heavy workloads.' },
    { question: 'Do I get full control over the GPU server?', answer: 'Yes. You get full root access, allowing you to install your preferred operating system, GPU drivers, libraries, and frameworks based on your workload requirements.' },
    { question: 'Can I use the GPU server for both training and inference?', answer: 'Yes. GPU Dedicated Servers can be used for model training, fine-tuning, inference, rendering, and other GPU-accelerated tasks depending on the configuration you choose.' },
    { question: 'Are GPU resources shared with other users?', answer: 'No. The GPU, CPU, memory, and storage resources are fully dedicated to your server, ensuring consistent and predictable performance.' },
    { question: 'What kind of workloads benefit most from GPU servers?', answer: 'Workloads involving large datasets, image or video processing, deep learning models, scientific simulations, and real-time rendering benefit the most from GPU acceleration.' },
    { question: 'Can I scale or upgrade my GPU server later?', answer: 'Yes. Depending on availability, configurations can be adjusted to support higher GPU capacity, additional resources, or different GPU models as your requirements evolve.' },
    { question: 'Is technical expertise required to manage a GPU Dedicated Server?', answer: 'Basic server management knowledge is recommended. However, ICSDC provides support to help with setup guidance, access issues, and general configuration questions.' }
  ],
  ctaBand2: {
    title: 'Take the Next Step Toward Faster, More Reliable Compute Performance',
    description: 'Bare-metal NVIDIA GPU servers from ₹14,999/month. Full root access, ECC memory, no virtualization.',
    ctaPrimary: { text: 'Get GPU Dedicated Server', link: '#gds-plans' },
    ctaSecondary: { text: 'Talk to an Expert', link: '/contact' }
  }
};
