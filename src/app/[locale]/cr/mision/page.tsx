import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CRCompanyPageContent from '@/components/CRCompanyPageContent';

export const metadata: Metadata = {
  title: 'Propósito | Yieldge Costa Rica - Tecnología con Impacto Real',
  description: 'Creemos que la innovación solo tiene valor cuando genera un cambio tangible. Destinamos parte de nuestros ingresos a iniciativas educativas para niños en Costa Rica.',
  keywords: 'propósito yieldge, responsabilidad social Costa Rica, tecnología con impacto, compromiso social empresarial',
  openGraph: {
    title: 'Propósito | Yieldge Costa Rica',
    description: 'Tecnología con impacto real. Creemos que la innovación solo tiene valor cuando genera un cambio tangible en la vida de las personas.',
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
      <Footer description="Yieldge Costa Rica: Socio estratégico en infraestructura digital. Arquitectura web, sistemas de conversión y posicionamiento orgánico para empresas que buscan crecer de forma estructurada." />
    </div>
  );
}
