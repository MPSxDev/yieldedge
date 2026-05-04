'use client';

import { motion } from 'framer-motion';
import { FileText, CheckCircle, Archive, Activity, BarChart3, Brain } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Section from '@/components/ui/Section';
import Heading from '@/components/ui/Heading';

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
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const applicationIcons = [FileText, CheckCircle, Archive, Activity, BarChart3, Brain];

export default function Applications() {
  const t = useTranslations('homepage.applications');

  const applications = [
    { icon: applicationIcons[0], text: t('items.documents') },
    { icon: applicationIcons[1], text: t('items.validation') },
    { icon: applicationIcons[2], text: t('items.evidence') },
    { icon: applicationIcons[3], text: t('items.monitoring') },
    { icon: applicationIcons[4], text: t('items.dashboards') },
    { icon: applicationIcons[5], text: t('items.intelligence') },
  ];

  return (
    <Section background="gray" id="applications">
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
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {applications.map((app, index) => {
          const Icon = app.icon;
          return (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex items-start gap-4 p-5 rounded-lg bg-white border border-gray-200"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                <Icon className="w-5 h-5 text-gray-500" />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-sm pt-2">
                {app.text}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
