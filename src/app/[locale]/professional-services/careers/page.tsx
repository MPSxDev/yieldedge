import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CareersPageContent from '@/components/CareersPageContent';

export const metadata: Metadata = {
  title: 'Professional Services Careers',
  description: 'Join our Professional Services division team at Yieldge. Explore career opportunities in professional services technology solutions.',
};

export default function ProfessionalServicesCareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CareersPageContent verticalName="Professional Services" />
      <Footer />
    </div>
  );
}
