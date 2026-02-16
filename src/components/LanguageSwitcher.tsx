'use client';

import { useState, useTransition } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { locales, localeShortNames, type Locale } from '@/i18n/config';
import { motion } from 'framer-motion';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'default' | 'compact' | 'minimal';
}

export default function LanguageSwitcher({
  className = '',
  variant = 'default',
}: LanguageSwitcherProps) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isNavigating, setIsNavigating] = useState(false);

  const switchLocale = (newLocale: Locale) => {
    if (newLocale !== locale && !isPending && !isNavigating) {
      setIsNavigating(true);
      startTransition(() => {
        router.replace(pathname, { locale: newLocale });
        // Reset after a short delay to allow navigation to complete
        setTimeout(() => setIsNavigating(false), 500);
      });
    }
  };

  const isLoading = isPending || isNavigating;

  // Minimal variant - just text links
  if (variant === 'minimal') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {locales.map((loc, index) => (
          <span key={loc} className="flex items-center">
            {index > 0 && <span className="text-gray-400 mx-1">/</span>}
            <button
              onClick={() => switchLocale(loc)}
              disabled={isLoading}
              className={`text-sm font-medium transition-colors ${
                locale === loc
                  ? 'text-[#1F5CFF]'
                  : 'text-gray-600 hover:text-gray-900'
              } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {localeShortNames[loc]}
            </button>
          </span>
        ))}
      </div>
    );
  }

  // Compact variant - smaller pills
  if (variant === 'compact') {
    return (
      <div
        className={`flex items-center gap-1 p-0.5 bg-gray-100 rounded-full ${className}`}
      >
        {locales.map((loc) => (
          <motion.button
            key={loc}
            onClick={() => switchLocale(loc)}
            disabled={isLoading}
            whileHover={isLoading ? {} : { scale: 1.02 }}
            whileTap={isLoading ? {} : { scale: 0.98 }}
            className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
              locale === loc
                ? 'bg-white text-[#1F5CFF] shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {localeShortNames[loc]}
          </motion.button>
        ))}
      </div>
    );
  }

  // Default variant - full pills
  return (
    <div
      className={`flex items-center gap-1 p-1 bg-gray-100 rounded-full ${className}`}
    >
      {locales.map((loc) => (
        <motion.button
          key={loc}
          onClick={() => switchLocale(loc)}
          disabled={isLoading}
          whileHover={isLoading ? {} : { scale: 1.02 }}
          whileTap={isLoading ? {} : { scale: 0.98 }}
          className={`px-3 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 ${
            locale === loc
              ? 'bg-white text-[#1F5CFF] shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {localeShortNames[loc]}
        </motion.button>
      ))}
    </div>
  );
}
