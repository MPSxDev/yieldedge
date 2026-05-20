'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  Database,
  Cpu,
  GitBranch,
  Layers,
  Workflow,
  Zap,
} from 'lucide-react';
import Container from '@/components/ui/Container';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const nodeAnimation = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const connectionAnimation = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: 'easeInOut' as const, delay: 0.5 },
  },
};

interface SystemNode {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  position: { x: number; y: number };
}

const systemNodes: SystemNode[] = [
  { id: 'data', icon: Database, position: { x: 10, y: 30 } },
  { id: 'process', icon: Workflow, position: { x: 30, y: 10 } },
  { id: 'ai', icon: Cpu, position: { x: 50, y: 50 } },
  { id: 'integration', icon: GitBranch, position: { x: 70, y: 20 } },
  { id: 'layers', icon: Layers, position: { x: 90, y: 40 } },
  { id: 'action', icon: Zap, position: { x: 50, y: 80 } },
];

/**
 * OperationalIntelligence - Connected systems visualization section
 * Shows AI orchestration, data flows, and institutional systems
 */
const OperationalIntelligence = memo(function OperationalIntelligence() {
  const t = useTranslations('solutionsPage.enterprise');

  return (
    <section
      id="operational-intelligence"
      className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-50" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-3 text-gray-500 font-medium text-xs uppercase tracking-[0.2em] mb-6"
            >
              <span className="w-8 h-px bg-gray-400" />
              {t('intelligence.eyebrow')}
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-gray-900 mb-6"
            >
              {t('intelligence.title')}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 leading-relaxed mb-8"
            >
              {t('intelligence.description')}
            </motion.p>

            {/* Features list */}
            <motion.ul variants={staggerContainer} className="space-y-4">
              {(['dataFlow', 'aiOrchestration', 'realTimeVisibility'] as const).map(
                (feature) => (
                  <motion.li
                    key={feature}
                    variants={fadeInUp}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#1F5CFF] to-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-medium mb-1">
                        {t(`intelligence.features.${feature}.title`)}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {t(`intelligence.features.${feature}.description`)}
                      </p>
                    </div>
                  </motion.li>
                )
              )}
            </motion.ul>
          </motion.div>

          {/* Right: Visualization */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="relative"
          >
            {/* Card */}
            <div className="relative bg-white rounded-2xl border border-gray-200 p-8 lg:p-12 shadow-sm">
              {/* Glow effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-[#1F5CFF]/10 via-blue-400/10 to-[#1F5CFF]/10 rounded-2xl blur-xl opacity-50" />

              {/* SVG Visualization */}
              <div className="relative aspect-square">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  aria-hidden="true"
                >
                  {/* Connection lines */}
                  <motion.path
                    variants={connectionAnimation}
                    d="M15 35 L35 15 L55 55 L75 25 L95 45"
                    fill="none"
                    stroke="url(#connectionGradientLight)"
                    strokeWidth="0.5"
                    strokeDasharray="4 2"
                  />
                  <motion.path
                    variants={connectionAnimation}
                    d="M55 55 L55 85"
                    fill="none"
                    stroke="url(#connectionGradientLight)"
                    strokeWidth="0.5"
                    strokeDasharray="4 2"
                  />

                  {/* Gradient definition */}
                  <defs>
                    <linearGradient
                      id="connectionGradientLight"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#1F5CFF" />
                      <stop offset="100%" stopColor="#60a5fa" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Animated nodes */}
                {systemNodes.map((node, index) => (
                  <motion.div
                    key={node.id}
                    variants={nodeAnimation}
                    custom={index}
                    className="absolute"
                    style={{
                      left: `${node.position.x}%`,
                      top: `${node.position.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div className="relative group">
                      {/* Pulse effect */}
                      <div className="absolute inset-0 bg-[#1F5CFF]/10 rounded-xl blur-lg group-hover:bg-[#1F5CFF]/20 transition-all" />
                      {/* Node */}
                      <div className="relative w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-xl border border-gray-200 flex items-center justify-center group-hover:border-[#1F5CFF]/50 transition-colors shadow-sm">
                        <node.icon className="w-5 h-5 lg:w-6 lg:h-6 text-[#1F5CFF]" />
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Central hub */}
                <motion.div
                  variants={nodeAnimation}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1F5CFF] to-blue-400 rounded-2xl blur-2xl opacity-30" />
                    <div className="relative w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-[#1F5CFF] to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Cpu className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Label */}
              <div className="text-center mt-8">
                <span className="text-gray-500 text-sm">
                  {t('intelligence.visualLabel')}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
});

export default OperationalIntelligence;
