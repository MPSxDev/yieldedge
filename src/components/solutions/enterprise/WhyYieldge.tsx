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
} from 'lucide-react';
import Container from '@/components/ui/Container';
import type { LucideIcon } from 'lucide-react';

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
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
      className="group relative"
    >
      <div className="relative h-full p-6 lg:p-8">
        {/* Connector line for desktop */}
        {index < trustSignals.length - 1 && (
          <div className="hidden lg:block absolute top-1/2 right-0 w-full h-px bg-gradient-to-r from-gray-200 to-transparent" />
        )}

        {/* Number indicator */}
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-200 group-hover:text-gray-300 transition-colors">
            0{index + 1}
          </span>
        </div>

        {/* Icon */}
        <div className="mb-6">
          <div className="w-14 h-14 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center group-hover:border-[#1F5CFF]/30 group-hover:bg-[#1F5CFF]/5 transition-all">
            <Icon className="w-7 h-7 text-gray-500 group-hover:text-[#1F5CFF] transition-colors" />
          </div>
        </div>

        {/* Content */}
        <h4 className="text-xl font-semibold text-gray-900 mb-3">
          {t(`${signal.key}.title`)}
        </h4>
        <p className="text-gray-500 leading-relaxed">
          {t(`${signal.key}.description`)}
        </p>
      </div>
    </motion.div>
  );
});

/**
 * WhyYieldge - Enterprise trust signals section
 */
const WhyYieldge = memo(function WhyYieldge() {
  const t = useTranslations('solutionsPage.enterprise.whyYieldge');

  return (
    <section className="relative py-24 lg:py-32 bg-gray-50">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(31, 92, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(31, 92, 255, 0.03) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1F5CFF]/20 to-transparent" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="lg:col-span-4 lg:sticky lg:top-32"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-3 text-gray-500 font-medium text-xs uppercase tracking-[0.2em] mb-6"
            >
              <span className="w-8 h-px bg-gray-400" />
              {t('eyebrow')}
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-gray-900 mb-6"
            >
              {t('title')}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 leading-relaxed mb-8"
            >
              {t('description')}
            </motion.p>

            {/* Quote */}
            <motion.blockquote
              variants={fadeInUp}
              className="relative pl-6 border-l-2 border-[#1F5CFF]/50"
            >
              <p className="text-gray-600 italic">
                {t('quote')}
              </p>
            </motion.blockquote>
          </motion.div>

          {/* Right: Trust signals */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="lg:col-span-8"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
              {trustSignals.map((signal, index) => (
                <div
                  key={signal.key}
                  className="bg-white"
                >
                  <TrustSignalCard signal={signal} index={index} />
                </div>
              ))}
              {/* Empty cell to complete grid */}
              <div className="hidden lg:block bg-white p-6 lg:p-8">
                <div className="h-full flex items-center justify-center">
                  <a
                    href="#contact-form"
                    className="text-[#1F5CFF] hover:text-blue-600 font-semibold transition-colors"
                  >
                    {t('learnMore')} &rarr;
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
    </section>
  );
});

export default WhyYieldge;
