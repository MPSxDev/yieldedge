'use client';

import { useState, useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { locales, LOCALE_COOKIE, type Locale } from '@/i18n/config';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'default' | 'compact' | 'minimal';
}

const flagImages: Record<Locale, { src: string; alt: string }> = {
  en: { src: '/assets/flags/us.svg', alt: 'English' },
  es: { src: '/assets/flags/cr.svg', alt: 'Español' },
};

export default function LanguageSwitcher({
  className = '',
}: LanguageSwitcherProps) {
  const locale = useLocale() as Locale;
  const [isNavigating, setIsNavigating] = useState(false);
  const [isCRRoute, setIsCRRoute] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Check if we're on a CR route (always Spanish, no language switch needed)
  useEffect(() => {
    const path = window.location.pathname;
    setIsCRRoute(path.startsWith('/cr') || path.startsWith('/en/cr'));
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Don't show language switcher on CR routes (always Spanish)
  if (isCRRoute) {
    return null;
  }

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === locale || isNavigating) return;

    setIsNavigating(true);
    setIsOpen(false);

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

    // Set the locale cookie so the middleware respects user's explicit choice
    document.cookie = `${LOCALE_COOKIE}=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

    // Navigate
    window.location.href = newPath;
  };

  const isLoading = isNavigating;
  const otherLocales = locales.filter((loc) => loc !== locale);

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      {/* Current language button with flag */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isLoading}
        whileHover={isLoading ? {} : { scale: 1.02 }}
        whileTap={isLoading ? {} : { scale: 0.98 }}
        className={`flex items-center gap-1.5 transition-colors ${
          isLoading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-300 shadow-sm">
          <Image
            src={flagImages[locale].src}
            alt={flagImages[locale].alt}
            width={32}
            height={32}
            className="w-full h-full object-cover"
          />
        </div>
        <ChevronDown
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </motion.button>

      {/* Dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 min-w-[60px]"
          >
            {/* Current locale */}
            <div className="p-2 bg-[#d4ffd4] border-b border-gray-100">
              <div className="w-10 h-10 rounded-full overflow-hidden mx-auto border-2 border-white shadow-sm">
                <Image
                  src={flagImages[locale].src}
                  alt={flagImages[locale].alt}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Other locales */}
            {otherLocales.map((loc) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                disabled={isLoading}
                className="w-full p-2 hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden mx-auto border-2 border-gray-200 hover:border-[#1F5CFF] transition-colors">
                  <Image
                    src={flagImages[loc].src}
                    alt={flagImages[loc].alt}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
