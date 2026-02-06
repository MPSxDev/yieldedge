'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SolutionsPageContent from '@/components/SolutionsPageContent';

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SolutionsPageContent />
      <Footer />
    </div>
  );
}
