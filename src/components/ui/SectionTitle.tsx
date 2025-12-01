'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  children: ReactNode;
  highlight?: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function SectionTitle({
  children,
  highlight,
  subtitle,
  className = '',
  align = 'center',
}: SectionTitleProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={cn('mb-16 sm:mb-20', alignClasses[align], className)}>
      <motion.h2
        variants={fadeInUp}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-gray-900 mb-6 sm:mb-8 leading-[1.1]"
      >
        {children}{' '}
        {highlight && (
          <span className="font-light bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className="text-lg sm:text-xl md:text-2xl font-light text-gray-600 leading-relaxed max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
