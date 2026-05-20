'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  Building2,
  Scaling,
  Target,
  Compass,
  Brain,
  ArrowRight,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import type { LucideIcon } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

interface TrustSignal {
  key: string;
  icon: LucideIcon;
}

const trustSignals: TrustSignal[] = [
  { key: 'enterpriseThinking', icon: Building2 },
  { key: 'scalableArchitecture', icon: Scaling },
  { key: 'operationalFirst', icon: Target },
  { key: 'strategicImplementation', icon: Compass },
  { key: 'aiGovernance', icon: Brain },
];

interface TrustSignalCardProps {
  signal: TrustSignal;
  index: number;
}

const TrustSignalCard = memo(function TrustSignalCard({ signal, index }: TrustSignalCardProps) {
  const t = useTranslations('solutionsPage.enterprise.whyYieldge.signals');
  const Icon = signal.icon;

  return (
    <motion.div
      variants={fadeInUp}
      className="group relative h-full"
    >
      <div className="relative h-full p-5 bg-white border border-gray-200/80 rounded-xl transition-all duration-300 hover:border-blue-200 hover:shadow-[0_4px_20px_-4px_rgba(31,92,255,0.12)]">
        {/* Header: Number badge + Icon */}
        <div className="flex items-start justify-between mb-4">
          {/* Number badge */}
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-gray-100 text-[10px] font-semibold text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
            {String(index + 1).padStart(2, '0')}
          </span>

          {/* Icon container */}
          <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:border-blue-100 group-hover:bg-blue-50/50 transition-all duration-300">
            <Icon className="w-4 h-4 text-gray-400 group-hover:text-[#1F5CFF] transition-colors duration-300" />
          </div>
        </div>

        {/* Content */}
        <h4 className="text-sm font-semibold text-gray-900 mb-2 leading-snug">
          {t(`${signal.key}.title`)}
        </h4>
        <p className="text-xs text-gray-500 leading-relaxed">
          {t(`${signal.key}.description`)}
        </p>
      </div>
    </motion.div>
  );
});

/**
 * CTACard - Call to action card for the grid
 */
const CTACard = memo(function CTACard() {
  const t = useTranslations('solutionsPage.enterprise.whyYieldge');

  return (
    <motion.div
      variants={fadeInUp}
      className="group relative h-full"
    >
      <a
        href="#contact-form"
        className="relative h-full p-5 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-gray-100/50 border border-gray-200/80 rounded-xl transition-all duration-300 hover:border-blue-200 hover:shadow-[0_4px_20px_-4px_rgba(31,92,255,0.12)] hover:from-blue-50/50 hover:to-blue-50/30"
      >
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-700 group-hover:text-[#1F5CFF] transition-colors">
            {t('learnMore')}
          </span>
          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1F5CFF] group-hover:translate-x-0.5 transition-all duration-300" />
        </div>
      </a>
    </motion.div>
  );
});

/**
 * WhyYieldge - Enterprise trust signals section
 * Redesigned with compact layout, tighter grid, and integrated numbering
 */
const WhyYieldge = memo(function WhyYieldge() {
  const t = useTranslations('solutionsPage.enterprise.whyYieldge');

  return (
    <section className="relative py-16 lg:py-20 bg-gray-50/50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(31, 92, 255, 0.03) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Compact Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="lg:col-span-4"
          >
            {/* Vertical accent line + content wrapper */}
            <div className="relative pl-4 border-l-2 border-[#1F5CFF]/20">
              <motion.span
                variants={fadeInUp}
                className="inline-block text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400 mb-3"
              >
                {t('eyebrow')}
              </motion.span>

              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl lg:text-[2rem] font-semibold tracking-[-0.02em] text-gray-900 mb-4 leading-tight"
              >
                {t('title')}
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-sm text-gray-500 leading-relaxed mb-5"
              >
                {t('description')}
              </motion.p>

              {/* Quote - more compact */}
              <motion.blockquote
                variants={fadeInUp}
                className="relative py-3 px-4 bg-white/60 rounded-lg border border-gray-100"
              >
                <p className="text-xs text-gray-500 italic leading-relaxed">
                  &ldquo;{t('quote')}&rdquo;
                </p>
              </motion.blockquote>
            </div>
          </motion.div>

          {/* Right: Trust signals grid - 3x2 layout */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="lg:col-span-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {trustSignals.map((signal, index) => (
                <TrustSignalCard key={signal.key} signal={signal} index={index} />
              ))}
              {/* CTA card to complete 3x2 grid */}
              <CTACard />
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
});

export default WhyYieldge;
