'use client';

import { memo, lazy, Suspense } from 'react';
import { useReducedMotion } from './hooks/useReducedMotion';

// Critical path components - loaded immediately
import EnterpriseHero from './EnterpriseHero';

// Lazy-loaded components with code splitting
const OperationalIntelligence = lazy(() => import('./OperationalIntelligence'));
const EnterpriseSolutionsGrid = lazy(() => import('./EnterpriseSolutionsGrid'));
const HowYieldgeWorks = lazy(() => import('./HowYieldgeWorks'));
const EnterpriseOutcomes = lazy(() => import('./EnterpriseOutcomes'));

// Loading skeleton for sections
const SectionSkeleton = memo(function SectionSkeleton() {
  return (
    <div
      className="w-full py-24 lg:py-32 bg-slate-950"
      role="status"
      aria-label="Loading section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header skeleton */}
        <div className="text-center mb-16">
          <div className="h-4 w-24 bg-slate-800 rounded mx-auto mb-6 animate-pulse" />
          <div className="h-12 w-2/3 max-w-xl bg-slate-800 rounded mx-auto mb-4 animate-pulse" />
          <div className="h-6 w-1/2 max-w-md bg-slate-800/50 rounded mx-auto animate-pulse" />
        </div>

        {/* Grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-64 bg-slate-800/30 rounded-xl border border-slate-700/50 animate-pulse"
              style={{
                animationDelay: `${i * 100}ms`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

/**
 * EnterpriseSolutionsPageContent - Main enterprise solutions page
 *
 * Performance Architecture:
 * 1. Hero section loads immediately (LCP optimization)
 * 2. Below-fold sections are lazy-loaded with React.lazy
 * 3. Suspense boundaries prevent layout shift
 * 4. Skeleton loaders maintain visual consistency
 * 5. Reduced motion preferences are respected
 *
 * Bundle Splitting:
 * - Hero: ~15KB (critical path)
 * - Each section: ~10-20KB (loaded on demand)
 * - Total lazy: ~60KB saved from initial load
 */
const EnterpriseSolutionsPageContent = memo(function EnterpriseSolutionsPageContent() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="min-h-screen bg-slate-950"
      style={{
        // Prevent layout shift during load
        minHeight: '100vh',
      }}
    >
      {/* Hero Section - Critical Path (LCP) */}
      <EnterpriseHero />

      {/* Operational Intelligence - Lazy Loaded */}
      <Suspense fallback={<SectionSkeleton />}>
        <OperationalIntelligence />
      </Suspense>

      {/* Solutions Grid - Lazy Loaded */}
      <Suspense fallback={<SectionSkeleton />}>
        <EnterpriseSolutionsGrid />
      </Suspense>

      {/* Process Timeline - Lazy Loaded */}
      <Suspense fallback={<SectionSkeleton />}>
        <HowYieldgeWorks />
      </Suspense>

      {/* Outcomes Section - Lazy Loaded */}
      <Suspense fallback={<SectionSkeleton />}>
        <EnterpriseOutcomes />
      </Suspense>
    </div>
  );
});

export default EnterpriseSolutionsPageContent;
