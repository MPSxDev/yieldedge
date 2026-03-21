'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
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

const valueIcons = [
  { src: '/assets/iconset/icons/1.svg', alt: 'Execution with Criteria' },
  { src: '/assets/iconset/icons/2.svg', alt: 'Measurable Impact' },
  { src: '/assets/iconset/icons/3.svg', alt: 'Technical Rigor' },
  { src: '/assets/iconset/icons/4.svg', alt: 'Strategic Vision' },
  { src: '/assets/iconset/icons/5.svg', alt: 'Operational Stability' },
];

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
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
      >
        {values.map((value, index) => {
          return (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group text-center p-7 lg:p-9 rounded-2xl bg-gray-50 border border-transparent hover:border-[#cfe0ff] hover:bg-gradient-to-b hover:from-[#f5f8ff] hover:to-[#ecf3ff] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1F5CFF]/10"
            >
              <div className="w-18 h-18 rounded-2xl bg-white group-hover:bg-[#1F5CFF] flex items-center justify-center mx-auto mb-5 shadow-sm group-hover:shadow-md group-hover:shadow-[#1F5CFF]/25 transition-all duration-300">
                <div className="relative w-14 h-14">
                  <Image
                    src={value.icon.src}
                    alt={value.icon.alt}
                    fill
                    draggable={false}
                    className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
