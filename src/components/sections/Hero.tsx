'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';

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

export default function Hero() {
  const t = useTranslations('homepage.hero');

  return (
    <section className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-4.5rem)] flex items-center bg-gradient-to-b from-[#eff4ff] via-white to-white overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#1F5CFF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1F5CFF]/3 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10 pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Eyebrow - Institutional style */}
          <motion.span
            variants={fadeInUp}
            className="block text-gray-500 font-medium text-xs uppercase tracking-[0.2em] mb-6 sm:mb-8"
          >
            {t('eyebrow')}
          </motion.span>

          {/* Headline - Institutional restraint */}
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-[-0.03em] text-gray-900 leading-[1.1] mb-8"
          >
            {t('headline')}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            {t('subheadline')}
          </motion.p>

          {/* CTA - Institutional style */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center"
          >
            <a
              href="#services"
              aria-label="Ver capacidades de integracion de sistemas"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-gray-900 text-white font-medium rounded-lg border border-gray-900 hover:bg-gray-800 transition-colors duration-200"
            >
              {t('secondaryCta')}
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
