'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Section from '@/components/ui/Section';
import Heading from '@/components/ui/Heading';

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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export default function WhyUs() {
  const t = useTranslations('homepage.whyUs');

  const differentiators = [
    { others: t('diff.hours.others'), us: t('diff.hours.us') },
    { others: t('diff.features.others'), us: t('diff.features.us') },
    { others: t('diff.staff.others'), us: t('diff.staff.us') },
    { others: t('diff.tools.others'), us: t('diff.tools.us') },
    { others: t('diff.docs.others'), us: t('diff.docs.us') },
  ];

  return (
    <Section background="gray" id="why-us">
      <Heading
        as="h2"
        size="3xl"
        centered
      >
        {t('title')}
      </Heading>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-xl mx-auto"
      >
        {/* Differentiators */}
        <div className="space-y-4 mb-12">
          {differentiators.map((diff, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100"
            >
              <span className="flex-1 text-gray-500 line-through decoration-gray-300">
                {diff.others}
              </span>
              <ArrowRight className="w-5 h-5 text-[#1F5CFF] flex-shrink-0" />
              <span className="flex-1 text-gray-900 font-semibold">
                {diff.us}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          variants={fadeInUp}
          className="text-center"
        >
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('closing')}
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
}
