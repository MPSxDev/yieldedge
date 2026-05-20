'use client';

import { memo, useEffect, useRef, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface PerformanceMetrics {
  fps: number;
  memory: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  renderCount: number;
}

interface PerformanceMonitorProps {
  className?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  visible?: boolean;
}

/**
 * PerformanceMonitor - Development tool for monitoring Core Web Vitals
 *
 * Features:
 * - Real-time FPS monitoring
 * - Memory usage tracking (Chrome only)
 * - Core Web Vitals tracking (LCP, FID, CLS)
 * - Render count monitoring
 * - Toggle visibility with keyboard shortcut
 *
 * Note: Only renders in development mode by default
 */
const PerformanceMonitor = memo(function PerformanceMonitor({
  className,
  position = 'bottom-right',
  visible: initialVisible = false,
}: PerformanceMonitorProps) {
  const [isVisible, setIsVisible] = useState(initialVisible);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    memory: null,
    lcp: null,
    fid: null,
    cls: 0,
    renderCount: 0,
  });

  const frameCountRef = useRef(0);
  const lastTimeRef = useRef<number>(0);
  const animationFrameRef = useRef<number | null>(null);
  const clsValueRef = useRef(0);

  // FPS calculation
  const calculateFps = useCallback(() => {
    const currentTime = performance.now();
    const deltaTime = currentTime - lastTimeRef.current;

    if (deltaTime >= 1000) {
      const fps = Math.round((frameCountRef.current * 1000) / deltaTime);
      frameCountRef.current = 0;
      lastTimeRef.current = currentTime;

      // Get memory info (Chrome only)
      let memory: number | null = null;
      const perfMemory = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory;
      if (perfMemory) {
        memory = Math.round(perfMemory.usedJSHeapSize / 1048576); // Convert to MB
      }

      setMetrics((prev) => ({
        ...prev,
        fps,
        memory,
        renderCount: prev.renderCount + 1,
      }));
    }

    frameCountRef.current++;
    animationFrameRef.current = requestAnimationFrame(calculateFps);
  }, []);

  // Setup Core Web Vitals observers
  useEffect(() => {
    if (!isVisible) return;

    // Start FPS monitoring
    animationFrameRef.current = requestAnimationFrame(calculateFps);

    // LCP Observer
    let lcpObserver: PerformanceObserver | null = null;
    try {
      lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics((prev) => ({
          ...prev,
          lcp: Math.round(lastEntry.startTime),
        }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch {
      // LCP not supported
    }

    // FID Observer
    let fidObserver: PerformanceObserver | null = null;
    try {
      fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries() as PerformanceEventTiming[];
        const firstEntry = entries[0];
        if (firstEntry) {
          setMetrics((prev) => ({
            ...prev,
            fid: Math.round(firstEntry.processingStart - firstEntry.startTime),
          }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch {
      // FID not supported
    }

    // CLS Observer
    let clsObserver: PerformanceObserver | null = null;
    try {
      clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries() as (PerformanceEntry & { value: number; hadRecentInput: boolean })[];
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValueRef.current += entry.value;
            setMetrics((prev) => ({
              ...prev,
              cls: Math.round(clsValueRef.current * 1000) / 1000,
            }));
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch {
      // CLS not supported
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      lcpObserver?.disconnect();
      fidObserver?.disconnect();
      clsObserver?.disconnect();
    };
  }, [isVisible, calculateFps]);

  // Keyboard shortcut to toggle visibility (Ctrl+Shift+P)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Only show in development
  if (process.env.NODE_ENV === 'production' && !initialVisible) {
    return null;
  }

  if (!isVisible) {
    return null;
  }

  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
  };

  const getFpsColor = (fps: number) => {
    if (fps >= 55) return 'text-emerald-400';
    if (fps >= 30) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getLcpColor = (lcp: number | null) => {
    if (lcp === null) return 'text-slate-400';
    if (lcp <= 2500) return 'text-emerald-400';
    if (lcp <= 4000) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getFidColor = (fid: number | null) => {
    if (fid === null) return 'text-slate-400';
    if (fid <= 100) return 'text-emerald-400';
    if (fid <= 300) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getClsColor = (cls: number | null) => {
    if (cls === null) return 'text-slate-400';
    if (cls <= 0.1) return 'text-emerald-400';
    if (cls <= 0.25) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div
      className={cn(
        'fixed z-[9999] font-mono text-xs bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-lg p-3 shadow-xl',
        positionClasses[position],
        className
      )}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-slate-400 font-semibold">Performance</span>
        <button
          onClick={() => setIsVisible(false)}
          className="text-slate-500 hover:text-slate-300 transition-colors"
          aria-label="Close performance monitor"
        >
          x
        </button>
      </div>

      <div className="space-y-1.5 min-w-[140px]">
        {/* FPS */}
        <div className="flex justify-between">
          <span className="text-slate-400">FPS:</span>
          <span className={getFpsColor(metrics.fps)}>{metrics.fps}</span>
        </div>

        {/* Memory */}
        {metrics.memory !== null && (
          <div className="flex justify-between">
            <span className="text-slate-400">Memory:</span>
            <span className="text-cyan-400">{metrics.memory} MB</span>
          </div>
        )}

        <div className="border-t border-slate-700 my-2" />

        {/* Core Web Vitals */}
        <div className="text-slate-500 text-[10px] mb-1">Core Web Vitals</div>

        <div className="flex justify-between">
          <span className="text-slate-400">LCP:</span>
          <span className={getLcpColor(metrics.lcp)}>
            {metrics.lcp !== null ? `${metrics.lcp}ms` : '--'}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">FID:</span>
          <span className={getFidColor(metrics.fid)}>
            {metrics.fid !== null ? `${metrics.fid}ms` : '--'}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">CLS:</span>
          <span className={getClsColor(metrics.cls)}>{metrics.cls}</span>
        </div>

        <div className="border-t border-slate-700 my-2" />

        {/* Render count */}
        <div className="flex justify-between">
          <span className="text-slate-400">Renders:</span>
          <span className="text-slate-300">{metrics.renderCount}</span>
        </div>
      </div>

      <div className="mt-2 text-[10px] text-slate-600">
        Ctrl+Shift+P to toggle
      </div>
    </div>
  );
});

export default PerformanceMonitor;
