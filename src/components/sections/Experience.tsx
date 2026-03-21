'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Section from '@/components/ui/Section';

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

export default function Experience() {
  const t = useTranslations('homepage.experience');

  const statements = [
    t('statements.scale'),
    t('statements.team'),
    t('statements.systems'),
    t('statements.outcomes'),
  ];

  return (
    <Section background="gradient" id="experience">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12"
        >
          {t('title')}
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          className="space-y-6"
        >
          {statements.map((statement, index) => (
            <motion.p
              key={index}
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed"
            >
              {statement}
            </motion.p>
          ))}
        </motion.div>

        {/* Subtle divider */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 flex justify-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-[#1F5CFF]" />
          <span className="w-2 h-2 rounded-full bg-[#1F5CFF]/50" />
          <span className="w-2 h-2 rounded-full bg-[#1F5CFF]/25" />
        </motion.div>
      </motion.div>
    </Section>
  );
}
