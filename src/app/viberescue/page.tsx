'use client';

import dynamic from 'next/dynamic';
import VibeRescueNavbar from '@/components/VibeRescueNavbar';
import Hero from '@/components/Hero';
import VibeRescueHeroExtras from '@/components/VibeRescueHeroExtras';
import LazySection from '@/components/LazySection';
import { Zap } from 'lucide-react';
import { viberescueContent } from '@/lib/content';

// Lazy load SocialProofSection
const SocialProofSection = dynamic(() => import('@/components/SocialProofSection'), {
  ssr: false,
});

// Lazy load below-the-fold components with SSR disabled
const Services = dynamic(() => import('@/components/Services'), {
  ssr: false,
});

const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'), {
  ssr: false,
});

const Process = dynamic(() => import('@/components/Process'), {
  ssr: false,
});

const CaseStudies = dynamic(() => import('@/components/CaseStudies'), {
  ssr: false,
});

const FinalCTA = dynamic(() => import('@/components/FinalCTA'), {
  ssr: false,
});

const FAQ = dynamic(() => import('@/components/FAQ'), {
  ssr: false,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: false,
});

export default function VibeRescue() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full bg-orange-500 py-3">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-center gap-2 text-white font-semibold text-sm">
            <Zap className="w-4 h-4" />
            <span>LIMITED SPOTS: Only 7 Rescue Slots Left This Week</span>
          </div>
        </div>
      </div>
      <VibeRescueNavbar />
      <Hero content={viberescueContent.hero} />
      <VibeRescueHeroExtras />
      
      {/* Main content sections with spacing */}
      <main className="space-y-20 sm:space-y-24 lg:space-y-32">
        <LazySection fallback={<div className="min-h-[300px]" />}>
          <SocialProofSection stats={viberescueContent.caseStudies.stats} />
        </LazySection>
        
        <LazySection fallback={<div className="min-h-screen" />}>
          <Services content={viberescueContent.services} />
        </LazySection>
        
        <LazySection fallback={<div className="min-h-screen" />}>
          <WhyChooseUs content={viberescueContent.whyChooseUs} />
        </LazySection>
        
        <LazySection fallback={<div className="min-h-screen" />}>
          <Process content={viberescueContent.process} />
        </LazySection>
        
        <LazySection fallback={<div className="min-h-screen" />}>
          <CaseStudies content={viberescueContent.caseStudies} />
        </LazySection>
        
        <LazySection fallback={<div className="min-h-[400px]" />}>
          <FAQ content={viberescueContent.faq} />
        </LazySection>
        
        <LazySection fallback={<div className="min-h-[400px]" />}>
          <FinalCTA content={viberescueContent.finalCTA} />
        </LazySection>
      </main>
      
      <LazySection fallback={<div className="min-h-[400px]" />}>
        <Footer />
      </LazySection>
    </div>
  );
}

