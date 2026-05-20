'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Container from '@/components/ui/Container';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const lineAnimation = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.8 },
  },
};

/**
 * EnterpriseHero - Premium enterprise hero section
 * Features: Light gradient, commanding typography (matching homepage)
 */
const EnterpriseHero = memo(function EnterpriseHero() {
  const t = useTranslations('solutionsPage.enterprise');

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-[#eff4ff] via-white to-white overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#1F5CFF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1F5CFF]/3 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="inline-flex items-center gap-3 text-gray-500 font-medium text-xs uppercase tracking-[0.2em]">
              <span className="w-8 h-px bg-gray-400" />
              {t('eyebrow')}
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] text-gray-900 mb-8 leading-[1.1]"
          >
            {t('headline')}
            <span className="block mt-2 bg-gradient-to-r from-[#1F5CFF] to-blue-500 bg-clip-text text-transparent">
              {t('headlineHighlight')}
            </span>
          </motion.h1>

          {/* Decorative line */}
          <motion.div
            variants={lineAnimation}
            className="w-32 h-px bg-gradient-to-r from-[#1F5CFF] to-blue-400 mb-8 origin-left"
          />

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mb-12"
          >
            {t('subheadline')}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact-form"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-lg"
            >
              {t('primaryCta')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#solutions-grid"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
            >
              {t('secondaryCta')}
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 pt-8 border-t border-gray-200"
          >
            <div className="flex flex-wrap items-center gap-8 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{t('trustIndicator1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#1F5CFF]" />
                <span>{t('trustIndicator2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <span>{t('trustIndicator3')}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#operational-intelligence"
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Scroll to learn more"
        >
          <span className="text-xs uppercase tracking-wider">Explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
});

export default EnterpriseHero;
