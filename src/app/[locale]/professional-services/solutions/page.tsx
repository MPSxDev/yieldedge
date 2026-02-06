import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SolutionsPageContent from '@/components/SolutionsPageContent';

export const metadata: Metadata = {
  title: 'Professional Services Solutions',
  description: 'Technology solutions tailored for professional services firms. Discover how Yieldge can transform your law firm, consulting, or accounting practice.',
};

export default function ProfessionalServicesSolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SolutionsPageContent verticalName="Professional Services" />
      <Footer />
    </div>
  );
}
