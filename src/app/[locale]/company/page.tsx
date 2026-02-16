import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CompanyPageContent from '@/components/CompanyPageContent';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yieldge.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const isEnglish = locale === 'en';

  return {
    title: isEnglish
      ? 'About Us - 15+ Years of Technology Excellence | Yieldge'
      : 'Sobre Nosotros - Más de 15 Años de Excelencia Tecnológica | Yieldge',
    description: isEnglish
      ? 'Learn about Yieldge, your trusted technology partner with 15+ years of experience in digital transformation, offshore development, and innovative technology solutions across the Americas.'
      : 'Conocé Yieldge, tu socio tecnológico de confianza con más de 15 años de experiencia en transformación digital, desarrollo offshore y soluciones tecnológicas innovadoras en las Américas.',
    keywords: isEnglish
      ? 'technology company, software development company, offshore development, digital transformation, technology partner, nearshore development, Yieldge about'
      : 'empresa tecnológica, empresa desarrollo software, desarrollo offshore, transformación digital, socio tecnológico, desarrollo nearshore, sobre Yieldge',
    openGraph: {
      title: isEnglish
        ? 'About Us - 15+ Years of Technology Excellence | Yieldge'
        : 'Sobre Nosotros - Más de 15 Años de Excelencia Tecnológica | Yieldge',
      description: isEnglish
        ? 'Your trusted technology partner with 15+ years of experience in digital transformation and innovative solutions.'
        : 'Tu socio tecnológico de confianza con más de 15 años de experiencia en transformación digital y soluciones innovadoras.',
      type: 'website',
      locale: isEnglish ? 'en_US' : 'es_ES',
      url: `${siteUrl}${isEnglish ? '/en' : ''}/company`,
      siteName: 'Yieldge',
      images: [
        {
          url: `${siteUrl}/assets/featured.jpg`,
          width: 1200,
          height: 630,
          alt: 'Yieldge - Technology that Performs',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isEnglish ? 'About Yieldge - Your Technology Partner' : 'Sobre Yieldge - Tu Socio Tecnológico',
      description: isEnglish
        ? '15+ years of technology excellence and digital transformation.'
        : 'Más de 15 años de excelencia tecnológica y transformación digital.',
      images: [`${siteUrl}/assets/featured.jpg`],
    },
    alternates: {
      canonical: `${siteUrl}${isEnglish ? '/en' : ''}/company`,
      languages: {
        es: `${siteUrl}/company`,
        en: `${siteUrl}/en/company`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CompanyPageContent />
      <Footer />
    </div>
  );
}
