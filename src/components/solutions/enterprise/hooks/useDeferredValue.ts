'use client';

import { useState, useEffect, useRef, useTransition, useDeferredValue as useReactDeferredValue } from 'react';

/**
 * Enhanced deferred value hook for heavy computations
 * Uses React 19's concurrent features with fallbacks
 *
 * Features:
 * - Wraps React's useDeferredValue with additional utilities
 * - Provides isPending state for loading indicators
 * - Configurable debounce for expensive operations
 * - Memory-efficient with cleanup
 */
export function useDeferredValue<T>(
  value: T,
  options: { debounceMs?: number } = {}
): {
  deferredValue: T;
  isPending: boolean;
} {
  const { debounceMs } = options;
  const [isPending, startTransition] = useTransition();

  // Use React's built-in deferred value
  const deferredValue = useReactDeferredValue(value);

  // If debounce is specified, add additional delay
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    if (!debounceMs) return;

    const timeoutId = setTimeout(() => {
      startTransition(() => {
        setDebouncedValue(value);
      });
    }, debounceMs);

    return () => clearTimeout(timeoutId);
  }, [value, debounceMs]);

  return {
    deferredValue: debounceMs ? debouncedValue : deferredValue,
    isPending,
  };
}

/**
 * Hook for deferring expensive computations
 */
export function useDeferredComputation<T, R>(
  input: T,
  computation: (input: T) => R,
  defaultValue: R
): {
  result: R;
  isPending: boolean;
} {
  const [result, setResult] = useState<R>(defaultValue);
  const [isPending, startTransition] = useTransition();
  const computationRef = useRef(computation);

  // Update computation ref
  useEffect(() => {
    computationRef.current = computation;
  }, [computation]);

  useEffect(() => {
    startTransition(() => {
      const newResult = computationRef.current(input);
      setResult(newResult);
    });
  }, [input]);

  return { result, isPending };
}

/**
 * Hook for batching multiple expensive state updates
 */
export function useBatchedUpdates<T extends Record<string, unknown>>(): {
  state: T;
  batchUpdate: (updates: Partial<T>) => void;
  isPending: boolean;
} {
  const [state, setState] = useState<T>({} as T);
  const [isPending, startTransition] = useTransition();
  const pendingUpdates = useRef<Partial<T>>({});
  const flushTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const batchUpdate = (updates: Partial<T>) => {
    // Accumulate updates
    pendingUpdates.current = { ...pendingUpdates.current, ...updates };

    // Debounce the flush
    if (flushTimeoutRef.current) {
      clearTimeout(flushTimeoutRef.current);
    }

    flushTimeoutRef.current = setTimeout(() => {
      const updates = pendingUpdates.current;
      pendingUpdates.current = {};

      startTransition(() => {
        setState((prev) => ({ ...prev, ...updates }));
      });
    }, 16); // ~1 frame
  };

  useEffect(() => {
    return () => {
      if (flushTimeoutRef.current) {
        clearTimeout(flushTimeoutRef.current);
      }
    };
  }, []);

  return { state, batchUpdate, isPending };
}

export default useDeferredValue;
