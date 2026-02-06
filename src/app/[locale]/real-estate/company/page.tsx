import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CompanyPageContent from '@/components/CompanyPageContent';

export const metadata: Metadata = {
  title: 'About Us - Real Estate',
  description: 'Learn about Yieldge and our dedicated Real Estate division. We help agents and brokers thrive with technology.',
};

export default function RealEstateCompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CompanyPageContent verticalName="Real Estate" />
      <Footer />
    </div>
  );
}
