'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
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
  const [isNavigating, setIsNavigating] = useState(false);
  const [isCRRoute, setIsCRRoute] = useState(false);

  // Check if we're on a CR route (always Spanish, no language switch needed)
  useEffect(() => {
    const path = window.location.pathname;
    setIsCRRoute(path.startsWith('/cr') || path.startsWith('/en/cr'));
  }, []);

  // Don't show language switcher on CR routes (always Spanish)
  if (isCRRoute) {
    return null;
  }

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === locale || isNavigating) return;

    setIsNavigating(true);

    // Get current full path from browser
    const currentFullPath = window.location.pathname;

    // Remove any locale prefix to get the clean path
    let cleanPath = currentFullPath;

    // Check if path starts with a locale prefix and remove it
    if (cleanPath.startsWith('/en/')) {
      cleanPath = cleanPath.substring(3); // Remove '/en'
    } else if (cleanPath === '/en') {
      cleanPath = '/';
    }
    // Spanish (es) is default, so paths like /privacy-policy are already clean

    // Build new path based on target locale
    let newPath: string;
    if (newLocale === 'es') {
      // Spanish is default - no prefix
      newPath = cleanPath || '/';
    } else {
      // English needs /en prefix
      newPath = `/en${cleanPath}`;
    }

    // Set the NEXT_LOCALE cookie so the middleware respects user's explicit choice
    // This prevents localeDetection from overriding the user's selection
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

    // Navigate
    window.location.href = newPath;
  };

  const isLoading = isNavigating;

  // Minimal variant - text links
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
