import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CRSolutionsPageContent from '@/components/CRSolutionsPageContent';

export const metadata: Metadata = {
  title: 'Soluciones Digitales para PYMEs | Yieldge Costa Rica',
  description: 'Sitios web profesionales, SEO local, WhatsApp Business y más para negocios en Costa Rica. Atraé más clientes y vendé más. Diseño web desde ₡350,000.',
  keywords: 'diseño web Costa Rica, páginas web para pymes, SEO local Costa Rica, sitios web San José, WhatsApp Business Costa Rica, marketing digital pymes',
  openGraph: {
    title: 'Soluciones Digitales para PYMEs | Yieldge Costa Rica',
    description: 'Sitios web profesionales y soluciones digitales para negocios en Costa Rica. Sin complicaciones técnicas.',
    type: 'website',
  },
  alternates: {
    canonical: '/cr/solutions',
  },
};

export default function CRSolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CRSolutionsPageContent />
      <Footer />
    </div>
  );
}
