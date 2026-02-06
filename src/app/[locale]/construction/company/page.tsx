import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CompanyPageContent from '@/components/CompanyPageContent';

export const metadata: Metadata = {
  title: 'About Us - Construction',
  description: 'Learn about Yieldge and our dedicated Construction division. We help contractors and builders thrive with technology.',
};

export default function ConstructionCompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CompanyPageContent verticalName="Construction" />
      <Footer />
    </div>
  );
}
