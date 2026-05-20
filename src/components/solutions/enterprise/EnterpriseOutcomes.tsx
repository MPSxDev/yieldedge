'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  Gauge,
  Eye,
  FileSearch,
  Database,
  Zap,
  ShieldCheck,
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
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

interface Outcome {
  key: string;
  icon: LucideIcon;
}

const outcomes: Outcome[] = [
  { key: 'bottlenecks', icon: Gauge },
  { key: 'visibility', icon: Eye },
  { key: 'traceability', icon: FileSearch },
  { key: 'centralization', icon: Database },
  { key: 'decisions', icon: Zap },
  { key: 'governance', icon: ShieldCheck },
];

interface OutcomeCardProps {
  outcome: Outcome;
}

const OutcomeCard = memo(function OutcomeCard({ outcome }: OutcomeCardProps) {
  const t = useTranslations('solutionsPage.enterprise.outcomes.items');
  const Icon = outcome.icon;

  return (
    <motion.div
      variants={fadeInUp}
      className="group relative"
    >
      <div className="relative h-full bg-white rounded-xl border border-gray-200 p-6 lg:p-8 hover:border-gray-300 hover:shadow-md transition-all duration-300">
        {/* Hover glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F5CFF]/0 to-blue-400/0 group-hover:from-[#1F5CFF]/5 group-hover:to-blue-400/5 rounded-xl transition-all duration-500" />

        <div className="relative flex items-start gap-4">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1F5CFF]/10 to-blue-400/10 border border-[#1F5CFF]/20 flex items-center justify-center">
              <Icon className="w-6 h-6 text-[#1F5CFF]" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h4 className="text-xl font-bold bg-gradient-to-r from-[#1F5CFF] to-blue-500 bg-clip-text text-transparent mb-3">
              {t(`${outcome.key}.title`)}
            </h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t(`${outcome.key}.description`)}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

/**
 * EnterpriseOutcomes - Outcomes-focused section
 */
const EnterpriseOutcomes = memo(function EnterpriseOutcomes() {
  const t = useTranslations('solutionsPage.enterprise.outcomes');

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-white" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1F5CFF]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />

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

        {/* Outcomes grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {outcomes.map((outcome) => (
            <OutcomeCard key={outcome.key} outcome={outcome} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
});

export default EnterpriseOutcomes;
