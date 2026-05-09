'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { homepageContent } from '@/lib/content';
import { iconMap } from '@/lib/iconMap';

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

// Map service titles to anchor IDs
const serviceAnchors: Record<string, string> = {
  'QA & Test Automation': 'qa-automation',
  'Security Services': 'security',
  'Technology Consulting': 'consulting',
  'Mobile & Web Apps': 'mobile-web',
  'Staff Augmentation': 'staff-augmentation',
  'Analytics and Insights': 'analytics',
  'Cloud Solutions': 'cloud',
  'Offshore Development': 'offshore',
  'Tailored Software': 'tailored-software',
};

interface SolutionsPageContentProps {
  verticalName?: string;
}

export default function SolutionsPageContent({ verticalName }: SolutionsPageContentProps) {
  const t = useTranslations('services');
  const tCommon = useTranslations('common');
  const content = homepageContent.services;

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#eff4ff] via-white to-white">
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.span
              variants={fadeInUp}
              className="block text-gray-500 font-medium text-xs uppercase tracking-[0.2em] mb-6 sm:mb-8"
            >
              {t('sectionLabel')}
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-gray-900 mb-6"
            >
              {verticalName ? (
                <>
                  {t('title')}{' '}
                  <span className="text-[#1F5CFF]">{verticalName}</span>
                </>
              ) : (
                <>
                  {t('title')}{' '}
                  <span className="text-[#1F5CFF]">{t('titleHighlight')}</span>
                </>
              )}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl"
            >
              {content.description}
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <Container>
          <div className="flex flex-wrap gap-3 justify-center">
            {content.services.map((service, index) => {
              const anchorId = serviceAnchors[service.title] || `service-${index}`;
              return (
                <a
                  key={index}
                  href={`#${anchorId}`}
                  className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-600 hover:text-[#1F5CFF] hover:bg-[#eff4ff] border border-gray-200 hover:border-[#dbe6ff] transition-all"
                >
                  {service.title}
                </a>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <Section background="white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {content.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || iconMap.Globe;
            const anchorId = serviceAnchors[service.title] || `service-${index}`;

            return (
              <motion.div
                key={index}
                id={anchorId}
                variants={fadeInUp}
                className="group relative bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-[#1F5CFF] hover:shadow-lg transition-all duration-300 scroll-mt-32"
              >
                {/* Image */}
                <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-[#eff4ff] to-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={90}
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1.5 text-xs font-bold rounded-full bg-[#1F5CFF] text-white">
                        {service.badge}
                      </span>
                    </div>
                  )}

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
                    {service.title}
                  </h3>
                  {service.subtitle && (
                    <p className="text-[#1F5CFF] font-medium mb-4 text-sm">
                      {service.subtitle}
                    </p>
                  )}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
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
                    href="https://wa.me/50670724236?text=Hola%2C%20me%20interesa%20agendar%20una%20conversaci%C3%B3n"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#1F5CFF] font-semibold hover:gap-3 transition-all"
                  >
                    {tCommon('learnMore')}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>
    </>
  );
}
