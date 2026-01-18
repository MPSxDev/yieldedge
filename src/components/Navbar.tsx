'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { label: 'Solutions', href: '/solutions' },
    { label: 'Company', href: '/company' },
    { label: 'Careers', href: '/careers' },
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
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center cursor-pointer"
          >
            <div className="h-8 sm:h-10 w-auto relative flex-shrink-0">
              <Image
                src="/brand/logo-main.png"
                alt="Yieldge - Technology that Performs"
                width={160}
                height={40}
                className="object-contain h-full w-auto"
                priority
              />
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-base font-medium"
              >
                {link.label}
              </a>
            ))}

            {/* CTA Button */}
            <motion.a
              href="https://calendly.com/anwar-softwaredev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-[#1F5CFF] text-white font-semibold rounded-full hover:bg-[#1a4edb] transition-all duration-300 text-sm shadow-md hover:shadow-lg"
            >
              Get in Touch
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 -mr-2 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
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
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block text-gray-700 hover:text-[#1F5CFF] hover:bg-[#eff4ff] rounded-xl transition-all text-lg font-medium py-4 px-4 active:scale-[0.98]"
                  >
                    {link.label}
                  </motion.a>
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
                  Get in Touch
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
