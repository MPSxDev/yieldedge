import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CRCompanyPageContent from '@/components/CRCompanyPageContent';

export const metadata: Metadata = {
  title: 'Misión | Yieldge Costa Rica - Tecnología que transforma vidas',
  description: 'La innovación tiene sentido cuando mejora la vida de las personas. Una parte de nuestras ganancias se destina a apoyar iniciativas que ayudan a niños en situación vulnerable.',
  keywords: 'misión yieldge, responsabilidad social Costa Rica, tecnología para niños, donaciones Costa Rica, impacto social',
  openGraph: {
    title: 'Misión | Yieldge Costa Rica',
    description: 'Tecnología que transforma vidas. La innovación tiene sentido cuando mejora la vida de las personas.',
    type: 'website',
  },
  alternates: {
    canonical: '/cr/mision',
  },
};

export default function CRMisionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CRCompanyPageContent />
      <Footer description="Yieldge Costa Rica y Latam: Tu aliado en soluciones digitales para PYMEs. Sitios web profesionales, SEO local y marketing digital que generan resultados." />
    </div>
  );
}
