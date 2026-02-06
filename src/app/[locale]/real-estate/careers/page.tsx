import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CareersPageContent from '@/components/CareersPageContent';

export const metadata: Metadata = {
  title: 'Real Estate Careers',
  description: 'Join our Real Estate division team at Yieldge. Explore career opportunities in real estate technology solutions.',
};

export default function RealEstateCareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CareersPageContent verticalName="Real Estate" />
      <Footer />
    </div>
  );
}
