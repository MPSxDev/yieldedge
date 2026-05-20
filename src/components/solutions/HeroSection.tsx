'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';

interface HeroSectionProps {
  verticalName?: string;
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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

/**
 * HeroSection - Memoized hero section for the solutions page
 * Contains the animated title and description
 * Uses next-intl for i18n support
 */
const HeroSection = memo(function HeroSection({ verticalName }: HeroSectionProps) {
  const t = useTranslations('solutionsPage');

  return (
    <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#eff4ff] via-white to-white">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl"
        >
          <motion.span
            variants={fadeInUp}
            className="block text-gray-500 font-medium text-xs uppercase tracking-[0.2em] mb-6 sm:mb-8"
          >
            {t('hero.eyebrow')}
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-gray-900 mb-6"
          >
            {verticalName ? (
              <>
                {t('hero.title')}{' '}
                <span className="text-[#1F5CFF]">{verticalName}</span>
              </>
            ) : (
              <>
                {t('hero.title')}{' '}
                <span className="text-[#1F5CFF]">{t('hero.titleHighlight')}</span>
              </>
            )}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl"
          >
            {t('hero.description')}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
});

export default HeroSection;
