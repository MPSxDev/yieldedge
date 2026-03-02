// Content configuration for homepage and yieldedge page
// Homepage uses default values, yieldedge page overrides with general business copy

// Hero variant types for A/B testing
export type HeroVariant = 'default' | 'fomo' | 'spanish-latam' | 'social-proof' | 'problem-agitation';

export interface HeroSlide {
  heading: string;
  subheading: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

// Extended HeroSlide with variant-specific fields
export interface EnhancedHeroSlide extends HeroSlide {
  variant?: HeroVariant;
  lang?: 'en' | 'es';

  // FOMO elements
  urgencyBadge?: string;
  socialProofCount?: string;

  // Social proof elements
  testimonialQuote?: string;
  testimonialAuthor?: string;
  testimonialRole?: string;
  testimonialCompany?: string;
  metrics?: Array<{ value: string; label: string }>;
  logoBar?: string[];

  // Problem-agitation elements
  painPoints?: string[];
  agitationText?: string;
  promiseText?: string;

  // Secondary CTA
  secondaryCta?: { text: string; link: string };
}

export interface HeroContent {
  slides: HeroSlide[];
}

// Enhanced hero content with variant support
export interface EnhancedHeroContent {
  slides: EnhancedHeroSlide[];
  defaultVariant?: HeroVariant;
}

// Value Stack interfaces (Hormozi-style)
export interface ValueStackItem {
  icon: string;
  title: string;
  description: string;
  perceivedValue?: string;
  highlight?: boolean;
}

export interface ValueStackBonus {
  icon: string;
  title: string;
  description: string;
  value: string;
}

export interface ValueStackGuarantee {
  icon: string;
  title: string;
  description: string;
  duration?: string;
}

export interface ValueStackContent {
  sectionLabel: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  items: ValueStackItem[];
  bonuses: ValueStackBonus[];
  totalPerceivedValue: string;
  actualPrice: string;
  savings: string;
  guarantee: ValueStackGuarantee;
  ctaText: string;
  ctaSubtext?: string;
  ctaLink: string;
}

export interface Service {
  icon: string; // Icon component name
  title: string;
  subtitle?: string; // Short compelling statement
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
  topImage?: string;
  topImageAlt?: string;
  bottomImage?: string;
  bottomImageAlt?: string;
  layout?: 'side-by-side' | 'stacked';
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

export interface AboutYieldgeContent {
  sectionLabel: string;
  title: string;
  titleHighlight: string;
  description: string;
  stats: {
    value: string;
    label: string;
    icon: string;
  }[];
  values: {
    icon: string;
    title: string;
    description: string;
  }[];
  commitment: {
    title: string;
    description: string;
  };
}

export interface CompanyLogo {
  name: string;
  logo: string;
  url?: string;
  large?: boolean;
}

export interface CompanyLogosContent {
  sectionLabel?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  logos: CompanyLogo[];
}

export interface PainPointItem {
  icon: string;
  title: string;
  description: string;
}

export interface PainPointsContent {
  sectionLabel: string;
  title: string;
  titleHighlight: string;
  description: string;
  painPoints: PainPointItem[];
  ctaText: string;
  ctaSubtext: string;
}

export interface PageContent {
  hero: HeroContent;
  services: ServicesContent;
  whyChooseUs: WhyChooseUsContent;
  process: ProcessContent;
  caseStudies: CaseStudiesContent;
  faq: FAQContent;
  finalCTA: FinalCTAContent;
  aboutYieldge?: AboutYieldgeContent;
  companyLogos?: CompanyLogosContent;
  painPoints?: PainPointsContent;
}

// Homepage content (Technology Solutions & Offshore Development)
export const homepageContent: PageContent = {
  hero: {
    slides: [
      {
        heading: 'Digital Excellence',
        subheading: 'More than 15 years of innovation',
        description: 'With over 15+ years serving the global technology landscape, Yieldge has established itself as a trusted partner in digital transformation. We\'ve empowered countless organizations to streamline operations and achieve measurable results. Our dedicated professionals bring unmatched expertise and passion to every engagement. Partner with us to unlock your organization\'s full potential and drive lasting innovation!',
        ctaText: 'DISCOVER YIELDGE',
        ctaLink: '/company',
        backgroundImage: '/assets/tech/sean-pollock-PhYq704ffdA-unsplash.jpg',
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
        title: 'QA & Test Automation',
        subtitle: 'Ship faster with confidence through automated quality assurance built into your delivery pipeline.',
        description: 'We ensure your software performs flawlessly before it reaches users. Our QA and test automation services reduce bugs, improve stability, and protect your release timelines without slowing development.',
        features: ['Automated test suites (unit, integration, E2E)', 'Manual and exploratory testing', 'Performance and load testing', 'CI/CD testing integration'],
        image: '/assets/tech/christopher-gower-m_HRfLhgABo-unsplash.jpg',
      },
      {
        icon: 'Shield',
        title: 'Security Services',
        subtitle: 'Protect your systems, data, and reputation with enterprise-grade cybersecurity.',
        description: 'We help organizations identify vulnerabilities, prevent attacks, and stay compliant in an increasingly hostile digital landscape. Security is built into every layer before threats become incidents.',
        features: ['Cybersecurity assessments and hardening', 'Threat detection and prevention', 'Security audits and risk analysis', 'Compliance support (SOC, ISO, best practices)'],
        image: '/assets/tech/ilya-pavlov-OqtafYT5kTw-unsplash.jpg',
      },
      {
        icon: 'Target',
        title: 'Technology Consulting',
        subtitle: 'Turn technology decisions into long-term business advantages.',
        description: 'We work alongside your leadership team to design scalable architectures, modernize systems, and align technology with business goals without unnecessary complexity.',
        features: ['Strategic technology planning', 'Digital transformation initiatives', 'System and architecture design', 'Engineering best practices'],
        image: '/assets/tech/headway-5QgIuuBxKwM-unsplash.jpg',
      },
      {
        icon: 'Globe',
        title: 'Mobile & Web Apps',
        description: 'Custom mobile and web application development for exceptional user experiences',
        features: ['Mobile apps', 'Web development', 'User experience', 'Responsive design'],
        image: '/assets/tech/ilya-pavlov-OqtafYT5kTw-unsplash.jpg',
      },
      {
        icon: 'Users',
        title: 'Staff Augmentation',
        description: 'Access top technical talent to scale your team quickly and efficiently',
        features: ['Technical talent', 'Team scaling', 'Expert resources', 'Flexible engagement'],
        image: '/assets/tech/staffAugmentation.jpg',
      },
      {
        icon: 'TrendingUp',
        title: 'Analytics and Insights',
        description: 'Data-driven insights and analytics solutions to power informed business decisions',
        features: ['Business intelligence', 'Data analytics', 'Reporting', 'Insights'],
        image: '/assets/tech/analitics-3.webp',
      },
      {
        icon: 'Globe',
        title: 'Cloud Solutions',
        description: 'Scalable cloud infrastructure and migration services for modern businesses',
        features: ['Cloud migration', 'Infrastructure', 'Scalability', 'DevOps'],
        image: '/assets/tech/AI-In-Cloud-Computing-Is-Bringing-Efficiency-And-Scalability.webp',
      },
      {
        icon: 'Globe',
        title: 'Offshore Development',
        description: 'Nearshore software development teams delivering quality and value',
        features: ['Nearshore teams', 'Quality delivery', 'Cost-effective', 'Expert developers'],
        image: '/assets/tech/neon-wang-ZvY2q0XB5iQ-unsplash.jpg',
      },
      {
        icon: 'FileCode',
        title: 'Tailored Software',
        description: 'Custom software solutions designed specifically for your unique business needs',
        features: ['Custom development', 'Business-specific', 'Scalable solutions', 'Full lifecycle'],
        image: '/assets/tech/alexandre-debieve-FO7JIlwjOtU-unsplash.jpg',
      },
    ],
  },
  whyChooseUs: {
    title: 'Why Choose',
    titleHighlight: 'Yieldge?',
    description: 'With over 15+ years serving the global technology landscape, Yieldge has established itself as a trusted partner in digital transformation. We\'ve empowered countless organizations to streamline operations and achieve measurable results. Our dedicated professionals bring unmatched expertise and passion to every engagement.',
    image: '/assets/tech/hunters-race-MYbhN8KaaEc-unsplash.jpg',
    imageAlt: 'Growth and performance',
    values: [
      {
        icon: 'Target',
        title: '15+ Years of Experience',
        description: 'We understand the unique challenges businesses face and bring decades of proven expertise to every engagement.',
      },
      {
        icon: 'Zap',
        title: 'Digital Excellence',
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
        image: '/assets/tech/maranda-vandergriff-7aakZdIl4vg-unsplash.jpg',
        deliverables: ['Current state analysis', 'Opportunity assessment', 'ROI projection'],
      },
      {
        icon: 'FileCode',
        number: '02',
        title: 'Custom Implementation Plan',
        description: 'We design a tailored solution that fits your business. No cookie-cutter templates — every system is built for your specific needs.',
        image: '/assets/tech/kevin-matos-Nl_FMFpXo2g-unsplash.jpg',
        deliverables: ['Technical architecture', 'Implementation roadmap', 'Clear timeline & milestones'],
      },
      {
        icon: 'Rocket',
        number: '03',
        title: 'Website Launch & Lead Flow Setup',
        description: 'Seamless integration with your existing tools and processes. We handle the technical complexity while you stay focused on your clients.',
        image: '/assets/tech/john-FlPc9_VocJ4-unsplash.jpg',
        deliverables: ['Production deployment', 'Team training', 'System documentation'],
      },
      {
        icon: 'HeadphonesIcon',
        number: '04',
        title: 'Ongoing Support & Scaling',
        description: 'Continuous monitoring, optimization, and support. As your business grows, we ensure your systems scale with you.',
        image: '/assets/tech/shutterstock_2055553571.jpg',
        deliverables: ['24/7 monitoring', 'Regular updates', 'Priority support'],
      },
    ],
    ctaText: 'Get Your Initial Review',
  },
  caseStudies: {
    sectionLabel: 'Success Stories',
    title: 'Real Results for',
    titleHighlight: 'Technology Pros',
    description: 'See how we\'ve helped technology professionals save time, increase conversions, and grow their business with smart automation.',
    caseStudies: [
      {
        title: 'Boutique Technology Agency',
        category: 'Lead Generation',
        location: 'Miami, FL',
        description: 'A mid-sized agency struggling with manual lead follow-ups and unqualified inquiries. We implemented AI-powered lead qualification and automated nurture sequences.',
        achievements: [
          'Reduced time spent on unqualified leads by 60%',
          'Increased conversion rate from inquiry to showing by 42%',
          'Automated 80% of initial lead communications',
        ],
        image: '/assets/tech/charles-forerunner-3fPXt37X6UQ-unsplash.jpg',
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
        image: '/assets/tech/Business-tech.jpg',
      },
      {
        title: 'Technology Investment Group',
        category: 'Analytics & Insights',
        location: 'Phoenix, AZ',
        description: 'Investors needed better data to evaluate potential acquisitions. We implemented market analytics and predictive pricing tools to inform their investment strategy.',
        achievements: [
          'Improved deal evaluation speed by 65%',
          'Identified 3 high-ROI opportunities in first month',
          'Reduced analysis time from days to hours',
        ],
        image: '/assets/tech/GettyImages-943067460-28883b8136b24330932cd4e2855c2508.jpg',
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
    description: 'Common questions about our technology solutions',
    faqs: [
      {
        question: 'Does AI replace human expertise in technology solutions?',
        answer: 'No. Our AI solutions enhance your expertise, not replace it. We automate repetitive tasks like lead qualification, document processing, and follow-ups — freeing you to focus on building relationships and closing deals. The human touch remains essential in technology solutions.',
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
        answer: 'Yes. We specialize in integrating with popular business platforms, CRMs (like HubSpot, Salesforce), and other tools you already use. Our solutions are built to enhance your current workflow, not disrupt it.',
      },
    ],
    ctaText: 'Schedule a free consultation',
  },
  finalCTA: {
    sectionLabel: 'Get Started Today',
    title: 'Transform Your Business with Technology That Delivers',
    description: 'Schedule a free 30-minute strategic call. No commitment. We analyze your current situation and define a concrete action plan.',
    benefits: [
      'Personalized strategy for your business',
      'Projected ROI and implementation plan',
      'Answers to all your technical questions',
    ],
    ctaText: 'Schedule Your Free Call',
    ctaSubtext: '📅 Immediate availability • 💬 No commitment • ⚡ Clear results',
    image: '/assets/tech/metro_20171121_tech-empowers-tech-polarizes-mark-muro.webp',
    imageAlt: 'Transform your business',
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

// Costa Rica / Spanish page content
export const crContent: PageContent = {
  hero: {
    slides: [
      {
        heading: 'No Construimos Páginas. Construimos Activos Digitales.',
        subheading: 'Infraestructura digital que genera resultados medibles',
        description: 'Diseñamos sistemas digitales con arquitectura sólida, automatización inteligente y posicionamiento estratégico. Todo orientado a convertir visitantes en clientes de forma consistente.',
        ctaText: 'Agendá una Conversación Estratégica',
        ctaLink: 'https://wa.me/50670724236?text=Hola%2C%20me%20interesa%20una%20conversaci%C3%B3n%20estrat%C3%A9gica%20sobre%20mi%20presencia%20digital',
        backgroundImage: '/assets/prof/krakenimages-376KN_ISplE-unsplash.jpg',
      },
    ],
  },
  painPoints: {
    sectionLabel: 'Diagnóstico Inicial',
    title: 'Desafíos Comunes en',
    titleHighlight: 'Presencia Digital',
    description: 'Identificamos patrones recurrentes en negocios que buscan fortalecer su infraestructura digital. Estos son los indicadores que evaluamos.',
    painPoints: [
      {
        icon: 'Search',
        title: 'Baja visibilidad estructural',
        description: 'Tu negocio no aparece cuando clientes potenciales buscan servicios como los tuyos. El posicionamiento orgánico requiere una estrategia técnica definida.',
      },
      {
        icon: 'Smartphone',
        title: 'Experiencia móvil deficiente',
        description: 'Más del 80% del tráfico proviene de dispositivos móviles. Una experiencia inconsistente afecta directamente la tasa de conversión.',
      },
      {
        icon: 'Clock',
        title: 'Rendimiento técnico limitado',
        description: 'La velocidad de carga impacta tanto la experiencia del usuario como el posicionamiento en buscadores. Es un factor crítico medible.',
      },
      {
        icon: 'Users',
        title: 'Ausencia de sistema de conversión',
        description: 'Tráfico sin mecanismos de captura estructurados representa oportunidades perdidas. Cada visitante debería tener un camino claro hacia el contacto.',
      },
      {
        icon: 'TrendingDown',
        title: 'Arquitectura digital fragmentada',
        description: 'Una presencia web desactualizada proyecta una imagen que no refleja la calidad real del negocio. La coherencia visual genera confianza.',
      },
      {
        icon: 'AlertCircle',
        title: 'Falta de métricas y control',
        description: 'Sin datos claros sobre comportamiento de usuarios y fuentes de tráfico, las decisiones se toman sin fundamento estratégico.',
      },
    ],
    ctaText: 'Estos desafíos tienen solución.',
    ctaSubtext: 'Iniciá con una evaluación estratégica de tu presencia digital actual.',
  },
  services: {
    sectionLabel: 'Capacidades Estratégicas',
    title: 'Soluciones Integradas para',
    titleHighlight: 'Crecimiento Digital',
    description: 'Desarrollamos infraestructura digital completa: desde la presencia web hasta sistemas de conversión automatizados que operan de forma continua.',
    services: [
      {
        icon: 'Globe',
        title: 'Arquitectura Web Profesional',
        description: 'Plataformas digitales diseñadas con estándares técnicos actuales. Rendimiento optimizado, seguridad implementada y estructura preparada para escalar.',
        features: ['Arquitectura moderna', 'Experiencia móvil nativa', 'Rendimiento optimizado', 'Fundamentos SEO'],
        image: '/assets/prof/amy-hirschi-izxMVv2Z9dw-unsplash.jpg',
      },
      {
        icon: 'Users',
        title: 'Sistema de Captura y Gestión',
        description: 'Mecanismos estructurados para convertir visitantes en contactos calificados, con integración directa a canales de comunicación como WhatsApp.',
        features: ['Formularios estratégicos', 'Integración WhatsApp Business', 'Gestión de contactos', 'Trazabilidad completa'],
        image: '/assets/office/vitaly-gariev-2OnT7IKfLyw-unsplash.jpg',
      },
      {
        icon: 'MessageCircle',
        title: 'Automatización de Seguimiento',
        description: 'Flujos automatizados que mantienen la comunicación activa con prospectos y clientes, sin intervención manual constante.',
        features: ['Secuencias automatizadas', 'Seguimiento por email', 'Recordatorios programados', 'Disponibilidad continua'],
        image: '/assets/img6.jpg',
      },
      {
        icon: 'Search',
        title: 'Posicionamiento Orgánico Local',
        description: 'Estrategia SEO enfocada en el mercado costarricense. Optimización técnica y de contenido para aparecer en búsquedas relevantes.',
        features: ['Google Business Profile', 'SEO técnico local', 'Estrategia de palabras clave', 'Crecimiento orgánico'],
        image: '/assets/odonto/ozkan-guner-9Gw9XCuazuY-unsplash.jpg',
      },
      {
        icon: 'BarChart',
        title: 'Inteligencia y Métricas',
        description: 'Paneles de control con indicadores clave que permiten tomar decisiones informadas sobre la estrategia digital.',
        features: ['Métricas de conversión', 'Análisis de fuentes', 'Seguimiento de objetivos', 'Reportes periódicos'],
        image: '/assets/prof/divaris-shirichena-dgPNu73ihYE-unsplash.jpg',
      },
    ],
  },
  whyChooseUs: {
    title: 'Un Socio Estratégico',
    titleHighlight: 'en Costa Rica',
    description: 'Funcionamos como una extensión de tu equipo. Entendemos tus objetivos de negocio y diseñamos soluciones digitales alineadas con ellos.',
    image: '/assets/prof/tyler-franta-iusJ25iYu1c-unsplash.jpg',
    imageAlt: 'Equipo Yieldge Costa Rica',
    values: [
      {
        icon: 'Handshake',
        title: 'Relación de Largo Plazo',
        description: 'No entregamos proyectos y desaparecemos. Establecemos una colaboración continua orientada al crecimiento sostenido de tu negocio.',
      },
      {
        icon: 'Target',
        title: 'Decisiones Basadas en Datos',
        description: 'Cada recomendación está respaldada por métricas concretas. Reportamos resultados de forma clara y transparente.',
      },
      {
        icon: 'MapPin',
        title: 'Conocimiento del Mercado Local',
        description: 'Operamos en Costa Rica y entendemos las particularidades del mercado costarricense, desde comportamiento del consumidor hasta canales efectivos.',
      },
      {
        icon: 'Shield',
        title: 'Cumplimiento y Seguridad',
        description: 'Operamos bajo la Ley N.º 8968 de Protección de Datos. La seguridad de la información es parte integral de nuestra metodología.',
      },
    ],
  },
  process: {
    sectionLabel: 'Metodología de Trabajo',
    title: 'Un Proceso Estructurado',
    titleHighlight: 'en 3 Fases',
    description: 'Cada proyecto sigue una metodología clara que garantiza resultados medibles y alineación constante con tus objetivos.',
    steps: [
      {
        icon: 'MessageCircle',
        number: '01',
        title: 'Evaluación Estratégica',
        description: 'Analizamos tu situación actual, identificamos oportunidades y definimos objetivos claros. Esta fase establece las bases del proyecto.',
        image: '/assets/office/hoi-an-and-da-nang-photographer-jsaM46IKhlo-unsplash.jpg',
        deliverables: ['Diagnóstico de presencia digital', 'Identificación de oportunidades', 'Propuesta de alcance definido'],
      },
      {
        icon: 'Palette',
        number: '02',
        title: 'Diseño e Implementación',
        description: 'Desarrollamos la solución técnica completa: arquitectura web, sistemas de conversión e integraciones necesarias.',
        image: '/assets/tech/shutterstock_2055553571.jpg',
        deliverables: ['Plataforma digital profesional', 'Sistemas de captura configurados', 'Integraciones operativas', 'Capacitación de uso'],
      },
      {
        icon: 'TrendingUp',
        number: '03',
        title: 'Optimización Continua',
        description: 'Monitoreamos el rendimiento, analizamos datos y realizamos ajustes iterativos para mejorar resultados de forma constante.',
        image: '/assets/tech/analitics 3.webp',
        deliverables: ['Monitoreo de métricas clave', 'Reportes de rendimiento', 'Soporte técnico continuo', 'Mejoras basadas en datos'],
      },
    ],
    ctaText: 'Iniciar Evaluación Estratégica',
  },
  caseStudies: {
    sectionLabel: 'Casos de Éxito',
    title: 'Resultados Reales en',
    titleHighlight: 'Costa Rica',
    description: 'Negocios como el tuyo que ya están atrayendo más clientes y vendiendo más.',
    caseStudies: [
      {
        title: 'Clínica Dental',
        category: 'Más Citas Agendadas',
        location: 'San José, CR',
        description: 'Una clínica dental que perdía pacientes porque no contestaba WhatsApp a tiempo. Le creamos un sitio profesional con formulario de citas y WhatsApp automático.',
        achievements: [
          '55% más citas agendadas por mes',
          'Respuesta automática en menos de 1 minuto',
          'Pacientes encuentran la clínica en Google',
        ],
        image: '/assets/img12.jpg',
      },
      {
        title: 'Bufete de Abogados',
        category: 'Presencia Profesional',
        location: 'Heredia, CR',
        description: 'Un bufete que dependía solo de referencias. Creamos su sitio web profesional con SEO local y formulario de consultas.',
        achievements: [
          '3x más consultas desde Google',
          'Imagen profesional que genera confianza',
          'Menos tiempo explicando qué hacen',
        ],
        image: '/assets/img12.jpg',
      },
      {
        title: 'Restaurante Local',
        category: 'Más Reservaciones',
        location: 'Escazú, CR',
        description: 'Un restaurante que recibía llamadas todo el día para reservaciones. Implementamos reservas online y menú digital.',
        achievements: [
          '40% menos llamadas de reservación',
          'Clientes ven el menú antes de llegar',
          'Reservaciones automáticas por WhatsApp',
        ],
        image: '/assets/img12.jpg',
      },
    ],
    stats: [
      { icon: 'Users', value: '55%', label: 'Más clientes captados' },
      { icon: 'Timer', value: '✓', label: 'Atención personalizada' },
      { icon: 'TrendingUp', value: '3x', label: 'Más consultas' },
      { icon: 'Star', value: '100%', label: 'Clientes satisfechos' },
    ],
  },
  faq: {
    sectionLabel: 'Información Adicional',
    title: 'Preguntas',
    titleHighlight: 'Frecuentes',
    description: 'Aclaramos las consultas más comunes sobre nuestros servicios y metodología de trabajo.',
    faqs: [
      {
        question: '¿Para qué tipo de negocios trabajan?',
        answer: 'Colaboramos con empresas de servicios profesionales, comercio, salud, gastronomía y otros sectores en Costa Rica. Cada proyecto se diseña según las necesidades específicas del negocio y su mercado objetivo.',
      },
      {
        question: '¿Cómo se estructura la inversión?',
        answer: 'Los proyectos se definen con alcance claro desde el inicio. Trabajamos tanto con PYMEs como con empresas de mayor escala. En la conversación inicial presentamos opciones concretas con costos definidos.',
      },
      {
        question: '¿Cuál es el tiempo de implementación?',
        answer: 'Un proyecto de arquitectura web puede completarse en 2-4 semanas. Implementaciones más completas con sistemas de automatización requieren 4-8 semanas. Los plazos se definen desde la fase de evaluación.',
      },
      {
        question: '¿Requiero conocimientos técnicos?',
        answer: 'No. Nos encargamos de toda la implementación técnica. Además, incluimos capacitación para que puedas gestionar los aspectos operativos de tu plataforma de forma autónoma.',
      },
      {
        question: '¿Cómo manejan la seguridad de datos?',
        answer: 'Operamos bajo la Ley N.º 8968 de Protección de Datos de Costa Rica. Implementamos certificados SSL, servidores seguros y protocolos de privacidad en todos los proyectos.',
      },
      {
        question: '¿Ofrecen soporte posterior a la entrega?',
        answer: 'Sí. Ofrecemos planes de mantenimiento y optimización continua. También podemos atender requerimientos puntuales según las necesidades que surjan.',
      },
    ],
    ctaText: '¿Tenés otra consulta? Contactanos',
  },
  finalCTA: {
    sectionLabel: 'Siguiente Paso',
    title: 'Iniciá Tu Proceso de Transformación Digital',
    description: 'Agendá una conversación estratégica. Evaluamos tu situación actual, identificamos oportunidades concretas y definimos un plan de acción claro.',
    benefits: [
      'Evaluación de tu infraestructura digital actual',
      'Identificación de oportunidades de mejora',
      'Propuesta estructurada con alcance definido',
    ],
    ctaText: 'Agendar Conversación Estratégica',
    ctaSubtext: 'Respuesta en menos de 24 horas • Sin compromiso',
    image: '/assets/odonto/ozkan-guner-AduzI0N9iRI-unsplash.jpg',
    imageAlt: 'Equipo Yieldge Costa Rica',
  },
  aboutYieldge: {
    sectionLabel: 'Quiénes Somos',
    title: 'Socio Estratégico Digital',
    titleHighlight: 'en Costa Rica',
    description: 'No construimos páginas web. Construimos activos digitales. Somos un equipo especializado que colabora de cerca con negocios que buscan estructurar su presencia digital de forma profesional y sostenible.',
    stats: [
      {
        value: '50+',
        label: 'Proyectos Entregados',
        icon: 'Users',
      },
      {
        value: '100%',
        label: 'Compromiso con Resultados',
        icon: 'Star',
      },
    ],
    values: [
      {
        icon: 'MessageCircle',
        title: 'Comunicación Transparente',
        description: 'Mantenemos visibilidad completa del proyecto. Reportes claros, actualizaciones frecuentes y un canal directo para resolver dudas.',
      },
      {
        icon: 'Target',
        title: 'Orientación a Métricas',
        description: 'Cada decisión está respaldada por datos. Definimos indicadores desde el inicio y los monitoreamos de forma continua.',
      },
      {
        icon: 'Handshake',
        title: 'Colaboración Continua',
        description: 'Establecemos relaciones de trabajo de largo plazo. Seguimos disponibles para evolucionar tu infraestructura digital conforme crece tu negocio.',
      },
    ],
    commitment: {
      title: 'Compromiso con la Comunidad',
      description: 'Creemos que la tecnología debe generar impacto positivo. Una porción de nuestros resultados se destina a iniciativas de educación y acceso tecnológico para comunidades vulnerables en Costa Rica.',
    },
  },
  companyLogos: {
    sectionLabel: 'COLABORACIONES',
    title: 'Organizaciones con las que hemos trabajado',
    titleHighlight: '',
    description: 'Hemos colaborado con empresas de diversos sectores e industrias, desde startups hasta organizaciones establecidas.',
    logos: [
      {
        name: '3M',
        logo: '/assets/logos/3m.png',
      },
      {
        name: 'GastroMedical CR',
        logo: '/assets/logos/drzuniga-logo.png',
        large: true,
      },
      {
        name: 'HS',
        logo: '/assets/logos/hslogo.png',
      },
      {
        name: 'OnlyDust',
        logo: '/assets/logos/onlydust.jpg',
      },
      {
        name: 'Stellar',
        logo: '/assets/logos/stellar.avif',
      },
    ],
  },
};

// Costa Rica specific content for company, solutions and careers pages
export interface CRCompanyContent {
  mission: {
    title: string;
    subtitle: string;
    description: string;
    donation: {
      title: string;
      firstParagraph: string;
      secondParagraph: string;
      quote: {
        text: string;
        author: string;
      };
      images: string[];
    };
  };
  hero: {
    label: string;
    title: string;
    subtitle: string;
    description: string;
    image?: string;
  };
  about: {
    title: string;
    description: string;
    highlights: Array<{
      icon: string;
      value: string;
      label: string;
    }>;
  };
  values: {
    title: string;
    description: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  team: {
    title: string;
    description: string;
  };
}

export interface CRSolutionsContent {
  hero: {
    label: string;
    title: string;
    titleHighlight: string;
    description: string;
  };
  solutions: Array<{
    icon: string;
    title: string;
    description: string;
    features: string[];
    forWho: string;
    image: string;
  }>;
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export interface CRCareersContent {
  hero: {
    label: string;
    title: string;
    description: string;
  };
  culture: {
    title: string;
    description: string;
    values: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  opportunities: {
    title: string;
    description: string;
    ctaText: string;
    ctaDescription: string;
  };
}

export const crCompanyContent: CRCompanyContent = {
  mission: {
    title: 'Tecnología con Impacto Real',
    subtitle: 'Propósito',
    description: 'Creemos que la innovación solo tiene valor cuando genera un cambio tangible en la vida de las personas.',
    donation: {
      title: 'Compromiso Social',
      firstParagraph: 'Destinamos un porcentaje de nuestros ingresos a iniciativas educativas y de acceso tecnológico para niños en situación vulnerable en Costa Rica.',
      secondParagraph: 'Crecimiento empresarial y responsabilidad social no son conceptos separados para nosotros.',
      quote: {
        text: 'Construir activos digitales también significa construir oportunidades para quienes más las necesitan.',
        author: 'Yieldge',
      },
      images: [
        '/assets/charity/1cha.jpeg',
        '/assets/charity/2char.jpeg',
        '/assets/charity/3cha.jpeg',
      ],
    },
  },
  hero: {
    label: 'Quiénes Somos',
    title: 'Socio Estratégico Digital en Costa Rica',
    subtitle: 'No construimos páginas. Construimos activos digitales.',
    description: 'Colaboramos con empresas que buscan estructurar su presencia digital de forma profesional. Conocemos el mercado costarricense y diseñamos soluciones alineadas con sus objetivos de negocio.',
    image: '/assets/prof/hunters-race-MYbhN8KaaEc-unsplash.jpg',
  },
  about: {
    title: 'Nuestra Visión',
    description: 'Ayudamos a empresas en Costa Rica a competir en el entorno digital con infraestructura sólida, sistemas de conversión efectivos y posicionamiento estratégico. Cada proyecto se diseña para generar resultados medibles.',
    highlights: [
      { icon: 'Users', value: '50+', label: 'Proyectos entregados' },
      { icon: 'Star', value: '100%', label: 'Orientación a resultados' },
    ],
  },
  values: {
    title: 'Metodología de Trabajo',
    description: 'Principios que definen cada colaboración.',
    items: [
      {
        icon: 'MessageCircle',
        title: 'Comunicación Directa',
        description: 'Reportes claros, actualizaciones frecuentes y visibilidad completa del proyecto en todo momento.',
      },
      {
        icon: 'Target',
        title: 'Decisiones Basadas en Datos',
        description: 'Cada recomendación está respaldada por métricas. Mostramos resultados concretos, no promesas.',
      },
      {
        icon: 'Handshake',
        title: 'Relación de Largo Plazo',
        description: 'No entregamos y desaparecemos. Establecemos colaboraciones continuas orientadas al crecimiento sostenido.',
      },
    ],
  },
  team: {
    title: 'Conversemos',
    description: 'Cada proyecto comienza con una conversación. Contanos sobre tu negocio y exploremos cómo podemos colaborar.',
  },
};

export const crSolutionsContent: CRSolutionsContent = {
  hero: {
    label: 'Nuestras Soluciones',
    title: 'Soluciones Digitales para',
    titleHighlight: 'Negocios en Costa Rica',
    description: 'No vendemos tecnología. Resolvemos problemas reales de negocios como el tuyo.',
  },
  solutions: [
    {
      icon: 'Globe',
      title: 'Sitio Web Profesional',
      description: 'Tu negocio visible 24/7. Un sitio web que transmite confianza, aparece en Google y convierte visitantes en clientes.',
      features: [
        'Diseño profesional que refleja tu marca',
        'Optimizado para celular (donde están tus clientes)',
        'Carga rápida (menos de 3 segundos)',
        'Aparecé en Google cuando busquen tus servicios',
      ],
      forWho: 'Ideal para: clínicas, restaurantes, bufetes, salones, talleres, tiendas',
      image: '/assets/sales/young-professional-website-developer-cooperative-computer-engineer-team-brainstorming-sharing-idea-program-writing-coding-modern-meeting-room-teamwork-concept-closeup-burgeoning.jpg',
    },
    {
      icon: 'MessageCircle',
      title: 'WhatsApp que Vende',
      description: 'Capturá clientes desde tu sitio web y respondé automáticamente. Nunca pierdas una oportunidad por no contestar a tiempo.',
      features: [
        'Botón de WhatsApp siempre visible',
        'Formularios que envían directo a tu WhatsApp',
        'Respuestas automáticas cuando no podés contestar',
        'Organización de conversaciones por cliente',
      ],
      forWho: 'Ideal para: negocios que reciben muchas consultas por WhatsApp',
      image: '/assets/sales/woman-using-smartphone-work-business-social-network-communication.jpg',
    },
    {
      icon: 'Search',
      title: 'SEO Local (Aparecé en Google)',
      description: 'Que te encuentren cuando busquen tus servicios en Costa Rica. Más visibilidad = más clientes.',
      features: [
        'Optimización para búsquedas locales',
        'Configuración de Google My Business',
        'Palabras clave de tu industria',
        'Reportes mensuales de posicionamiento',
      ],
      forWho: 'Ideal para: negocios que quieren más clientes desde Google',
      image: '/assets/sales/closeup-hands-using-mobile-phone-computer-laptop-black-marble-table.jpg',
    },
    {
      icon: 'Calendar',
      title: 'Sistema de Citas Online',
      description: 'Dejá que tus clientes agenden solos. Menos llamadas, menos WhatsApps, más tiempo para vos.',
      features: [
        'Calendario de citas integrado a tu sitio',
        'Confirmaciones automáticas por WhatsApp',
        'Recordatorios para reducir ausencias',
        'Sincronización con tu agenda',
      ],
      forWho: 'Ideal para: clínicas, salones de belleza, consultorios, coaches',
      image: '/assets/sales/calendar-computer-software-application-brisk-schedule-planning.jpg',
    },
    {
      icon: 'ShoppingCart',
      title: 'Tienda Online Básica',
      description: 'Vendé tus productos online. Catálogo, carrito y pagos integrados.',
      features: [
        'Catálogo de productos con fotos',
        'Carrito de compras fácil de usar',
        'Integración con SINPE Móvil',
        'Gestión de inventario básica',
      ],
      forWho: 'Ideal para: tiendas, emprendedores, negocios con productos físicos',
      image: '/assets/sales/woman-shopping-online-internet-marketplace-browsing-sale-items-modern-lifestyle-use-credit-card-online-payment-from-wallet-protected-by-crucial-cyber-security-software.jpg',
    },
  ],
  cta: {
    title: '¿No sabés qué necesitás?',
    description: 'Hablemos. Te escuchamos y te recomendamos solo lo que realmente necesita tu negocio.',
    buttonText: 'Diagnóstico Gratis por WhatsApp',
  },
};

export const crCareersContent: CRCareersContent = {
  hero: {
    label: 'Trabajá Con Nosotros',
    title: 'Trabajá con Yieldge Costa Rica',
    description: 'Buscamos personas que quieran crecer, aprender y aportar valor real a negocios.',
  },
  culture: {
    title: 'Nuestra Cultura',
    description: 'No somos corporativos. Somos un equipo pequeño donde tu trabajo importa.',
    values: [
      {
        icon: 'Lightbulb',
        title: 'Aprendizaje Continuo',
        description: 'Siempre hay algo nuevo que aprender. Te apoyamos en tu crecimiento profesional.',
      },
      {
        icon: 'Users',
        title: 'Trabajo en Equipo',
        description: 'Todos aportamos. Tu opinión cuenta y tus ideas se escuchan.',
      },
      {
        icon: 'Heart',
        title: 'Balance de Vida',
        description: 'Trabajo remoto, horarios flexibles y respeto por tu tiempo personal.',
      },
      {
        icon: 'Target',
        title: 'Impacto Real',
        description: 'Trabajás directamente con clientes y ves el resultado de tu trabajo.',
      },
    ],
  },
  opportunities: {
    title: 'Oportunidades Actuales',
    description: 'Actualmente no tenemos posiciones abiertas, pero siempre nos interesa conocer gente talentosa.',
    ctaText: 'Envianos tu CV',
    ctaDescription: 'Si creés que podés aportar a nuestro equipo, escribinos a careers@yieldge.com',
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
        backgroundImage: '/assets/realestate/alejandra-cifre-gonzalez-ylyn5r4vxcA-unsplash.jpg',
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
        image: '/assets/realestate/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg',
      },
      {
        icon: 'FileText',
        title: 'Document & Data Handling Automation',
        description: 'Contracts, valuations, leases, and portfolios — organized, searchable, and analyzed automatically.',
        features: ['Contract automation', 'Document storage', 'Data extraction', 'Searchable archives'],
        image: '/assets/realestate/collov-home-design-H-1j_s0dhCw-unsplash.jpg',
      },
      {
        icon: 'TrendingUp',
        title: 'Market Analytics & Valuation Insights',
        description: 'Get predictive pricing and investment guidance based on real data. Make smarter decisions faster.',
        features: ['Predictive pricing', 'Market trends', 'Investment analysis', 'ROI forecasting'],
        image: '/assets/realestate/hutomo-abrianto-9mPl0Zo7_gQ-unsplash.jpg',
      },
      {
        icon: 'Home',
        title: 'Property & Tenant Management',
        description: 'Rent collection, maintenance scheduling, tenant communications, lease renewals — automated reliably.',
        features: ['Automated rent collection', 'Maintenance tracking', 'Tenant portal', 'Lease management'],
        image: '/assets/realestate/jason-briscoe-UV81E0oXXWQ-unsplash.jpg',
      },
      {
        icon: 'Globe',
        title: 'Scalable Web & Cloud Infrastructure',
        description: 'Secure, reliable, and customized for real-estate businesses ready to grow without technical headaches.',
        features: ['Cloud hosting', 'Data security', 'Scalable architecture', 'Custom integrations'],
        image: '/assets/realestate/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg',
      },
    ],
  },
  whyChooseUs: {
    title: 'Why Choose',
    titleHighlight: 'Yieldge?',
    description: 'Experienced tech team with proven results in real-estate. We\'ve helped clients cut admin time, increase conversions, and reduce costs — so you can focus on growing your business.',
    image: '/assets/realestate/ian-macdonald-W8z6aiwfi1E-unsplash.jpg',
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
        image: '/assets/realestate/frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg',
        deliverables: ['Current state analysis', 'Opportunity assessment', 'ROI projection'],
      },
      {
        icon: 'FileCode',
        number: '02',
        title: 'Custom Implementation Plan',
        description: 'We design a tailored solution that fits your business. No cookie-cutter templates — every system is built for your specific needs.',
        image: '/assets/realestate/lotus-design-n-print-n5RsUiVf5T0-unsplash.jpg',
        deliverables: ['Technical architecture', 'Implementation roadmap', 'Clear timeline & milestones'],
      },
      {
        icon: 'Rocket',
        number: '03',
        title: 'Website Launch & Lead Flow Setup',
        description: 'Seamless integration with your existing tools and processes. We handle the technical complexity while you stay focused on your clients.',
        image: '/assets/realestate/jonathan-mueller-rFuSb31DIA0-unsplash.jpg',
        deliverables: ['Production deployment', 'Team training', 'System documentation'],
      },
      {
        icon: 'HeadphonesIcon',
        number: '04',
        title: 'Ongoing Support & Scaling',
        description: 'Continuous monitoring, optimization, and support. As your business grows, we ensure your systems scale with you.',
        image: '/assets/realestate/grant-lemons-jTCLppdwSEc-unsplash.jpg',
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
        image: '/assets/realestate/point3d-commercial-imaging-ltd--45_-1tND3k-unsplash.jpg',
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
        image: '/assets/realestate/point3d-commercial-imaging-ltd-5il1bOS8oSc-unsplash.jpg',
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
        image: '/assets/realestate/point3d-commercial-imaging-ltd-Umir_z3MHqk-unsplash.jpg',
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
    sectionLabel: 'Get Started Today',
    title: 'Transform Your Business with Technology That Delivers',
    description: 'Schedule a free 30-minute strategic call. No commitment. We analyze your current situation and define a concrete action plan.',
    benefits: [
      'Personalized strategy for your business',
      'Projected ROI and implementation plan',
      'Answers to all your technical questions',
    ],
    ctaText: 'Schedule Your Free Call',
    ctaSubtext: '📅 Immediate availability • 💬 No commitment • ⚡ Clear results',
    image: '/assets/realestate/webaliser-_TPTXZd9mOo-unsplash.jpg',
    imageAlt: 'Transform your business',
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

// Construction & Contractors page content
export const constructionContent: PageContent = {
  hero: {
    slides: [
      {
        heading: 'Construction & Contractor Partner',
        subheading: 'Get More Local Job Requests',
        description: 'Turn website visitors into qualified job leads. We build high-converting websites and automated follow-up systems that book more estimates and fill your calendar.',
        ctaText: 'Get More Job Requests',
        ctaLink: '/get-in-touch',
        backgroundImage: '/assets/construction/glenov-brankovic-t9eQm2y1tn8-unsplash.jpg',
      },
    ],
  },
  services: {
    sectionLabel: 'What We Build',
    title: 'Stop chasing leads.',
    titleHighlight: 'Start booking jobs.',
    description: 'We build websites and automation systems that capture local leads, follow up instantly, and book more estimates — so you can focus on the work, not the phones.',
    services: [
      {
        icon: 'Globe',
        title: 'High-Converting Contractor Websites',
        description: 'Professional websites built to convert visitors into job requests. Mobile-responsive, fast-loading, and optimized for local search.',
        features: ['Mobile-responsive design', 'Fast loading times', 'Local SEO optimized', 'Gallery showcases'],
        image: '/assets/construction/c-dustin-91AQt9p4Mo8-unsplash.jpg',
      },
      {
        icon: 'Users',
        title: '24/7 Lead Capture + Instant Follow-Up',
        description: 'Capture leads around the clock and follow up instantly with automated SMS, email, and phone calls — even when you\'re on the job site.',
        features: ['24/7 lead capture', 'Instant SMS alerts', 'Automated follow-ups', 'Never miss a lead'],
        image: '/assets/construction/josh-olalde-X1P1_EDNnok-unsplash.jpg',
      },
      {
        icon: 'MessageCircle',
        title: 'Automated Estimate Scheduling',
        description: 'Let customers book estimates directly from your website. Automated reminders reduce no-shows and keep your calendar full.',
        features: ['Online booking', 'Automated reminders', 'Calendar sync', 'Reduced no-shows'],
        image: '/assets/construction/sven-mieke-fteR0e2BzKo-unsplash.jpg',
      },
      {
        icon: 'BarChart',
        title: 'Lead Tracking + ROI Dashboard',
        description: 'See exactly where your leads come from, which jobs close, and your marketing ROI — all in one simple dashboard.',
        features: ['Lead source tracking', 'Job conversion rates', 'Marketing ROI', 'Simple reports'],
        image: '/assets/construction/jens-behrmann-Iy3OdKaszJs-unsplash.jpg',
      },
      {
        icon: 'Bot',
        title: 'Optional AI Phone + Chat Support',
        description: 'Let AI handle initial customer questions, qualify leads, and schedule estimates — freeing you to focus on the work.',
        features: ['AI phone answering', 'Lead qualification', 'Appointment scheduling', 'FAQ automation'],
        image: '/assets/construction/umit-yildirim-9OB46apMbC4-unsplash.jpg',
      },
    ],
  },
  whyChooseUs: {
    title: 'Why Choose',
    titleHighlight: 'Yieldge?',
    description: 'We specialize in contractor websites and automation. Our clients book more estimates, respond faster, and close more jobs — with systems built for the trades.',
    image: '/assets/construction/kevin-grieve-QCdRhVj7N8w-unsplash.jpg',
    imageAlt: 'Construction success',
    topImage: '/assets/construction/scott-blake-x-ghf9LjrVg-unsplash.jpg',
    topImageAlt: 'Contractors working on site',
    bottomImage: '/assets/construction/etienne-girardet-sgYamIzhAhg-unsplash.jpg',
    bottomImageAlt: 'Professional construction team',
    values: [
      {
        icon: 'Target',
        title: 'Built for the Trades',
        description: 'Purpose-built systems for contractors selling high-ticket local services — not generic software.',
      },
      {
        icon: 'Zap',
        title: 'Fast Response = More Jobs',
        description: 'Instant follow-ups help you reach leads first and win more work. Speed closes deals.',
      },
      {
        icon: 'Lightbulb',
        title: 'Custom to Your Business',
        description: 'Tailored to your services, service area, and booking flow — no templates, no fluff.',
      },
      {
        icon: 'Shield',
        title: 'Reliable & Secure',
        description: 'Enterprise-grade uptime and security so your data — and your reputation — stay protected.',
      },
    ],
  },
  process: {
    sectionLabel: 'How It Works',
    title: 'From website to',
    titleHighlight: 'booked jobs in 3 steps',
    description: 'Our proven process gets you up and running fast — from initial setup to booking more estimates.',
    steps: [
      {
        icon: 'ClipboardCheck',
        number: '01',
        title: 'Initial Review (No Obligation)',
        description: 'We analyze your current lead flow, identify opportunities, and show you exactly how automation can book more jobs.',
        image: '/assets/construction/anthony-fomin-sTw2KYpoujk-unsplash.jpg',
        deliverables: ['Current state analysis', 'Opportunity assessment', 'ROI projection'],
      },
      {
        icon: 'FileCode',
        number: '02',
        title: 'Build Your System',
        description: 'We build your website, set up lead capture, configure automated follow-ups, and integrate with your existing tools.',
        image: '/assets/construction/mitchell-luo-TtX79Vkm8gs-unsplash.jpg',
        deliverables: ['Website launch', 'Lead capture setup', 'Automation configuration', 'Team training'],
      },
      {
        icon: 'Rocket',
        number: '03',
        title: 'Book More Estimates',
        description: 'Your system goes live and starts capturing leads 24/7. We monitor performance and optimize to book more jobs.',
        image: '/assets/construction/scott-blake-x-ghf9LjrVg-unsplash.jpg',
        deliverables: ['Performance monitoring', 'Conversion optimization', 'Ongoing support', 'More booked jobs'],
      },
    ],
    ctaText: 'Get Your Initial Review',
  },
  caseStudies: {
    sectionLabel: 'Success Stories',
    title: 'Real Results for',
    titleHighlight: 'Contractors',
    description: 'See how we\'ve helped contractors book more estimates, respond faster, and close more jobs with smart automation.',
    caseStudies: [
      {
        title: 'HVAC Company',
        category: 'Lead Generation',
        location: 'Houston, TX',
        description: 'An HVAC company struggling with slow response times and missed leads. We built a high-converting website with instant SMS follow-ups.',
        achievements: [
          'Increased booked estimates by 65%',
          'Reduced response time from hours to minutes',
          'Captured leads 24/7, even after hours',
        ],
        image: '/assets/construction/ricardo-gomez-angel-jYNvXKTUYvs-unsplash.jpg',
      },
      {
        title: 'Roofing Contractor',
        category: 'Conversion Optimization',
        location: 'Phoenix, AZ',
        description: 'A roofing contractor losing leads to competitors. We implemented automated follow-ups and online estimate scheduling.',
        achievements: [
          'Booked 3x more estimates per month',
          'Reduced no-shows by 70% with reminders',
          'Closed 40% more jobs',
        ],
        image: '/assets/construction/dean-bennett-aBV8pVODWiM-unsplash.jpg',
      },
      {
        title: 'General Contractor',
        category: 'Operations Automation',
        location: 'Denver, CO',
        description: 'A general contractor juggling multiple projects and missing calls. We set up AI phone answering and lead tracking.',
        achievements: [
          'Never missed a lead again',
          'Saved 15 hours per week on admin',
          'Increased revenue by 50%',
        ],
        image: '/assets/construction/jeriden-villegas-niSnhfMjiMI-unsplash.jpg',
      },
    ],
    stats: [
      { icon: 'Timer', value: '60%', label: 'Faster response time' },
      { icon: 'TrendingUp', value: '65%', label: 'More booked estimates' },
      { icon: 'DollarSign', value: '24/7', label: 'Lead capture' },
      { icon: 'Bot', value: '50%', label: 'More jobs closed' },
    ],
  },
  faq: {
    sectionLabel: 'FAQ',
    title: 'Questions?',
    titleHighlight: 'We\'ve got answers',
    description: 'Common questions about our contractor website and automation solutions',
    faqs: [
      {
        question: 'Will this work for my trade?',
        answer: 'Yes. Our systems work for HVAC, roofing, plumbing, electrical, remodeling, general contractors, and all home service businesses. We customize every solution to fit your specific trade and how you book jobs.',
      },
      {
        question: 'How fast will I see results?',
        answer: 'Most clients see more booked estimates within the first month. You\'ll start capturing leads as soon as your website goes live, typically within 2-4 weeks.',
      },
      {
        question: 'What if I already have a website?',
        answer: 'We can work with your existing website and add lead capture and automation, or build you a new high-converting site from scratch. We\'ll recommend the best approach during your initial review.',
      },
      {
        question: 'How much does it cost?',
        answer: 'Investment varies based on your specific needs and service area. Schedule an initial review and we\'ll provide a detailed proposal with clear pricing. Most clients see ROI within 3-6 months through more booked jobs.',
      },
      {
        question: 'Do I need to be tech-savvy?',
        answer: 'No technical expertise required. We design user-friendly systems and provide training for your team. We also offer ongoing support to ensure smooth operation.',
      },
      {
        question: 'Can this integrate with my existing tools?',
        answer: 'Yes. We integrate with popular contractor CRMs, scheduling tools, payment processors, and other software you already use. Our solutions enhance your current workflow.',
      },
    ],
    ctaText: 'Schedule a consultation',
  },
  finalCTA: {
    sectionLabel: 'Limited Offer',
    title: 'Ready to Book More Jobs?',
    description: 'Schedule an initial review with no obligation. We\'ll analyze your current lead flow and show you exactly how to book more estimates.',
    benefits: [
      'Personalized strategy for your trade',
      'ROI projection and implementation plan',
      'Answers to all your questions',
    ],
    ctaText: 'Get Your Initial Review',
    ctaSubtext: '📅 Immediate availability • 💬 No commitment • ⚡ Clear results',
    image: '/assets/construction/john-kakuk-hfj5CG9dvuU-unsplash.jpg',
    imageAlt: 'Book more jobs',
  },
};

// Beauty & Aesthetics page content
export const beautyContent: PageContent = {
  hero: {
    slides: [
      {
        heading: 'Beauty & Salon Partner',
        subheading: 'Turn Followers Into Booked Clients',
        description: 'We build Instagram-worthy websites and booking systems that turn your social media followers into paying clients — automatically.',
        ctaText: 'Get More Appointments',
        ctaLink: '/get-in-touch',
        backgroundImage: '/assets/beauty/quentin-mahe-mAW3jUP6G6E-unsplash.jpg',
      },
    ],
  },
  services: {
    sectionLabel: 'What We Build',
    title: 'Make your brand look as',
    titleHighlight: 'good as your work',
    description: 'We build beautiful websites and booking systems that showcase your work, capture leads from Instagram, and fill your calendar — 24/7.',
    services: [
      {
        icon: 'Globe',
        title: 'Stunning Portfolio Websites',
        description: 'Beautiful, mobile-first websites that showcase your work and convert visitors into booked appointments. Built for beauty professionals.',
        features: ['Mobile-first design', 'Portfolio galleries', 'Instagram integration', 'Online booking'],
        image: '/assets/beauty/adam-winger-fI-TKWjKYls-unsplash.jpg',
      },
      {
        icon: 'Users',
        title: 'Online Booking + Calendar Sync',
        description: 'Let clients book appointments 24/7 directly from your website or Instagram. Syncs with your calendar and sends automated reminders.',
        features: ['24/7 online booking', 'Calendar sync', 'Automated reminders', 'Reduced no-shows'],
        image: '/assets/beauty/baylee-gramling-a3xr2mVjT5M-unsplash.jpg',
      },
      {
        icon: 'MessageCircle',
        title: 'Automated Client Follow-Ups',
        description: 'Stay top-of-mind with automated follow-ups, appointment reminders, and re-booking campaigns — all on autopilot.',
        features: ['Appointment reminders', 'Re-booking campaigns', 'Review requests', 'Birthday messages'],
        image: '/assets/beauty/fleur-kaan-e7jpGYe7OtU-unsplash.jpg',
      },
      {
        icon: 'BarChart',
        title: 'Instagram to Appointment Pipeline',
        description: 'Turn Instagram followers into paying clients. Track which posts drive bookings and optimize what works.',
        features: ['Instagram link-in-bio', 'Lead tracking', 'Booking analytics', 'Social proof'],
        image: '/assets/beauty/engin-akyurt-g-m8EDc4X6Q-unsplash.jpg',
      },
      {
        icon: 'Bot',
        title: 'Optional AI Chat Support',
        description: 'Let AI handle client questions, pricing inquiries, and appointment scheduling — even when you\'re with a client.',
        features: ['AI chat support', 'Service info', 'Pricing questions', 'Instant booking'],
        image: '/assets/beauty/hayley-kim-studios-sRSRuxkOuzI-unsplash.jpg',
      },
    ],
  },
  whyChooseUs: {
    title: 'Why Choose',
    titleHighlight: 'Yieldge?',
    description: 'We specialize in websites for beauty professionals. Our clients book more appointments, reduce no-shows, and grow their business — with systems as beautiful as their work.',
    image: '/assets/beauty/jazmin-quaynor-FoeIOgztCXo-unsplash.jpg',
    imageAlt: 'Beauty success',
    values: [
      {
        icon: 'Target',
        title: 'Built for Beauty Pros',
        description: 'We understand salons, barbershops, nail studios, and informational sites. Our systems are built for appointment-based beauty businesses.',
      },
      {
        icon: 'Zap',
        title: 'Instagram-First Design',
        description: 'Your website looks amazing on mobile and converts Instagram followers into paying clients. Visual, fast, and beautiful.',
      },
      {
        icon: 'Lightbulb',
        title: 'Custom for Your Brand',
        description: 'Every website reflects your unique brand, vibe, and services. No cookie-cutter templates — just beautiful, custom design.',
      },
      {
        icon: 'Shield',
        title: 'Reliable & Secure',
        description: 'Enterprise-grade security and reliability. Your client information stays protected with industry-leading standards.',
      },
    ],
  },
  process: {
    sectionLabel: 'How It Works',
    title: 'From concept to',
    titleHighlight: 'booked calendar in 3 steps',
    description: 'Our proven process gets you up and running fast — from design to booking more appointments.',
    steps: [
      {
        icon: 'ClipboardCheck',
        number: '01',
        title: 'Brand & Vision Review',
        description: 'We analyze your brand, target clients, and booking goals. Understand your vibe and create a strategy to fill your calendar.',
        image: '/assets/beauty/benyamin-bohlouli-_C-S7LqxHPw-unsplash.jpg',
        deliverables: ['Brand analysis', 'Target client profile', 'Booking strategy'],
      },
      {
        icon: 'FileCode',
        number: '02',
        title: 'Design & Build Your Site',
        description: 'We design a stunning website that matches your aesthetic, set up online booking, and configure automated follow-ups.',
        image: '/assets/beauty/daria-andriianova-Dq2CoSqalnM-unsplash.jpg',
        deliverables: ['Custom website design', 'Online booking setup', 'Automation configuration', 'Training'],
      },
      {
        icon: 'Rocket',
        number: '03',
        title: 'Launch & Fill Your Calendar',
        description: 'Your website goes live and starts booking appointments 24/7. We monitor performance and optimize to book more clients.',
        image: '/assets/beauty/kimia-kazemi-qrdtoq4qeH8-unsplash.jpg',
        deliverables: ['Website launch', 'Performance tracking', 'Ongoing optimization', 'More bookings'],
      },
    ],
    ctaText: 'Schedule Your Brand Review',
  },
  caseStudies: {
    sectionLabel: 'Success Stories',
    title: 'Real Results for',
    titleHighlight: 'Beauty Pros',
    description: 'See how we\'ve helped beauty professionals book more appointments, reduce no-shows, and grow their business.',
    caseStudies: [
      {
        title: 'Hair Salon',
        category: 'Online Booking',
        location: 'Los Angeles, CA',
        description: 'A hair salon struggling with phone tag and missed bookings. We built a beautiful website with integrated online booking.',
        achievements: [
          'Increased bookings by 80%',
          'Reduced no-shows by 60% with reminders',
          'Saved 10 hours per week on scheduling',
        ],
        image: '/assets/beauty/adam-winger-WXmHwPcFamo-unsplash.jpg',
      },
      {
        title: 'Barbershop',
        category: 'Instagram Growth',
        location: 'Miami, FL',
        description: 'A barbershop with strong Instagram presence but low conversion. We created an Instagram-to-booking pipeline.',
        achievements: [
          'Converted 45% of Instagram followers to clients',
          'Doubled monthly bookings',
          'Built a 6-month waitlist',
        ],
        image: '/assets/beauty/icons8-team-y2T5hT7pWx4-unsplash.jpg',
      },
      {
        title: 'Nail Studio',
        category: 'Client Retention',
        location: 'New York, NY',
        description: 'A nail studio losing clients to competitors. We implemented automated re-booking campaigns and review requests.',
        achievements: [
          'Increased repeat bookings by 70%',
          'Improved client retention by 55%',
          'Grew 5-star reviews by 200%',
        ],
        image: '/assets/beauty/rosa-rafael-pxax5WuM7eY-unsplash.jpg',
      },
    ],
    stats: [
      { icon: 'Timer', value: '80%', label: 'More appointments' },
      { icon: 'TrendingUp', value: '60%', label: 'Fewer no-shows' },
      { icon: 'DollarSign', value: '24/7', label: 'Online booking' },
      { icon: 'Bot', value: '70%', label: 'Client retention' },
    ],
  },
  faq: {
    sectionLabel: 'FAQ',
    title: 'Questions?',
    titleHighlight: 'We\'ve got answers',
    description: 'Common questions about our beauty and salon website solutions',
    faqs: [
      {
        question: 'Will this work for my type of beauty business?',
        answer: 'Yes. Our systems work for hair salons, barbershops, nail studios, lash studios, makeup artists, informational sites for beauty services, and other appointment-based beauty businesses. We customize every solution to fit your services and brand.',
      },
      {
        question: 'Can clients book from Instagram?',
        answer: 'Absolutely. We create a seamless Instagram-to-booking experience. Clients can click your link-in-bio and book appointments instantly from your Instagram profile.',
      },
      {
        question: 'How do I prevent no-shows?',
        answer: 'Automated reminders sent via SMS and email significantly reduce no-shows. Our systems send reminders 24 hours before appointments and follow up with clients who miss appointments.',
      },
      {
        question: 'What\'s the cost?',
        answer: 'Investment varies based on your specific needs and services. Schedule a brand review and we\'ll provide a detailed proposal with clear pricing. Most clients see ROI within 2-4 months through more bookings.',
      },
      {
        question: 'Do I need technical knowledge?',
        answer: 'No technical expertise required. We design beautiful, easy-to-use systems and provide training for you and your team. We also offer ongoing support.',
      },
      {
        question: 'Can this work with my existing booking system?',
        answer: 'Yes. We integrate with popular booking platforms like Square, Vagaro, Booksy, and others. Or we can build a custom booking system just for you.',
      },
    ],
    ctaText: 'Schedule a brand review',
  },
  finalCTA: {
    sectionLabel: 'Limited Offer',
    title: 'Ready to Fill Your Calendar?',
    description: 'Schedule a brand review with no obligation. We\'ll analyze your current booking process and show you how to get more appointments.',
    benefits: [
      'Custom strategy for your beauty business',
      'ROI projection and design preview',
      'Answers to all your questions',
    ],
    ctaText: 'Schedule Your Brand Review',
    ctaSubtext: '📅 Immediate availability • 💬 No commitment • ⚡ Beautiful results',
    image: '/assets/beauty/greg-trowman-jsuWg7IXx1k-unsplash.jpg',
    imageAlt: 'Beautiful websites',
  },
};

// Professional Services page content
export const professionalServicesContent: PageContent = {
  hero: {
    slides: [
      {
        heading: 'Professional Services Partner',
        subheading: 'Build Trust Before the First Call',
        description: 'We build authoritative websites and client intake systems that establish credibility, capture qualified leads, and convert visitors into consultations.',
        ctaText: 'Convert More Consultations',
        ctaLink: '/get-in-touch',
        backgroundImage: '/assets/prof/amy-hirschi-izxMVv2Z9dw-unsplash.jpg',
      },
    ],
  },
  services: {
    sectionLabel: 'What We Build',
    title: 'Convert visitors into',
    titleHighlight: 'qualified consultations',
    description: 'We build professional websites and automation systems that establish authority, capture high-value leads, and convert them into paying clients.',
    services: [
      {
        icon: 'Globe',
        title: 'Authority-Building Websites',
        description: 'Professional websites that establish credibility and trust. Designed to convert visitors into consultation requests for legal, accounting, and consulting firms.',
        features: ['Professional design', 'Credibility signals', 'SEO optimized', 'Mobile-responsive'],
        image: '/assets/prof/ali-morshedlou-WMD64tMfc4k-unsplash.jpg',
      },
      {
        icon: 'Users',
        title: 'Qualified Lead Capture + CRM',
        description: 'Intelligent intake forms that pre-qualify leads and sync to your CRM. Only talk to prospects who are the right fit.',
        features: ['Smart intake forms', 'Lead qualification', 'CRM integration', 'Generic contact forms only'],
        image: '/assets/prof/hunters-race-MYbhN8KaaEc-unsplash.jpg',
      },
      {
        icon: 'MessageCircle',
        title: 'Automated Client Nurturing',
        description: 'Stay top-of-mind with automated email sequences, appointment reminders, and follow-ups that build trust over time.',
        features: ['Email nurture sequences', 'Appointment reminders', 'General updates', 'Touchpoint automation'],
        image: '/assets/prof/linkedin-sales-solutions-wS73LE0GnKs-unsplash.jpg',
      },
      {
        icon: 'BarChart',
        title: 'Client Acquisition Analytics',
        description: 'Track lead sources, conversion rates, and client lifetime value. Make data-driven decisions about your marketing investments.',
        features: ['Lead source tracking', 'Conversion analytics', 'Client LTV tracking', 'ROI reporting'],
        image: '/assets/prof/tyler-franta-iusJ25iYu1c-unsplash.jpg',
      },
      {
        icon: 'Bot',
        title: 'Optional AI Intake Assistant',
        description: 'Let AI handle initial client inquiries, answer common questions, and schedule consultations — freeing you to focus on billable hours.',
        features: ['AI chat support', 'FAQ automation', 'Consultation scheduling', 'Lead qualification'],
        image: '/assets/prof/zbra-marketing-N4AK7Vy1McM-unsplash.jpg',
      },
    ],
  },
  whyChooseUs: {
    title: 'Why Choose',
    titleHighlight: 'Yieldge?',
    description: 'We specialize in websites for professional services firms. Our clients convert more consultations, reduce administrative overhead, and grow their practice — with systems built for trust.',
    image: '/assets/prof/krakenimages-376KN_ISplE-unsplash.jpg',
    imageAlt: 'Professional success',
    layout: 'stacked',
    values: [
      {
        icon: 'Target',
        title: 'Built for Professionals',
        description: 'We understand law firms, CPAs, consultants, and insurance agencies. Our systems are built for high-trust professional services.',
      },
      {
        icon: 'Zap',
        title: 'Authority & Credibility',
        description: 'Every website is designed to establish your expertise, build trust, and position you as the obvious choice in your market.',
      },
      {
        icon: 'Lightbulb',
        title: 'Custom for Your Practice',
        description: 'Every system is tailored to your practice area, client type, and intake process. No generic templates — just professional, custom solutions.',
      },
      {
        icon: 'Shield',
        title: 'Secure & Compliant',
        description: 'Enterprise-grade security with strict access controls. Your client information stays protected with industry-leading standards.',
      },
    ],
  },
  process: {
    sectionLabel: 'How It Works',
    title: 'From website to',
    titleHighlight: 'consultations in 3 steps',
    description: 'Our proven process gets you up and running fast — from initial strategy to converting more consultations.',
    steps: [
      {
        icon: 'ClipboardCheck',
        number: '01',
        title: 'Practice Analysis (No Obligation)',
        description: 'We analyze your current client acquisition process, identify opportunities, and show you exactly how to convert more consultations.',
        image: '/assets/prof/gabrielle-henderson-HJckKnwCXxQ-unsplash.jpg',
        deliverables: ['Current state analysis', 'Opportunity assessment', 'ROI projection'],
      },
      {
        icon: 'FileCode',
        number: '02',
        title: 'Build Your System',
        description: 'We build your professional website, set up lead capture forms, configure automated nurturing, and integrate with your practice management tools.',
        image: '/assets/prof/divaris-shirichena-dgPNu73ihYE-unsplash.jpg',
        deliverables: ['Website launch', 'Lead capture setup', 'Automation configuration', 'Team training'],
      },
      {
        icon: 'Rocket',
        number: '03',
        title: 'Convert More Consultations',
        description: 'Your system goes live and starts capturing qualified leads 24/7. We monitor performance and optimize to convert more consultations.',
        image: '/assets/prof/divaris-shirichena-zSiBtE5JZ8Y-unsplash.jpg',
        deliverables: ['Performance monitoring', 'Conversion optimization', 'Ongoing support', 'More consultations'],
      },
    ],
    ctaText: 'Get Your Practice Analysis',
  },
  caseStudies: {
    sectionLabel: 'Success Stories',
    title: 'Real Results for',
    titleHighlight: 'Professional Firms',
    description: 'See how we\'ve helped professional services firms convert more consultations, reduce admin time, and grow their practice.',
    caseStudies: [
      {
        title: 'Law Firm',
        category: 'Lead Generation',
        location: 'Chicago, IL',
        description: 'A law firm struggling with unqualified inquiries and slow response times. We built a professional website with smart intake forms.',
        achievements: [
          'Increased qualified consultations by 75%',
          'Reduced time spent on unqualified leads by 60%',
          'Improved consultation-to-client rate by 45%',
        ],
        image: '/assets/prof/giammarco-boscaro-zeH-ljawHtg-unsplash.jpg',
      },
      {
        title: 'CPA Firm',
        category: 'Client Acquisition',
        location: 'Boston, MA',
        description: 'A CPA firm needing better lead nurturing for tax season. We implemented automated email sequences and appointment scheduling.',
        achievements: [
          'Booked 3x more consultations during tax season',
          'Reduced administrative time by 50%',
          'Increased client retention by 40%',
        ],
        image: '/assets/prof/gruescu-ovidiu-fWjqkOnfkgE-unsplash.jpg',
      },
      {
        title: 'Business Consultant',
        category: 'Authority Building',
        location: 'San Francisco, CA',
        description: 'A consultant needing to establish credibility online. We built an authority-focused website with lead magnets and automated nurturing.',
        achievements: [
          'Positioned as market leader in 6 months',
          'Increased consultation requests by 120%',
          'Raised average project value by 60%',
        ],
        image: '/assets/prof/renaldo-matamoro-86JiKaHF4I8-unsplash.jpg',
      },
    ],
    stats: [
      { icon: 'Timer', value: '75%', label: 'More consultations' },
      { icon: 'TrendingUp', value: '60%', label: 'Less admin time' },
      { icon: 'DollarSign', value: '24/7', label: 'Lead capture' },
      { icon: 'Bot', value: '45%', label: 'Higher conversion' },
    ],
  },
  faq: {
    sectionLabel: 'FAQ',
    title: 'Questions?',
    titleHighlight: 'We\'ve got answers',
    description: 'Common questions about our professional services website solutions',
    faqs: [
      {
        question: 'Will this work for my type of professional practice?',
        answer: 'Yes. Our systems work for law firms, accounting practices, insurance agencies, business consultants, financial advisors, and other professional services. We customize every solution to fit your practice area and client type.',
      },
      {
        question: 'How do you handle client information?',
        answer: 'We implement enterprise-grade security measures including encrypted data storage, secure cloud infrastructure, and strict access controls. Forms collect only basic contact information (name, email, phone, message). No sensitive information is stored.',
      },
      {
        question: 'Can you help with compliance requirements?',
        answer: 'We build systems with security and privacy in mind. However, we do not provide legal or compliance advice — compliance remains your responsibility. We recommend consulting with your compliance team.',
      },
      {
        question: 'What\'s the cost?',
        answer: 'Investment varies based on your specific needs and practice size. Schedule a practice analysis and we\'ll provide a detailed proposal with clear pricing. Most clients see ROI within 6-12 months through more consultations.',
      },
      {
        question: 'Do I need technical knowledge?',
        answer: 'No technical expertise required. We design professional, easy-to-use systems and provide comprehensive training for your team. We also offer ongoing support.',
      },
      {
        question: 'Can this integrate with my practice management software?',
        answer: 'Yes. We integrate with popular practice management platforms, CRMs, calendaring systems, and other tools you already use. Our solutions enhance your current workflow.',
      },
    ],
    ctaText: 'Schedule a practice analysis',
  },
  finalCTA: {
    sectionLabel: 'Professional Firms',
    title: 'Ready to Convert More Consultations?',
    description: 'Schedule a practice analysis with no obligation. We\'ll analyze your current client acquisition process and show you exactly how to convert more consultations.',
    benefits: [
      'Custom strategy for your practice',
      'ROI projection and implementation plan',
      'Answers to all your questions',
    ],
    ctaText: 'Get Your Practice Analysis',
    ctaSubtext: '📅 Immediate availability • 💬 No commitment • ⚡ Professional results',
    image: '/assets/prof/divaris-shirichena-B-MfAhYPRts-unsplash.jpg',
    imageAlt: 'Professional websites',
  },
};

// ============================================
// HERO VARIANTS CONTENT (A/B Testing)
// ============================================

// Default Hero (current)
export const defaultHeroSlide: EnhancedHeroSlide = {
  variant: 'default',
  lang: 'en',
  heading: 'Digital Excellence',
  subheading: 'More than 15 years of innovation',
  description: 'With over 15+ years serving the global technology landscape, Yieldge has established itself as a trusted partner in digital transformation. We\'ve empowered countless organizations to streamline operations and achieve measurable results.',
  ctaText: 'DISCOVER YIELDGE',
  ctaLink: '/get-in-touch',
  backgroundImage: '/assets/img2.jpg',
};

// FOMO Crusher Hero
export const fomoHeroSlide: EnhancedHeroSlide = {
  variant: 'fomo',
  lang: 'en',
  heading: 'JOIN 127+ FOUNDERS WHO ALREADY AUTOMATED THEIR GROWTH',
  subheading: 'Stop Watching Your Competitors Scale While You\'re Stuck',
  description: 'Every day you wait, your competition is automating their lead flow. The founders who moved fast are now booking 3x more calls with half the effort.',
  ctaText: 'Claim Your Spot Now',
  ctaLink: '/get-in-touch',
  backgroundImage: '/assets/img1.jpg',
  urgencyBadge: 'Only 3 spots left this week',
  socialProofCount: '127+ founders already using this system',
  secondaryCta: {
    text: 'See How It Works',
    link: '#process',
  },
};

// Spanish LATAM Hero
export const spanishHeroSlide: EnhancedHeroSlide = {
  variant: 'spanish-latam',
  lang: 'es',
  heading: 'TECNOLOGÍA QUE GENERA RESULTADOS',
  subheading: 'Transforma Tu Negocio con Sistemas que Trabajan 24/7',
  description: 'Ayudamos a emprendedores y empresas de LATAM a automatizar su captación de clientes, cerrar más ventas, y escalar sin contratar más personal. Tecnología de primer nivel, a tu alcance.',
  ctaText: 'Agenda Tu Llamada Gratis',
  ctaLink: '/get-in-touch',
  backgroundImage: '/assets/img1.jpg',
  secondaryCta: {
    text: 'Ver Cómo Funciona',
    link: '#process',
  },
};

// Social Proof Hero
export const socialProofHeroSlide: EnhancedHeroSlide = {
  variant: 'social-proof',
  lang: 'en',
  heading: 'TRUSTED BY INDUSTRY LEADERS',
  subheading: 'The System Behind 50+ Successful Launches',
  description: 'Join the founders who\'ve transformed their businesses with our proven automation systems. Real results, real testimonials, real growth.',
  ctaText: 'Start Your Transformation',
  ctaLink: '/get-in-touch',
  backgroundImage: '/assets/img2.jpg',
  testimonialQuote: 'They turned our chaos into a machine. We went from struggling to scale to having a waitlist.',
  testimonialAuthor: 'Sarah K.',
  testimonialRole: 'Startup Founder',
  testimonialCompany: 'TechFlow Inc.',
  metrics: [
    { value: '50+', label: 'Projects Delivered' },
    { value: '100%', label: 'Success Rate' },
    { value: '24/7', label: 'Automated Support' },
  ],
  secondaryCta: {
    text: 'See Case Studies',
    link: '#case-studies',
  },
};

// Problem-Agitation Hero
export const problemAgitationHeroSlide: EnhancedHeroSlide = {
  variant: 'problem-agitation',
  lang: 'en',
  heading: 'TIRED OF LOSING LEADS TO SLOW FOLLOW-UP?',
  subheading: 'Your Competitors Are Closing While You\'re Still Replying',
  description: '',
  ctaText: 'Fix This Now',
  ctaLink: '/get-in-touch',
  backgroundImage: '/assets/img1.jpg',
  painPoints: [
    'Leads go cold because you can\'t respond fast enough',
    'You\'re buried in admin work instead of closing deals',
    'Manual follow-ups are eating your evenings and weekends',
    'Your competitors are outpacing you with automation',
  ],
  agitationText: 'Every hour you delay, 3 more leads slip through the cracks. Your inbox fills up, your pipeline dries out, and that dream of scaling feels further away.',
  promiseText: 'What if your leads were qualified, nurtured, and booked automatically — while you focused on what you do best?',
  secondaryCta: {
    text: 'Learn How',
    link: '#services',
  },
};

// Combined hero variants for easy access
export const heroVariants: Record<HeroVariant, EnhancedHeroSlide> = {
  'default': defaultHeroSlide,
  'fomo': fomoHeroSlide,
  'spanish-latam': spanishHeroSlide,
  'social-proof': socialProofHeroSlide,
  'problem-agitation': problemAgitationHeroSlide,
};

// ============================================
// VALUE STACK CONTENT (Hormozi-style)
// ============================================

export const valueStackContent: ValueStackContent = {
  sectionLabel: 'What You Get',
  title: 'Everything You Need to',
  titleHighlight: 'Scale Your Business',
  subtitle: 'A complete system designed to generate leads, close deals, and grow your revenue — automatically.',

  items: [
    {
      icon: 'Globe',
      title: 'High-Converting Website',
      description: 'Mobile-optimized, SEO-ready landing page that turns visitors into leads.',
      perceivedValue: '$3,000 value',
      highlight: true,
    },
    {
      icon: 'Users',
      title: 'Lead Capture System',
      description: 'Smart forms that qualify leads and sync directly to your CRM.',
      perceivedValue: '$1,500 value',
    },
    {
      icon: 'MessageCircle',
      title: 'Automated Follow-Up Sequences',
      description: 'Email, SMS, and WhatsApp campaigns that nurture leads 24/7.',
      perceivedValue: '$2,000 value',
    },
    {
      icon: 'BarChart',
      title: 'Analytics Dashboard',
      description: 'Real-time metrics showing leads, conversions, and ROI.',
      perceivedValue: '$1,000 value',
    },
    {
      icon: 'Bot',
      title: 'AI Chat Support',
      description: 'Intelligent bot that handles FAQs and books appointments.',
      perceivedValue: '$2,500 value',
    },
    {
      icon: 'HeadphonesIcon',
      title: '30-Day Support & Training',
      description: 'Dedicated onboarding and technical support.',
      perceivedValue: '$2,000 value',
    },
  ],

  bonuses: [
    {
      icon: 'FileText',
      title: 'Copy & Conversion Templates',
      description: 'Proven email and landing page templates.',
      value: 'FREE ($500 value)',
    },
    {
      icon: 'Zap',
      title: 'Priority Integration Support',
      description: 'White-glove setup for your existing tools.',
      value: 'FREE ($1,000 value)',
    },
  ],

  totalPerceivedValue: '$13,500+',
  actualPrice: 'Starting at $2,997',
  savings: 'Save over 75%',

  guarantee: {
    icon: 'Shield',
    title: '30-Day Money-Back Guarantee',
    description: 'If you don\'t see measurable results within 30 days, we\'ll refund your investment. No questions asked.',
    duration: '30 days',
  },

  ctaText: 'Get Started Today',
  ctaSubtext: 'Limited spots available this month',
  ctaLink: '/get-in-touch',
};

// Spanish Value Stack
export const valueStackContentES: ValueStackContent = {
  sectionLabel: 'Lo Que Obtienes',
  title: 'Todo Lo Que Necesitas Para',
  titleHighlight: 'Escalar Tu Negocio',
  subtitle: 'Un sistema completo diseñado para generar leads, cerrar ventas y hacer crecer tus ingresos — automáticamente.',

  items: [
    {
      icon: 'Globe',
      title: 'Sitio Web de Alta Conversión',
      description: 'Landing page optimizada para móviles y SEO que convierte visitantes en leads.',
      perceivedValue: 'Valor $3,000',
      highlight: true,
    },
    {
      icon: 'Users',
      title: 'Sistema de Captura de Leads',
      description: 'Formularios inteligentes que califican leads y sincronizan con tu CRM.',
      perceivedValue: 'Valor $1,500',
    },
    {
      icon: 'MessageCircle',
      title: 'Secuencias de Seguimiento Automatizadas',
      description: 'Campañas por email, SMS y WhatsApp que nutren leads 24/7.',
      perceivedValue: 'Valor $2,000',
    },
    {
      icon: 'BarChart',
      title: 'Panel de Analíticas',
      description: 'Métricas en tiempo real mostrando leads, conversiones y ROI.',
      perceivedValue: 'Valor $1,000',
    },
    {
      icon: 'Bot',
      title: 'Soporte con IA',
      description: 'Bot inteligente que responde FAQs y agenda citas.',
      perceivedValue: 'Valor $2,500',
    },
    {
      icon: 'HeadphonesIcon',
      title: '30 Días de Soporte y Capacitación',
      description: 'Onboarding dedicado y soporte técnico.',
      perceivedValue: 'Valor $2,000',
    },
  ],

  bonuses: [
    {
      icon: 'FileText',
      title: 'Plantillas de Copy y Conversión',
      description: 'Templates probados para emails y landing pages.',
      value: 'GRATIS (Valor $500)',
    },
    {
      icon: 'Zap',
      title: 'Soporte Prioritario de Integración',
      description: 'Configuración personalizada para tus herramientas existentes.',
      value: 'GRATIS (Valor $1,000)',
    },
  ],

  totalPerceivedValue: '$13,500+',
  actualPrice: 'Desde $2,997',
  savings: 'Ahorra más del 75%',

  guarantee: {
    icon: 'Shield',
    title: 'Garantía de Devolución de 30 Días',
    description: 'Si no ves resultados medibles en 30 días, te devolvemos tu inversión. Sin preguntas.',
    duration: '30 días',
  },

  ctaText: 'Comenzar Hoy',
  ctaSubtext: 'Cupos limitados este mes',
  ctaLink: '/get-in-touch',
};

// Diagnostico Digital page content - High-conversion funnel for Costa Rica
export interface DiagnosticoDigitalContent {
  hero: {
    heading: string;
    subheading: string;
    description: string;
    primaryCta: string;
    primaryCtaLink: string;
    softCta: string;
    backgroundImage: string;
  };
  painPoints: {
    sectionLabel: string;
    title: string;
    description: string;
    points: Array<{
      icon: string;
      title: string;
      description: string;
      impact: string;
    }>;
    emotionalClose: string;
  };
  reframe: {
    title: string;
    intro: string;
    problem: string;
    systemBenefits: string[];
    comparison: {
      without: string;
      with: string;
    };
    transition: string;
  };
  authority: {
    sectionLabel: string;
    title: string;
    description: string;
    points: string[];
    stats: Array<{
      value: string;
      label: string;
    }>;
    trustLine: string;
  };
  solutions: {
    sectionLabel: string;
    title: string;
    intro: string;
    items: Array<{
      icon: string;
      title: string;
      tagline: string;
      features: string[];
      result: string;
      image: string;
    }>;
    integrationNote: string;
  };
  differentiation: {
    title: string;
    chaosDescription: string;
    systemBenefits: string[];
    strategicTitle: string;
    strategicBenefits: string[];
    trustTitle: string;
    trustDescription: string;
  };
  finalCta: {
    sectionLabel: string;
    title: string;
    description: string;
    deliverables: string[];
    primaryCta: string;
    primaryCtaLink: string;
    supportingDetails: string[];
    phoneNumber: string;
    email: string;
    schedule: string;
    finalTrustLine: string;
  };
}

export const crDiagnosticoContent: DiagnosticoDigitalContent = {
  hero: {
    heading: 'Tu negocio crece. Tu sistema digital, no.',
    subheading: 'Dejá de perder clientes por desorden digital.',
    description: 'Construimos el sistema que tu negocio necesita para crecer con orden. Un diagnóstico gratuito de 15 minutos que te muestra exactamente qué está frenando tu crecimiento — y cómo solucionarlo.',
    primaryCta: 'Quiero Mi Diagnóstico Gratis',
    primaryCtaLink: 'https://wa.me/50670724236?text=Hola%2C%20quiero%20mi%20diagn%C3%B3stico%20digital%20gratis',
    softCta: 'Ver cómo funciona ↓',
    backgroundImage: '/assets/prof/krakenimages-376KN_ISplE-unsplash.jpg',
  },
  painPoints: {
    sectionLabel: '¿Te suena familiar?',
    title: 'Los síntomas de un negocio sin sistema digital',
    description: 'Si alguna de estas situaciones te resulta familiar, no estás solo. Son los problemas más comunes que vemos en negocios de Costa Rica.',
    points: [
      {
        icon: 'AlertTriangle',
        title: 'Desorden operativo',
        description: 'Contestás mensajes a las 11pm. Perdés seguimiento de cotizaciones. No sabés cuántos clientes te contactaron esta semana.',
        impact: 'El caos no escala. Y te está costando dinero.',
      },
      {
        icon: 'Smartphone',
        title: 'Dependencia total de WhatsApp',
        description: 'Todo pasa por tu celular. Si no contestás, perdés la venta. ¿Vacaciones? Imposibles.',
        impact: 'Tu negocio depende de que vos estés disponible 24/7.',
      },
      {
        icon: 'Clock',
        title: 'Procesos manuales que devoran tiempo',
        description: 'Enviás la misma información 20 veces al día. Copiás y pegás. Buscás conversaciones viejas.',
        impact: 'Tiempo que podrías usar cerrando ventas.',
      },
      {
        icon: 'UserX',
        title: 'Oportunidades que se escapan',
        description: 'Clientes que preguntaron y nunca les diste seguimiento. Cotizaciones que no cerraste porque se te olvidó.',
        impact: 'Cada lead perdido es plata que dejás en la mesa.',
      },
      {
        icon: 'Image',
        title: 'Imagen digital que no refleja tu calidad',
        description: 'Tu página tiene 5 años. O peor: no tenés. Tus clientes potenciales buscan en Google y encuentran a tu competencia.',
        impact: 'Primera impresión digital = decisión de compra.',
      },
      {
        icon: 'EyeOff',
        title: 'Cero visibilidad de qué funciona',
        description: 'No sabés de dónde vienen tus clientes. No sabés qué canal te genera más ventas. Tomás decisiones a ciegas.',
        impact: 'Sin datos, no hay crecimiento estratégico.',
      },
    ],
    emotionalClose: 'Esto no es culpa tuya. Es que nadie te enseñó a construir un sistema digital. Pero seguir así te va a costar más de lo que imaginás.',
  },
  reframe: {
    title: 'No necesitás una página web. Necesitás un sistema.',
    intro: 'La mayoría de negocios creen que su problema es "no tener página web" o "no estar en redes".',
    problem: 'El problema real es otro: No tenés un sistema digital que trabaje por vos.',
    systemBenefits: [
      'Capture clientes mientras dormís',
      'Responda automáticamente cuando no podés',
      'Organice tus contactos sin que vos hagas nada',
      'Te muestre exactamente de dónde vienen tus ventas',
    ],
    comparison: {
      without: 'Una página web sin sistema es un folleto caro.',
      with: 'Un sistema digital es una máquina de crecimiento.',
    },
    transition: 'Eso es lo que construimos en Yieldge. No páginas. Sistemas.',
  },
  authority: {
    sectionLabel: 'Por qué Yieldge',
    title: 'No somos una agencia. Somos tu socio de infraestructura digital.',
    description: 'Hay miles de agencias que te pueden hacer una página web. Nosotros no hacemos eso. Construimos infraestructura digital para negocios que quieren crecer con orden.',
    points: [
      'Trabajamos con clínicas, bufetes, restaurantes, empresas de servicios y profesionales que entienden que su presencia digital es parte de su operación — no un gasto de marketing.',
      'No desaparecemos después de entregar. Nos convertimos en tu equipo técnico externo.',
      'Medimos todo. Si no genera resultados, lo ajustamos hasta que funcione.',
    ],
    stats: [
      { value: '50+', label: 'Negocios atendidos' },
      { value: '100%', label: 'Clientes satisfechos' },
      { value: 'CR', label: 'Operamos en Costa Rica' },
    ],
    trustLine: 'Desde PYMEs hasta empresas enterprise. El mismo compromiso.',
  },
  solutions: {
    sectionLabel: 'Qué construimos para vos',
    title: 'Un sistema digital completo. No piezas sueltas.',
    intro: 'Cada negocio es diferente. Por eso no vendemos paquetes genéricos. Pero estos son los componentes que usamos para construir tu sistema:',
    items: [
      {
        icon: 'Globe',
        title: 'Sitio Web Estratégico',
        tagline: 'No un folleto digital. Una herramienta de conversión.',
        features: [
          'Diseño profesional que refleja tu marca',
          'Optimizado para celular (donde están tus clientes)',
          'Carga en menos de 3 segundos',
          'Aparecés en Google cuando buscan tus servicios',
          'Formularios que capturan leads reales',
        ],
        result: 'Clientes te encuentran y te contactan — sin que vos hagas nada.',
        image: '/assets/prof/amy-hirschi-izxMVv2Z9dw-unsplash.jpg',
      },
      {
        icon: 'MessageCircle',
        title: 'WhatsApp Inteligente',
        tagline: 'Dejá de perder ventas por no contestar a tiempo.',
        features: [
          'Botón de WhatsApp visible en todo momento',
          'Respuestas automáticas cuando no podés contestar',
          'Formularios que envían directo a tu WhatsApp',
          'Organización de conversaciones por cliente',
        ],
        result: 'Capturás el 100% de las consultas, contestés o no.',
        image: '/assets/office/vitaly-gariev-2OnT7IKfLyw-unsplash.jpg',
      },
      {
        icon: 'Zap',
        title: 'Automatización de Seguimiento',
        tagline: 'El follow-up que genera ventas — sin que vos lo hagas.',
        features: [
          'Secuencias automáticas por WhatsApp y email',
          'Recordatorios de citas automáticos',
          'Confirmaciones sin intervención manual',
          'Reactivación de clientes que no cerraron',
        ],
        result: 'Cerrás más ventas sin trabajar más horas.',
        image: '/assets/img6.jpg',
      },
      {
        icon: 'Search',
        title: 'SEO Local (Aparecé en Google)',
        tagline: 'Que te encuentren cuando busquen lo que ofrecés.',
        features: [
          'Optimización para búsquedas locales en Costa Rica',
          'Configuración de Google My Business',
          'Palabras clave de tu industria',
          'Reportes mensuales de posicionamiento',
        ],
        result: 'Más clientes desde Google, sin pagar publicidad.',
        image: '/assets/odonto/ozkan-guner-9Gw9XCuazuY-unsplash.jpg',
      },
      {
        icon: 'BarChart',
        title: 'Reportes y Visibilidad',
        tagline: 'Sabé exactamente qué está funcionando.',
        features: [
          'Dashboard simple con métricas claras',
          'De dónde vienen tus clientes',
          'Cuántas consultas recibiste',
          'Qué canales te generan más ventas',
        ],
        result: 'Tomás decisiones con datos, no con intuición.',
        image: '/assets/prof/divaris-shirichena-dgPNu73ihYE-unsplash.jpg',
      },
    ],
    integrationNote: 'Todo conectado. Todo automatizado. Todo medible. No son 5 herramientas separadas. Es un sistema integrado que trabaja mientras vos te enfocás en lo que mejor hacés: tu negocio.',
  },
  differentiation: {
    title: '¿Por qué un sistema en vez de herramientas sueltas?',
    chaosDescription: 'Podés contratar un diseñador para tu página, un community manager para redes, un técnico para WhatsApp Business, un freelancer para SEO... Y terminar con 4 personas que no se hablan entre sí, 4 facturas, y cero integración.',
    systemBenefits: [
      'Todo está conectado',
      'Todo se mide',
      'Todo escala con tu negocio',
      'Un solo punto de contacto',
    ],
    strategicTitle: 'El orden digital no es un lujo. Es rentabilidad.',
    strategicBenefits: [
      'Responden más rápido → cierran más ventas',
      'Automatizan tareas repetitivas → reducen costos',
      'Miden resultados → toman mejores decisiones',
      'Escalan sin caos → crecen de forma sostenible',
    ],
    trustTitle: 'Tu información está segura.',
    trustDescription: 'Cumplimos con la Ley N.º 8968 de Protección de Datos de Costa Rica. Servidores seguros, conexiones encriptadas, y nunca vendemos tu información.',
  },
  finalCta: {
    sectionLabel: 'Empezá hoy',
    title: 'Un diagnóstico de 15 minutos que puede cambiar tu negocio.',
    description: 'No te vamos a vender nada en la llamada. Te vamos a mostrar qué está fallando en tu presencia digital actual, dónde estás perdiendo clientes, y qué necesitás para empezar a crecer con orden.',
    deliverables: [
      'Qué está fallando en tu presencia digital actual',
      'Dónde estás perdiendo clientes',
      'Qué necesitás para empezar a crecer con orden',
    ],
    primaryCta: 'Quiero Mi Diagnóstico Gratis',
    primaryCtaLink: 'https://wa.me/50670724236?text=Hola%2C%20quiero%20mi%20diagn%C3%B3stico%20digital%20gratis',
    supportingDetails: [
      '15 minutos por WhatsApp o videollamada',
      'Sin compromiso',
      'Sin presión de venta',
      'Respondemos en menos de 1 hora',
    ],
    phoneNumber: '+506 7072-4236',
    email: 'info@yieldge.com',
    schedule: 'Lun - Vie, 8am - 6pm',
    finalTrustLine: '50+ negocios en Costa Rica ya tienen su sistema funcionando. ¿Vas a ser el próximo?',
  },
};
