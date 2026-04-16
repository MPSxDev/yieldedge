import type { Metadata } from 'next';
import { generatePageMetadata, pageMetadata } from '@/lib/seo';
import CareersPageClient from './CareersPageClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata({
    locale,
    ...pageMetadata.careers,
    path: '/careers',
  });
}

export default function CareersPage() {
  return <CareersPageClient />;
}
