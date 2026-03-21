'use client';

import { motion } from 'framer-motion';
import { TrendingDown, TrendingUp, Clock, Zap, Users, Server, Brain, Rocket } from 'lucide-react';
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
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const resultIcons = [TrendingDown, TrendingDown, Clock, Server, Users, Server, Brain, Rocket];

export default function Results() {
  const t = useTranslations('homepage.results');

  const results = [
    { icon: resultIcons[0], text: t('items.dataEntry') },
    { icon: resultIcons[1], text: t('items.infrastructure') },
    { icon: resultIcons[2], text: t('items.analytics') },
    { icon: resultIcons[3], text: t('items.migration') },
    { icon: resultIcons[4], text: t('items.onboarding') },
    { icon: resultIcons[5], text: t('items.api') },
    { icon: resultIcons[6], text: t('items.ai') },
    { icon: resultIcons[7], text: t('items.modernization') },
  ];

  return (
    <Section background="white" id="results">
      <Heading
        as="h2"
        size="3xl"
        eyebrow={t('eyebrow')}
        subtitle={t('subtitle')}
        centered
      >
        {t('title')}
      </Heading>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {results.map((result, index) => {
          const Icon = result.icon;
          return (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group p-6 rounded-xl bg-gray-50 hover:bg-[#1F5CFF] border border-gray-100 hover:border-[#1F5CFF] transition-all duration-300"
            >
              <Icon className="w-6 h-6 text-[#1F5CFF] group-hover:text-white mb-4 transition-colors duration-300" />
              <p className="text-gray-700 group-hover:text-white font-medium leading-relaxed transition-colors duration-300">
                {result.text}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
