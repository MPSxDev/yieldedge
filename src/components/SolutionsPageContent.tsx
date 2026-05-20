'use client';

import {
  EnterpriseHero,
  OperationalIntelligence,
  EnterpriseSolutionsGrid,
  HowYieldgeWorks,
  EnterpriseOutcomes,
  WhyYieldge,
  EnterpriseContactForm,
} from '@/components/solutions/enterprise';

/**
 * SolutionsPageContent - Enterprise-grade solutions page
 * Premium dark theme with Palantir/Stripe/IBM-inspired design
 */
export default function SolutionsPageContent() {
  return (
    <div className="bg-white">
      {/* Enterprise Hero Section */}
      <EnterpriseHero />

      {/* Operational Intelligence Visualization */}
      <OperationalIntelligence />

      {/* Solutions Grid with Flagship */}
      <EnterpriseSolutionsGrid />

      {/* How Yieldge Works - Implementation Flow */}
      <HowYieldgeWorks />

      {/* Enterprise Outcomes */}
      <EnterpriseOutcomes />

      {/* Why Yieldge - Trust Signals */}
      <WhyYieldge />

      {/* Enterprise Contact Form */}
      <EnterpriseContactForm />
    </div>
  );
}
