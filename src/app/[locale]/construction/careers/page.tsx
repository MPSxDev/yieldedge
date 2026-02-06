import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CareersPageContent from '@/components/CareersPageContent';

export const metadata: Metadata = {
  title: 'Construction Careers',
  description: 'Join our Construction division team at Yieldge. Explore career opportunities in construction technology solutions.',
};

export default function ConstructionCareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CareersPageContent verticalName="Construction" />
      <Footer />
    </div>
  );
}
