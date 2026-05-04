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

const serviceIcons = [
  { src: '/assets/iconset/minified/Intelligent-Automation.png', alt: 'Intelligent Automation' },
  { src: '/assets/iconset/minified/Scalable-Infrastructure.png', alt: 'Scalable Infrastructure' },
  { src: '/assets/iconset/minified/Data-Integration-Visibility.png', alt: 'Data Integration & Visibility' },
  { src: '/assets/iconset/minified/Custom-Platforms.png', alt: 'Custom Platforms' },
];


interface ServiceCardProps {
  icon: { src: string; alt: string };
  title: string;
  description: string;
  capabilities: string[];
}

function ServiceCard({ icon: image, title, description, capabilities }: ServiceCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative bg-white rounded-lg p-6 sm:p-8 border border-gray-200 hover:border-gray-400 transition-colors duration-200"
    >
      {/* Service image */}
      <div className="relative w-full h-24 sm:h-32 mb-4 sm:mb-6">
        <div className="absolute inset-0">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            draggable={false}
            className="object-contain object-center"
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
        {description}
      </p>

      {/* Capabilities - Numbered institutional style */}
      <ul className="space-y-2 sm:space-y-2.5">
        {capabilities.map((capability, i) => (
          <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-gray-600">
            <span className="text-gray-400 font-mono text-xs mt-0.5">{String(i + 1).padStart(2, '0')}</span>
            <span>{capability}</span>
          </li>
        ))}
      </ul>

    </motion.div>
  );
}

export default function ServicesNew() {
  const t = useTranslations('homepage.services');

  const services = [
    {
      icon: serviceIcons[0],
      title: t('ai.title'),
      description: t('ai.description'),
      capabilities: [
        t('ai.capabilities.automation'),
        t('ai.capabilities.workflows'),
        t('ai.capabilities.roi'),
        t('ai.capabilities.overhead'),
      ],
    },
    {
      icon: serviceIcons[1],
      title: t('cloud.title'),
      description: t('cloud.description'),
      capabilities: [
        t('cloud.capabilities.architecture'),
        t('cloud.capabilities.migration'),
        t('cloud.capabilities.devops'),
        t('cloud.capabilities.iac'),
      ],
    },
    {
      icon: serviceIcons[2],
      title: t('data.title'),
      description: t('data.description'),
      capabilities: [
        t('data.capabilities.analytics'),
        t('data.capabilities.bi'),
        t('data.capabilities.pipelines'),
        t('data.capabilities.decisions'),
      ],
    },
    {
      icon: serviceIcons[3],
      title: t('platforms.title'),
      description: t('platforms.description'),
      capabilities: [
        t('platforms.capabilities.apps'),
        t('platforms.capabilities.api'),
        t('platforms.capabilities.modernization'),
        t('platforms.capabilities.performance'),
      ],
    },
  ];

  return (
    <Section background="gray" id="services">
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
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            capabilities={service.capabilities}
          />
        ))}
      </motion.div>

    </Section>
  );
}
