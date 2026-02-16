'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import LanguageSwitcher from './LanguageSwitcher';

// Helper function to get the vertical prefix from the current pathname
function getVerticalPrefix(pathname: string): string {
  const verticals = ['real-estate', 'construction', 'cr', 'professional-services', 'beauty', 'viberescue'];
  for (const vertical of verticals) {
    if (pathname.startsWith(`/${vertical}`)) {
      return `/${vertical}`;
    }
  }
  return '';
}

// Route-aware navigation helper functions
function logoHref(pathname: string): string {
  const prefix = getVerticalPrefix(pathname);
  return prefix || '/';
}

function solutionsHref(pathname: string): string {
  const prefix = getVerticalPrefix(pathname);
  return prefix ? `${prefix}/solutions` : '/solutions';
}

function companyHref(pathname: string): string {
  const prefix = getVerticalPrefix(pathname);
  // For CR route, use /mision instead of /company
  if (prefix === '/cr') {
    return '/cr/mision';
  }
  return prefix ? `${prefix}/company` : '/company';
}

function careersHref(pathname: string): string {
  const prefix = getVerticalPrefix(pathname);
  return prefix ? `${prefix}/careers` : '/careers';
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('nav');
  const tCommon = useTranslations('common');

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Build nav links with dynamic hrefs based on current route context
  const navLinks = [
    { label: t('solutions'), href: solutionsHref(pathname) },
    { label: t('company'), href: companyHref(pathname) },
    { label: t('careers'), href: careersHref(pathname) },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo - route-aware: links to vertical root when inside a vertical */}
          <Link href={logoHref(pathname)} className="flex items-center cursor-pointer">
            <motion.div className="h-10 sm:h-10 w-auto relative flex-shrink-0 overflow-hidden">
              <Image
                src="/brand/logo-main.png"
                alt={tCommon('logoAlt')}
                width={140}
                height={36}
                className="object-contain h-full w-auto max-h-10"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-base font-medium"
              >
                {link.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <LanguageSwitcher variant="compact" />

            {/* CTA Button */}
            <motion.a
              href="https://calendly.com/anwar-softwaredev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-[#1F5CFF] text-white font-semibold rounded-full hover:bg-[#1a4edb] transition-all duration-300 text-sm shadow-md hover:shadow-lg"
            >
              {t('getInTouch')}
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <LanguageSwitcher variant="compact" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -mr-2 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-colors"
              aria-label={mobileMenuOpen ? t('closeMenu') : t('openMenu')}
              aria-expanded={mobileMenuOpen}
            >
              <motion.div
                initial={false}
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 top-16 sm:top-20 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:hidden bg-white border-t border-gray-200 shadow-xl relative z-50"
            >
              <div className="px-4 sm:px-6 py-6 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-gray-700 hover:text-[#1F5CFF] hover:bg-[#eff4ff] rounded-xl transition-all text-lg font-medium py-4 px-4 active:scale-[0.98]"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.a
                  href="https://calendly.com/anwar-softwaredev"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="block w-full px-6 py-4 bg-[#1F5CFF] text-white font-semibold rounded-xl hover:bg-[#1a4edb] active:scale-[0.98] transition-all duration-300 text-center shadow-lg mt-4 text-lg"
                >
                  {t('getInTouch')}
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
