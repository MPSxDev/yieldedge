import type { Metadata } from 'next';
import { generatePageMetadata, pageMetadata } from '@/lib/seo';
import PrivacyPolicyPageClient from './PrivacyPolicyPageClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata({
    locale,
    ...pageMetadata.privacyPolicy,
    path: '/privacy-policy',
  });
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyPageClient />;
}
