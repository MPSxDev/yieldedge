'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import StickyCTA from '@/components/StickyCTA';
import { crContent } from '@/lib/content';

// Lazy load below-the-fold components
const ServicesNew = dynamic(() => import('@/components/sections/ServicesNew'), {
  loading: () => <div className="min-h-screen" />,
});

const CompanyLogos = dynamic(() => import('@/components/CompanyLogos'), {
  loading: () => <div className="min-h-[200px]" />,
});

const ValueProps = dynamic(() => import('@/components/sections/ValueProps'), {
  loading: () => <div className="min-h-[400px]" />,
});

const Results = dynamic(() => import('@/components/sections/Results'), {
  loading: () => <div className="min-h-[400px]" />,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[400px]" />,
});

export default function CRPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-[#1F5CFF] focus:text-white focus:rounded-full focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <Navbar />
      <StickyCTA />

      {/* Hero - Above the fold */}
      <Hero />

      {/* Main content sections */}
      <main id="main-content">
        {/* Services (Core Capabilities) */}
        <ServicesNew />

        {/* Company Logos - CR specific */}
        {crContent.companyLogos && crContent.companyLogos.logos.length > 0 && (
          <CompanyLogos
            sectionLabel={crContent.companyLogos.sectionLabel}
            title={crContent.companyLogos.title}
            titleHighlight={crContent.companyLogos.titleHighlight}
            description={crContent.companyLogos.description}
            logos={crContent.companyLogos.logos}
          />
        )}

        {/* Value Proposition */}
        <ValueProps />

        {/* Results (Transformation Statements) */}
        <Results />
      </main>

      <Footer />
    </div>
  );
}
