'use client';

import { memo, ReactNode, useMemo } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useReducedMotion } from './hooks/useReducedMotion';

interface GlassmorphicCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'subtle' | 'gradient';
  hoverEffect?: boolean;
  glowColor?: string;
  borderGlow?: boolean;
  className?: string;
}

/**
 * GlassmorphicCard - Enterprise-grade glassmorphism card component
 *
 * Performance Optimizations:
 * - GPU-accelerated transforms only
 * - Memoized style calculations
 * - Respects reduced motion preferences
 * - Efficient hover state handling
 * - Will-change hints for smooth animations
 */
const GlassmorphicCard = memo(function GlassmorphicCard({
  children,
  variant = 'default',
  hoverEffect = true,
  glowColor = 'rgba(59, 130, 246, 0.15)',
  borderGlow = false,
  className,
  ...motionProps
}: GlassmorphicCardProps) {
  const prefersReducedMotion = useReducedMotion();

  // Memoize variant styles
  const variantStyles = useMemo(() => {
    const variants = {
      default: {
        background: 'bg-slate-800/30',
        border: 'border-slate-700/50',
        backdrop: 'backdrop-blur-xl',
      },
      elevated: {
        background: 'bg-slate-800/50',
        border: 'border-slate-600/50',
        backdrop: 'backdrop-blur-2xl',
      },
      subtle: {
        background: 'bg-slate-900/20',
        border: 'border-slate-800/30',
        backdrop: 'backdrop-blur-sm',
      },
      gradient: {
        background: 'bg-gradient-to-br from-slate-800/40 to-slate-900/60',
        border: 'border-slate-700/50',
        backdrop: 'backdrop-blur-xl',
      },
    };
    return variants[variant];
  }, [variant]);

  // Memoize animation variants
  const cardVariants = useMemo(() => {
    if (prefersReducedMotion || !hoverEffect) {
      return {
        rest: { scale: 1, y: 0 },
        hover: { scale: 1, y: 0 },
      };
    }

    return {
      rest: {
        scale: 1,
        y: 0,
      },
      hover: {
        scale: 1.02,
        y: -4,
        transition: {
          type: 'spring' as const,
          stiffness: 400,
          damping: 25,
        },
      },
    };
  }, [prefersReducedMotion, hoverEffect]);

  return (
    <motion.div
      className={cn(
        'relative rounded-2xl overflow-hidden',
        variantStyles.background,
        variantStyles.border,
        variantStyles.backdrop,
        'border transition-colors duration-300',
        hoverEffect && !prefersReducedMotion && 'hover:border-slate-600',
        className
      )}
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      style={{
        willChange: hoverEffect ? 'transform' : 'auto',
      }}
      {...motionProps}
    >
      {/* Glow effect layer */}
      {borderGlow && (
        <div
          className="absolute -inset-px rounded-2xl blur-xl opacity-50 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${glowColor}, transparent, ${glowColor})`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Hover glow effect */}
      {hoverEffect && !prefersReducedMotion && (
        <motion.div
          className="absolute inset-0 opacity-0 pointer-events-none"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColor}, transparent 40%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
});

export default GlassmorphicCard;
