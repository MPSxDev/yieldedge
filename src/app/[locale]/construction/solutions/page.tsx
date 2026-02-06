import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SolutionsPageContent from '@/components/SolutionsPageContent';

export const metadata: Metadata = {
  title: 'Construction Solutions',
  description: 'Technology solutions tailored for construction companies and contractors. Discover how Yieldge can transform your business.',
};

export default function ConstructionSolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SolutionsPageContent verticalName="Construction" />
      <Footer />
    </div>
  );
}
