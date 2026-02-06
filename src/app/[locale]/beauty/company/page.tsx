import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CompanyPageContent from '@/components/CompanyPageContent';

export const metadata: Metadata = {
  title: 'About Us - Beauty',
  description: 'Learn about Yieldge and our dedicated Beauty division. We help salons and spas thrive with technology.',
};

export default function BeautyCompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CompanyPageContent verticalName="Beauty" />
      <Footer />
    </div>
  );
}
