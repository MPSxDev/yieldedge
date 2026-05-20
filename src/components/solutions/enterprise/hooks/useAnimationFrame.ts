'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type AnimationCallback = (deltaTime: number, elapsedTime: number) => void;

interface UseAnimationFrameOptions {
  autoStart?: boolean;
  fps?: number;
  onFrame?: AnimationCallback;
}

interface AnimationFrameState {
  isRunning: boolean;
  elapsedTime: number;
  frameCount: number;
  actualFps: number;
}

/**
 * High-performance requestAnimationFrame hook
 * Optimized for smooth 60fps animations with automatic cleanup
 *
 * Features:
 * - Automatic frame rate limiting
 * - Delta time calculation for physics-based animations
 * - FPS monitoring for performance debugging
 * - Pause/resume functionality
 * - Automatic cleanup on unmount or visibility change
 */
export function useAnimationFrame(
  callback: AnimationCallback,
  options: UseAnimationFrameOptions = {}
): {
  start: () => void;
  stop: () => void;
  pause: () => void;
  resume: () => void;
  state: AnimationFrameState;
} {
  const { autoStart = false, fps = 60 } = options;

  const frameIdRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const elapsedTimeRef = useRef<number>(0);
  const frameCountRef = useRef<number>(0);
  const fpsStartTimeRef = useRef<number>(0);
  const callbackRef = useRef<AnimationCallback>(callback);
  const pausedRef = useRef<boolean>(false);

  const [state, setState] = useState<AnimationFrameState>({
    isRunning: false,
    elapsedTime: 0,
    frameCount: 0,
    actualFps: 0,
  });

  // Update callback ref to avoid stale closures
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Frame time interval based on target FPS
  const frameInterval = 1000 / fps;

  const animate = useCallback(
    (currentTime: number) => {
      if (pausedRef.current) {
        frameIdRef.current = requestAnimationFrame(animate);
        return;
      }

      // Initialize timing on first frame
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = currentTime;
        fpsStartTimeRef.current = currentTime;
      }

      const deltaTime = currentTime - lastTimeRef.current;

      // Frame rate limiting
      if (deltaTime >= frameInterval) {
        elapsedTimeRef.current += deltaTime;
        frameCountRef.current += 1;

        // Calculate actual FPS every second
        const fpsDelta = currentTime - fpsStartTimeRef.current;
        let actualFps = 0;
        if (fpsDelta >= 1000) {
          actualFps = Math.round((frameCountRef.current * 1000) / fpsDelta);
          frameCountRef.current = 0;
          fpsStartTimeRef.current = currentTime;
        }

        // Call the animation callback
        callbackRef.current(deltaTime, elapsedTimeRef.current);

        // Update state (throttled to avoid excessive re-renders)
        if (frameCountRef.current % 10 === 0) {
          setState({
            isRunning: true,
            elapsedTime: elapsedTimeRef.current,
            frameCount: frameCountRef.current,
            actualFps: actualFps || state.actualFps,
          });
        }

        lastTimeRef.current = currentTime - (deltaTime % frameInterval);
      }

      frameIdRef.current = requestAnimationFrame(animate);
    },
    [frameInterval, state.actualFps]
  );

  const start = useCallback(() => {
    if (frameIdRef.current !== null) return;

    lastTimeRef.current = 0;
    elapsedTimeRef.current = 0;
    frameCountRef.current = 0;
    pausedRef.current = false;

    setState((prev) => ({ ...prev, isRunning: true }));
    frameIdRef.current = requestAnimationFrame(animate);
  }, [animate]);

  const stop = useCallback(() => {
    if (frameIdRef.current !== null) {
      cancelAnimationFrame(frameIdRef.current);
      frameIdRef.current = null;
    }

    setState({
      isRunning: false,
      elapsedTime: 0,
      frameCount: 0,
      actualFps: 0,
    });
  }, []);

  const pause = useCallback(() => {
    pausedRef.current = true;
    setState((prev) => ({ ...prev, isRunning: false }));
  }, []);

  const resume = useCallback(() => {
    pausedRef.current = false;
    setState((prev) => ({ ...prev, isRunning: true }));
  }, []);

  // Auto-start if configured
  useEffect(() => {
    if (autoStart) {
      start();
    }

    return stop;
  }, [autoStart, start, stop]);

  // Pause when tab is not visible (performance optimization)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        pause();
      } else if (state.isRunning || autoStart) {
        resume();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [pause, resume, state.isRunning, autoStart]);

  return { start, stop, pause, resume, state };
}

/**
 * Simplified hook for single animation value
 */
export function useAnimatedValue(
  from: number,
  to: number,
  duration: number,
  easing: (t: number) => number = (t) => t
): number {
  const [value, setValue] = useState(from);

  const { start } = useAnimationFrame(
    (_, elapsedTime) => {
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = easing(progress);
      const newValue = from + (to - from) * easedProgress;
      setValue(newValue);

      if (progress >= 1) {
        setValue(to);
      }
    },
    { autoStart: true }
  );

  useEffect(() => {
    start();
  }, [from, to, duration, start]);

  return value;
}

/**
 * Hook for physics-based spring animations
 */
export function useSpringAnimation(
  target: number,
  config: { stiffness?: number; damping?: number; mass?: number } = {}
): number {
  const { stiffness = 170, damping = 26, mass = 1 } = config;

  const [value, setValue] = useState(target);
  const velocityRef = useRef(0);
  const currentRef = useRef(target);

  useAnimationFrame(
    (deltaTime) => {
      const dt = Math.min(deltaTime / 1000, 0.064); // Cap delta time

      const displacement = currentRef.current - target;
      const springForce = -stiffness * displacement;
      const dampingForce = -damping * velocityRef.current;
      const acceleration = (springForce + dampingForce) / mass;

      velocityRef.current += acceleration * dt;
      currentRef.current += velocityRef.current * dt;

      // Check if animation has settled
      if (
        Math.abs(velocityRef.current) < 0.01 &&
        Math.abs(displacement) < 0.01
      ) {
        currentRef.current = target;
        velocityRef.current = 0;
      }

      setValue(currentRef.current);
    },
    { autoStart: true }
  );

  return value;
}

export default useAnimationFrame;
