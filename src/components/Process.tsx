'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import { ProcessContent, homepageContent } from '@/lib/content';
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
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

interface ProcessProps {
  content?: ProcessContent;
}

export default function Process({ content = homepageContent.process }: ProcessProps) {
  const t = useTranslations('process');

  return (
    <section
      id="how-it-works"
      className="relative bg-white py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: '0px 0px -100px 0px' }}
        >
          {/* Section Header */}
          <div className="max-w-3xl mb-10 sm:mb-16 lg:mb-20">
            <motion.p
              variants={fadeInUp}
              className="text-[#1F5CFF] font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wide"
            >
              {content.sectionLabel}
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6"
            >
              {content.title}{' '}
              <span className="text-[#1F5CFF]">{content.titleHighlight}</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed"
            >
              {content.description}
            </motion.p>
          </div>

          {/* Timeline Steps */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-24">
            {content.steps.map((step, index) => {
              const IconComponent = iconMap[step.icon] || iconMap.ClipboardCheck;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative"
                >
                  {/* Connector Line */}
                  {index < content.steps.length - 1 && (
                    <div className="hidden lg:block absolute left-1/2 top-full w-px h-24 bg-gradient-to-b from-[#dbe6ff] to-transparent -translate-x-1/2" />
                  )}

                  <div
                    className={`grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center ${
                      index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Image */}
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl group bg-gradient-to-br from-[#eff4ff] to-gray-100">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          quality={90}
                          loading="lazy"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#1F5CFF]/20 to-transparent" />

                        {/* Number Overlay */}
                        <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                          <div className="w-12 h-12 sm:w-14 lg:w-16 sm:h-14 lg:h-16 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                            <span className="text-xl sm:text-2xl font-bold text-[#1F5CFF]">
                              {step.number}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div className="w-11 h-11 sm:w-12 lg:w-14 sm:h-12 lg:h-14 rounded-xl sm:rounded-2xl bg-[#eff4ff] flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 sm:w-6 lg:w-7 sm:h-6 lg:h-7 text-[#1F5CFF]" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                        {step.description}
                      </p>

                      {/* Deliverables */}
                      <div className="mb-6 sm:mb-8">
                        <p className="text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3 sm:mb-4">
                          {t('deliverables')}
                        </p>
                        <ul className="space-y-2 sm:space-y-3">
                          {step.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-center text-gray-700 text-sm sm:text-base">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#1F5CFF] mr-2 sm:mr-3 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 sm:mt-16 lg:mt-20 text-center"
          >
            <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">
              {t('ctaText')}
            </p>
            <motion.a
              href="https://calendly.com/anwar-softwaredev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 sm:gap-3 px-6 py-4 sm:px-8 sm:py-5 bg-[#1F5CFF] text-white text-base sm:text-lg font-semibold rounded-xl sm:rounded-full hover:bg-[#1a4edb] transition-all duration-300 shadow-lg shadow-[#1F5CFF]/30 hover:shadow-xl hover:shadow-[#1F5CFF]/40"
            >
              {content.ctaText}
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
