import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CompanyPageContent from '@/components/CompanyPageContent';

export const metadata: Metadata = {
  title: 'About Us - Professional Services',
  description: 'Learn about Yieldge and our dedicated Professional Services division. We help law firms, consultants, and accountants thrive with technology.',
};

export default function ProfessionalServicesCompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CompanyPageContent verticalName="Professional Services" />
      <Footer />
    </div>
  );
}
