'use client';

import { ArrowUp } from 'lucide-react';
import { useTranslations } from 'next-intl';

/**
 * FooterBackToTop - Client component for the back to top button
 * Extracted to keep the main Footer as lightweight as possible
 */
export default function FooterBackToTop() {
  const t = useTranslations('footer');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="p-2 rounded-lg bg-white border border-gray-200 hover:border-gray-400 text-gray-500 hover:text-gray-700 transition-colors duration-200"
      aria-label={t('backToTop')}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
