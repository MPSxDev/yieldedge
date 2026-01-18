'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, MapPin } from 'lucide-react';
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
        aria-expanded={isOpen}
        className={`bg-white rounded-2xl sm:rounded-3xl border-2 transition-all duration-300 overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1F5CFF] focus:ring-offset-2 flex flex-col w-full ${
          isOpen ? 'border-[#1F5CFF] shadow-xl' : 'border-gray-200 hover:border-[#4d7aff] hover:shadow-lg'
        }`}
      >
        {/* Image with overlay gradient for better text visibility */}
        <div className="relative w-full aspect-[16/10] sm:aspect-video overflow-hidden">
          <Image
            src={caseStudy.image}
            alt={caseStudy.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={90}
            loading="lazy"
            className={`object-cover transition-transform duration-500 ${isOpen ? 'scale-105' : ''}`}
          />
          {/* Gradient overlay for visual polish */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          {/* Category badge */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#1F5CFF] text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg">
              {caseStudy.category}
            </span>
          </div>

          {/* Expand indicator on mobile */}
          <div className="absolute bottom-3 right-3 sm:hidden">
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
            >
              <ChevronDown className="w-5 h-5 text-[#1F5CFF]" />
            </motion.div>
          </div>
        </div>

        <div className="p-5 sm:p-6 lg:p-8 flex flex-col flex-grow">
          {/* Title with expand indicator */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              {caseStudy.title}
            </h3>
            {/* Desktop expand indicator */}
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="hidden sm:flex w-8 h-8 bg-[#eff4ff] rounded-full items-center justify-center flex-shrink-0 mt-1"
            >
              <ChevronDown className="w-5 h-5 text-[#1F5CFF]" />
            </motion.div>
          </div>

          {/* Tap hint text on mobile */}
          <p className={`text-sm text-gray-500 transition-opacity duration-300 ${isOpen ? 'opacity-0 h-0' : 'opacity-100 mb-2'}`}>
            Tap to view details
          </p>

          {/* Expandable content - Location, Description, Achievements */}
          <motion.div
            initial={false}
            animate={{
              height: isOpen ? 'auto' : 0,
              opacity: isOpen ? 1 : 0,
            }}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{ overflow: 'hidden' }}
          >
            <div className="pt-4 sm:pt-6 space-y-4 sm:space-y-5">
              {/* Location */}
              <div className="flex items-center gap-2 text-gray-600 font-medium text-sm sm:text-base">
                <MapPin className="w-4 h-4 text-[#1F5CFF] flex-shrink-0" />
                <span>{caseStudy.location}</span>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {caseStudy.description}
              </p>

              {/* Results */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                  Results:
                </h4>
                <ul className="space-y-2">
                  {caseStudy.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#dbe6ff] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#1F5CFF]" />
                      </div>
                      <span className="text-gray-700 text-sm sm:text-base">{achievement}</span>
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
      className="relative bg-gradient-to-b from-[#eff4ff]/30 to-white py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: '0px 0px -100px 0px' }}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-10 sm:mb-16 lg:mb-20">
            <p className="text-[#1F5CFF] font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wide">
              {content.sectionLabel}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6 px-2">
              {content.title}{' '}
              <span className="text-[#1F5CFF]">{content.titleHighlight}</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto px-4">
              {content.description}
            </p>
          </motion.div>

          {/* Case Studies Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20"
          >
            {content.caseStudies.map((caseStudy, index) => (
              <CaseStudyCard key={index} caseStudy={caseStudy} index={index} />
            ))}
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 lg:mt-20"
          >
            {content.stats.map((stat, index) => {
              const IconComponent = iconMap[stat.icon] || iconMap.Timer;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-10 text-center shadow-lg border border-gray-200 hover:border-[#7d9eff] hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="w-12 h-12 sm:w-14 lg:w-16 sm:h-14 lg:h-16 rounded-xl sm:rounded-2xl bg-[#eff4ff] flex items-center justify-center">
                      <IconComponent className="w-6 h-6 sm:w-7 lg:w-8 sm:h-7 lg:h-8 text-[#1F5CFF]" />
                    </div>
                  </div>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
