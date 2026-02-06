import type { Metadata } from 'next';
import VibeRescueNavbar from '@/components/VibeRescueNavbar';
import Footer from '@/components/Footer';
import SolutionsPageContent from '@/components/SolutionsPageContent';
import { Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'VibeRescue Solutions',
  description: 'Emergency response technology solutions. Discover how VibeRescue can transform your emergency services.',
};

export default function VibeRescueSolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full bg-orange-500 py-3">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-center gap-2 text-white font-semibold text-sm">
            <Zap className="w-4 h-4" />
            <span>EMERGENCY RESPONSE SOLUTIONS</span>
          </div>
        </div>
      </div>
      <VibeRescueNavbar />
      <SolutionsPageContent verticalName="VibeRescue" />
      <Footer />
    </div>
  );
}
