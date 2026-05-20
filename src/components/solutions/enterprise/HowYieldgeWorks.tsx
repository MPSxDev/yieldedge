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
  ArrowRight,
  ChevronDown,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import { cn } from '@/lib/utils';
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

const lineAnimationV = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.3 },
  },
};

/** Single brand accent — full class names for Tailwind purge */
const stepAccent = {
  glow: 'from-[#1F5CFF]/25 to-blue-400/10',
  iconHover: 'group-hover:text-[#1F5CFF]',
  titleHover: 'group-hover:text-[#1F5CFF]',
  badge: 'bg-[#1F5CFF]/10 text-[#1F5CFF] border-[#1F5CFF]/20',
  connector: 'from-[#1F5CFF]/50',
} as const;

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

// ─── Desktop card ─────────────────────────────────────────────────────────────

interface DesktopStepCardProps {
  step: ProcessStep;
  isLast: boolean;
}

const DesktopStepCard = memo(function DesktopStepCard({
  step,
  isLast,
}: DesktopStepCardProps) {
  const t = useTranslations('solutionsPage.enterprise.process.steps');
  const Icon = step.icon;

  return (
    <motion.div
      variants={fadeInUp}
      className="group relative flex flex-col items-center"
    >
      {/* Connector: line + arrow between steps */}
      {!isLast && (
        <div className="hidden lg:block absolute top-[2.25rem] left-[calc(50%+2.75rem)] w-[calc(100%-5.5rem)] pr-3 pointer-events-none overflow-visible">
          <motion.div
            variants={lineAnimation}
            className={cn(
              'h-px w-full bg-gradient-to-r to-blue-300/15 origin-left',
              stepAccent.connector
            )}
          />
          <motion.div
            variants={fadeInUp}
            className="absolute -right-1 top-1/2 -translate-y-1/2"
          >
            <ArrowRight className="w-3.5 h-3.5 text-[#1F5CFF]/40" aria-hidden />
          </motion.div>
        </div>
      )}

      {/* Icon + number cluster */}
      <div className="relative mb-4">
        <div
          className={cn(
            'absolute -inset-3 rounded-3xl blur-2xl opacity-50 transition-opacity duration-300 group-hover:opacity-90 bg-gradient-to-br',
            stepAccent.glow
          )}
        />

        <div
          className={cn(
            'relative w-[4.5rem] h-[4.5rem] rounded-2xl bg-white border border-gray-200/80',
            'flex items-center justify-center shadow-sm',
            'transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md'
          )}
        >
          <span
            className={cn(
              'absolute -top-2 -right-2 min-w-[1.375rem] h-[1.375rem] px-1 rounded-full border text-[9px] font-bold tracking-wider flex items-center justify-center',
              stepAccent.badge
            )}
          >
            {step.number}
          </span>
          <Icon
            className={cn(
              'w-7 h-7 text-gray-400 transition-colors duration-300',
              stepAccent.iconHover
            )}
          />
        </div>
      </div>

      {/* Content card */}
      <div
        className={cn(
          'w-full text-center rounded-xl border border-gray-100 bg-white/70 backdrop-blur-sm px-3 py-4',
          'shadow-sm transition-all duration-300',
          'group-hover:-translate-y-1 group-hover:shadow-md group-hover:bg-white'
        )}
      >
        <h4
          className={cn(
            'font-semibold text-sm text-gray-900 mb-2 transition-colors duration-300',
            stepAccent.titleHover
          )}
        >
          {t(`${step.key}.title`)}
        </h4>
        <p className="text-gray-500 text-xs leading-relaxed">
          {t(`${step.key}.description`)}
        </p>
      </div>
    </motion.div>
  );
});

// ─── Mobile vertical card ─────────────────────────────────────────────────────

interface MobileStepCardProps {
  step: ProcessStep;
  isLast: boolean;
}

