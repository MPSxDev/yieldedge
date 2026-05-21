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
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -4,
    scale: 1.02,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
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

// Featured card - spans 2 columns, larger and more prominent
interface FeaturedCardProps {
  signal: TrustSignal;
  index: number;
}

const FeaturedCard = memo(function FeaturedCard({ signal, index }: FeaturedCardProps) {
  const t = useTranslations('solutionsPage.enterprise.whyYieldge.signals');
  const Icon = signal.icon;

  return (
    <motion.div
      variants={fadeInUp}
      initial="rest"
      whileHover="hover"
      className="lg:col-span-2 h-full"
    >
      <motion.div
        variants={cardHover}
        className={cn(
          'relative h-full p-8 rounded-2xl',
          'bg-gradient-to-br from-white to-gray-50/80',
          'border border-gray-200/60',
          'shadow-[0_1px_3px_rgba(0,0,0,0.04)]',
          'transition-all duration-300',
          'hover:border-blue-200/80',
          'hover:shadow-[0_8px_30px_-8px_rgba(31,92,255,0.15)]',
          'group'
        )}
      >
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/0 to-blue-50/0 group-hover:from-blue-50/30 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            {/* Number badge */}
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-gray-100/80 text-[10px] font-semibold text-gray-400 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors duration-300">
              {String(index + 1).padStart(2, '0')}
            </span>

            {/* Icon container */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200/60 flex items-center justify-center group-hover:from-blue-50 group-hover:to-blue-100/50 group-hover:border-blue-200/60 transition-all duration-300">
              <Icon className="w-5 h-5 text-gray-500 group-hover:text-[#1F5CFF] transition-colors duration-300" />
            </div>
          </div>

          {/* Content */}
          <h4 className="text-lg font-semibold text-gray-900 mb-3 leading-snug tracking-[-0.01em]">
            {t(`${signal.key}.title`)}
          </h4>
          <p className="text-sm text-gray-500 leading-relaxed max-w-md">
            {t(`${signal.key}.description`)}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
});

// Standard card - single column, compact
interface StandardCardProps {
  signal: TrustSignal;
  index: number;
}

const StandardCard = memo(function StandardCard({ signal, index }: StandardCardProps) {
  const t = useTranslations('solutionsPage.enterprise.whyYieldge.signals');
  const Icon = signal.icon;

  return (
    <motion.div
      variants={fadeInUp}
      initial="rest"
      whileHover="hover"
      className="h-full"
    >
      <motion.div
        variants={cardHover}
        className={cn(
          'relative h-full p-6 rounded-2xl',
          'bg-white',
          'border border-gray-200/60',
          'shadow-[0_1px_2px_rgba(0,0,0,0.03)]',
          'transition-all duration-300',
          'hover:border-blue-200/80',
          'hover:shadow-[0_8px_24px_-8px_rgba(31,92,255,0.12)]',
          'group'
        )}
      >
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/0 to-blue-50/0 group-hover:from-blue-50/20 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            {/* Number badge */}
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-gray-100/80 text-[10px] font-semibold text-gray-400 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors duration-300">
              {String(index + 1).padStart(2, '0')}
            </span>

            {/* Icon container */}
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100/80 border border-gray-200/50 flex items-center justify-center group-hover:from-blue-50 group-hover:to-blue-100/30 group-hover:border-blue-200/50 transition-all duration-300">
              <Icon className="w-4 h-4 text-gray-500 group-hover:text-[#1F5CFF] transition-colors duration-300" />
            </div>
          </div>

          {/* Content */}
          <h4 className="text-sm font-semibold text-gray-900 mb-2 leading-snug">
            {t(`${signal.key}.title`)}
          </h4>
          <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
            {t(`${signal.key}.description`)}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
});

// CTA Card - Premium gradient design
const CTACard = memo(function CTACard() {
  const t = useTranslations('solutionsPage.enterprise.whyYieldge');

  return (
    <motion.div
      variants={fadeInUp}
      initial="rest"
      whileHover="hover"
      className="h-full"
    >
      <motion.a
        href="#contact-form"
        variants={cardHover}
        className={cn(
          'relative h-full min-h-[120px] p-6 rounded-2xl flex flex-col justify-center',
          'bg-gradient-to-br from-gray-900 to-gray-800',
          'border border-gray-700/50',
          'shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)]',
          'transition-all duration-300',
          'hover:from-gray-800 hover:to-gray-700',
          'hover:shadow-[0_8px_30px_-4px_rgba(31,92,255,0.25)]',
          'hover:border-blue-500/30',
          'group cursor-pointer block'
        )}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/5 group-hover:to-blue-600/10 transition-all duration-500 pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-3">
            <span className="text-base font-semibold text-white group-hover:text-blue-100 transition-colors duration-300">
              {t('learnMore')}
            </span>
            <ArrowRight className="w-5 h-5 text-white/70 group-hover:text-blue-300 group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
});

/**
 * WhyYieldge - Premium enterprise trust signals section
 *
 * Redesigned with:
 * - Asymmetric 3-column grid with featured card spanning 2 columns
 * - Premium card design with softer structure (rounded-2xl)
 * - Elegant hover states with scale, shadow glow, and border illumination
 * - Better visual hierarchy and reduced text density
 * - Premium CTA card with gradient background
 * - Staggered Framer Motion animations
 */
const WhyYieldge = memo(function WhyYieldge() {
  const t = useTranslations('solutionsPage.enterprise.whyYieldge');

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50/80 to-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(31, 92, 255, 0.025) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Top decorative border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200/80 to-transparent" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: Intro section - more compact with stronger hierarchy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="lg:col-span-4 lg:sticky lg:top-32"
          >
            {/* Vertical accent line + content wrapper */}
            <div className="relative pl-5 border-l-2 border-[#1F5CFF]/30">
              <motion.span
                variants={fadeInUp}
                className="inline-block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4"
              >
                {t('eyebrow')}
              </motion.span>

              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl lg:text-[2.25rem] font-semibold tracking-[-0.025em] text-gray-900 mb-5 leading-[1.2]"
              >
                {t('title')}
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-sm text-gray-500 leading-relaxed mb-6 max-w-sm"
              >
                {t('description')}
              </motion.p>

              {/* Quote - elegant callout */}
              <motion.blockquote
                variants={fadeInUp}
                className="relative py-4 px-5 bg-white/80 rounded-xl border border-gray-100/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
              >
                <div className="absolute left-5 top-4 text-2xl text-blue-200/60 font-serif leading-none">&ldquo;</div>
                <p className="text-xs text-gray-500 italic leading-relaxed pl-4">
                  {t('quote')}
                </p>
              </motion.blockquote>
            </div>
          </motion.div>

          {/* Right: Trust signals grid - asymmetric layout */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="lg:col-span-8"
          >
            {/* Desktop: 3-column grid with featured card spanning 2 columns
                Row 1: [Featured Card col-span-2] [Card 2]
                Row 2: [Card 3] [Card 4] [Card 5]
                Row 3: [CTA col-span-full centered]
            */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Featured card - first item, spans 2 columns on desktop */}
              <FeaturedCard signal={trustSignals[0]} index={0} />

              {/* Standard card - second item */}
              <StandardCard signal={trustSignals[1]} index={1} />

              {/* Standard card - third item */}
              <StandardCard signal={trustSignals[2]} index={2} />

              {/* Standard card - fourth item */}
              <StandardCard signal={trustSignals[3]} index={3} />

              {/* Standard card - fifth item */}
              <StandardCard signal={trustSignals[4]} index={4} />

              {/* CTA card - intentionally placed last to complete the grid */}
              <CTACard />
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200/80 to-transparent" />
    </section>
  );
});

export default WhyYieldge;
