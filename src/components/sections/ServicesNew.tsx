'use client';

import { motion } from 'framer-motion';
import { Brain, Cloud, Database, Code2 } from 'lucide-react';
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

const serviceIcons = [Brain, Cloud, Database, Code2];

const platforms = [
  { name: 'AWS', src: '/assets/services/aws.jpg' },
  { name: 'Microsoft Azure', src: '/assets/services/microsoftazure.webp' },
  { name: 'Google Cloud', src: '/assets/services/googlecloud.webp' },
  { name: 'OpenAI', src: '/assets/services/openai.jpeg' },
  { name: 'Salesforce', src: '/assets/services/salesforce.jpg' },
  { name: 'Cloudflare', src: '/assets/services/cloudflare.jpg' },
];

interface ServiceCardProps {
  icon: typeof Brain;
  title: string;
  description: string;
  capabilities: string[];
  index: number;
}

function ServiceCard({ icon: Icon, title, description, capabilities, index }: ServiceCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#1F5CFF]/30 hover:shadow-xl hover:shadow-[#1F5CFF]/5 transition-all duration-300"
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-[#eff4ff] group-hover:bg-[#1F5CFF] flex items-center justify-center mb-6 transition-colors duration-300">
        <Icon className="w-7 h-7 text-[#1F5CFF] group-hover:text-white transition-colors duration-300" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Capabilities */}
      <ul className="space-y-2">
        {capabilities.map((capability, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1F5CFF]" />
            {capability}
          </li>
        ))}
      </ul>

      {/* Subtle index number */}
      <span className="absolute top-6 right-6 text-6xl font-bold text-gray-100 group-hover:text-[#eff4ff] transition-colors pointer-events-none">
        {String(index + 1).padStart(2, '0')}
      </span>
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
        className="grid md:grid-cols-2 gap-6 lg:gap-8"
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            capabilities={service.capabilities}
            index={index}
          />
        ))}
      </motion.div>

      {/* Implementations / Platforms Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20"
      >
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-[#1F5CFF] tracking-wider uppercase mb-3 block">
            {t('implementations.eyebrow')}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            {t('implementations.title')}
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('implementations.subtitle')}
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-items-center max-w-5xl mx-auto"
        >
          {platforms.map((platform) => (
            <motion.div
              key={platform.name}
              variants={fadeInUp}
              className="group relative w-full aspect-square bg-white rounded-xl p-2 border border-gray-100 hover:border-[#1F5CFF]/30 hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              <Image
                src={platform.src}
                alt={platform.name}
                fill
                className="object-contain p-2 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}
