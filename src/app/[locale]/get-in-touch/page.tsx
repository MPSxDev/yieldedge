import type { Metadata } from 'next';
import { generatePageMetadata, pageMetadata } from '@/lib/seo';
import GetInTouchPageClient from './GetInTouchPageClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata({
    locale,
    ...pageMetadata.getInTouch,
    path: '/get-in-touch',
  });
}

export default function GetInTouchPage() {
  return <GetInTouchPageClient />;
}
