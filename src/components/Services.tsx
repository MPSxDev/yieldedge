'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import { ServicesContent, homepageContent } from '@/lib/content';
import { iconMap } from '@/lib/iconMap';

const fadeInUp = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
  },
};

interface ServicesProps {
  content?: ServicesContent;
  useContentDirectly?: boolean;
}

export default function Services({ content = homepageContent.services, useContentDirectly = false }: ServicesProps) {
  const t = useTranslations('services');

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

  // Check if this is the homepage (default content)
  const isHomepage = content === homepageContent.services && !useContentDirectly;

  // Compact layout for homepage
  if (isHomepage) {
    return (
      <section
        id="servicios"
        className="relative w-full bg-white overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#dbe6ff]/20 rounded-full blur-3xl -z-10 pointer-events-none" />

        <Container className="relative z-10 py-12 lg:py-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Compact Section Header */}
            <div className="max-w-2xl mb-8 lg:mb-10">
              <motion.p
                variants={fadeInUp}
                className="text-[#1F5CFF] font-medium mb-2 text-xs uppercase tracking-wide"
              >
                {t('sectionLabel')}
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-3 leading-tight"
              >
                {t('title')}{' '}
                <span className="text-[#1F5CFF]">{t('titleHighlight')}</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-sm sm:text-base text-gray-600 leading-relaxed"
              >
                {t('description')}
              </motion.p>
            </div>

            {/* Compact 3x3 Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
              {serviceKeys.map((key, index) => {
                const service = content.services[index];
                if (!service) return null;
                const IconComponent = iconMap[service.icon] || iconMap.Globe;
                const features = t.raw(`${key}.features`) as string[];
                // Limit to 3 features for compact view
                const limitedFeatures = features.slice(0, 3);

                return (
                  <motion.div
                    key={key}
                    variants={fadeInUp}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="group bg-white rounded-xl p-4 lg:p-5 border border-gray-100 hover:border-[#1F5CFF]/30 hover:shadow-[0_8px_30px_-12px_rgba(31,92,255,0.25)] transition-all duration-300 cursor-pointer"
                  >
                    {/* Icon + Title Row */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[#eff4ff] group-hover:bg-[#1F5CFF] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                        <IconComponent className="w-5 h-5 text-[#1F5CFF] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#1F5CFF] leading-tight mb-1 transition-colors duration-300">
                          {t(`${key}.title`)}
                        </h3>
                        <p className="text-xs text-gray-500 leading-snug line-clamp-2">
                          {t(`${key}.shortDescription`)}
                        </p>
                      </div>
                    </div>

                    {/* Compact Features */}
                    <ul className="space-y-1.5">
                      {limitedFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-gray-600">
                          <span className="w-1 h-1 rounded-full bg-[#1F5CFF] mr-2 flex-shrink-0" />
                          <span className="truncate">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </Container>
      </section>
    );
  }

  // Original layout for other pages (CR, industry pages, etc.)
  return (
    <section
      id="servicios"
      className="relative w-full bg-white overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#dbe6ff]/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <Container className="relative z-10 pt-16 pb-16 sm:pt-24 sm:pb-24 lg:pt-32 lg:pb-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: '0px 0px -100px 0px' }}
        >
          {/* Section Header */}
          <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
            <motion.p
              variants={fadeInUp}
              className="text-[#1F5CFF] font-medium mb-4 sm:mb-5 text-xs uppercase tracking-wide"
            >
              {useContentDirectly && content.sectionLabel ? content.sectionLabel : t('sectionLabel')}
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-gray-900 mb-5 sm:mb-6 leading-[1.15]"
            >
              {useContentDirectly && content.title ? content.title : t('title')}{' '}
              <span className="text-[#1F5CFF]">{useContentDirectly && content.titleHighlight ? content.titleHighlight : t('titleHighlight')}</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-gray-600 leading-[1.7]"
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
                    className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#1F5CFF] hover:shadow-xl transition-all duration-500"
                  >
                    {/* Image */}
                    <div className="relative w-full h-40 sm:h-48 overflow-hidden bg-gradient-to-br from-[#eff4ff] to-gray-100">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={90}
                        loading="lazy"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                      {/* Badge */}
                      {service.badge && (
                        <div className="absolute top-3 left-3 z-10">
                          <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${
                            service.badge === 'MOST POPULAR'
                              ? 'bg-orange-500 text-white'
                              : 'bg-teal-500 text-white'
                          }`}>
                            {service.badge}
                          </span>
                        </div>
                      )}

                      {/* Icon overlay */}
                      <div className="absolute top-3 right-3">
                        <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <IconComponent className="w-5 h-5 text-[#1F5CFF]" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-2">
                        {service.description}
                      </p>

                      {/* Features - max 4 */}
                      <ul className="space-y-1.5">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700 text-xs">
                            <span className="w-1 h-1 rounded-full bg-[#1F5CFF] mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              // Use translations (for solutions page, etc.)
              serviceKeys.map((key, index) => {
                const service = content.services[index];
                if (!service) return null;
                const IconComponent = iconMap[service.icon] || iconMap.Globe;
                const features = t.raw(`${key}.features`) as string[];
                return (
                  <motion.div
                    key={key}
                    variants={fadeInUp}
                    className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#1F5CFF] hover:shadow-xl transition-all duration-500"
                  >
                    {/* Image */}
                    <div className="relative w-full h-40 sm:h-48 overflow-hidden bg-gradient-to-br from-[#eff4ff] to-gray-100">
                      <Image
                        src={service.image}
                        alt={t(`${key}.title`)}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={90}
                        loading="lazy"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                      {/* Badge */}
                      {service.badge && (
                        <div className="absolute top-3 left-3 z-10">
                          <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${
                            service.badge === 'MOST POPULAR'
                              ? 'bg-orange-500 text-white'
                              : 'bg-teal-500 text-white'
                          }`}>
                            {service.badge}
                          </span>
                        </div>
                      )}

                      {/* Icon overlay */}
                      <div className="absolute top-3 right-3">
                        <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <IconComponent className="w-5 h-5 text-[#1F5CFF]" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight">
                        {t(`${key}.title`)}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-2">
                        {t(`${key}.shortDescription`)}
                      </p>

                      {/* Features - max 4 */}
                      <ul className="space-y-1.5">
                        {features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700 text-xs">
                            <span className="w-1 h-1 rounded-full bg-[#1F5CFF] mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
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
