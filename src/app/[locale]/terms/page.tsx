'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';

export default function TermsPage() {
  const t = useTranslations('terms');

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
          {t('title')}
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          {t('lastUpdated')}
        </p>

        <div className="prose prose-gray max-w-none">
          {/* Introduction */}
          <section className="mb-8">
            <p className="text-gray-600 leading-relaxed">
              {t('introduction')}
            </p>
          </section>

          {/* Acceptance of Terms */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t('sections.acceptance.title')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('sections.acceptance.description')}
            </p>
          </section>

          {/* Services */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t('sections.services.title')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('sections.services.description')}
            </p>
          </section>

          {/* User Obligations */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
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
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t('sections.intellectualProperty.title')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('sections.intellectualProperty.description')}
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t('sections.liability.title')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('sections.liability.description')}
            </p>
          </section>

          {/* Indemnification */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t('sections.indemnification.title')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('sections.indemnification.description')}
            </p>
          </section>

          {/* Termination */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t('sections.termination.title')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('sections.termination.description')}
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t('sections.governingLaw.title')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('sections.governingLaw.description')}
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t('sections.changes.title')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('sections.changes.description')}
            </p>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
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
      </main>
      <Footer />
    </div>
  );
}
