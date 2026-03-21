'use client';

import { motion } from 'framer-motion';
import { Zap, Target, Code, Handshake, Shield } from 'lucide-react';
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

const valueIcons = [Zap, Target, Code, Handshake, Shield];

export default function ValueProps() {
  const t = useTranslations('homepage.valueProps');

  const values = [
    {
      icon: valueIcons[0],
      title: t('speed.title'),
      description: t('speed.description'),
    },
    {
      icon: valueIcons[1],
      title: t('impact.title'),
      description: t('impact.description'),
    },
    {
      icon: valueIcons[2],
      title: t('excellence.title'),
      description: t('excellence.description'),
    },
    {
      icon: valueIcons[3],
      title: t('partnership.title'),
      description: t('partnership.description'),
    },
    {
      icon: valueIcons[4],
      title: t('proven.title'),
      description: t('proven.description'),
    },
  ];

  return (
    <Section background="white" id="value">
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
        className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6"
      >
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group text-center p-6 lg:p-8 rounded-2xl bg-gray-50 hover:bg-[#eff4ff] border border-transparent hover:border-[#dbe6ff] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-[#1F5CFF] flex items-center justify-center mx-auto mb-4 shadow-sm transition-colors duration-300">
                <Icon className="w-6 h-6 text-[#1F5CFF] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
