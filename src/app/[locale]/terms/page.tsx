import type { Metadata } from 'next';
import { generatePageMetadata, pageMetadata } from '@/lib/seo';
import TermsPageClient from './TermsPageClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata({
    locale,
    ...pageMetadata.terms,
    path: '/terms',
  });
}

export default function TermsPage() {
  return <TermsPageClient />;
}
