'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

export default function VibeRescueNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; href: string }[] = [];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const sectionId = href.substring(1);
    const element = document.getElementById(sectionId) || document.querySelector(href);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full top-0 z-50 backdrop-blur-xl border-b"
      style={{ 
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
        borderColor: 'rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.a
            href="/viberescue"
            className="flex items-center cursor-pointer"
          >
            <span className="text-2xl font-bold">
              <span style={{ color: 'hsl(173, 80%, 40%)' }}>Vibe</span>
              <span className="text-white">Rescue</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white hover:opacity-80 transition-opacity duration-200 text-base font-medium cursor-pointer"
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
              className="px-6 py-3 text-white font-semibold rounded-full transition-all duration-300 text-sm shadow-md hover:shadow-lg flex items-center gap-2"
              style={{ backgroundColor: 'hsl(25, 95%, 53%)' }}
            >
              <Zap className="w-4 h-4" />
              Emergency Help
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden border-t"
          style={{ 
            backgroundColor: 'rgba(15, 23, 42, 0.95)',
            borderColor: 'rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-white hover:opacity-80 transition-opacity text-base font-medium py-2 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://calendly.com/anwar-softwaredev"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-3 text-white font-semibold rounded-full transition-all duration-300 text-center shadow-md flex items-center justify-center gap-2"
              style={{ backgroundColor: 'hsl(25, 95%, 53%)' }}
            >
              <Zap className="w-4 h-4" />
              Emergency Help
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

