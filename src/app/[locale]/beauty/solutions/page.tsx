import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SolutionsPageContent from '@/components/SolutionsPageContent';

export const metadata: Metadata = {
  title: 'Beauty Solutions',
  description: 'Technology solutions tailored for beauty and wellness businesses. Discover how Yieldge can transform your salon or spa.',
};

export default function BeautySolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SolutionsPageContent verticalName="Beauty" />
      <Footer />
    </div>
  );
}
