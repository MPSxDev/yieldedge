import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CRCompanyPageContent from '@/components/CRCompanyPageContent';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | Yieldge Costa Rica - Tu Aliado Digital',
  description: 'Somos tu aliado digital en Costa Rica. Ayudamos a PYMEs a verse profesionales online y atraer más clientes. Sin complicaciones técnicas, con resultados reales.',
  keywords: 'diseño web Costa Rica, páginas web San José, agencia digital Costa Rica, desarrollo web pymes, marketing digital Costa Rica',
  openGraph: {
    title: 'Sobre Nosotros | Yieldge Costa Rica',
    description: 'Tu aliado digital en Costa Rica. Ayudamos a PYMEs a atraer más clientes y vender más.',
    type: 'website',
  },
  alternates: {
    canonical: '/cr/company',
  },
};

export default function CRCompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CRCompanyPageContent />
      <Footer />
    </div>
  );
}
