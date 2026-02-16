'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export default function ProblemSection() {
  const t = useTranslations('problem');
  const tCommon = useTranslations('common');
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#eff4ff]/30 overflow-hidden"
      id="problema"
    >
      {/* Subtle background glow - centered */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#1F5CFF]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Background decorative images - do not affect layout */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute top-20 right-10 w-64 h-64 rounded-3xl overflow-hidden hidden lg:block"
        >
          <Image src="/assets/img7.jpg" alt={tCommon('logoAlt')} fill className="object-cover" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute bottom-20 left-10 w-56 h-56 rounded-3xl overflow-hidden hidden lg:block"
        >
          <Image src="/assets/img8.jpg" alt={tCommon('logoAlt')} fill className="object-cover" />
        </motion.div>
      </div>

      {/* Main container - perfectly centered with equal padding on both sides */}
      <motion.div
        style={{ opacity, scale }}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32 lg:py-40"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Headline - MUCH BIGGER */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-gray-900 mb-8 sm:mb-10 leading-[1.1]"
          >
            {t('headline')}
          </motion.h2>

          {/* Subtitle - BIGGER and more readable */}
          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl md:text-3xl font-light text-gray-600 leading-relaxed max-w-5xl mx-auto mb-12 sm:mb-16"
          >
            {t('subtitle')}
          </motion.p>

          {/* CTA - BIGGER button */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center"
          >
            <motion.a
              href="https://calendly.com/anwar-softwaredev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-10 py-5 bg-[#1F5CFF] text-white text-lg sm:text-xl font-semibold rounded-full hover:bg-[#1a4edb] transition-all duration-300 shadow-lg shadow-[#1F5CFF]/25 hover:shadow-2xl hover:shadow-[#1F5CFF]/40"
              aria-label={t('ctaButton')}
            >
              {t('ctaButton')}
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

