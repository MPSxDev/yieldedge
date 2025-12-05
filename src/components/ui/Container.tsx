/**
 * Container Component - Ensures perfect centering and balanced spacing
 * 
 * Usage:
 * <Container> - Standard 7xl container (1280px max-width)
 * <Container size="6xl"> - Narrower container (1152px)
 * <Container size="full"> - Full width with padding
 */

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: '6xl' | '7xl' | 'full';
}

export default function Container({ 
  children, 
  className, 
  size = '7xl' 
}: ContainerProps) {
  const sizeClasses = {
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    'full': 'max-w-full',
  };

  return (
    <div
      className={cn(
        'w-full mx-auto',
        'px-6 sm:px-8 lg:px-12',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
}
