import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CareersPageContent from '@/components/CareersPageContent';

export const metadata: Metadata = {
  title: 'Carreras Costa Rica',
  description: 'Únete al equipo de Yieldge en Costa Rica. Explora oportunidades de carrera en soluciones tecnológicas.',
};

export default function CRCareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CareersPageContent verticalName="Costa Rica" />
      <Footer />
    </div>
  );
}
