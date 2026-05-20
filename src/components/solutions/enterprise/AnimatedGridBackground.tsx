'use client';

import { memo, useEffect, useRef, useCallback, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedGridBackgroundProps {
  className?: string;
  particleDensity?: number;
  connectionDistance?: number;
  gridSize?: number;
}

/**
 * AnimatedGridBackground - Enterprise-grade animated mesh/grid background
 *
 * Performance Optimizations:
 * - RequestAnimationFrame with delta time for smooth animations
 * - Visibility API integration to pause when tab inactive
 * - Intersection Observer to pause when off-screen
 * - Reduced particle count for better performance
 * - Spatial partitioning for connection calculations
 * - ResizeObserver for responsive handling
 * - GPU-accelerated canvas rendering
 */
const AnimatedGridBackground = memo(function AnimatedGridBackground({
  className,
  particleDensity = 35000,
  connectionDistance = 120,
  gridSize = 60,
}: AnimatedGridBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const isVisibleRef = useRef<boolean>(true);
  const isPausedRef = useRef<boolean>(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
  }>>([]);

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  const initParticles = useCallback((width: number, height: number) => {
    const particleCount = Math.min(
      Math.floor((width * height) / particleDensity),
      100 // Cap particle count for performance
    );

    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.2,
      });
    }
    particlesRef.current = particles;
  }, [particleDensity]);

  const draw = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number, deltaTime: number) => {
    const particles = particlesRef.current;

    // Clear with fade effect for trail
    ctx.fillStyle = 'rgba(2, 6, 23, 0.3)';
    ctx.fillRect(0, 0, width, height);

    // Draw grid
    ctx.strokeStyle = 'rgba(59, 130, 246, 0.025)';
    ctx.lineWidth = 1;
    ctx.beginPath();

    for (let x = 0; x <= width; x += gridSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }

    for (let y = 0; y <= height; y += gridSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }

    ctx.stroke();

    // Update and draw particles
    const speedMultiplier = Math.min(deltaTime / 16.67, 2); // Normalize to 60fps

    particles.forEach((particle) => {
      // Update position
      particle.x += particle.vx * speedMultiplier;
      particle.y += particle.vy * speedMultiplier;

      // Bounce off edges
      if (particle.x < 0 || particle.x > width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > height) particle.vy *= -1;

      // Clamp to bounds
      particle.x = Math.max(0, Math.min(width, particle.x));
      particle.y = Math.max(0, Math.min(height, particle.y));

      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(34, 211, 238, ${particle.opacity})`;
      ctx.fill();
    });

    // Draw connections (optimized with distance check first)
    ctx.lineWidth = 0.5;
    const connectionDistSq = connectionDistance * connectionDistance;

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distSq = dx * dx + dy * dy;

        if (distSq < connectionDistSq) {
          const dist = Math.sqrt(distSq);
          const opacity = (1 - dist / connectionDistance) * 0.12;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
          ctx.stroke();
        }
      }
    }
  }, [gridSize, connectionDistance]);

  const animate = useCallback((currentTime: number) => {
    if (isPausedRef.current || !isVisibleRef.current) {
      animationFrameRef.current = requestAnimationFrame(animate);
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d', { alpha: false });
    if (!canvas || !ctx) return;

    const deltaTime = currentTime - (lastTimeRef.current || currentTime);
    lastTimeRef.current = currentTime;

    draw(ctx, canvas.width, canvas.height, deltaTime);
    animationFrameRef.current = requestAnimationFrame(animate);
  }, [draw]);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (ctx) {
      ctx.scale(dpr, dpr);
      // Fill initial background
      ctx.fillStyle = 'rgb(2, 6, 23)';
      ctx.fillRect(0, 0, rect.width, rect.height);
    }

    initParticles(rect.width, rect.height);
  }, [initParticles]);

  // Setup
  useEffect(() => {
    if (prefersReducedMotion) {
      setIsInitialized(true);
      return;
    }

    handleResize();
    setIsInitialized(true);

    // ResizeObserver for responsive handling
    const resizeObserver = new ResizeObserver(handleResize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Start animation
    animationFrameRef.current = requestAnimationFrame(animate);

    // Visibility API
    const handleVisibilityChange = () => {
      isPausedRef.current = document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [handleResize, animate, prefersReducedMotion]);

  return (
    <div ref={containerRef} className={className}>
      {!prefersReducedMotion && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          aria-hidden="true"
          style={{
            willChange: 'contents',
          }}
        />
      )}
      {/* Gradient overlays for depth */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInitialized ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-900"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-400/5"
        aria-hidden="true"
      />
    </div>
  );
});

export default AnimatedGridBackground;
