'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { useTranslations } from 'next-intl';

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

export default function TermsPageClient() {
  const t = useTranslations('terms');

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
                {t('lastUpdated')}
              </motion.span>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-gray-900 mb-6"
              >
                {t('title')}
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl"
              >
                {t('introduction')}
              </motion.p>
            </motion.div>
          </Container>
        </section>

        {/* Content Section */}
        <Section background="white">
          <div className="max-w-4xl mx-auto prose prose-gray">
            {/* Acceptance of Terms */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                {t('sections.acceptance.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('sections.acceptance.description')}
              </p>
            </section>

            {/* Services */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                {t('sections.services.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('sections.services.description')}
              </p>
            </section>

            {/* User Obligations */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                {t('sections.userObligations.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('sections.userObligations.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>{t('sections.userObligations.items.accurate')}</li>
                <li>{t('sections.userObligations.items.lawful')}</li>
                <li>{t('sections.userObligations.items.noHarm')}</li>
                <li>{t('sections.userObligations.items.confidentiality')}</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                {t('sections.intellectualProperty.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('sections.intellectualProperty.description')}
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                {t('sections.liability.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('sections.liability.description')}
              </p>
            </section>

            {/* Indemnification */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                {t('sections.indemnification.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('sections.indemnification.description')}
              </p>
            </section>

            {/* Termination */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                {t('sections.termination.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('sections.termination.description')}
              </p>
            </section>

            {/* Governing Law */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                {t('sections.governingLaw.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('sections.governingLaw.description')}
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                {t('sections.changes.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('sections.changes.description')}
              </p>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                {t('sections.contact.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('sections.contact.description')}
              </p>
              <p className="text-gray-600 mt-2">
                <a href="mailto:info@yieldge.com" className="text-[#1F5CFF] hover:underline">
                  info@yieldge.com
                </a>
              </p>
            </section>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
