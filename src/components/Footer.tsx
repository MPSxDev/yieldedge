'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { text: 'Solutions', href: '#servicios' },
    { text: 'How It Works', href: '#how-it-works' },
    { text: 'Case Studies', href: '#case-studies' },
    { text: 'FAQ', href: '#faq' },
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: 'mailto:contact@yieldge.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-16 lg:gap-20 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <div className="h-10 w-auto relative">
                <Image
                  src="/brand/logo-main.png"
                  alt="Yieldge - Technology that Performs"
                  width={160}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-8">
              Technology partner specialized in web services, cloud infrastructure, and AI automation for the real-estate industry.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 flex items-center justify-center transition-all text-gray-600 hover:text-blue-600"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-6">
              Navigation
            </h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-6">
              Contact
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Ready to streamline your real-estate business?
            </p>
            <motion.a
              href="https://calendly.com/anwar-softwaredev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md text-sm"
            >
              Schedule a Consultation
            </motion.a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} Yieldge. All rights reserved.
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
