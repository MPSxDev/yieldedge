'use client';

import { useState, useEffect, useRef, useCallback, RefObject } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  root?: Element | null;
  freezeOnceVisible?: boolean;
  triggerOnce?: boolean;
}

interface IntersectionObserverEntry {
  isIntersecting: boolean;
  intersectionRatio: number;
  boundingClientRect: DOMRectReadOnly;
  intersectionRect: DOMRectReadOnly;
  rootBounds: DOMRectReadOnly | null;
  target: Element;
  time: number;
}

/**
 * High-performance Intersection Observer hook
 * Optimized for scroll-triggered animations with minimal re-renders
 *
 * Features:
 * - Automatic cleanup on unmount
 * - Configurable thresholds for precise trigger points
 * - Optional freeze on first visibility (for one-time animations)
 * - Memoized callbacks for performance
 */
export function useIntersectionObserver<T extends Element = Element>(
  options: UseIntersectionObserverOptions = {}
): [RefObject<T | null>, boolean, IntersectionObserverEntry | null] {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    root = null,
    freezeOnceVisible = true,
    triggerOnce = false,
  } = options;

  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const frozen = useRef(false);

  const updateEntry = useCallback(
    ([observerEntry]: globalThis.IntersectionObserverEntry[]): void => {
      // Prevent updates if frozen and already visible
      if (frozen.current && freezeOnceVisible) return;

      const typedEntry = observerEntry as unknown as IntersectionObserverEntry;
      setEntry(typedEntry);
      setIsVisible(typedEntry.isIntersecting);

      // Freeze after first visibility if configured
      if (typedEntry.isIntersecting && (freezeOnceVisible || triggerOnce)) {
        frozen.current = true;
      }
    },
    [freezeOnceVisible, triggerOnce]
  );

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check for native IntersectionObserver support
    if (!('IntersectionObserver' in window)) {
      // Fallback: assume visible
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(updateEntry, {
      threshold,
      rootMargin,
      root,
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, root, updateEntry]);

  // Reset frozen state when options change
  useEffect(() => {
    frozen.current = false;
  }, [threshold, rootMargin]);

  return [elementRef, isVisible, entry];
}

/**
 * Simplified hook for basic visibility detection
 */
export function useIsVisible<T extends Element = Element>(
  options?: UseIntersectionObserverOptions
): [RefObject<T | null>, boolean] {
  const [ref, isVisible] = useIntersectionObserver<T>(options);
  return [ref, isVisible];
}

/**
 * Hook for staggered animations on multiple elements
 */
export function useStaggeredVisibility(
  count: number,
  baseDelay: number = 100,
  options?: UseIntersectionObserverOptions
): {
  containerRef: RefObject<HTMLDivElement | null>;
  isContainerVisible: boolean;
  getItemDelay: (index: number) => number;
  shouldAnimate: (index: number) => boolean;
} {
  const [containerRef, isContainerVisible] = useIntersectionObserver<HTMLDivElement>(options);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!isContainerVisible) {
      setVisibleCount(0);
      return;
    }

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < count) {
        setVisibleCount(currentIndex + 1);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, baseDelay);

    return () => clearInterval(interval);
  }, [isContainerVisible, count, baseDelay]);

  const getItemDelay = useCallback(
    (index: number) => index * baseDelay,
    [baseDelay]
  );

  const shouldAnimate = useCallback(
    (index: number) => isContainerVisible && index < visibleCount,
    [isContainerVisible, visibleCount]
  );

  return {
    containerRef,
    isContainerVisible,
    getItemDelay,
    shouldAnimate,
  };
}

export default useIntersectionObserver;
