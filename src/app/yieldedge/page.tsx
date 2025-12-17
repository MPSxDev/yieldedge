'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { yieldedgeContent } from '@/lib/content';

// Lazy load below-the-fold components
const Services = dynamic(() => import('@/components/Services'), {
  loading: () => <div className="min-h-screen" />,
});

const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'), {
  loading: () => <div className="min-h-screen" />,
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

export default function YieldedgePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero content={yieldedgeContent.hero} />
      
      {/* Main content sections with spacing */}
      <main className="space-y-20 sm:space-y-24 lg:space-y-32">
        <Services content={yieldedgeContent.services} />
        <WhyChooseUs content={yieldedgeContent.whyChooseUs} />
        <Process content={yieldedgeContent.process} />
        <CaseStudies content={yieldedgeContent.caseStudies} />
        <FAQ content={yieldedgeContent.faq} />
        <FinalCTA content={yieldedgeContent.finalCTA} />
      </main>
      
      <Footer />
    </div>
  );
}

