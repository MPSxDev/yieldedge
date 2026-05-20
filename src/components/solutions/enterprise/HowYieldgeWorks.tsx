'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  Search,
  Map,
  GitMerge,
  Brain,
  Activity,
  TrendingUp,
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

const lineAnimation = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.5 },
  },
};

interface ProcessStep {
  key: string;
  icon: LucideIcon;
  number: string;
}

const processSteps: ProcessStep[] = [
  { key: 'discovery', icon: Search, number: '01' },
  { key: 'mapping', icon: Map, number: '02' },
  { key: 'integration', icon: GitMerge, number: '03' },
  { key: 'intelligence', icon: Brain, number: '04' },
  { key: 'monitoring', icon: Activity, number: '05' },
  { key: 'optimization', icon: TrendingUp, number: '06' },
];

interface StepCardProps {
  step: ProcessStep;
  index: number;
  isLast: boolean;
}

const StepCard = memo(function StepCard({ step, index, isLast }: StepCardProps) {
  const t = useTranslations('solutionsPage.enterprise.process.steps');
  const Icon = step.icon;

  return (
    <motion.div
      variants={fadeInUp}
      className="relative flex flex-col items-center"
    >
      {/* Connection line (not for last item) */}
      {!isLast && (
        <motion.div
          variants={lineAnimation}
          className="hidden lg:block absolute top-10 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px bg-gradient-to-r from-[#1F5CFF]/30 to-blue-400/30 origin-left"
        />
      )}

      {/* Step number and icon */}
      <div className="relative mb-6">
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-[#1F5CFF]/10 rounded-2xl blur-xl animate-pulse" />

        <div className="relative w-20 h-20 rounded-2xl bg-white border border-gray-200 flex flex-col items-center justify-center group-hover:border-[#1F5CFF]/50 transition-colors shadow-sm">
          <span className="text-xs font-medium text-[#1F5CFF] mb-1">{step.number}</span>
          <Icon className="w-6 h-6 text-gray-600" />
        </div>
      </div>

      {/* Content */}
      <div className="text-center max-w-[180px]">
        <h4 className="text-gray-900 font-semibold mb-2">
          {t(`${step.key}.title`)}
        </h4>
        <p className="text-gray-500 text-sm leading-relaxed">
          {t(`${step.key}.description`)}
        </p>
      </div>
    </motion.div>
  );
});

/**
 * HowYieldgeWorks - Premium implementation flow timeline
 */
const HowYieldgeWorks = memo(function HowYieldgeWorks() {
  const t = useTranslations('solutionsPage.enterprise.process');

  return (
    <section className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(31, 92, 255, 0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Top accent gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1F5CFF]/30 to-transparent" />

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-3 text-gray-500 font-medium text-xs uppercase tracking-[0.2em] mb-6"
          >
            <span className="w-8 h-px bg-gray-400" />
            {t('eyebrow')}
            <span className="w-8 h-px bg-gray-400" />
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-gray-900 mb-6"
          >
            {t('title')}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            {t('description')}
          </motion.p>
        </motion.div>

        {/* Timeline - Desktop */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="hidden lg:grid lg:grid-cols-6 gap-8"
        >
          {processSteps.map((step, index) => (
            <StepCard
              key={step.key}
              step={step}
              index={index}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </motion.div>

        {/* Timeline - Mobile */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-8"
        >
          {processSteps.map((step, index) => (
            <StepCard
              key={step.key}
              step={step}
              index={index}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 lg:mt-24 text-center"
        >
          <p className="text-gray-500 mb-6">{t('ctaText')}</p>
          <a
            href="#contact-form"
            className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-lg"
          >
            {t('ctaButton')}
          </a>
        </motion.div>
      </Container>

      {/* Bottom accent gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
    </section>
  );
});

export default HowYieldgeWorks;
