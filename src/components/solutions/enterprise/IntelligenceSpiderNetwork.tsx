'use client';

import { cn } from '@/lib/utils';

export interface NetworkNode {
  id: string;
  position: { x: number; y: number };
}

export interface IntelligenceSpiderNetworkProps {
  className?: string;
  nodes: NetworkNode[];
  center?: { x: number; y: number };
  animateLines?: boolean;
  animateSignals?: boolean;
  animateMarkers?: boolean;
}

const DEFAULT_CENTER = { x: 50, y: 50 };
const PATH_LENGTH = 100;

/** Hub / card half-size in viewBox units (matches ~size-20 / size-14 cards). */
const HUB_RADIUS = 10;

function spokeEndpoints(
  node: NetworkNode,
  center: { x: number; y: number }
) {
  const dx = node.position.x - center.x;
  const dy = node.position.y - center.y;
  const dist = Math.hypot(dx, dy) || 1;
  const ux = dx / dist;
  const uy = dy / dist;

  return {
    x1: center.x + ux * HUB_RADIUS,
    y1: center.y + uy * HUB_RADIUS,
    x2: node.position.x,
    y2: node.position.y,
  };
}

function spokePath(
  node: NetworkNode,
  center: { x: number; y: number }
) {
  const { x1, y1, x2, y2 } = spokeEndpoints(node, center);
  return `M ${x1} ${y1} L ${x2} ${y2}`;
}

/**
 * Radial spider network with CpuArchitecture-style electric signal animation.
 */
export function IntelligenceSpiderNetwork({
  className,
  nodes,
  center = DEFAULT_CENTER,
  animateLines = true,
  animateSignals = true,
  animateMarkers = true,
}: IntelligenceSpiderNetworkProps) {
  const prefix = 'oi-network';

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      className={cn('block w-full h-full text-[#1F5CFF]/40', className)}
      aria-hidden="true"
    >
      <defs>
        {nodes.map((node) => (
          <mask key={`${prefix}-mask-${node.id}`} id={`${prefix}-mask-${node.id}`}>
            <path
              d={spokePath(node, center)}
              strokeWidth="0.65"
              stroke="white"
              fill="none"
            />
          </mask>
        ))}

        <radialGradient id={`${prefix}-signal-grad`} fx="0.5" fy="0.5" r="0.5">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="45%" stopColor="#1F5CFF" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>

        <radialGradient id={`${prefix}-hub-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1F5CFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#1F5CFF" stopOpacity="0" />
        </radialGradient>

        <marker
          id={`${prefix}-line-marker`}
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth="3"
          markerHeight="3"
        >
          <circle cx="5" cy="5" r="2" fill="#1F5CFF" fillOpacity="0.85">
            {animateMarkers && (
              <animate
                attributeName="r"
                values="0; 2.8; 2"
                dur="0.6s"
                repeatCount="indefinite"
              />
            )}
          </circle>
        </marker>
      </defs>

      {/* Ambient glow at hub */}
      <circle
        cx={center.x}
        cy={center.y}
        r="14"
        fill={`url(#${prefix}-hub-glow)`}
      />

      {/* Base connection lines */}
      <g
        stroke="currentColor"
        fill="none"
        strokeWidth="0.35"
        strokeDasharray={`${PATH_LENGTH} ${PATH_LENGTH}`}
        pathLength={PATH_LENGTH}
        strokeLinecap="round"
        markerEnd={`url(#${prefix}-line-marker)`}
      >
        {nodes.map((node, index) => (
          <path
            key={`${prefix}-line-${node.id}`}
            d={spokePath(node, center)}
            pathLength={PATH_LENGTH}
            strokeDasharray={`${PATH_LENGTH} ${PATH_LENGTH}`}
          >
            {animateLines && (
              <animate
                attributeName="stroke-dashoffset"
                from={String(PATH_LENGTH)}
                to="0"
                dur="1s"
                fill="freeze"
                calcMode="spline"
                keySplines="0.25,0.1,0.5,1"
                keyTimes="0;1"
                begin={`${index * 0.12}s`}
              />
            )}
          </path>
        ))}
      </g>

      {/* Electric signal pulses traveling along each spoke */}
      {animateSignals &&
        nodes.map((node, index) => (
          <g key={`${prefix}-signal-${node.id}`} mask={`url(#${prefix}-mask-${node.id})`}>
            <circle cx="0" cy="0" r="3.5" fill={`url(#${prefix}-signal-grad)`}>
              <animateMotion
                dur="2.2s"
                repeatCount="indefinite"
                begin={`${index * 0.35}s`}
                path={spokePath(node, center)}
              />
            </circle>
          </g>
        ))}
    </svg>
  );
}
