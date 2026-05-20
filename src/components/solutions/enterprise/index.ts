/**
 * Enterprise Solutions Components - Performance-Optimized Architecture
 *
 * This module exports high-performance components designed for B2G/B2B enterprise clients.
 * All components are optimized for:
 * - 60fps animations via requestAnimationFrame
 * - Lazy loading with Intersection Observer
 * - Efficient memoization strategies
 * - Bundle code splitting
 * - Core Web Vitals optimization
 *
 * Performance Metrics Targets:
 * - LCP: < 2.5s
 * - FID: < 100ms
 * - CLS: < 0.1
 * - TTI: < 3.8s
 */

// Main enterprise page components
export { default as AnimatedGridBackground } from './AnimatedGridBackground';
export { default as EnterpriseHero } from './EnterpriseHero';
export { default as EnterpriseSolutionsGrid } from './EnterpriseSolutionsGrid';
export { default as OperationalIntelligence } from './OperationalIntelligence';
export { default as HowYieldgeWorks } from './HowYieldgeWorks';
export { default as EnterpriseOutcomes } from './EnterpriseOutcomes';
export { default as WhyYieldge } from './WhyYieldge';
export { default as EnterpriseContactForm } from './EnterpriseContactForm';

// UI Components
export { default as GlassmorphicCard } from './GlassmorphicCard';
export { default as DataFlowVisualization } from './DataFlowVisualization';
export { default as PerformanceMonitor } from './PerformanceMonitor';

// Performance-optimized hooks
export { useIntersectionObserver, useIsVisible, useStaggeredVisibility } from './hooks/useIntersectionObserver';
export { useAnimationFrame, useAnimatedValue, useSpringAnimation } from './hooks/useAnimationFrame';
export { useReducedMotion, useMotionConfig, getMotionVariants } from './hooks/useReducedMotion';
export { useDeferredValue, useDeferredComputation, useBatchedUpdates } from './hooks/useDeferredValue';

// Animation configuration and utilities
export { animationConfig, easingFunctions, durations, springConfigs, viewportConfig, transformStyles } from './utils/animationConfig';
export { cn } from '@/lib/utils';
