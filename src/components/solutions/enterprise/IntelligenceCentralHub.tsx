'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

const hubAnimation = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

/**
 * CPU hub overlay — centered with flex.
 */
const IntelligenceCentralHub = memo(function IntelligenceCentralHub() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={hubAnimation}
      className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
    >
      <div className="relative size-20 lg:size-24 bg-gradient-to-r from-[#1F5CFF] to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-[#1F5CFF]/30">
        <Cpu className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
      </div>
    </motion.div>
  );
});

export default IntelligenceCentralHub;
