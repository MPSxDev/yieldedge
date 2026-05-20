/**
 * Centralized Animation Configuration
 * Performance-optimized animation presets for enterprise UI
 *
 * Design Principles:
 * - Consistent timing across all components
 * - GPU-accelerated transforms (translate, scale, opacity)
 * - Avoid properties that trigger layout (width, height, top, left)
 * - Respect reduced motion preferences
 */

// Easing functions using cubic-bezier values
export const easingFunctions = {
  // Standard easing - smooth deceleration
  standard: [0.25, 0.1, 0.25, 1] as const,

  // Entrance - slightly more dramatic entrance
  entrance: [0.0, 0.0, 0.2, 1] as const,

  // Exit - quicker exit
  exit: [0.4, 0.0, 1, 1] as const,

  // Sharp - more responsive feel
  sharp: [0.4, 0.0, 0.6, 1] as const,

  // Smooth - buttery smooth for subtle animations
  smooth: [0.45, 0.05, 0.55, 0.95] as const,

  // Elastic - slight bounce at the end
  elastic: [0.68, -0.55, 0.265, 1.55] as const,

  // Anticipation - slight pullback before animation
  anticipation: [0.68, -0.6, 0.32, 1.6] as const,
};

// Duration presets in seconds
export const durations = {
  instant: 0,
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
  slowest: 1.2,
};

// Spring configurations for Framer Motion
export const springConfigs = {
  // Tight and responsive
  tight: {
    type: 'spring' as const,
    stiffness: 400,
    damping: 30,
    mass: 1,
  },

  // Smooth and natural
  smooth: {
    type: 'spring' as const,
    stiffness: 200,
    damping: 25,
    mass: 1,
  },

  // Bouncy - for playful interactions
  bouncy: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 15,
    mass: 1,
  },

  // Gentle - for subtle movements
  gentle: {
    type: 'spring' as const,
    stiffness: 120,
    damping: 20,
    mass: 1,
  },

  // Heavy - for dramatic reveals
  heavy: {
    type: 'spring' as const,
    stiffness: 80,
    damping: 15,
    mass: 2,
  },
};

// Animation configuration presets
export const animationConfig = {
  // Fade animations
  fade: {
    in: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: durations.normal, ease: easingFunctions.standard },
      },
    },
    out: {
      visible: { opacity: 1 },
      hidden: {
        opacity: 0,
        transition: { duration: durations.fast, ease: easingFunctions.exit },
      },
    },
  },

  // Slide animations (GPU-optimized with transform)
  slide: {
    up: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: durations.slow, ease: easingFunctions.standard },
      },
    },
    down: {
      hidden: { opacity: 0, y: -30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: durations.slow, ease: easingFunctions.standard },
      },
    },
    left: {
      hidden: { opacity: 0, x: 30 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: durations.slow, ease: easingFunctions.standard },
      },
    },
    right: {
      hidden: { opacity: 0, x: -30 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: durations.slow, ease: easingFunctions.standard },
      },
    },
  },

  // Scale animations
  scale: {
    in: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: durations.normal, ease: easingFunctions.entrance },
      },
    },
    out: {
      visible: { opacity: 1, scale: 1 },
      hidden: {
        opacity: 0,
        scale: 0.95,
        transition: { duration: durations.fast, ease: easingFunctions.exit },
      },
    },
    bounce: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: springConfigs.bouncy,
      },
    },
  },

  // Stagger container configurations
  stagger: {
    fast: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05, delayChildren: 0.1 },
      },
    },
    normal: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.15 },
      },
    },
    slow: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
      },
    },
  },

  // Enterprise-specific animations
  enterprise: {
    // Hero section entrance
    heroEntrance: {
      hidden: { opacity: 0, y: 50, scale: 0.98 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,
          ease: easingFunctions.smooth,
        },
      },
    },

    // Card hover effect
    cardHover: {
      rest: {
        scale: 1,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
      hover: {
        scale: 1.02,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        transition: springConfigs.tight,
      },
    },

    // Data flow pulse
    dataPulse: {
      animate: {
        scale: [1, 1.05, 1],
        opacity: [0.5, 1, 0.5],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      },
    },

    // Node connection
    nodeConnection: {
      hidden: { pathLength: 0, opacity: 0 },
      visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { duration: 1.5, ease: easingFunctions.smooth },
          opacity: { duration: 0.3 },
        },
      },
    },

    // Grid line animation
    gridLine: {
      hidden: { scaleX: 0, opacity: 0 },
      visible: {
        scaleX: 1,
        opacity: 0.1,
        transition: {
          duration: 0.8,
          ease: easingFunctions.entrance,
        },
      },
    },
  },
};

// Viewport configuration for scroll animations
export const viewportConfig = {
  default: { once: true, amount: 0.2 },
  eager: { once: true, amount: 0.1 },
  full: { once: true, amount: 0.5 },
  repeat: { once: false, amount: 0.2 },
};

// Performance-optimized transform styles
export const transformStyles = {
  // Use transform3d to force GPU acceleration
  gpuAccelerated: {
    transform: 'translate3d(0, 0, 0)',
    backfaceVisibility: 'hidden' as const,
    perspective: 1000,
  },

  // Will-change hints for animations
  willChangeOpacity: { willChange: 'opacity' },
  willChangeTransform: { willChange: 'transform' },
  willChangeAll: { willChange: 'transform, opacity' },
};

// CSS animation keyframes (for non-Framer animations)
export const cssKeyframes = {
  pulse: `
    @keyframes pulse {
      0%, 100% { opacity: 0.5; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.05); }
    }
  `,
  shimmer: `
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
  `,
  float: `
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
  `,
  glow: `
    @keyframes glow {
      0%, 100% { box-shadow: 0 0 5px rgba(31, 92, 255, 0.3); }
      50% { box-shadow: 0 0 20px rgba(31, 92, 255, 0.6); }
    }
  `,
};

export default animationConfig;
