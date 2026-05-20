'use client';

import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { iconMap } from '@/lib/iconMap';
import { homepageContent } from '@/lib/content';

// Service keys mapping to translation keys and anchor IDs
const SERVICE_KEYS = [
  { key: 'qaAutomation', anchorId: 'qa-automation' },
  { key: 'security', anchorId: 'security' },
  { key: 'consulting', anchorId: 'consulting' },
  { key: 'mobileWeb', anchorId: 'mobile-web' },
  { key: 'staffAugmentation', anchorId: 'staff-augmentation' },
  { key: 'analytics', anchorId: 'analytics' },
  { key: 'cloud', anchorId: 'cloud' },
  { key: 'offshore', anchorId: 'offshore' },
  { key: 'tailoredSoftware', anchorId: 'tailored-software' },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

/**
 * ServicesGrid - Memoized grid component for services
 * Renders the animated grid with staggered children
 * Uses next-intl for i18n support and homepageContent for images/icons
 */
const ServicesGrid = memo(function ServicesGrid() {
  const services = homepageContent.services.services;

  // Memoize the service cards to prevent recalculation
  const serviceCards = useMemo(() => {
    return SERVICE_KEYS.map((config, index) => {
      const service = services[index];
      const IconComponent = iconMap[service.icon] || iconMap.Globe;

      return (
        <ServiceCard
          key={config.anchorId}
          serviceKey={config.key}
          anchorId={config.anchorId}
          image={service.image}
          index={index}
          IconComponent={IconComponent}
        />
      );
    });
  }, [services]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={staggerContainer}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {serviceCards}
    </motion.div>
  );
});

export default ServicesGrid;
