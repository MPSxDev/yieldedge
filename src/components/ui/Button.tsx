'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  target,
  rel,
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-full transition-all duration-300 text-center inline-flex items-center justify-center gap-3';

  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30',
    secondary: 'bg-white/80 backdrop-blur-sm text-gray-900 hover:bg-gray-50 border border-gray-200 hover:border-gray-300',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 border border-gray-200',
  };

  const sizeClasses = {
    sm: 'px-8 py-4 text-base',
    md: 'px-10 py-5 text-lg',
    lg: 'px-12 py-6 text-xl',
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Component>
  );
}
