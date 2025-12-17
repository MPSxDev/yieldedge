'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { CaseStudiesContent, homepageContent } from '@/lib/content';
import { iconMap } from '@/lib/iconMap';

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

interface CaseStudiesProps {
  content?: CaseStudiesContent;
}

interface CaseStudyCardProps {
  caseStudy: {
    title: string;
    category: string;
    location: string;
    description: string;
    achievements: string[];
    image: string;
  };
  index: number;
}

function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
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
      className="w-full h-full flex"
    >
      <div
        role="button"
        tabIndex={0}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className="bg-white rounded-3xl border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex flex-col w-full"
      >
        {/* Always visible: Image and Title only */}
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={caseStudy.image}
            alt={caseStudy.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={90}
            loading="lazy"
            className="object-cover"
          />
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full">
              {caseStudy.category}
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8 flex flex-col flex-grow">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 min-h-[3.5rem] flex items-center">
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

export default function CaseStudies({ content = homepageContent.caseStudies }: CaseStudiesProps) {
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
          viewport={{ once: true, amount: 0.1, margin: '0px 0px -100px 0px' }}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16 sm:mb-20">
            <p className="text-blue-600 font-semibold mb-4 text-sm uppercase tracking-wide">
              {content.sectionLabel}
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              {content.title}{' '}
              <span className="text-blue-600">{content.titleHighlight}</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {content.description}
            </p>
          </motion.div>

          {/* Case Studies Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20 auto-rows-fr"
          >
            {content.caseStudies.map((caseStudy, index) => (
              <CaseStudyCard key={index} caseStudy={caseStudy} index={index} />
            ))}
          </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-20"
        >
          {content.stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon] || iconMap.Timer;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-3xl p-8 md:p-10 text-center shadow-lg border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
