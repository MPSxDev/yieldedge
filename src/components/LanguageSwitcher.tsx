'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { usePathname } from '@/i18n/navigation';
import { locales, localeShortNames, defaultLocale, type Locale } from '@/i18n/config';
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
