import type { Metadata } from 'next';
import VibeRescueNavbar from '@/components/VibeRescueNavbar';
import Footer from '@/components/Footer';
import CompanyPageContent from '@/components/CompanyPageContent';
import { Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About VibeRescue',
  description: 'Learn about VibeRescue and our emergency response technology solutions.',
};

export default function VibeRescueCompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full bg-orange-500 py-3">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-center gap-2 text-white font-semibold text-sm">
            <Zap className="w-4 h-4" />
            <span>ABOUT VIBERESCUE</span>
          </div>
        </div>
      </div>
      <VibeRescueNavbar />
      <CompanyPageContent verticalName="VibeRescue" />
      <Footer />
    </div>
  );
}
