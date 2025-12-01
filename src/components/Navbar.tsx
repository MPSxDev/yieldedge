'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Sobre Nosotros', href: '#sobre-nosotros' },
  ];

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
      className="fixed w-full top-0 z-50 backdrop-blur-xl bg-white/90 border-b border-gray-200"
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20 sm:h-24">
          {/* Logo - Centered Vertically */}
          <motion.a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 cursor-pointer"
            aria-label="Yieldge Home"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl sm:text-2xl">Y</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 tracking-tight">
              Yieldge
            </h1>
          </motion.a>

          {/* Desktop Navigation Links - Perfectly Centered */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden lg:flex gap-10 items-center"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-base font-medium cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Desktop CTA Button - Bigger and More Prominent */}
          <motion.a
            href="https://calendly.com/anwar-softwaredev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="hidden lg:inline-flex items-center px-7 py-3.5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 text-base shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 cursor-pointer"
          >
            Agenda tu llamada
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 right-0 mt-2 mx-4 bg-white/95 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-2xl lg:hidden"
        >
          <div className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-600 hover:text-gray-900 transition-colors text-base font-medium py-4 px-5 rounded-xl hover:bg-gray-50 cursor-pointer text-center"
              >
                {link.label}
              </a>
            ))}
            <div className="h-px bg-gray-100 my-2" />
            <a
              href="https://calendly.com/anwar-softwaredev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 text-base shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 text-center cursor-pointer"
            >
              Agenda tu llamada
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

