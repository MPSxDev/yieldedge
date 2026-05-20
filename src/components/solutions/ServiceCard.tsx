'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  serviceKey: string;
  anchorId: string;
  image: string;
  index: number;
  IconComponent: LucideIcon;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

/**
 * ServiceCard - Memoized client component for individual service cards
 * Uses React.memo to prevent unnecessary re-renders when parent updates
 * Uses next-intl for i18n support
 */
const ServiceCard = memo(function ServiceCard({
  serviceKey,
  anchorId,
  image,
  index,
  IconComponent,
}: ServiceCardProps) {
  const t = useTranslations('solutionsPage.services');
  const tCommon = useTranslations('common');

  const title = t(`${serviceKey}.title`);
  const subtitle = t(`${serviceKey}.subtitle`);
  const description = t(`${serviceKey}.description`);
  const features = t.raw(`${serviceKey}.features`) as string[];

  return (
    <motion.div
      id={anchorId}
      variants={fadeInUp}
      className="group relative bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-[#1F5CFF] hover:shadow-lg transition-all duration-300 scroll-mt-32"
    >
      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-[#eff4ff] to-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={85}
          loading={index < 3 ? 'eager' : 'lazy'}
          priority={index < 3}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Icon overlay */}
        <div className="absolute top-6 left-6">
          <div className="w-14 h-14 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
            <IconComponent className="w-7 h-7 text-[#1F5CFF]" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 leading-tight">
          {title}
        </h3>
        {subtitle && (
          <p className="text-[#1F5CFF] font-medium mb-4 text-sm">
            {subtitle}
          </p>
        )}
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-3 mb-6">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start text-gray-700 text-sm"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#1F5CFF] mr-3 mt-1.5 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <a
          href="mailto:contacto@yieldge.com"
          className="inline-flex items-center gap-2 text-[#1F5CFF] font-semibold hover:gap-3 transition-all"
        >
          {tCommon('learnMore')}
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </motion.div>
  );
});

export default ServiceCard;
