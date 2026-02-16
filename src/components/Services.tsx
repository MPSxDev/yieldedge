'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import { ServicesContent, homepageContent } from '@/lib/content';
import { iconMap } from '@/lib/iconMap';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

interface ServicesProps {
  content?: ServicesContent;
  useContentDirectly?: boolean;
}

export default function Services({ content = homepageContent.services, useContentDirectly = false }: ServicesProps) {
  const t = useTranslations('services');
  const tCommon = useTranslations('common');

  // Service keys for translations - order matches content.services
  const serviceKeys = [
    'qaAutomation',
    'security',
    'consulting',
    'mobileWeb',
    'staffAugmentation',
    'analytics',
    'cloud',
    'offshore',
    'tailoredSoftware',
  ] as const;

  return (
    <section
      id="servicios"
      className="relative w-full bg-white overflow-hidden"
    >
      {/* Background decoration - properly contained */}
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#dbe6ff]/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Main container - perfectly centered with equal horizontal padding */}
      <Container className="relative z-10 pt-16 pb-16 sm:pt-24 sm:pb-24 lg:pt-32 lg:pb-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: '0px 0px -100px 0px' }}
        >
          {/* Section Header */}
          <div className="max-w-3xl mb-10 sm:mb-16">
            <motion.p
              variants={fadeInUp}
              className="text-[#1F5CFF] font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wide"
            >
              {useContentDirectly && content.sectionLabel ? content.sectionLabel : t('sectionLabel')}
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6"
            >
              {useContentDirectly && content.title ? content.title : t('title')}{' '}
              <span className="text-[#1F5CFF]">{useContentDirectly && content.titleHighlight ? content.titleHighlight : t('titleHighlight')}</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed"
            >
              {useContentDirectly && content.description ? content.description : t('description')}
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {useContentDirectly ? (
              // Use content directly (for CR and other custom pages)
              content.services.map((service, index) => {
                const IconComponent = iconMap[service.icon] || iconMap.Globe;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200 hover:border-[#1F5CFF] hover:shadow-2xl transition-all duration-500"
                  >
                    {/* Image */}
                    <div className="relative w-full h-48 sm:h-56 lg:h-64 overflow-hidden bg-gradient-to-br from-[#eff4ff] to-gray-100">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={90}
                        loading="lazy"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                      {/* Badge */}
                      {service.badge && (
                        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                          <span className={`px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs font-bold rounded-full ${
                            service.badge === 'MOST POPULAR'
                              ? 'bg-orange-500 text-white'
                              : 'bg-teal-500 text-white'
                          }`}>
                            {service.badge}
                          </span>
                        </div>
                      )}

                      {/* Icon overlay */}
                      <div className="absolute top-3 right-3 sm:top-6 sm:left-6 sm:right-auto">
                        <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <IconComponent className="w-5 h-5 sm:w-7 sm:h-7 text-[#1F5CFF]" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6 lg:p-8">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1.5 sm:mb-2">
                        {service.title}
                      </h3>
                      {service.subtitle && (
                        <p className="text-[#1F5CFF] font-medium mb-3 sm:mb-4 text-xs sm:text-sm">
                          {service.subtitle}
                        </p>
                      )}
                      <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700 text-xs sm:text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#1F5CFF] mr-2 sm:mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <motion.a
                        href="https://calendly.com/anwar-softwaredev"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 4 }}
                        className="inline-flex items-center gap-2 text-[#1F5CFF] font-semibold hover:gap-3 transition-all text-sm sm:text-base"
                      >
                        {tCommon('learnMore')}
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.a>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              // Use translations (default behavior)
              serviceKeys.map((key, index) => {
                const service = content.services[index];
                if (!service) return null;
                const IconComponent = iconMap[service.icon] || iconMap.Globe;
                const features = t.raw(`${key}.features`) as string[];
                return (
                  <motion.div
                    key={key}
                    variants={fadeInUp}
                    className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200 hover:border-[#1F5CFF] hover:shadow-2xl transition-all duration-500"
                  >
                    {/* Image */}
                    <div className="relative w-full h-48 sm:h-56 lg:h-64 overflow-hidden bg-gradient-to-br from-[#eff4ff] to-gray-100">
                      <Image
                        src={service.image}
                        alt={t(`${key}.title`)}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={90}
                        loading="lazy"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                      {/* Badge */}
                      {service.badge && (
                        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                          <span className={`px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs font-bold rounded-full ${
                            service.badge === 'MOST POPULAR'
                              ? 'bg-orange-500 text-white'
                              : 'bg-teal-500 text-white'
                          }`}>
                            {service.badge}
                          </span>
                        </div>
                      )}

                      {/* Icon overlay */}
                      <div className="absolute top-3 right-3 sm:top-6 sm:left-6 sm:right-auto">
                        <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <IconComponent className="w-5 h-5 sm:w-7 sm:h-7 text-[#1F5CFF]" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6 lg:p-8">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1.5 sm:mb-2">
                        {t(`${key}.title`)}
                      </h3>
                      <p className="text-[#1F5CFF] font-medium mb-3 sm:mb-4 text-xs sm:text-sm">
                        {t(`${key}.subtitle`)}
                      </p>
                      <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                        {t(`${key}.description`)}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                        {features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700 text-xs sm:text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#1F5CFF] mr-2 sm:mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <motion.a
                        href="https://calendly.com/anwar-softwaredev"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 4 }}
                        className="inline-flex items-center gap-2 text-[#1F5CFF] font-semibold hover:gap-3 transition-all text-sm sm:text-base"
                      >
                        {tCommon('learnMore')}
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.a>
                    </div>
                  </motion.div>
                );
              })
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
