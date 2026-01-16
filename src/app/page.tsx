'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import { HeroVariantSwitch } from '@/components/heroes';

// Lazy load below-the-fold components
const ValueStack = dynamic(() => import('@/components/ValueStack'), {
  loading: () => <div className="min-h-[600px]" />,
});

const Services = dynamic(() => import('@/components/Services'), {
  loading: () => <div className="min-h-screen" />,
});

const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'), {
  loading: () => <div className="min-h-screen" />,
});

const InsightsUpdates = dynamic(() => import('@/components/InsightsUpdates'), {
  loading: () => <div className="min-h-[400px]" />,
});

const Process = dynamic(() => import('@/components/Process'), {
  loading: () => <div className="min-h-screen" />,
});

const CaseStudies = dynamic(() => import('@/components/CaseStudies'), {
  loading: () => <div className="min-h-screen" />,
});

const FinalCTA = dynamic(() => import('@/components/FinalCTA'), {
  loading: () => <div className="min-h-[400px]" />,
});

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="min-h-[400px]" />,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[400px]" />,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroVariantSwitch defaultVariant="default" />

      {/* Main content sections with spacing */}
      <main className="space-y-20 sm:space-y-24 lg:space-y-32">
        <ValueStack />
        <Services />
        <WhyChooseUs />
        <InsightsUpdates />
        <Process />
        <CaseStudies />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
