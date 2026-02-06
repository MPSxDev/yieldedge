import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SolutionsPageContent from '@/components/SolutionsPageContent';

export const metadata: Metadata = {
  title: 'Real Estate Solutions',
  description: 'Technology solutions tailored for real estate professionals. Discover how Yieldge can transform your real estate business.',
};

export default function RealEstateSolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SolutionsPageContent verticalName="Real Estate" />
      <Footer />
    </div>
  );
}
