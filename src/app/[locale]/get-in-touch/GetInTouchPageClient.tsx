'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

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

export default function GetInTouchPageClient() {
  const t = useTranslations('contact');
  const tFooter = useTranslations('footer');

  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-[#1F5CFF] focus:text-white focus:rounded-full focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>
      <Navbar />
      <StickyCTA />

      <main id="main-content">
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
                className="block text-gray-500 font-medium text-xs uppercase tracking-[0.2em] mb-4 sm:mb-5"
              >
                {t('contactUs')}
              </motion.span>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-gray-900 mb-6"
              >
                {t('startConversation')}
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl"
              >
                {t('readyToTransform')}
              </motion.p>
            </motion.div>
          </Container>
        </section>

        {/* Contact Section */}
        <Section background="white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12"
          >
            {/* Schedule a Call */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                {t('scheduleCall')}
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {t('consultationDescription')}
              </p>
              <a
                href="mailto:contacto@yieldge.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#1F5CFF] text-white text-lg font-semibold rounded-full hover:bg-[#1a4edb] transition-all duration-300 shadow-lg"
              >
                {t('contactUs')}
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                {t('contactInfo')}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{tFooter('email')}</h3>
                    <a href="mailto:contacto@yieldge.com" className="text-[#1F5CFF] hover:underline">
                      contacto@yieldge.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{tFooter('phone')}</h3>
                    <p className="text-gray-600">{t('availableUponRequest')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{tFooter('location')}</h3>
                    <p className="text-gray-600">{t('remoteFirst')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
