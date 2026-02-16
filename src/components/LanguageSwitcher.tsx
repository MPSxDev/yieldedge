'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { usePathname } from '@/i18n/navigation';
import { locales, localeShortNames, localeNames, defaultLocale, type Locale } from '@/i18n/config';
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
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);

  const switchLocale = (newLocale: Locale) => {
    if (newLocale !== locale && !isNavigating) {
      setIsNavigating(true);

      // Get current path and remove any existing locale prefix
      let currentPath = window.location.pathname;

      // Remove locale prefix if present (e.g., /en/privacy-policy -> /privacy-policy)
      for (const loc of locales) {
        if (currentPath.startsWith(`/${loc}/`)) {
          currentPath = currentPath.slice(loc.length + 1);
          break;
        } else if (currentPath === `/${loc}`) {
          currentPath = '/';
          break;
        }
      }

      // Build the new URL
      let newPath: string;
      if (newLocale === defaultLocale) {
        // Default locale (es) - no prefix needed
        newPath = currentPath || '/';
      } else {
        // Non-default locale (en) - add prefix
        newPath = `/${newLocale}${currentPath}`;
      }

      // Use window.location for a clean navigation without React conflicts
      window.location.href = newPath;
    }
  };

  const isLoading = isNavigating;

  // Minimal variant - just flags
  if (variant === 'minimal') {
    return (
      <div className={`flex items-center gap-1 ${className}`}>
        {locales.map((loc) => (
          <button
            key={loc}
            onClick={() => switchLocale(loc)}
            disabled={isLoading}
            className={`text-xl transition-all ${
              locale === loc
                ? 'scale-110'
                : 'opacity-60 hover:opacity-100 hover:scale-105'
            } ${isLoading ? 'opacity-30 cursor-not-allowed' : ''}`}
            aria-label={localeNames[loc]}
          >
            {localeShortNames[loc]}
          </button>
        ))}
      </div>
    );
  }

  // Compact variant - smaller pills with flags
  if (variant === 'compact') {
    return (
      <div
        className={`flex items-center gap-0.5 p-0.5 bg-gray-100 rounded-full ${className}`}
      >
        {locales.map((loc) => (
          <motion.button
            key={loc}
            onClick={() => switchLocale(loc)}
            disabled={isLoading}
            whileHover={isLoading ? {} : { scale: 1.05 }}
            whileTap={isLoading ? {} : { scale: 0.95 }}
            className={`px-2 py-1 text-lg rounded-full transition-all duration-200 ${
              locale === loc
                ? 'bg-white shadow-sm scale-105'
                : 'opacity-60 hover:opacity-100'
            } ${isLoading ? 'opacity-30 cursor-not-allowed' : ''}`}
            aria-label={localeNames[loc]}
          >
            {localeShortNames[loc]}
          </motion.button>
        ))}
      </div>
    );
  }

  // Default variant - full pills with flags
  return (
    <div
      className={`flex items-center gap-1 p-1 bg-gray-100 rounded-full ${className}`}
    >
      {locales.map((loc) => (
        <motion.button
          key={loc}
          onClick={() => switchLocale(loc)}
          disabled={isLoading}
          whileHover={isLoading ? {} : { scale: 1.05 }}
          whileTap={isLoading ? {} : { scale: 0.95 }}
          className={`px-3 py-1.5 text-xl rounded-full transition-all duration-200 ${
            locale === loc
              ? 'bg-white shadow-sm scale-105'
              : 'opacity-60 hover:opacity-100'
          } ${isLoading ? 'opacity-30 cursor-not-allowed' : ''}`}
          aria-label={localeNames[loc]}
        >
          {localeShortNames[loc]}
        </motion.button>
      ))}
    </div>
  );
}