const MobileStepCard = memo(function MobileStepCard({
  step,
  isLast,
}: MobileStepCardProps) {
  const t = useTranslations('solutionsPage.enterprise.process.steps');
  const Icon = step.icon;

  return (
    <motion.div variants={fadeInUp} className="group relative flex items-start gap-4 overflow-visible">
      {/* Timeline rail */}
      <div className="flex flex-col items-center flex-shrink-0 w-14 overflow-visible">
        <div className="relative">
          <div
            className={cn(
              'absolute -inset-2 rounded-2xl blur-lg opacity-40 transition-opacity duration-300 group-hover:opacity-75 bg-gradient-to-br',
              stepAccent.glow
            )}
          />
          <div
            className={cn(
              'relative w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center',
              'shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md'
            )}
          >
            <Icon
              className={cn(
                'w-5 h-5 text-gray-400 transition-colors duration-300',
                stepAccent.iconHover
              )}
            />
          </div>
        </div>

        {/* Step number — below icon card, no overlap */}
        <span
          className={cn(
            'mt-2.5 mb-2 min-w-[1.5rem] h-5 px-1.5 rounded-full border text-[9px] font-bold flex items-center justify-center bg-white',
            stepAccent.badge
          )}
        >
          {step.number}
        </span>

        {!isLast && (
          <motion.div
            variants={lineAnimationV}
            className="relative flex flex-col items-center flex-1 w-full min-h-[2.75rem] py-1 overflow-visible origin-top"
          >
            <div
              className={cn(
                'w-px flex-1 min-h-[1.25rem] bg-gradient-to-b to-[#1F5CFF]/25',
                stepAccent.connector
              )}
            />
            <ChevronDown
              className="w-4 h-4 shrink-0 text-[#1F5CFF]/45 mt-0.5"
              aria-hidden
            />
          </motion.div>
        )}
      </div>

      {/* Content panel */}
      <div
        className={cn(
          'flex-1 rounded-xl border border-gray-100 bg-white px-4 py-4 mb-6 shadow-sm',
          'transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md',
          isLast && 'mb-0'
        )}
      >
        <h4
          className={cn(
            'font-semibold text-base text-gray-900 mb-2 transition-colors duration-300',
            stepAccent.titleHover
          )}
        >
          {t(`${step.key}.title`)}
        </h4>
        <p className="text-gray-500 text-sm leading-relaxed">
          {t(`${step.key}.description`)}
        </p>
      </div>
    </motion.div>
  );
});

// ─── Section ──────────────────────────────────────────────────────────────────

/**
 * HowYieldgeWorks - Premium implementation flow timeline
 */
const HowYieldgeWorks = memo(function HowYieldgeWorks() {
  const t = useTranslations('solutionsPage.enterprise.process');

  return (
    <section className="relative py-24 lg:py-32 bg-gray-50 overflow-x-hidden">
      {/* Background dot grid via Tailwind arbitrary value */}
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_2px_2px,rgba(31,92,255,0.1)_1px,transparent_0)] [background-size:40px_40px]" />

      {/* Top accent gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1F5CFF]/30 to-transparent" />

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center mb-16 lg:mb-20"
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

        {/* Timeline — Desktop: step grid with connectors */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="hidden lg:grid lg:grid-cols-6 gap-3 overflow-visible"
        >
            {processSteps.map((step, index) => (
              <DesktopStepCard
                key={step.key}
                step={step}
                isLast={index === processSteps.length - 1}
              />
            ))}
        </motion.div>

        {/* Timeline — Mobile: vertical with left rail */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="lg:hidden max-w-lg mx-auto px-2 overflow-visible"
        >
          {processSteps.map((step, index) => (
            <MobileStepCard
              key={step.key}
              step={step}
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
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1F5CFF] text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-[#1F5CFF]/30 hover:-translate-y-0.5"
          >
            {t('ctaButton')}
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </Container>

      {/* Bottom accent gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
    </section>
  );
});

export default HowYieldgeWorks;
