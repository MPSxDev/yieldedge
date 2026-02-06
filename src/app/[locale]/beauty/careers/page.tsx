import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CareersPageContent from '@/components/CareersPageContent';

export const metadata: Metadata = {
  title: 'Beauty Careers',
  description: 'Join our Beauty division team at Yieldge. Explore career opportunities in beauty and wellness technology solutions.',
};

export default function BeautyCareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CareersPageContent verticalName="Beauty" />
      <Footer />
    </div>
  );
}
