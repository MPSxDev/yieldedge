import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CRCompanyPageContent from '@/components/CRCompanyPageContent';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yieldge.com';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | Yieldge Costa Rica - Tu Aliado Digital',
  description: 'Somos tu aliado digital en Costa Rica. Ayudamos a PYMEs a verse profesionales online y atraer más clientes. Sin complicaciones técnicas, con resultados reales.',
  keywords: 'diseño web Costa Rica, páginas web San José, agencia digital Costa Rica, desarrollo web pymes, marketing digital Costa Rica, empresa diseño web, equipo desarrollo web',
  openGraph: {
    title: 'Sobre Nosotros | Yieldge Costa Rica - Tu Aliado Digital',
    description: 'Tu aliado digital en Costa Rica. Ayudamos a PYMEs a atraer más clientes y vender más. Conocé nuestro equipo.',
    type: 'website',
    locale: 'es_CR',
    url: `${siteUrl}/cr/company`,
    siteName: 'Yieldge Costa Rica',
    images: [
      {
        url: `${siteUrl}/assets/featured.jpg`,
        width: 1200,
        height: 630,
        alt: 'Sobre Yieldge Costa Rica - Equipo de Desarrollo Web',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre Nosotros | Yieldge Costa Rica',
    description: 'Tu aliado digital en Costa Rica. Ayudamos a PYMEs a atraer más clientes.',
    images: [`${siteUrl}/assets/featured.jpg`],
  },
  alternates: {
    canonical: `${siteUrl}/cr/company`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CRCompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CRCompanyPageContent />
      <Footer description="Yieldge Costa Rica y Latam: Tu aliado en soluciones digitales para PYMEs. Sitios web profesionales, SEO local y marketing digital que generan resultados." />
    </div>
  );
}
