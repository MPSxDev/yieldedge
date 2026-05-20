'use client';

import Section from '@/components/ui/Section';
import HeroSection from '@/components/solutions/HeroSection';
import QuickNavigation from '@/components/solutions/QuickNavigation';
import ServicesGrid from '@/components/solutions/ServicesGrid';

interface SolutionsPageContentProps {
  verticalName?: string;
}

/**
 * SolutionsPageContent - Solutions page content with i18n support
 */
export default function SolutionsPageContent({ verticalName }: SolutionsPageContentProps) {
  return (
    <>
      {/* Hero Section */}
      <HeroSection verticalName={verticalName} />

      {/* Quick Navigation */}
      <QuickNavigation />

      {/* Services Grid */}
      <Section background="white">
        <ServicesGrid />
      </Section>
    </>
  );
}
