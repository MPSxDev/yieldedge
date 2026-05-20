'use client';

import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';

// Service keys that map to translation keys and anchor IDs
const SERVICE_KEYS = [
  { key: 'qaAutomation', anchorId: 'qa-automation' },
  { key: 'security', anchorId: 'security' },
  { key: 'consulting', anchorId: 'consulting' },
  { key: 'mobileWeb', anchorId: 'mobile-web' },
  { key: 'staffAugmentation', anchorId: 'staff-augmentation' },
  { key: 'analytics', anchorId: 'analytics' },
  { key: 'cloud', anchorId: 'cloud' },
  { key: 'offshore', anchorId: 'offshore' },
  { key: 'tailoredSoftware', anchorId: 'tailored-software' },
];

/**
 * QuickNavigation - Navigation section for the solutions page
 * Uses next-intl for i18n support
 */
export default function QuickNavigation() {
  const t = useTranslations('solutionsPage.services');

  return (
    <section className="py-8 bg-gray-50 border-y border-gray-200">
      <Container>
        <div className="flex flex-wrap gap-3 justify-center">
          {SERVICE_KEYS.map((service) => (
            <a
              key={service.key}
              href={`#${service.anchorId}`}
              className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-600 hover:text-[#1F5CFF] hover:bg-[#eff4ff] border border-gray-200 hover:border-[#dbe6ff] transition-all"
            >
              {t(`${service.key}.title`)}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
