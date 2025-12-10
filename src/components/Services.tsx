'use client';

import { motion } from 'framer-motion';
import { Users, FileText, TrendingUp, Home, Globe, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Container from '@/components/ui/Container';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const services = [
  {
    icon: Users,
    title: 'Automated Lead Generation & Qualification',
    description:
      'Capture and qualify leads 24/7 so you only talk to real prospects. Stop wasting time on unqualified inquiries.',
    features: ['24/7 lead capture', 'AI-powered qualification', 'Instant follow-ups', 'CRM integration'],
    image: '/assets/img4.jpg',
  },
  {
    icon: FileText,
    title: 'Document & Data Handling Automation',
    description:
      'Contracts, valuations, leases, and portfolios — organized, searchable, and analyzed automatically.',
    features: ['Contract automation', 'Document storage', 'Data extraction', 'Searchable archives'],
    image: '/assets/img5.jpg',
  },
  {
    icon: TrendingUp,
    title: 'Market Analytics & Valuation Insights',
    description:
      'Get predictive pricing and investment guidance based on real data. Make smarter decisions faster.',
    features: ['Predictive pricing', 'Market trends', 'Investment analysis', 'ROI forecasting'],
    image: '/assets/img6.jpg',
  },
  {
    icon: Home,
    title: 'Property & Tenant Management',
    description:
      'Rent collection, maintenance scheduling, tenant communications, lease renewals — automated reliably.',
    features: ['Automated rent collection', 'Maintenance tracking', 'Tenant portal', 'Lease management'],
    image: '/assets/img4.jpg',
  },
  {
    icon: Globe,
    title: 'Scalable Web & Cloud Infrastructure',
    description:
      'Secure, reliable, and customized for real-estate businesses ready to grow without technical headaches.',
    features: ['Cloud hosting', 'Data security', 'Scalable architecture', 'Custom integrations'],
    image: '/assets/img5.jpg',
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative w-full bg-white overflow-hidden"
    >
      {/* Background decoration - properly contained */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Main container - perfectly centered with equal horizontal padding */}
      <Container className="relative z-10 pt-32 pb-24 sm:pt-40 sm:pb-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.p
            variants={fadeInUp}
            className="text-blue-600 font-semibold mb-4 text-sm uppercase tracking-wide"
          >
            Our Solutions
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6"
          >
            Spend less time on admin,{' '}
            <span className="text-blue-600">more time closing deals</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 leading-relaxed"
          >
            We help real-estate professionals automate the busywork so you can focus on what matters: closing deals, managing properties, and growing your portfolio.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative w-full h-64 overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={90}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Icon overlay */}
                  <div className="absolute top-6 left-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <IconComponent className="w-7 h-7 text-blue-600" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href="https://calendly.com/anwar-softwaredev"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
        </motion.div>
      </Container>
    </section>
  );
}
