import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CRCareersPageContent from '@/components/CRCareersPageContent';

export const metadata: Metadata = {
  title: 'Trabajá Con Nosotros | Carreras en Yieldge Costa Rica',
  description: 'Únete a nuestro equipo en Costa Rica. Buscamos personas que quieran crecer, aprender y aportar valor real a negocios. Trabajo remoto y horarios flexibles.',
  keywords: 'empleo Costa Rica, trabajo remoto Costa Rica, carreras tecnología, empleo diseño web, trabajo marketing digital',
  openGraph: {
    title: 'Trabajá Con Nosotros | Yieldge Costa Rica',
    description: 'Únete a nuestro equipo. Trabajo remoto, horarios flexibles y crecimiento profesional.',
    type: 'website',
  },
  alternates: {
    canonical: '/cr/careers',
  },
};

export default function CRCareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CRCareersPageContent />
      <Footer description="Yieldge Costa Rica y Latam: Tu aliado en soluciones digitales para PYMEs. Sitios web profesionales, SEO local y marketing digital que generan resultados." />
    </div>
  );
}
