'use client';

import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Shield } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const valueIcons = [Target, Lightbulb, Users, Shield];
const valueKeys = ['results', 'innovation', 'collaboration', 'quality'] as const;

export default function Vision() {
  const t = useTranslations('vision');
  return (
    <section
      id="sobre-nosotros"
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden py-24 sm:py-32 lg:py-40"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#eff4ff]/30 via-white to-white pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#1F5CFF]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Decorative background images - do not affect layout flow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 0.12, y: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute top-10 right-20 w-72 h-72 rounded-3xl overflow-hidden hidden xl:block"
        >
          <Image src="/assets/img13.jpg" alt={t('title')} fill className="object-cover" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 0.12, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-20 left-20 w-64 h-64 rounded-3xl overflow-hidden hidden xl:block"
        >
          <Image src="/assets/img1.jpg" alt={t('values.innovation.title')} fill className="object-cover" />
        </motion.div>
      </div>

      {/* Main container - perfectly centered with symmetrical padding */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
      >
        {/* Section header - BIGGER */}
        <div className="max-w-5xl mx-auto text-center mb-20 sm:mb-24">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-gray-900 mb-8 sm:mb-10 leading-[1.1]"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl md:text-3xl font-light text-gray-600 leading-relaxed"
          >
            {t('description')}
          </motion.p>
        </div>

        {/* Values grid - Uniform cards, centered content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-20 sm:mb-24">
          {valueKeys.map((key, index) => {
            const IconComponent = valueIcons[index];
            return (
              <motion.div
                key={key}
                variants={fadeInUp}
                className="group relative"
              >
                <div className="bg-white rounded-3xl p-10 sm:p-12 border border-gray-100 hover:border-[#dbe6ff] transition-all duration-300 hover:shadow-xl hover:shadow-[#1F5CFF]/5 h-full flex flex-col items-center text-center">
                  {/* Icon - Centered and uniform */}
                  <div className="mb-8">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-[#eff4ff] group-hover:bg-[#dbe6ff] flex items-center justify-center transition-colors">
                      <IconComponent className="w-8 h-8 sm:w-9 sm:h-9 text-[#1F5CFF]" />
                    </div>
                  </div>

                  {/* Content - Centered */}
                  <h3 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-5">
                    {t(`values.${key}.title`)}
                  </h3>
                  <p className="text-lg sm:text-xl font-light text-gray-600 leading-relaxed max-w-md">
                    {t(`values.${key}.description`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA - Centered */}
        <motion.div
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-gray-600 mb-8 text-xl sm:text-2xl font-light">
            {t('cta')}
          </p>
          <motion.a
            href="https://calendly.com/anwar-softwaredev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-10 py-5 bg-[#1F5CFF] text-white text-lg sm:text-xl font-semibold rounded-full hover:bg-[#1a4edb] transition-all duration-300 shadow-lg shadow-[#1F5CFF]/25 hover:shadow-2xl hover:shadow-[#1F5CFF]/40"
          >
            {t('ctaButton')}
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
