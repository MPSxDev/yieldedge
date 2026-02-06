'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';

export default function PrivacyPolicyPage() {
  const t = useTranslations('privacyPolicy');

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

          {/* Information We Collect */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t('sections.informationCollect.title')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('sections.informationCollect.description')}
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>{t('sections.informationCollect.items.contact')}</li>
              <li>{t('sections.informationCollect.items.usage')}</li>
              <li>{t('sections.informationCollect.items.technical')}</li>
              <li>{t('sections.informationCollect.items.cookies')}</li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t('sections.howWeUse.title')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('sections.howWeUse.description')}
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>{t('sections.howWeUse.items.services')}</li>
              <li>{t('sections.howWeUse.items.communication')}</li>
              <li>{t('sections.howWeUse.items.improvement')}</li>
              <li>{t('sections.howWeUse.items.legal')}</li>
            </ul>
          </section>

          {/* Data Protection */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t('sections.dataProtection.title')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('sections.dataProtection.description')}
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t('sections.yourRights.title')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('sections.yourRights.description')}
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>{t('sections.yourRights.items.access')}</li>
              <li>{t('sections.yourRights.items.rectification')}</li>
              <li>{t('sections.yourRights.items.deletion')}</li>
              <li>{t('sections.yourRights.items.objection')}</li>
            </ul>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t('sections.cookies.title')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('sections.cookies.description')}
            </p>
          </section>

          {/* Third Party Services */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t('sections.thirdParty.title')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('sections.thirdParty.description')}
            </p>
          </section>

          {/* Changes to Policy */}
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
