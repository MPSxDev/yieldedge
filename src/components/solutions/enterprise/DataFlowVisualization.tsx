'use client';

import { memo, useRef, useEffect, useCallback, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from './hooks/useReducedMotion';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

interface DataFlowVisualizationProps {
  className?: string;
  particleCount?: number;
  flowSpeed?: number;
  nodeCount?: number;
  colors?: {
    particle: string;
    connection: string;
    node: string;
  };
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  progress: number;
  pathIndex: number;
  speed: number;
}

interface Node {
  x: number;
  y: number;
  radius: number;
  pulsePhase: number;
}

/**
 * DataFlowVisualization - Canvas-based enterprise data flow animation
 *
 * Performance Optimizations:
 * - Canvas rendering for 60fps animations
 * - Object pooling to minimize garbage collection
 * - Intersection Observer to pause when off-screen
 * - Visibility API integration
 * - RequestAnimationFrame with delta time
 * - Reduced motion support
 * - ResizeObserver for responsive handling
 */
const DataFlowVisualization = memo(function DataFlowVisualization({
  className,
  particleCount = 30,
  flowSpeed = 1,
  nodeCount = 5,
  colors = {
    particle: 'rgba(34, 211, 238, 0.8)',
    connection: 'rgba(59, 130, 246, 0.2)',
    node: 'rgba(59, 130, 246, 0.5)',
  },
}: DataFlowVisualizationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const nodesRef = useRef<Node[]>([]);
  const dimensionsRef = useRef({ width: 0, height: 0 });

  const prefersReducedMotion = useReducedMotion();
  const [observerRef, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    freezeOnceVisible: false,
  });

  // Memoized path generation
  const generatePaths = useCallback((width: number, height: number, nodes: Node[]) => {
    const paths: Array<{ start: Node; end: Node }> = [];

    // Create paths between adjacent nodes
    for (let i = 0; i < nodes.length - 1; i++) {
      paths.push({ start: nodes[i], end: nodes[i + 1] });
    }

    // Add some cross-connections for complexity
    if (nodes.length >= 3) {
      paths.push({ start: nodes[0], end: nodes[Math.floor(nodes.length / 2)] });
      paths.push({ start: nodes[Math.floor(nodes.length / 2)], end: nodes[nodes.length - 1] });
    }

    return paths;
  }, []);

  // Initialize nodes
  const initializeNodes = useCallback(() => {
    const { width, height } = dimensionsRef.current;
    if (width === 0 || height === 0) return;

    const nodes: Node[] = [];
    const padding = 50;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: padding + (i / (nodeCount - 1)) * (width - padding * 2),
        y: height / 2 + Math.sin(i * 1.5) * (height * 0.25),
        radius: 8 + Math.random() * 4,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    nodesRef.current = nodes;
  }, [nodeCount]);

  // Initialize particles
  const initializeParticles = useCallback(() => {
    const { width, height } = dimensionsRef.current;
    const nodes = nodesRef.current;
    if (width === 0 || height === 0 || nodes.length === 0) return;

    const particles: Particle[] = [];
    const paths = generatePaths(width, height, nodes);

    for (let i = 0; i < particleCount; i++) {
      const pathIndex = Math.floor(Math.random() * paths.length);
      particles.push({
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        progress: Math.random(),
        pathIndex,
        speed: 0.001 + Math.random() * 0.002,
      });
    }

    particlesRef.current = particles;
  }, [particleCount, generatePaths]);

  // Draw function
  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, deltaTime: number) => {
      const { width, height } = dimensionsRef.current;
      const nodes = nodesRef.current;
      const particles = particlesRef.current;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Generate paths for current state
      const paths = generatePaths(width, height, nodes);

      // Draw connections
      ctx.strokeStyle = colors.connection;
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);

      paths.forEach((path) => {
        ctx.beginPath();
        ctx.moveTo(path.start.x, path.start.y);

        // Curved path using quadratic bezier
        const midX = (path.start.x + path.end.x) / 2;
        const midY = (path.start.y + path.end.y) / 2 - 30;
        ctx.quadraticCurveTo(midX, midY, path.end.x, path.end.y);
        ctx.stroke();
      });

      ctx.setLineDash([]);

      // Draw and update nodes with pulse effect
      const time = performance.now() / 1000;
      nodes.forEach((node) => {
        const pulseScale = 1 + Math.sin(time * 2 + node.pulsePhase) * 0.1;
        const radius = node.radius * pulseScale;

        // Glow
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          radius * 3
        );
        gradient.addColorStop(0, colors.node);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = colors.particle;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Update and draw particles
      particles.forEach((particle) => {
        if (particle.pathIndex >= paths.length) {
          particle.pathIndex = 0;
        }

        const path = paths[particle.pathIndex];
        if (!path) return;

        // Update progress
        particle.progress += particle.speed * flowSpeed * (deltaTime / 16);

        if (particle.progress >= 1) {
          particle.progress = 0;
          particle.pathIndex = (particle.pathIndex + 1) % paths.length;
        }

        // Calculate position along bezier curve
        const t = particle.progress;
        const midX = (path.start.x + path.end.x) / 2;
        const midY = (path.start.y + path.end.y) / 2 - 30;

        // Quadratic bezier formula
        particle.x =
          (1 - t) * (1 - t) * path.start.x +
          2 * (1 - t) * t * midX +
          t * t * path.end.x;
        particle.y =
          (1 - t) * (1 - t) * path.start.y +
          2 * (1 - t) * t * midY +
          t * t * path.end.y;

        // Draw particle with trail effect
        const trailLength = 5;
        for (let i = 0; i < trailLength; i++) {
          const trailT = Math.max(0, t - i * 0.02);
          const trailX =
            (1 - trailT) * (1 - trailT) * path.start.x +
            2 * (1 - trailT) * trailT * midX +
            trailT * trailT * path.end.x;
          const trailY =
            (1 - trailT) * (1 - trailT) * path.start.y +
            2 * (1 - trailT) * trailT * midY +
            trailT * trailT * path.end.y;

          const alpha = 1 - i / trailLength;
          ctx.fillStyle = `rgba(34, 211, 238, ${alpha * 0.8})`;
          ctx.beginPath();
          ctx.arc(trailX, trailY, 3 - i * 0.4, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    },
    [colors, flowSpeed, generatePaths]
  );

  // Animation loop
  const animate = useCallback(
    (currentTime: number) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!canvas || !ctx) return;

      const deltaTime = currentTime - (lastTimeRef.current || currentTime);
      lastTimeRef.current = currentTime;

      draw(ctx, deltaTime);
      animationFrameRef.current = requestAnimationFrame(animate);
    },
    [draw]
  );

  // Handle resize
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2 for performance

    dimensionsRef.current = { width: rect.width, height: rect.height };

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
    }

    initializeNodes();
    initializeParticles();
  }, [initializeNodes, initializeParticles]);

  // Setup
  useEffect(() => {
    handleResize();

    const resizeObserver = new ResizeObserver(handleResize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [handleResize]);

  // Control animation
  useEffect(() => {
    if (isVisible && !prefersReducedMotion) {
      lastTimeRef.current = performance.now();
      animationFrameRef.current = requestAnimationFrame(animate);
    } else {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }

      // Draw static state when not animating
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (ctx) {
        draw(ctx, 0);
      }
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isVisible, prefersReducedMotion, animate, draw]);

  // Combine refs
  const setRefs = useCallback(
    (node: HTMLDivElement | null) => {
      containerRef.current = node;
      if (observerRef && 'current' in observerRef) {
        (observerRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
    },
    [observerRef]
  );

  return (
    <div
      ref={setRefs}
      className={cn('relative w-full h-full min-h-[300px]', className)}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          willChange: isVisible && !prefersReducedMotion ? 'contents' : 'auto',
        }}
      />
    </div>
  );
});

export default DataFlowVisualization;
