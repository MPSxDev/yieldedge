// Content configuration for homepage and yieldedge page
// Homepage uses default values, yieldedge page overrides with general business copy

export interface HeroSlide {
  heading: string;
  subheading: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

export interface HeroContent {
  slides: HeroSlide[];
}

export interface Service {
  icon: string; // Icon component name
  title: string;
  description: string;
  features: string[];
  image: string;
  badge?: string; // Optional badge (e.g., "MOST POPULAR", "BEST VALUE")
}

export interface ServicesContent {
  sectionLabel: string;
  title: string;
  titleHighlight: string;
  description: string;
  services: Service[];
}

export interface WhyChooseUsContent {
  title: string;
  titleHighlight: string;
  description: string;
  image: string;
  imageAlt: string;
  values: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

export interface ProcessStep {
  icon: string;
  number: string;
  title: string;
  description: string;
  image: string;
  deliverables: string[];
}

export interface ProcessContent {
  sectionLabel: string;
  title: string;
  titleHighlight: string;
  description: string;
  steps: ProcessStep[];
  ctaText: string;
}

export interface CaseStudy {
  title: string;
  category: string;
  location: string;
  description: string;
  achievements: string[];
  image: string;
}

export interface CaseStudiesContent {
  sectionLabel: string;
  title: string;
  titleHighlight: string;
  description: string;
  caseStudies: CaseStudy[];
  stats: Array<{
    icon: string;
    value: string;
    label: string;
  }>;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQContent {
  sectionLabel: string;
  title: string;
  titleHighlight: string;
  description: string;
  faqs: FAQItem[];
  ctaText: string;
}

export interface FinalCTAContent {
  sectionLabel: string;
  title: string;
  description: string;
  benefits: string[];
  ctaText: string;
  ctaSubtext: string;
  image: string;
  imageAlt: string;
}

export interface PageContent {
  hero: HeroContent;
  services: ServicesContent;
  whyChooseUs: WhyChooseUsContent;
  process: ProcessContent;
  caseStudies: CaseStudiesContent;
  faq: FAQContent;
  finalCTA: FinalCTAContent;
}

// Homepage content (Technology Solutions & Offshore Development)
export const homepageContent: PageContent = {
  hero: {
    slides: [
      {
        heading: 'DIGITAL TRANSFORMATION',
        subheading: 'Transform your business with cutting-edge expertise',
        description: 'Our approach combines nearshore excellence with world-class technical talent. From enterprise solutions to seamless integrations, our professionals align with your vision and goals, ensuring your organization leads with the latest technological innovations!',
        ctaText: 'EXPLORE OUR SOLUTIONS',
        ctaLink: '/solutions',
        backgroundImage: '/assets/img1.jpg',
      },
      {
        heading: 'PROVEN EXCELLENCE',
        subheading: 'More than 15 years of innovation',
        description: 'With over 15+ years serving the global technology landscape, Yieldge has established itself as a trusted partner in digital transformation. We\'ve empowered countless organizations to streamline operations and achieve measurable results. Our dedicated professionals bring unmatched expertise and passion to every engagement. Partner with us to unlock your organization\'s full potential and drive lasting innovation!',
        ctaText: 'DISCOVER YIELDGE',
        ctaLink: '/company',
        backgroundImage: '/assets/img2.jpg',
      },
      {
        heading: 'CLIENT-FIRST APPROACH',
        subheading: 'Your success drives everything we do',
        description: 'At Yieldge, we believe in building lasting partnerships. Our solutions are tailored to your unique requirements, ensuring every client receives dedicated support and strategic guidance. With an uncompromising focus on quality and results, our teams are committed to exceeding your expectations. Trust us to elevate your technology capabilities and accelerate your growth!',
        ctaText: 'START A CONVERSATION',
        ctaLink: '/get-in-touch',
        backgroundImage: '/assets/img4.jpg',
      },
    ],
  },
  services: {
    sectionLabel: 'Our Solutions',
    title: 'Our Solutions',
    titleHighlight: '',
    description: 'Yieldge delivers cutting-edge technology solutions designed to accelerate your business growth and operational excellence. Our certified experts leverage advanced methodologies and tools to create transformative outcomes. From modernizing legacy systems to implementing scalable cloud architectures, we provide end-to-end solutions tailored to your strategic objectives.',
    services: [
      {
        icon: 'Shield',
        title: 'QA and Test Automation',
        description: 'Comprehensive quality assurance and automated testing services to ensure your software meets the highest standards',
        features: ['Automated testing', 'Quality assurance', 'Performance testing', 'CI/CD integration'],
        image: '/assets/img4.jpg',
      },
      {
        icon: 'Shield',
        title: 'Security Services',
        description: 'Advanced cybersecurity solutions and threat protection to safeguard your digital assets',
        features: ['Cybersecurity', 'Threat protection', 'Security audits', 'Compliance'],
        image: '/assets/img5.jpg',
      },
      {
        icon: 'Target',
        title: 'Technology Consulting',
        description: 'Strategic technology guidance to drive digital transformation and business growth',
        features: ['Strategic planning', 'Digital transformation', 'Architecture design', 'Best practices'],
        image: '/assets/img6.jpg',
      },
      {
        icon: 'Globe',
        title: 'Mobile & Web Apps',
        description: 'Custom mobile and web application development for exceptional user experiences',
        features: ['Mobile apps', 'Web development', 'User experience', 'Responsive design'],
        image: '/assets/img4.jpg',
      },
      {
        icon: 'Users',
        title: 'Staff Augmentation',
        description: 'Access top technical talent to scale your team quickly and efficiently',
        features: ['Technical talent', 'Team scaling', 'Expert resources', 'Flexible engagement'],
        image: '/assets/img5.jpg',
      },
      {
        icon: 'TrendingUp',
        title: 'Analytics and Insights',
        description: 'Data-driven insights and analytics solutions to power informed business decisions',
        features: ['Business intelligence', 'Data analytics', 'Reporting', 'Insights'],
        image: '/assets/img6.jpg',
      },
      {
        icon: 'Globe',
        title: 'Cloud Solutions',
        description: 'Scalable cloud infrastructure and migration services for modern businesses',
        features: ['Cloud migration', 'Infrastructure', 'Scalability', 'DevOps'],
        image: '/assets/img4.jpg',
      },
      {
        icon: 'Globe',
        title: 'Offshore Development',
        description: 'Nearshore software development teams delivering quality and value',
        features: ['Nearshore teams', 'Quality delivery', 'Cost-effective', 'Expert developers'],
        image: '/assets/img5.jpg',
      },
      {
        icon: 'FileCode',
        title: 'Tailored Software',
        description: 'Custom software solutions designed specifically for your unique business needs',
        features: ['Custom development', 'Business-specific', 'Scalable solutions', 'Full lifecycle'],
        image: '/assets/img6.jpg',
      },
    ],
  },
  whyChooseUs: {
    title: 'Why Choose',
    titleHighlight: 'Yieldge?',
    description: 'With over 15+ years serving the global technology landscape, Yieldge has established itself as a trusted partner in digital transformation. We\'ve empowered countless organizations to streamline operations and achieve measurable results. Our dedicated professionals bring unmatched expertise and passion to every engagement.',
    image: '/assets/img7.jpg',
    imageAlt: 'Growth and performance',
    values: [
      {
        icon: 'Target',
        title: '15+ Years of Experience',
        description: 'We understand the unique challenges businesses face and bring decades of proven expertise to every engagement.',
      },
      {
        icon: 'Zap',
        title: 'Proven Excellence',
        description: 'We\'ve empowered countless organizations to streamline operations and achieve measurable results across the Americas.',
      },
      {
        icon: 'Lightbulb',
        title: 'Client-First Approach',
        description: 'Our solutions are tailored to your unique requirements, ensuring every client receives dedicated support and strategic guidance.',
      },
      {
        icon: 'Shield',
        title: 'Reliable & Secure',
        description: 'Enterprise-grade security and reliability. Your data and business information stay protected with industry-leading standards.',
      },
    ],
  },
  process: {
    sectionLabel: 'How It Works',
    title: 'From audit to',
    titleHighlight: 'automation in 4 steps',
    description: 'Our proven process ensures smooth implementation and measurable results — from initial assessment to ongoing growth.',
    steps: [
      {
        icon: 'ClipboardCheck',
        number: '01',
        title: 'Initial Review & Needs Assessment',
        description: 'We analyze your current workflow, pain points, and goals. Understand what\'s slowing you down and where automation can make the biggest impact.',
        image: '/assets/img9.jpg',
        deliverables: ['Current state analysis', 'Opportunity assessment', 'ROI projection'],
      },
      {
        icon: 'FileCode',
        number: '02',
        title: 'Custom Implementation Plan',
        description: 'We design a tailored solution that fits your business. No cookie-cutter templates — every system is built for your specific needs.',
        image: '/assets/img10.jpg',
        deliverables: ['Technical architecture', 'Implementation roadmap', 'Clear timeline & milestones'],
      },
      {
        icon: 'Rocket',
        number: '03',
        title: 'Website Launch & Lead Flow Setup',
        description: 'Seamless integration with your existing tools and processes. We handle the technical complexity while you stay focused on your clients.',
        image: '/assets/img11.jpg',
        deliverables: ['Production deployment', 'Team training', 'System documentation'],
      },
      {
        icon: 'HeadphonesIcon',
        number: '04',
        title: 'Ongoing Support & Scaling',
        description: 'Continuous monitoring, optimization, and support. As your business grows, we ensure your systems scale with you.',
        image: '/assets/img9.jpg',
        deliverables: ['24/7 monitoring', 'Regular updates', 'Priority support'],
      },
    ],
    ctaText: 'Get Your Initial Review',
  },
  caseStudies: {
    sectionLabel: 'Success Stories',
    title: 'Real Results for',
    titleHighlight: 'Real-Estate Pros',
    description: 'See how we\'ve helped real-estate professionals save time, increase conversions, and grow their business with smart automation.',
    caseStudies: [
      {
        title: 'Boutique Real-Estate Agency',
        category: 'Lead Generation',
        location: 'Miami, FL',
        description: 'A mid-sized agency struggling with manual lead follow-ups and unqualified inquiries. We implemented AI-powered lead qualification and automated nurture sequences.',
        achievements: [
          'Reduced time spent on unqualified leads by 60%',
          'Increased conversion rate from inquiry to showing by 42%',
          'Automated 80% of initial lead communications',
        ],
        image: '/assets/img12.jpg',
      },
      {
        title: 'Property Management Firm',
        category: 'Operations Automation',
        location: 'Austin, TX',
        description: 'Managing 200+ rental units with spreadsheets and manual processes. We built a custom tenant management system with automated rent collection and maintenance tracking.',
        achievements: [
          'Cut administrative overhead by 45%',
          'Reduced late rent payments by 70% through automated reminders',
          'Improved tenant satisfaction scores by 38%',
        ],
        image: '/assets/img12.jpg',
      },
      {
        title: 'Real-Estate Investment Group',
        category: 'Analytics & Insights',
        location: 'Phoenix, AZ',
        description: 'Investors needed better data to evaluate potential acquisitions. We implemented market analytics and predictive pricing tools to inform their investment strategy.',
        achievements: [
          'Improved deal evaluation speed by 65%',
          'Identified 3 high-ROI opportunities in first month',
          'Reduced analysis time from days to hours',
        ],
        image: '/assets/img12.jpg',
      },
    ],
    stats: [
      { icon: 'Timer', value: '40%', label: 'Admin time reduction' },
      { icon: 'TrendingUp', value: '35%', label: 'Lead conversion increase' },
      { icon: 'DollarSign', value: '50%', label: 'Lower overhead costs' },
      { icon: 'Bot', value: '24/7', label: 'Lead capture & support' },
    ],
  },
  faq: {
    sectionLabel: 'FAQ',
    title: 'Questions?',
    titleHighlight: 'We\'ve got answers',
    description: 'Common questions about our real-estate automation solutions',
    faqs: [
      {
        question: 'Does AI replace human expertise in real-estate?',
        answer: 'No. Our AI solutions enhance your expertise, not replace it. We automate repetitive tasks like lead qualification, document processing, and follow-ups — freeing you to focus on building relationships and closing deals. The human touch remains essential in real-estate.',
      },
      {
        question: 'Is my data safe and private?',
        answer: 'Absolutely. We implement enterprise-grade security measures including encrypted data storage, secure cloud infrastructure, and strict access controls. Your client information and business data are protected with industry-leading security standards. We never share or sell your data.',
      },
      {
        question: 'How long does implementation take?',
        answer: 'It depends on the scope of your project. Simple automation solutions can be deployed in 2-4 weeks. More comprehensive systems typically take 6-12 weeks. We work in phases, so you\'ll start seeing value early in the process, not just at the end.',
      },
      {
        question: 'What\'s the cost?',
        answer: 'Investment varies based on your specific needs and business size. Schedule a free consultation and we\'ll provide a detailed proposal with clear pricing. Most clients see ROI within 6-12 months through time savings, increased conversions, and reduced overhead costs.',
      },
      {
        question: 'Do I need technical staff to use your systems?',
        answer: 'No technical expertise required. We design user-friendly interfaces and provide comprehensive training for your team. We also offer ongoing support to ensure smooth operation. If issues arise, our support team is available to help.',
      },
      {
        question: 'Can your solutions integrate with my existing tools?',
        answer: 'Yes. We specialize in integrating with popular real-estate platforms, CRMs (like Zillow, Realtor.com, HubSpot), property management systems, and other tools you already use. Our solutions are built to enhance your current workflow, not disrupt it.',
      },
    ],
    ctaText: 'Schedule a free consultation',
  },
  finalCTA: {
    sectionLabel: 'Comienza hoy',
    title: 'Transforma tu negocio con tecnología que rinde',
    description: 'Agenda una llamada estratégica gratuita de 30 minutos. Sin compromiso. Analizamos tu situación actual y definimos un plan de acción concreto.',
    benefits: [
      'Estrategia personalizada para tu negocio',
      'ROI proyectado y plan de implementación',
      'Respuestas a todas tus preguntas técnicas',
    ],
    ctaText: 'Agenda tu llamada gratuita',
    ctaSubtext: '📅 Disponibilidad inmediata • 💬 Sin compromiso • ⚡ Resultados claros',
    image: '/assets/img3.jpg',
    imageAlt: 'Transforma tu negocio',
  },
};

// Yieldedge page content (General business focused)
export const yieldedgeContent: PageContent = {
  hero: {
    slides: [
      {
        heading: 'Business Growth Partner',
        subheading: 'Increase Your Leads & Revenue With a System That Follows Up for You',
        description: 'We help businesses turn website visitors into booked calls and paying customers through smart websites and automated follow-ups.',
        ctaText: 'Schedule a Call',
        ctaLink: '/get-in-touch',
        backgroundImage: '/assets/img1.jpg',
      },
    ],
  },
  services: {
    sectionLabel: 'What We Build',
    title: 'Turn visitors into',
    titleHighlight: 'paying customers',
    description: 'We build high-converting websites and automation systems that capture leads, follow up automatically, and help you close more deals — 24/7.',
    services: [
      {
        icon: 'Globe',
        title: 'High-Converting Websites & Landing Pages',
        description: 'Professional websites designed to convert visitors into leads. Mobile-responsive, fast-loading, and optimized for your business goals.',
        features: ['Mobile-responsive design', 'Fast loading times', 'SEO optimized', 'Conversion-focused'],
        image: '/assets/img4.jpg', // Reusing same image
      },
      {
        icon: 'Users',
        title: 'Lead Capture + CRM Connection',
        description: 'Capture leads from your website and automatically sync them to your CRM. Never miss a potential customer again.',
        features: ['Form automation', 'CRM integration', 'Lead scoring', 'Instant notifications'],
        image: '/assets/img5.jpg', // Reusing same image
      },
      {
        icon: 'MessageCircle',
        title: 'Automated Email / SMS / WhatsApp Follow-Ups',
        description: 'Set up automated follow-up sequences that nurture leads, answer questions, and book calls — even when you\'re not available.',
        features: ['Email automation', 'SMS follow-ups', 'WhatsApp integration', 'Smart scheduling'],
        image: '/assets/img6.jpg', // Reusing same image
      },
      {
        icon: 'BarChart',
        title: 'Simple Dashboards & Performance Tracking',
        description: 'See exactly what\'s working with clear dashboards showing leads, conversions, revenue, and ROI — all in one place.',
        features: ['Real-time analytics', 'Revenue tracking', 'Lead source analysis', 'ROI reporting'],
        image: '/assets/img4.jpg', // Reusing same image
      },
      {
        icon: 'Bot',
        title: 'Optional AI Intake & FAQ Automation',
        description: 'Let AI handle initial customer questions, qualify leads, and schedule appointments automatically — freeing you to focus on closing deals.',
        features: ['AI chat support', 'FAQ automation', 'Lead qualification', 'Appointment scheduling'],
        image: '/assets/img5.jpg', // Reusing same image
      },
    ],
  },
  whyChooseUs: {
    title: 'Why Choose',
    titleHighlight: 'Yieldge?',
    description: 'Proven systems used by growing businesses. We\'ve helped clients increase leads, speed up follow-ups, and close more deals — so you can focus on what you do best.',
    image: '/assets/img7.jpg', // Reusing same image
    imageAlt: 'Growth and performance',
    values: [
      {
        icon: 'Target',
        title: 'Battle-Tested Workflows',
        description: 'We use proven systems and workflows that have helped businesses across industries increase revenue and reduce manual work.',
      },
      {
        icon: 'Zap',
        title: 'Proven Results',
        description: 'Our clients see faster response times, more booked calls, and increased revenue — with clear metrics to prove it.',
      },
      {
        icon: 'Lightbulb',
        title: 'Custom Solutions',
        description: 'Every system is built for your specific business needs, goals, and existing tools — no cookie-cutter templates.',
      },
      {
        icon: 'Shield',
        title: 'Reliable & Secure',
        description: 'Enterprise-grade security and reliability. Your customer data and business information stay protected with industry-leading standards.',
      },
    ],
  },
  process: {
    sectionLabel: 'How It Works',
    title: 'From review to',
    titleHighlight: 'revenue in 3 steps',
    description: 'Our proven process ensures smooth implementation and measurable results — from initial assessment to ongoing growth.',
    steps: [
      {
        icon: 'ClipboardCheck',
        number: '01',
        title: 'Initial Review (No Obligation)',
        description: 'We analyze your current lead flow, identify opportunities, and show you exactly how automation can increase your revenue.',
        image: '/assets/img9.jpg', // Reusing same image
        deliverables: ['Current state analysis', 'Opportunity assessment', 'ROI projection'],
      },
      {
        icon: 'FileCode',
        number: '02',
        title: 'Build & Connect Your System',
        description: 'We build your website, set up lead capture, connect your CRM, and configure automated follow-ups — all tailored to your business.',
        image: '/assets/img10.jpg', // Reusing same image
        deliverables: ['Website launch', 'CRM integration', 'Automation setup', 'Team training'],
      },
      {
        icon: 'Rocket',
        number: '03',
        title: 'Launch, Measure & Improve Revenue',
        description: 'Your system goes live and starts working 24/7. We monitor performance, optimize conversions, and help you scale what works.',
        image: '/assets/img11.jpg', // Reusing same image
        deliverables: ['Performance monitoring', 'Conversion optimization', 'Ongoing support', 'Revenue growth'],
      },
    ],
    ctaText: 'Schedule an Initial Review',
  },
  caseStudies: {
    sectionLabel: 'Success Stories',
    title: 'Real Results for',
    titleHighlight: 'Growing Businesses',
    description: 'See how we\'ve helped businesses across industries increase leads, speed up follow-ups, and grow revenue with smart automation.',
    caseStudies: [
      {
        title: 'Service Business',
        category: 'Lead Generation',
        location: 'Chicago, IL',
        description: 'A service business struggling with slow follow-ups and missed opportunities. We built a high-converting website with automated lead capture and follow-up sequences.',
        achievements: [
          'Increased qualified leads by 55%',
          'Reduced response time from hours to minutes',
          'Booked 3x more calls per month',
        ],
        image: '/assets/img12.jpg', // Reusing same image
      },
      {
        title: 'Agency',
        category: 'Operations Automation',
        location: 'Seattle, WA',
        description: 'An agency managing multiple clients with manual processes. We built automated workflows for lead intake, client communication, and project tracking.',
        achievements: [
          'Cut administrative time by 50%',
          'Improved client response time by 80%',
          'Increased client capacity without hiring',
        ],
        image: '/assets/img12.jpg', // Reusing same image
      },
      {
        title: 'E-commerce Brand',
        category: 'Revenue Growth',
        location: 'New York, NY',
        description: 'An e-commerce brand needing better lead capture and customer follow-up. We implemented automated email sequences and CRM integration.',
        achievements: [
          'Increased email conversion rate by 40%',
          'Reduced cart abandonment by 35%',
          'Grew monthly revenue by 28%',
        ],
        image: '/assets/img12.jpg', // Reusing same image
      },
    ],
    stats: [
      { icon: 'Timer', value: '40%', label: 'Faster response time' },
      { icon: 'TrendingUp', value: '55%', label: 'More booked calls' },
      { icon: 'DollarSign', value: '50%', label: 'Less manual follow-up' },
      { icon: 'BarChart', value: '24/7', label: 'Clear revenue visibility' },
    ],
  },
  faq: {
    sectionLabel: 'FAQ',
    title: 'Questions?',
    titleHighlight: 'We\'ve got answers',
    description: 'Common questions about our website and automation solutions',
    faqs: [
      {
        question: 'Will this work for my business type?',
        answer: 'Yes. Our systems work for service businesses, agencies, restaurants, law firms, clinics, SMBs, e-commerce brands, and more. We customize every solution to fit your specific needs and industry.',
      },
      {
        question: 'Is my data safe and private?',
        answer: 'Absolutely. We implement enterprise-grade security measures including encrypted data storage, secure cloud infrastructure, and strict access controls. Your customer information and business data are protected with industry-leading security standards. We never share or sell your data.',
      },
      {
        question: 'How long does it take to set up?',
        answer: 'It depends on the scope of your project. Simple websites with basic automation can be live in 2-4 weeks. More comprehensive systems typically take 6-12 weeks. We work in phases, so you\'ll start seeing value early in the process.',
      },
      {
        question: 'What\'s the cost?',
        answer: 'Investment varies based on your specific needs and business size. Schedule an initial review and we\'ll provide a detailed proposal with clear pricing. Most clients see ROI within 6-12 months through increased leads and revenue.',
      },
      {
        question: 'Do I need technical knowledge?',
        answer: 'No technical expertise required. We design user-friendly systems and provide comprehensive training for your team. We also offer ongoing support to ensure smooth operation. If issues arise, our support team is available to help.',
      },
      {
        question: 'Can this integrate with my existing tools?',
        answer: 'Yes. We specialize in integrating with popular business tools, CRMs (like HubSpot, Salesforce), email platforms, payment processors, and other tools you already use. Our solutions are built to enhance your current workflow, not disrupt it.',
      },
    ],
    ctaText: 'Schedule a consultation',
  },
  finalCTA: {
    sectionLabel: 'Special Offer',
    title: 'Ready to Stop Losing Leads?',
    description: 'Schedule an initial review with no obligation. We\'ll analyze your current lead flow, identify opportunities, and show you exactly how automation can increase your revenue.',
    benefits: [
      'Personalized strategy for your business',
      'ROI projection and implementation roadmap',
      'Answers to all your technical questions',
    ],
    ctaText: 'Schedule an Initial Review',
    ctaSubtext: '📅 Immediate availability • 💬 No commitment • ⚡ Clear results',
    image: '/assets/img3.jpg', // Reusing same image
    imageAlt: 'Let\'s work together',
  },
};

// Real Estate page content (Real Estate focused)
export const realEstateContent: PageContent = {
  hero: {
    slides: [
      {
        heading: 'Real-Estate Technology Partner',
        subheading: 'Unlock Real-Estate Profits with Smart Web, Cloud & AI',
        description: 'Generate qualified leads, streamline property management, and make data-driven investment decisions — all in one platform.',
        ctaText: 'Get Your Initial Review',
        ctaLink: '/get-in-touch',
        backgroundImage: '/assets/img1.jpg',
      },
    ],
  },
  services: {
    sectionLabel: 'Our Solutions',
    title: 'Spend less time on admin,',
    titleHighlight: 'more time closing deals',
    description: 'We help real-estate professionals automate the busywork so you can focus on what matters: closing deals, managing properties, and growing your portfolio.',
    services: [
      {
        icon: 'Users',
        title: 'Automated Lead Generation & Qualification',
        description: 'Capture and qualify leads 24/7 so you only talk to real prospects. Stop wasting time on unqualified inquiries.',
        features: ['24/7 lead capture', 'AI-powered qualification', 'Instant follow-ups', 'CRM integration'],
        image: '/assets/img4.jpg',
      },
      {
        icon: 'FileText',
        title: 'Document & Data Handling Automation',
        description: 'Contracts, valuations, leases, and portfolios — organized, searchable, and analyzed automatically.',
        features: ['Contract automation', 'Document storage', 'Data extraction', 'Searchable archives'],
        image: '/assets/img5.jpg',
      },
      {
        icon: 'TrendingUp',
        title: 'Market Analytics & Valuation Insights',
        description: 'Get predictive pricing and investment guidance based on real data. Make smarter decisions faster.',
        features: ['Predictive pricing', 'Market trends', 'Investment analysis', 'ROI forecasting'],
        image: '/assets/img6.jpg',
      },
      {
        icon: 'Home',
        title: 'Property & Tenant Management',
        description: 'Rent collection, maintenance scheduling, tenant communications, lease renewals — automated reliably.',
        features: ['Automated rent collection', 'Maintenance tracking', 'Tenant portal', 'Lease management'],
        image: '/assets/img4.jpg',
      },
      {
        icon: 'Globe',
        title: 'Scalable Web & Cloud Infrastructure',
        description: 'Secure, reliable, and customized for real-estate businesses ready to grow without technical headaches.',
        features: ['Cloud hosting', 'Data security', 'Scalable architecture', 'Custom integrations'],
        image: '/assets/img5.jpg',
      },
    ],
  },
  whyChooseUs: {
    title: 'Why Choose',
    titleHighlight: 'Yieldge?',
    description: 'Experienced tech team with proven results in real-estate. We\'ve helped clients cut admin time, increase conversions, and reduce costs — so you can focus on growing your business.',
    image: '/assets/img7.jpg',
    imageAlt: 'Growth and performance',
    values: [
      {
        icon: 'Target',
        title: 'Real-Estate Expertise',
        description: 'We understand the unique challenges of agents, brokers, property managers, and investors.',
      },
      {
        icon: 'Zap',
        title: 'Proven Results',
        description: 'Our clients cut admin time, increase lead-to-sale conversion, and reduce overhead costs significantly.',
      },
      {
        icon: 'Lightbulb',
        title: 'Custom Solutions',
        description: 'Every implementation is tailored to your specific workflow, property types, and business goals.',
      },
      {
        icon: 'Shield',
        title: 'Reliable & Secure',
        description: 'Enterprise-grade security and reliability. Your data and your clients\' information stay protected.',
      },
    ],
  },
  process: {
    sectionLabel: 'How It Works',
    title: 'From audit to',
    titleHighlight: 'automation in 4 steps',
    description: 'Our proven process ensures smooth implementation and measurable results — from initial assessment to ongoing growth.',
    steps: [
      {
        icon: 'ClipboardCheck',
        number: '01',
        title: 'Initial Review & Needs Assessment',
        description: 'We analyze your current workflow, pain points, and goals. Understand what\'s slowing you down and where automation can make the biggest impact.',
        image: '/assets/img9.jpg',
        deliverables: ['Current state analysis', 'Opportunity assessment', 'ROI projection'],
      },
      {
        icon: 'FileCode',
        number: '02',
        title: 'Custom Implementation Plan',
        description: 'We design a tailored solution that fits your business. No cookie-cutter templates — every system is built for your specific needs.',
        image: '/assets/img10.jpg',
        deliverables: ['Technical architecture', 'Implementation roadmap', 'Clear timeline & milestones'],
      },
      {
        icon: 'Rocket',
        number: '03',
        title: 'Website Launch & Lead Flow Setup',
        description: 'Seamless integration with your existing tools and processes. We handle the technical complexity while you stay focused on your clients.',
        image: '/assets/img11.jpg',
        deliverables: ['Production deployment', 'Team training', 'System documentation'],
      },
      {
        icon: 'HeadphonesIcon',
        number: '04',
        title: 'Ongoing Support & Scaling',
        description: 'Continuous monitoring, optimization, and support. As your business grows, we ensure your systems scale with you.',
        image: '/assets/img9.jpg',
        deliverables: ['24/7 monitoring', 'Regular updates', 'Priority support'],
      },
    ],
    ctaText: 'Get Your Initial Review',
  },
  caseStudies: {
    sectionLabel: 'Success Stories',
    title: 'Real Results for',
    titleHighlight: 'Real-Estate Pros',
    description: 'See how we\'ve helped real-estate professionals save time, increase conversions, and grow their business with smart automation.',
    caseStudies: [
      {
        title: 'Boutique Real-Estate Agency',
        category: 'Lead Generation',
        location: 'Miami, FL',
        description: 'A mid-sized agency struggling with manual lead follow-ups and unqualified inquiries. We implemented AI-powered lead qualification and automated nurture sequences.',
        achievements: [
          'Reduced time spent on unqualified leads by 60%',
          'Increased conversion rate from inquiry to showing by 42%',
          'Automated 80% of initial lead communications',
        ],
        image: '/assets/img12.jpg',
      },
      {
        title: 'Property Management Firm',
        category: 'Operations Automation',
        location: 'Austin, TX',
        description: 'Managing 200+ rental units with spreadsheets and manual processes. We built a custom tenant management system with automated rent collection and maintenance tracking.',
        achievements: [
          'Cut administrative overhead by 45%',
          'Reduced late rent payments by 70% through automated reminders',
          'Improved tenant satisfaction scores by 38%',
        ],
        image: '/assets/img12.jpg',
      },
      {
        title: 'Real-Estate Investment Group',
        category: 'Analytics & Insights',
        location: 'Phoenix, AZ',
        description: 'Investors needed better data to evaluate potential acquisitions. We implemented market analytics and predictive pricing tools to inform their investment strategy.',
        achievements: [
          'Improved deal evaluation speed by 65%',
          'Identified 3 high-ROI opportunities in first month',
          'Reduced analysis time from days to hours',
        ],
        image: '/assets/img12.jpg',
      },
    ],
    stats: [
      { icon: 'Timer', value: '40%', label: 'Admin time reduction' },
      { icon: 'TrendingUp', value: '35%', label: 'Lead conversion increase' },
      { icon: 'DollarSign', value: '50%', label: 'Lower overhead costs' },
      { icon: 'Bot', value: '24/7', label: 'Lead capture & support' },
    ],
  },
  faq: {
    sectionLabel: 'FAQ',
    title: 'Questions?',
    titleHighlight: 'We\'ve got answers',
    description: 'Common questions about our real-estate automation solutions',
    faqs: [
      {
        question: 'Does AI replace human expertise in real-estate?',
        answer: 'No. Our AI solutions enhance your expertise, not replace it. We automate repetitive tasks like lead qualification, document processing, and follow-ups — freeing you to focus on building relationships and closing deals. The human touch remains essential in real-estate.',
      },
      {
        question: 'Is my data safe and private?',
        answer: 'Absolutely. We implement enterprise-grade security measures including encrypted data storage, secure cloud infrastructure, and strict access controls. Your client information and business data are protected with industry-leading security standards. We never share or sell your data.',
      },
      {
        question: 'How long does implementation take?',
        answer: 'It depends on the scope of your project. Simple automation solutions can be deployed in 2-4 weeks. More comprehensive systems typically take 6-12 weeks. We work in phases, so you\'ll start seeing value early in the process, not just at the end.',
      },
      {
        question: 'What\'s the cost?',
        answer: 'Investment varies based on your specific needs and business size. Schedule a free consultation and we\'ll provide a detailed proposal with clear pricing. Most clients see ROI within 6-12 months through time savings, increased conversions, and reduced overhead costs.',
      },
      {
        question: 'Do I need technical staff to use your systems?',
        answer: 'No technical expertise required. We design user-friendly interfaces and provide comprehensive training for your team. We also offer ongoing support to ensure smooth operation. If issues arise, our support team is available to help.',
      },
      {
        question: 'Can your solutions integrate with my existing tools?',
        answer: 'Yes. We specialize in integrating with popular real-estate platforms, CRMs (like Zillow, Realtor.com, HubSpot), property management systems, and other tools you already use. Our solutions are built to enhance your current workflow, not disrupt it.',
      },
    ],
    ctaText: 'Schedule a free consultation',
  },
  finalCTA: {
    sectionLabel: 'Comienza hoy',
    title: 'Transforma tu negocio con tecnología que rinde',
    description: 'Agenda una llamada estratégica gratuita de 30 minutos. Sin compromiso. Analizamos tu situación actual y definimos un plan de acción concreto.',
    benefits: [
      'Estrategia personalizada para tu negocio',
      'ROI proyectado y plan de implementación',
      'Respuestas a todas tus preguntas técnicas',
    ],
    ctaText: 'Agenda tu llamada gratuita',
    ctaSubtext: '📅 Disponibilidad inmediata • 💬 Sin compromiso • ⚡ Resultados claros',
    image: '/assets/img3.jpg',
    imageAlt: 'Transforma tu negocio',
  },
};

// VibeRescue page content (Dark theme, AI project rescue focused)
export const viberescueContent: PageContent = {
  hero: {
    slides: [
      {
        heading: 'LIMITED SPOTS: Only 7 Rescue Slots Left This Week',
        subheading: 'Your Vibe-Coded Project Deserves to Ship',
        description: 'Stuck on that AI-built project? App crashed and burning? We\'re the tech rescue team that turns your vibe-coded chaos into production-ready success.',
        ctaText: 'Emergency Rescue - Get Help Now',
        ctaLink: '/get-in-touch',
        backgroundImage: '/assets/img1.jpg',
      },
    ],
  },
  services: {
    sectionLabel: 'Our Services',
    title: 'From Chaos to',
    titleHighlight: 'Shipping',
    description: 'Whether your AI-built project needs a quick fix or a complete overhaul, we\'ve got you covered with battle-tested expertise.',
    services: [
      {
        icon: 'Zap',
        title: 'Emergency Crash Support',
        description: 'Your vibe-coded app just died? We respond within 2 hours to diagnose and fix critical issues. 24/7 availability.',
        features: ['2-hour response time', 'Root cause analysis', 'Same-day fixes'],
        image: '/assets/img4.jpg',
        badge: 'MOST POPULAR',
      },
      {
        icon: 'Code',
        title: 'Project Rescue & Completion',
        description: 'Started with AI but hit a wall? We take your unfinished project and make it production-ready.',
        features: ['Code audit & cleanup', 'Feature completion', 'Deployment setup'],
        image: '/assets/img5.jpg',
      },
      {
        icon: 'Wrench',
        title: 'Technical Debt Cleanup',
        description: 'AI-generated spaghetti code? We refactor, optimize, and make your codebase maintainable.',
        features: ['Code refactoring', 'Performance optimization', 'Best practices'],
        image: '/assets/img6.jpg',
      },
      {
        icon: 'Rocket',
        title: 'Launch & Scale Support',
        description: 'Ready to go live? We handle deployment, monitoring, and scaling your vibe-coded MVP.',
        features: ['Production deployment', 'CI/CD setup', 'Monitoring & scaling'],
        image: '/assets/img4.jpg',
        badge: 'BEST VALUE',
      },
    ],
  },
  whyChooseUs: {
    title: 'Trusted by Builders',
    titleHighlight: 'Like You',
    description: 'Real results from developers who\'ve been where you are. We don\'t just fix code — we rescue projects and restore confidence.',
    image: '/assets/img7.jpg',
    imageAlt: 'Success stories',
    values: [
      {
        icon: 'Zap',
        title: 'Response in 2 Hours',
        description: 'When your project is down, every minute counts. We respond within 2 hours, 24/7.',
      },
      {
        icon: 'Shield',
        title: '100% Success Rate',
        description: 'Every project we take on gets rescued. No exceptions. No excuses.',
      },
      {
        icon: 'Star',
        title: '50+ Projects Rescued',
        description: 'We\'ve saved dozens of AI-built projects from the brink. Your project is next.',
      },
      {
        icon: 'Clock',
        title: '24/7 Availability',
        description: 'Emergencies don\'t wait for business hours. Neither do we.',
      },
    ],
  },
  process: {
    sectionLabel: 'How It Works',
    title: 'Simple. Fast.',
    titleHighlight: 'Effective.',
    description: 'From broken to shipped in as little as 48 hours. Here\'s our battle-tested process.',
    steps: [
      {
        icon: 'MessageCircle',
        number: '01',
        title: 'Tell Us What\'s Broken',
        description: 'Share your project details, what\'s not working, and your deadline. We respond within 2 hours.',
        image: '/assets/img9.jpg',
        deliverables: ['Project assessment', 'Issue identification', 'Response within 2 hours'],
      },
      {
        icon: 'Search',
        number: '02',
        title: 'Free Diagnosis',
        description: 'We analyze your codebase, identify issues, and provide a clear action plan with transparent pricing.',
        image: '/assets/img10.jpg',
        deliverables: ['Code analysis', 'Issue report', 'Action plan & pricing'],
      },
      {
        icon: 'Wrench',
        number: '03',
        title: 'We Fix & Build',
        description: 'Our senior devs jump in, fix the issues, complete missing features, and optimize your code.',
        image: '/assets/img11.jpg',
        deliverables: ['Bug fixes', 'Feature completion', 'Code optimization'],
      },
      {
        icon: 'Rocket',
        number: '04',
        title: 'Ship with Confidence',
        description: 'We deploy, test, and hand over a production-ready project. Plus 7 days of free support.',
        image: '/assets/img9.jpg',
        deliverables: ['Production deployment', 'Testing & QA', '7 days free support'],
      },
    ],
    ctaText: 'Get Emergency Help Now',
  },
  caseStudies: {
    sectionLabel: 'Testimonials',
    title: 'Trusted by Builders',
    titleHighlight: 'Like You',
    description: 'Real developers. Real projects. Real rescues.',
    caseStudies: [
      {
        title: 'Sarah K.',
        category: 'Startup Founder',
        location: 'Lovable Project Rescue',
        description: 'I spent weeks trying to fix my Lovable project. These guys had it working in 3 hours. Absolute lifesavers!',
        achievements: [
          'Fixed in 3 hours',
          'Production-ready',
          '5-star rating',
        ],
        image: '/assets/img12.jpg',
      },
      {
        title: 'Marcus T.',
        category: 'Product Manager',
        location: 'AI App Optimization',
        description: 'My AI-generated app was a mess of errors. They not only fixed it but made it 10x faster. Worth every penny.',
        achievements: [
          '10x performance boost',
          'All errors resolved',
          '5-star rating',
        ],
        image: '/assets/img12.jpg',
      },
      {
        title: 'Jennifer L.',
        category: 'E-commerce Owner',
        location: 'Emergency Launch Support',
        description: 'The emergency support saved my launch. They jumped on a call at midnight and had my site back up in an hour.',
        achievements: [
          '1-hour response',
          'Launch saved',
          '5-star rating',
        ],
        image: '/assets/img12.jpg',
      },
    ],
    stats: [
      { icon: 'Users', value: '50+', label: 'Projects Rescued' },
      { icon: 'Timer', value: '2hrs', label: 'Avg. Response Time' },
      { icon: 'Shield', value: '100%', label: 'Success Rate' },
      { icon: 'Clock', value: '24/7', label: 'Availability' },
    ],
  },
  faq: {
    sectionLabel: 'FAQ',
    title: 'Questions?',
    titleHighlight: 'We\'ve got answers',
    description: 'Common questions about our project rescue services',
    faqs: [
      {
        question: 'How fast can you respond to an emergency?',
        answer: 'We respond within 2 hours, 24/7. For critical issues, we can often start working immediately. Your project\'s urgency is our priority.',
      },
      {
        question: 'What if my project is completely broken?',
        answer: 'That\'s exactly what we do. We specialize in rescuing projects that seem beyond repair. Our 100% success rate means we\'ve never failed to rescue a project we\'ve taken on.',
      },
      {
        question: 'Do you work with AI-generated code?',
        answer: 'Yes! We specialize in fixing and optimizing AI-generated code. We understand the unique challenges of vibe-coded projects and know how to make them production-ready.',
      },
      {
        question: 'What\'s included in the rescue service?',
        answer: 'Full diagnosis, bug fixes, code optimization, feature completion (if needed), deployment, testing, and 7 days of free support. We handle everything from broken to shipped.',
      },
      {
        question: 'How much does it cost?',
        answer: 'Pricing depends on project scope and urgency. We provide transparent pricing after our free diagnosis. Most rescues range from $2,000-$10,000, with emergency support available 24/7.',
      },
      {
        question: 'What if you can\'t fix it?',
        answer: 'We have a 100% success rate. If we take on your project, we will fix it. That\'s our guarantee. We don\'t take on projects we can\'t rescue.',
      },
    ],
    ctaText: 'Get Emergency Help Now',
  },
  finalCTA: {
    sectionLabel: 'Limited Offer',
    title: 'Don\'t Let Your Project Die',
    description: 'Only 3 Emergency Slots Left This Week. Get your vibe-coded project rescued and shipped before it\'s too late.',
    benefits: [
      'Response in 2 hours, 24/7',
      '50+ projects successfully rescued',
      '100% success rate guarantee',
    ],
    ctaText: 'Get Emergency Help Now',
    ctaSubtext: 'Book Free 15-Min Call',
    image: '/assets/img3.jpg',
    imageAlt: 'Emergency rescue',
  },
};



