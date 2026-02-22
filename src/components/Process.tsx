'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import { ProcessContent, homepageContent } from '@/lib/content';
import { iconMap } from '@/lib/iconMap';

interface ProcessProps {
  content?: ProcessContent;
  useContentDirectly?: boolean;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

export default function Process({ content = homepageContent.process, useContentDirectly = false }: ProcessProps) {
  const t = useTranslations('process');

  // Step keys for translations (only used when not using content directly)
  const stepKeys = ['discovery', 'planning', 'development', 'delivery'] as const;

  // Check if this is the homepage
  const isHomepage = content === homepageContent.process && !useContentDirectly;

  // Get steps data based on mode
  const steps = content.steps;

  // Get text content (from translations or content directly)
  const sectionLabel = isHomepage ? t('sectionLabel') : content.sectionLabel;
  const title = isHomepage ? t('title') : content.title;
  const titleHighlight = isHomepage ? t('titleHighlight') : content.titleHighlight;
  const description = isHomepage ? t('description') : content.description;
  const deliverablesLabel = isHomepage ? t('deliverables') : 'Entregables';
  const ctaText = isHomepage ? t('ctaText') : content.ctaText;

  const getStepTitle = (index: number) => {
    if (isHomepage && index < stepKeys.length) {
      return t(`steps.${stepKeys[index]}.title`);
    }
    return steps[index]?.title || '';
  };

  const getStepDescription = (index: number) => {
    if (isHomepage && index < stepKeys.length) {
      return t(`steps.${stepKeys[index]}.description`);
    }
    return steps[index]?.description || '';
  };

  const getStepDeliverables = (index: number): string[] => {
    if (isHomepage && index < stepKeys.length) {
      return t.raw(`steps.${stepKeys[index]}.deliverables`) as string[];
    }
    return steps[index]?.deliverables || [];
  };

  return (
    <section
      id="how-it-works"
      className="relative bg-white py-12 lg:py-20 overflow-hidden"
    >
      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-12 lg:mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-[#1F5CFF] font-semibold mb-3 text-xs sm:text-sm uppercase tracking-wide"
          >
            {sectionLabel}
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4"
          >
            {title}{' '}
            <span className="text-[#1F5CFF]">{titleHighlight}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-gray-600 leading-relaxed"
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Steps - Vertical Layout */}
        <div className="space-y-12 lg:space-y-16">
          {steps.map((step, index) => {
            const IconComponent = iconMap[step.icon] || iconMap.ClipboardCheck;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image */}
                <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  {/* Number Badge */}
                  <div className="absolute -top-3 -left-3 z-10">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-lg border-2 border-[#1F5CFF]/20">
                      <span className="text-xl font-bold text-[#1F5CFF]">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#eff4ff] to-gray-100">
                    <Image
                      src={step.image || '/assets/tech/maranda-vandergriff-7aakZdIl4vg-unsplash.jpg'}
                      alt={getStepTitle(index)}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={90}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#1F5CFF]/10 to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#eff4ff] flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-[#1F5CFF]" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      {getStepTitle(index)}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
                    {getStepDescription(index)}
                  </p>

                  {/* Deliverables */}
                  <div>
                    <p className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-3">
                      {deliverablesLabel}
                    </p>
                    <ul className="space-y-2">
                      {getStepDeliverables(index).map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#1F5CFF] mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <motion.a
            href="https://calendly.com/anwar-softwaredev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1F5CFF] text-white text-sm font-semibold rounded-full hover:bg-[#1a4edb] transition-all duration-300 shadow-lg shadow-[#1F5CFF]/25"
          >
            {ctaText}
          </motion.a>
        </div>
      </Container>
    </section>
  );
}
