import type { Metadata } from 'next';
import VibeRescueNavbar from '@/components/VibeRescueNavbar';
import Footer from '@/components/Footer';
import CareersPageContent from '@/components/CareersPageContent';
import { Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'VibeRescue Careers',
  description: 'Join our VibeRescue emergency response team at Yieldge. Explore career opportunities in emergency services technology.',
};

export default function VibeRescueCareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full bg-orange-500 py-3">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-center gap-2 text-white font-semibold text-sm">
            <Zap className="w-4 h-4" />
            <span>JOIN THE RESCUE TEAM</span>
          </div>
        </div>
      </div>
      <VibeRescueNavbar />
      <CareersPageContent verticalName="VibeRescue" />
      <Footer />
    </div>
  );
}
