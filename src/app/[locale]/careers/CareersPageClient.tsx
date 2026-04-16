'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CareersPageContent from '@/components/CareersPageContent';

export default function CareersPageClient() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CareersPageContent />
      <Footer />
    </div>
  );
}
