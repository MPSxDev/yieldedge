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

const platforms = [
  { name: 'AWS', src: '/assets/services/aws.png' },
  { name: 'Microsoft Azure', src: '/assets/services/azure.png' },
  { name: 'Google Cloud', src: '/assets/services/googlecloud.webp' },
  { name: 'OpenAI', src: '/assets/services/openai.jpeg' },
  { name: 'Salesforce', src: '/assets/services/salesforce.jpg' },
  { name: 'Cloudflare', src: '/assets/services/cloudflare.jpg' },
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
      className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#1F5CFF]/30 hover:shadow-xl hover:shadow-[#1F5CFF]/5 transition-all duration-300"
    >
      {/* Service image */}
      <div className="relative w-full h-32 sm:h-36 mb-6">
        <div className="absolute inset-0">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            draggable={false}
            className="object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
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
          className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 items-center justify-items-center max-w-6xl mx-auto"
        >
          {platforms.map((platform) => (
            <motion.div
              key={platform.name}
              variants={fadeInUp}
              className="group relative w-full max-w-[170px] aspect-square bg-white rounded-xl p-2 border border-gray-100 hover:border-[#1F5CFF]/30 hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              <Image
                src={platform.src}
                alt={platform.name}
                fill
                draggable={false}
                className="object-contain p-2 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}
