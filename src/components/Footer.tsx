'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

// X (formerly Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const solutionsLinks = [
    { text: 'QA and Test Automation', href: '/solutions#qa-automation' },
    { text: 'Security Services', href: '/solutions#security' },
    { text: 'Technology Consulting', href: '/solutions#consulting' },
    { text: 'Mobile & Web Apps', href: '/solutions#mobile-web' },
    { text: 'Staff Augmentation', href: '/solutions#staff-augmentation' },
    { text: 'Analytics and Insights', href: '/solutions#analytics' },
    { text: 'Cloud Solutions', href: '/solutions#cloud' },
    { text: 'Offshore Development', href: '/solutions#offshore' },
    { text: 'Tailored Software', href: '/solutions#tailored-software' },
  ];

  const companyLinks = [
    { text: 'Diversity and Inclusion', href: '/company#diversity' },
    { text: 'Careers', href: '/careers' },
    { text: 'Get in Touch', href: '/get-in-touch' },
    { text: 'Report Concerns', href: '/report-concerns' },
  ];

  const legalLinks = [
    { text: 'Privacy Policy', href: '/privacy-policy' },
    { text: 'Terms and Conditions', href: '/terms' },
  ];

  const socialLinks = [
    { icon: XIcon, href: 'https://x.com/yieldge', label: 'X' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/yieldge', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/yieldge', label: 'GitHub' },
    { icon: Mail, href: 'mailto:info@yieldge.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <footer className="relative bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        {/* Main Content */}
        <div className="grid md:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <div className="h-10 w-auto relative">
                <Image
                  src="/brand/logo-main.png"
                  alt="Yieldge - Technology Solutions & Offshore Development"
                  width={160}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-8 text-sm">
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
                  className="w-10 h-10 rounded-lg bg-white border border-gray-200 hover:border-[#1F5CFF] hover:bg-[#eff4ff] flex items-center justify-center transition-all text-gray-600 hover:text-[#1F5CFF]"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-6">
              Solutions
            </h3>
            <ul className="space-y-3">
              {solutionsLinks.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#1F5CFF] transition-colors text-sm"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#1F5CFF] transition-colors text-sm"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-6">
              Contact
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
              Ready to streamline your business?
            </p>
            <motion.a
              href="https://calendly.com/anwar-softwaredev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-6 py-3 bg-[#1F5CFF] text-white font-semibold rounded-full hover:bg-[#1a4edb] transition-all duration-300 shadow-md text-sm mb-8"
            >
              Schedule a Consultation
            </motion.a>

            {/* Legal Links */}
            <div className="mt-8">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-6">
                Legal
              </h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-[#1F5CFF] transition-colors text-sm"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="mt-8 space-y-2 text-sm text-gray-600">
              <p><strong>Email:</strong> <a href="mailto:info@yieldge.com" className="hover:text-[#1F5CFF]">info@yieldge.com</a></p>
            </div>
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
            className="p-2 rounded-lg bg-white border border-gray-200 hover:border-[#1F5CFF] hover:bg-[#eff4ff] text-gray-600 hover:text-[#1F5CFF] transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
