'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to detect user's reduced motion preference
 * Critical for accessibility compliance and performance optimization
 *
 * Features:
 * - Respects prefers-reduced-motion media query
 * - Automatic updates when user changes preference
 * - SSR-safe with default fallback
 * - Enables graceful degradation of animations
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for media query support
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Create listener for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    // Fallback for older browsers
    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  return prefersReducedMotion;
}

/**
 * Hook that returns animation configuration based on reduced motion preference
 */
export function useMotionConfig(): {
  shouldAnimate: boolean;
  duration: (base: number) => number;
  spring: { stiffness: number; damping: number };
  transition: { duration: number; ease: number[] };
} {
  const prefersReducedMotion = useReducedMotion();

  return {
    shouldAnimate: !prefersReducedMotion,
    duration: (base: number) => (prefersReducedMotion ? 0 : base),
    spring: prefersReducedMotion
      ? { stiffness: 1000, damping: 1000 } // Instant
      : { stiffness: 200, damping: 25 }, // Smooth
    transition: prefersReducedMotion
      ? { duration: 0, ease: [0, 0, 1, 1] }
      : { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  };
}

/**
 * Utility to get animation variants based on motion preference
 */
export function getMotionVariants(prefersReducedMotion: boolean) {
  if (prefersReducedMotion) {
    return {
      hidden: { opacity: 1 },
      visible: { opacity: 1 },
      exit: { opacity: 1 },
    };
  }

  return {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };
}

export default useReducedMotion;
