'use client';

import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { iconMap } from '@/lib/iconMap';

// Service configuration with icons and images
const SERVICE_CONFIG = [
  {
    key: 'qaAutomation',
    icon: 'Shield',
    image: '/assets/tech/christopher-gower-m_HRfLhgABo-unsplash.jpg',
    anchorId: 'qa-automation',
  },
  {
    key: 'security',
    icon: 'Shield',
    image: '/assets/tech/ilya-pavlov-OqtafYT5kTw-unsplash.jpg',
    anchorId: 'security',
  },
  {
    key: 'consulting',
    icon: 'Target',
    image: '/assets/tech/headway-5QgIuuBxKwM-unsplash.jpg',
    anchorId: 'consulting',
  },
  {
    key: 'mobileWeb',
    icon: 'Globe',
    image: '/assets/tech/ilya-pavlov-OqtafYT5kTw-unsplash.jpg',
    anchorId: 'mobile-web',
  },
  {
    key: 'staffAugmentation',
    icon: 'Users',
    image: '/assets/tech/staffAugmentation.jpg',
    anchorId: 'staff-augmentation',
  },
  {
    key: 'analytics',
    icon: 'TrendingUp',
    image: '/assets/tech/analitics-3.webp',
    anchorId: 'analytics',
  },
  {
    key: 'cloud',
    icon: 'Globe',
    image: '/assets/tech/AI-In-Cloud-Computing-Is-Bringing-Efficiency-And-Scalability.webp',
    anchorId: 'cloud',
  },
  {
    key: 'offshore',
    icon: 'Globe',
    image: '/assets/tech/neon-wang-ZvY2q0XB5iQ-unsplash.jpg',
    anchorId: 'offshore',
  },
  {
    key: 'tailoredSoftware',
    icon: 'FileCode',
    image: '/assets/tech/alexandre-debieve-FO7JIlwjOtU-unsplash.jpg',
    anchorId: 'tailored-software',
  },
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
 * Uses next-intl for i18n support
 */
const ServicesGrid = memo(function ServicesGrid() {
  // Memoize the service cards to prevent recalculation
  const serviceCards = useMemo(() => {
    return SERVICE_CONFIG.map((service, index) => {
      const IconComponent = iconMap[service.icon] || iconMap.Globe;

      return (
        <ServiceCard
          key={service.anchorId}
          serviceKey={service.key}
          anchorId={service.anchorId}
          image={service.image}
          index={index}
          IconComponent={IconComponent}
        />
      );
    });
  }, []);

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
