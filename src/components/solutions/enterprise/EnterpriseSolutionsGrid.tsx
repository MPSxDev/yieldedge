'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, Shield, Cloud, BarChart3, Code, Users, Cpu, Layers, Workflow, Settings } from 'lucide-react';
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
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

interface Solution {
  key: string;
  icon: LucideIcon;
  isFlagship?: boolean;
}

const solutions: Solution[] = [
  { key: 'dataGovernance', icon: Layers, isFlagship: true },
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
  index: number;
}

const SolutionCard = memo(function SolutionCard({ solution, index }: SolutionCardProps) {
  const t = useTranslations('solutionsPage.enterprise.solutions');
  const Icon = solution.icon;

  if (solution.isFlagship) {
    return (
      <motion.div
        variants={fadeInUp}
        className="lg:col-span-2 lg:row-span-2 group relative"
      >
        <div className="relative h-full bg-white rounded-2xl border border-gray-200 p-8 lg:p-12 overflow-hidden hover:border-[#1F5CFF]/50 transition-all duration-500 shadow-sm">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1F5CFF]/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Icon with gradient background */}
          <div className="relative mb-8">
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-[#1F5CFF] to-blue-500 flex items-center justify-center shadow-lg">
              <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
            </div>
          </div>

          {/* Flagship badge */}
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#1F5CFF]/10 text-[#1F5CFF] border border-[#1F5CFF]/20">
              {t('flagshipLabel')}
            </span>
          </div>

          {/* Content */}
          <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 tracking-[-0.02em]">
            {t(`${solution.key}.title`)}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            {t(`${solution.key}.description`)}
          </p>

          {/* Features */}
          <ul className="space-y-3 mb-8">
            {[0, 1, 2, 3].map((idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1F5CFF] mt-2 flex-shrink-0" />
                <span className="text-sm">{t(`${solution.key}.features.${idx}`)}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 text-[#1F5CFF] font-semibold group-hover:text-blue-600 transition-colors"
          >
            {t('learnMore')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={fadeInUp}
      className="group relative"
    >
      <div className="relative h-full bg-white rounded-xl border border-gray-200 p-6 lg:p-8 overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-300">
        {/* Subtle glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F5CFF]/0 to-blue-400/0 group-hover:from-[#1F5CFF]/5 group-hover:to-blue-400/5 transition-all duration-500" />

        {/* Icon */}
        <div className="relative mb-6">
          <div className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center group-hover:border-[#1F5CFF]/30 transition-colors">
            <Icon className="w-6 h-6 text-gray-500 group-hover:text-[#1F5CFF] transition-colors" />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-[-0.01em]">
          {t(`${solution.key}.title`)}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          {t(`${solution.key}.description`)}
        </p>

        {/* CTA */}
        <a
          href="#contact-form"
          className="inline-flex items-center gap-2 text-sm text-gray-500 group-hover:text-[#1F5CFF] transition-colors"
        >
          {t('learnMore')}
          <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
        </a>
      </div>
    </motion.div>
  );
});

/**
 * EnterpriseSolutionsGrid - Premium solutions grid with flagship solution
 */
const EnterpriseSolutionsGrid = memo(function EnterpriseSolutionsGrid() {
  const t = useTranslations('solutionsPage.enterprise');

  return (
    <section
      id="solutions-grid"
      className="relative py-24 lg:py-32 bg-white"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white" />

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
            {t('grid.eyebrow')}
            <span className="w-8 h-px bg-gray-400" />
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-gray-900 mb-6"
          >
            {t('grid.title')}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            {t('grid.description')}
          </motion.p>
        </motion.div>

        {/* Solutions grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.key} solution={solution} index={index} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
});

export default EnterpriseSolutionsGrid;
