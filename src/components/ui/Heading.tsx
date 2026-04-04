import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  size?: 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  className?: string;
  eyebrow?: string;
  subtitle?: string;
  centered?: boolean;
}

const sizeClasses = {
  xl: 'text-xl sm:text-2xl',
  '2xl': 'text-2xl sm:text-3xl',
  '3xl': 'text-3xl sm:text-4xl lg:text-5xl',
  '4xl': 'text-4xl sm:text-5xl lg:text-6xl',
  '5xl': 'text-5xl sm:text-6xl lg:text-7xl',
};

export default function Heading({
  children,
  as: Tag = 'h2',
  size = '3xl',
  className,
  eyebrow,
  subtitle,
  centered = false,
}: HeadingProps) {
  return (
    <div className={cn(centered && 'text-center', 'mb-8 lg:mb-12')}>
      {eyebrow && (
        <span className="inline-block text-[#1F5CFF] font-bold text-xs sm:text-sm uppercase tracking-[0.15em] mb-4 sm:mb-6 px-4 py-1.5 rounded-full bg-[#eff4ff] border border-[#dbe6ff]">
          {eyebrow}
        </span>
      )}
      <Tag
        className={cn(
          'font-bold tracking-tight text-gray-900 leading-[1.1]',
          sizeClasses[size],
          className
        )}
      >
        {children}
      </Tag>
      {subtitle && (
        <p className={cn(
          'mt-4 lg:mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed',
          centered ? 'max-w-3xl mx-auto' : 'max-w-2xl'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
