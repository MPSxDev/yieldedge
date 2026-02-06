import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CompanyPageContent from '@/components/CompanyPageContent';

export const metadata: Metadata = {
  title: 'Sobre Nosotros - Costa Rica',
  description: 'Conoce a Yieldge y nuestra división dedicada a Costa Rica. Ayudamos a empresas a prosperar con tecnología.',
};

export default function CRCompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CompanyPageContent verticalName="Costa Rica" />
      <Footer />
    </div>
  );
}
