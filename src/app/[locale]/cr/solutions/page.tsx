import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CRSolutionsPageContent from '@/components/CRSolutionsPageContent';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yieldge.com';

export const metadata: Metadata = {
  title: 'Soluciones Digitales para PYMEs | Yieldge Costa Rica',
  description: 'Sitios web profesionales, SEO local, WhatsApp Business y más para negocios en Costa Rica. Atraé más clientes y vendé más. Diseño web desde ₡350,000.',
  keywords: 'diseño web Costa Rica, páginas web para pymes, SEO local Costa Rica, sitios web San José, WhatsApp Business Costa Rica, marketing digital pymes, desarrollo web profesional, tiendas online Costa Rica, e-commerce, optimización web',
  openGraph: {
    title: 'Soluciones Digitales para PYMEs | Yieldge Costa Rica',
    description: 'Sitios web profesionales y soluciones digitales para negocios en Costa Rica. Sin complicaciones técnicas. Desde ₡350,000.',
    type: 'website',
    locale: 'es_CR',
    url: `${siteUrl}/cr/solutions`,
    siteName: 'Yieldge Costa Rica',
    images: [
      {
        url: `${siteUrl}/assets/featured.jpg`,
        width: 1200,
        height: 630,
        alt: 'Soluciones Digitales para PYMEs en Costa Rica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soluciones Digitales para PYMEs | Yieldge Costa Rica',
    description: 'Sitios web profesionales y soluciones digitales para negocios en Costa Rica.',
    images: [`${siteUrl}/assets/featured.jpg`],
  },
  alternates: {
    canonical: `${siteUrl}/cr/solutions`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CRSolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CRSolutionsPageContent />
      <Footer description="Yieldge Costa Rica y Latam: Tu aliado en soluciones digitales para PYMEs. Sitios web profesionales, SEO local y marketing digital que generan resultados." />
    </div>
  );
}
