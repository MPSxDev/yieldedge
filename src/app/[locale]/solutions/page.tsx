import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SolutionsPageContent from '@/components/SolutionsPageContent';

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
      ? 'Technology Solutions & Services | Yieldge'
      : 'Soluciones y Servicios Tecnológicos | Yieldge',
    description: isEnglish
      ? 'Comprehensive technology solutions including QA automation, security services, cloud solutions, mobile & web development, and offshore teams. Transform your business with Yieldge.'
      : 'Soluciones tecnológicas integrales incluyendo automatización QA, servicios de seguridad, soluciones en la nube, desarrollo móvil y web, y equipos offshore. Transformá tu negocio con Yieldge.',
    keywords: isEnglish
      ? 'technology solutions, software development, QA automation, cybersecurity, cloud solutions, offshore development, mobile apps, web development, staff augmentation'
      : 'soluciones tecnológicas, desarrollo de software, automatización QA, ciberseguridad, soluciones en la nube, desarrollo offshore, apps móviles, desarrollo web, aumento de personal',
    openGraph: {
      title: isEnglish ? 'Technology Solutions & Services | Yieldge' : 'Soluciones y Servicios Tecnológicos | Yieldge',
      description: isEnglish
        ? 'Comprehensive technology solutions to accelerate your business growth and operational excellence.'
        : 'Soluciones tecnológicas integrales para acelerar el crecimiento de tu negocio y la excelencia operativa.',
      type: 'website',
      locale: isEnglish ? 'en_US' : 'es_ES',
      url: `${siteUrl}${isEnglish ? '/en' : ''}/solutions`,
      siteName: 'Yieldge',
      images: [
        {
          url: `${siteUrl}/assets/featured.jpg`,
          width: 1200,
          height: 630,
          alt: 'Yieldge Technology Solutions',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isEnglish ? 'Technology Solutions & Services | Yieldge' : 'Soluciones y Servicios Tecnológicos | Yieldge',
      description: isEnglish
        ? 'Transform your business with our comprehensive technology solutions.'
        : 'Transformá tu negocio con nuestras soluciones tecnológicas integrales.',
      images: [`${siteUrl}/assets/featured.jpg`],
    },
    alternates: {
      canonical: `${siteUrl}${isEnglish ? '/en' : ''}/solutions`,
      languages: {
        es: `${siteUrl}/solutions`,
        en: `${siteUrl}/en/solutions`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SolutionsPageContent />
      <Footer />
    </div>
  );
}
