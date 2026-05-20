/**
 * SectionServer - A Server Component version of Section without Framer Motion
 * Use this for static sections that don't need animations
 * Reduces JavaScript bundle size for pages that don't need client-side animations
 */

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';

interface SectionServerProps {
  children: ReactNode;
  className?: string;
  containerSize?: '6xl' | '7xl' | 'full';
  background?: 'white' | 'gray' | 'blue' | 'gradient';
  id?: string;
}

const backgroundClasses = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  blue: 'bg-[#1F5CFF]',
  gradient: 'bg-gradient-to-b from-[#eff4ff] to-white',
};

export default function SectionServer({
  children,
  className,
  containerSize = '7xl',
  background = 'white',
  id,
}: SectionServerProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-20 sm:py-24 lg:py-32',
        backgroundClasses[background],
        className
      )}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
}
