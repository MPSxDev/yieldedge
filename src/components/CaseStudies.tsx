'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
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

const stats = [
  { value: '40%', label: 'Admin time reduction', icon: '⏱️' },
  { value: '35%', label: 'Lead conversion increase', icon: '📈' },
  { value: '50%', label: 'Lower overhead costs', icon: '💰' },
  { value: '24/7', label: 'Lead capture & support', icon: '🤖' },
];

const caseStudies = [
  {
    title: 'Boutique Real-Estate Agency',
    category: 'Lead Generation',
    location: 'Miami, FL',
    description:
      "A mid-sized agency struggling with manual lead follow-ups and unqualified inquiries. We implemented AI-powered lead qualification and automated nurture sequences.",
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
    description:
      "Managing 200+ rental units with spreadsheets and manual processes. We built a custom tenant management system with automated rent collection and maintenance tracking.",
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
    description:
      "Investors needed better data to evaluate potential acquisitions. We implemented market analytics and predictive pricing tools to inform their investment strategy.",
    achievements: [
      'Improved deal evaluation speed by 65%',
      'Identified 3 high-ROI opportunities in first month',
      'Reduced analysis time from days to hours',
    ],
    image: '/assets/img12.jpg',
  },
];

interface CaseStudyCardProps {
  caseStudy: typeof caseStudies[0];
  index: number;
}

function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <motion.div
      variants={fadeInUp}
      className="w-full"
    >
      <div
        role="button"
        tabIndex={0}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className="bg-white rounded-3xl border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {/* Always visible: Image and Title only */}
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={caseStudy.image}
            alt={caseStudy.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={90}
            className="object-cover"
          />
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full">
              {caseStudy.category}
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {caseStudy.title}
          </h3>

          {/* Expandable content - Location, Description, Achievements */}
          <motion.div
            initial={false}
            animate={{
              maxHeight: isOpen ? 1000 : 0,
              opacity: isOpen ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{ overflow: 'hidden' }}
          >
            <div className="pt-6 space-y-6">
              {/* Location */}
              <div className="text-gray-600 font-medium">
                📍 {caseStudy.location}
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {caseStudy.description}
              </p>

              {/* Results */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Results:
                </h4>
                <ul className="space-y-2">
                  {caseStudy.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-blue-600" />
                      </div>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="relative bg-gradient-to-b from-blue-50/30 to-white py-24 sm:py-32 overflow-hidden"
    >
      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16 sm:mb-20">
            <p className="text-blue-600 font-semibold mb-4 text-sm uppercase tracking-wide">
              Success Stories
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Real Results for{' '}
              <span className="text-blue-600">Real-Estate Pros</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              See how we&apos;ve helped real-estate professionals save time, increase conversions, and grow their business with smart automation.
            </p>
          </motion.div>

          {/* Case Studies Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20"
          >
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard key={index} caseStudy={caseStudy} index={index} />
            ))}
          </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-3xl p-8 md:p-10 text-center shadow-lg border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
