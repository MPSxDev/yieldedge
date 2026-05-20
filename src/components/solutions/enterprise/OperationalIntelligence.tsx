'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  Database,
  GitBranch,
  Layers,
  Workflow,
  Zap,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import { IntelligenceSpiderNetwork } from '@/components/solutions/enterprise/IntelligenceSpiderNetwork';
import IntelligenceCentralHub from '@/components/solutions/enterprise/IntelligenceCentralHub';

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

const CENTER = { x: 50, y: 50 };
const ORBIT_RADIUS = 36;
const START_ANGLE_DEG = -90;

const peripheralNodeDefs = [
  { id: 'data', icon: Database },
  { id: 'process', icon: Workflow },
  { id: 'integration', icon: GitBranch },
  { id: 'layers', icon: Layers },
  { id: 'action', icon: Zap },
] as const;

function positionOnOrbit(index: number, total: number) {
  const angleRad = ((START_ANGLE_DEG + (360 / total) * index) * Math.PI) / 180;
  return {
    x: CENTER.x + ORBIT_RADIUS * Math.cos(angleRad),
    y: CENTER.y + ORBIT_RADIUS * Math.sin(angleRad),
  };
}

const systemNodes = peripheralNodeDefs.map((node, index) => ({
  ...node,
  position: positionOnOrbit(index, peripheralNodeDefs.length),
}));

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
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-50" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl border border-gray-200 p-8 lg:p-12 shadow-sm">
              <div className="absolute -inset-px bg-gradient-to-r from-[#1F5CFF]/10 via-blue-400/10 to-[#1F5CFF]/10 rounded-2xl blur-xl opacity-50" />

              <div className="relative aspect-square w-full">
                <IntelligenceSpiderNetwork
                  className="absolute inset-0"
                  nodes={systemNodes}
                  center={CENTER}
                />

                {systemNodes.map((node, index) => (
                  <div
                    key={node.id}
                    className="absolute z-[5] -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${node.position.x}%`,
                      top: `${node.position.y}%`,
                    }}
                  >
                    <motion.div variants={nodeAnimation} custom={index}>
                      <div className="relative group">
                        <div className="relative w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-xl border border-gray-200 flex items-center justify-center group-hover:border-[#1F5CFF]/50 transition-colors shadow-sm">
                          <node.icon className="w-5 h-5 lg:w-6 lg:h-6 text-[#1F5CFF]" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}

                <IntelligenceCentralHub />
              </div>

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
