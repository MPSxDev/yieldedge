'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  children?: ReactNode;
  icon?: LucideIcon;
  title?: string;
  description?: string;
  className?: string;
  iconClassName?: string;
  variant?: 'default' | 'gradient' | 'bordered';
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Card({
  children,
  icon: Icon,
  title,
  description,
  className = '',
  iconClassName = '',
  variant = 'default',
}: CardProps) {
  const variantClasses = {
    default: 'bg-white border border-gray-100 hover:border-blue-200',
    gradient: 'bg-gradient-to-br from-white to-blue-50/30 border border-blue-100',
    bordered: 'bg-white border-2 border-gray-200 hover:border-blue-400',
  };

  return (
    <motion.div
      variants={fadeInUp}
      className={cn(
        'group relative rounded-2xl transition-all duration-300',
        'hover:shadow-xl hover:shadow-blue-500/5',
        variantClasses[variant],
        className
      )}
    >
      <div className="p-8 sm:p-10 h-full flex flex-col items-center text-center">
        {Icon && (
          <div className="mb-6">
            <div className={cn(
              'w-16 h-16 rounded-2xl bg-blue-50 group-hover:bg-blue-100',
              'flex items-center justify-center transition-colors',
              iconClassName
            )}>
              <Icon className="w-8 h-8 text-blue-600" />
            </div>
          </div>
        )}

        {title && (
          <h3 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-4">
            {title}
          </h3>
        )}

        {description && (
          <p className="text-base sm:text-lg font-light text-gray-600 leading-relaxed">
            {description}
          </p>
        )}

        {children}
      </div>
    </motion.div>
  );
}
