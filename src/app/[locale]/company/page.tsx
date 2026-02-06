'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CompanyPageContent from '@/components/CompanyPageContent';

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CompanyPageContent />
      <Footer />
    </div>
  );
}
