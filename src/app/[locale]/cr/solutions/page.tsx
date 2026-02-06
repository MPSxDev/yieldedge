import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SolutionsPageContent from '@/components/SolutionsPageContent';

export const metadata: Metadata = {
  title: 'Soluciones Costa Rica',
  description: 'Soluciones tecnológicas adaptadas para empresas en Costa Rica. Descubre cómo Yieldge puede transformar tu negocio.',
};

export default function CRSolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SolutionsPageContent verticalName="Costa Rica" />
      <Footer />
    </div>
  );
}
