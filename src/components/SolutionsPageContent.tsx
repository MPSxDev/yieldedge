'use client';

import dynamic from 'next/dynamic';
import Section from '@/components/ui/Section';
import QuickNavigation from '@/components/solutions/QuickNavigation';

// Lazy load heavy animated components
const HeroSection = dynamic(
  () => import('@/components/solutions/HeroSection'),
  {
    loading: () => (
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#eff4ff] via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl animate-pulse">
            <div className="h-4 w-32 bg-gray-200 rounded mb-6" />
            <div className="h-12 w-3/4 bg-gray-200 rounded mb-6" />
            <div className="h-6 w-full bg-gray-200 rounded" />
          </div>
        </div>
      </section>
    ),
  }
);

const ServicesGrid = dynamic(
  () => import('@/components/solutions/ServicesGrid'),
  {
    loading: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-gray-100 rounded-lg h-96" />
        ))}
      </div>
    ),
  }
);

interface SolutionsPageContentProps {
  verticalName?: string;
}

/**
 * SolutionsPageContent - Optimized solutions page content
 *
 * Performance optimizations:
 * 1. Dynamic imports for heavy animated components (HeroSection, ServicesGrid)
 * 2. All text content uses next-intl for i18n support
 * 3. Loading skeletons for better perceived performance
 * 4. Component splitting for better code splitting
 */
export default function SolutionsPageContent({ verticalName }: SolutionsPageContentProps) {
  return (
    <>
      {/* Hero Section - Lazy loaded with skeleton */}
      <HeroSection verticalName={verticalName} />

      {/* Quick Navigation */}
      <QuickNavigation />

      {/* Services Grid - Lazy loaded with skeleton */}
      <Section background="white">
        <ServicesGrid />
      </Section>
    </>
  );
}
