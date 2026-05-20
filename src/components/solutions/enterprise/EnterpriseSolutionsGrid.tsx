'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, Shield, Cloud, BarChart3, Code, Users, Cpu, Layers, Workflow, Settings } from 'lucide-react';
import Container from '@/components/ui/Container';
import { cn } from '@/lib/utils';
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
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

interface Solution {
  key: string;
  icon: LucideIcon;
}

const solutions: Solution[] = [
  { key: 'dataGovernance', icon: Layers },
  { key: 'processOrchestration', icon: Workflow },
  { key: 'systemsIntegration', icon: Settings },
  { key: 'cloudArchitecture', icon: Cloud },
  { key: 'securityCompliance', icon: Shield },
  { key: 'analyticsIntelligence', icon: BarChart3 },
  { key: 'customDevelopment', icon: Code },
  { key: 'aiAutomation', icon: Cpu },
  { key: 'technicalTeams', icon: Users },
];

interface SolutionCardProps {
  solution: Solution;
}

const SolutionCard = memo(function SolutionCard({ solution }: SolutionCardProps) {
  const t = useTranslations('solutionsPage.enterprise.solutions');
  const Icon = solution.icon;

  return (
    <motion.div
      variants={fadeInUp}
      className="group relative"
    >
      <a
        href="#contact-form"
        className={cn(
          'relative flex flex-col h-full bg-white',
          'rounded-lg border border-gray-200/80',
          'p-5 lg:p-6',
          'transition-all duration-300 ease-out',
          'hover:border-blue-200 hover:shadow-[0_4px_20px_-4px_rgba(31,92,255,0.12)]',
          'focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-300'
        )}
      >
        {/* Subtle gradient overlay on hover */}
        <div
          className={cn(
            'absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300',
            'bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/30',
            'group-hover:opacity-100'
          )}
          aria-hidden="true"
        />

        {/* Content wrapper */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Icon */}
          <div className="mb-4">
            <div
              className={cn(
                'w-9 h-9 rounded-md',
                'bg-gray-50 border border-gray-100',
                'flex items-center justify-center',
                'transition-all duration-300',
                'group-hover:bg-blue-50 group-hover:border-blue-100'
              )}
            >
              <Icon
                className={cn(
                  'w-[18px] h-[18px] text-gray-500',
                  'transition-colors duration-300',
                  'group-hover:text-[#1F5CFF]'
                )}
              />
            </div>
          </div>

          {/* Title */}
          <h3
            className={cn(
              'text-[15px] font-semibold text-gray-900 mb-2',
              'tracking-[-0.01em] leading-tight'
            )}
          >
            {t(`${solution.key}.title`)}
          </h3>

          {/* Description */}
          <p
            className={cn(
              'text-[13px] text-gray-500 leading-relaxed',
              'mb-4 flex-grow'
            )}
          >
            {t(`${solution.key}.description`)}
          </p>

          {/* CTA link */}
          <div
            className={cn(
              'flex items-center gap-1.5',
              'text-[13px] font-medium text-gray-400',
              'transition-colors duration-300',
              'group-hover:text-[#1F5CFF]'
            )}
          >
            <span>{t('learnMore')}</span>
            <ArrowRight
              className={cn(
                'w-3.5 h-3.5',
                'transition-all duration-300',
                'opacity-0 -translate-x-1',
                'group-hover:opacity-100 group-hover:translate-x-0'
              )}
            />
          </div>
        </div>
      </a>
    </motion.div>
  );
});

/**
 * EnterpriseSolutionsGrid - Enterprise-grade uniform solutions grid
 *
 * Design principles:
 * - Uniform 3-column grid (no featured cards)
 * - Compact, premium card design
 * - Subtle enterprise-style borders and shadows
 * - Responsive: 3 cols desktop, 2 cols tablet, 1 col mobile
 */
const EnterpriseSolutionsGrid = memo(function EnterpriseSolutionsGrid() {
  const t = useTranslations('solutionsPage.enterprise');

  return (
    <section
      id="solutions-grid"
      className="relative py-20 lg:py-24 bg-white"
    >
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-white"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className={cn(
              'inline-flex items-center gap-3',
              'text-gray-500 font-medium text-[11px] uppercase tracking-[0.15em]',
              'mb-5'
            )}
          >
            <span className="w-6 h-px bg-gray-300" aria-hidden="true" />
            {t('grid.eyebrow')}
            <span className="w-6 h-px bg-gray-300" aria-hidden="true" />
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className={cn(
              'text-2xl sm:text-3xl lg:text-4xl',
              'font-semibold tracking-[-0.02em] text-gray-900',
              'mb-4'
            )}
          >
            {t('grid.title')}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            {t('grid.description')}
          </motion.p>
        </motion.div>

        {/* Solutions Grid - Uniform 3x3 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className={cn(
            'grid gap-4 lg:gap-5',
            'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          )}
        >
          {solutions.map((solution) => (
            <SolutionCard key={solution.key} solution={solution} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
});

export default EnterpriseSolutionsGrid;
