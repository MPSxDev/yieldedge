'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Container from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerSize?: '6xl' | '7xl' | 'full';
  background?: 'white' | 'gray' | 'blue' | 'gradient';
  id?: string;
  animate?: boolean;
}

const backgroundClasses = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  blue: 'bg-[#1F5CFF]',
  gradient: 'bg-gradient-to-b from-[#eff4ff] to-white',
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Section({
  children,
  className,
  containerSize = '7xl',
  background = 'white',
  id,
  animate = true,
}: SectionProps) {
  const content = (
    <Container size={containerSize}>
      {children}
    </Container>
  );

  if (animate) {
    return (
      <motion.section
        id={id}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className={cn(
          'py-20 sm:py-24 lg:py-32',
          backgroundClasses[background],
          className
        )}
      >
        {content}
      </motion.section>
    );
  }

  return (
    <section
      id={id}
      className={cn(
        'py-20 sm:py-24 lg:py-32',
        backgroundClasses[background],
        className
      )}
    >
      {content}
    </section>
  );
}
