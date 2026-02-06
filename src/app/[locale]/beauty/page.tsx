'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { beautyContent } from '@/lib/content';

// Lazy load below-the-fold components
const Services = dynamic(() => import('@/components/Services'), {
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

export default function BeautyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero content={beautyContent.hero} />

      {/* Main content sections with spacing */}
      <main className="space-y-20 sm:space-y-24 lg:space-y-32">
        <Services content={beautyContent.services} />
        <Process content={beautyContent.process} />
        <CaseStudies content={beautyContent.caseStudies} />
        <FAQ content={beautyContent.faq} />
        <FinalCTA content={beautyContent.finalCTA} />
      </main>

      <Footer />
    </div>
  );
}


