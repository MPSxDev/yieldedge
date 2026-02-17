'use client';

import { motion } from 'framer-motion';
import { Instagram, ArrowUp } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

interface FooterProps {
  description?: string;
}

export default function Footer({ description }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const t = useTranslations('footer');
  const tLinks = useTranslations('solutionsLinks');
  const tCommon = useTranslations('common');

  const solutionsLinks = [
    { text: tLinks('qaAutomation'), href: '/solutions#qa-automation' },
    { text: tLinks('security'), href: '/solutions#security' },
    { text: tLinks('consulting'), href: '/solutions#consulting' },
    { text: tLinks('mobileWeb'), href: '/solutions#mobile-web' },
    { text: tLinks('staffAugmentation'), href: '/solutions#staff-augmentation' },
    { text: tLinks('analytics'), href: '/solutions#analytics' },
    { text: tLinks('cloud'), href: '/solutions#cloud' },
    { text: tLinks('offshore'), href: '/solutions#offshore' },
    { text: tLinks('tailoredSoftware'), href: '/solutions#tailored-software' },
  ];

  const legalLinks = [
    { text: t('privacyPolicy'), href: '/privacy-policy' },
    { text: t('termsAndConditions'), href: '/terms' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/yieldge', label: 'Instagram' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        {/* Main Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-16 mb-10 sm:mb-16">
          {/* Brand - Full width on mobile */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-8 sm:mb-6">
              <div className="h-8 sm:h-10 w-auto max-w-[120px] sm:max-w-[160px] overflow-hidden">
                <Image
                  src="/brand/logo-main.png"
                  alt={tCommon('logoAlt')}
                  width={120}
                  height={32}
                  className="object-contain h-full w-auto"
                />
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-xs sm:text-sm max-w-xs">
              {description || t('description')}
            </p>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white border border-gray-200 hover:border-[#1F5CFF] hover:bg-[#eff4ff] flex items-center justify-center transition-all text-gray-600 hover:text-[#1F5CFF]"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Solutions Links */}
          <div className="col-span-1">
            <h3 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wide mb-4 sm:mb-6">
              {t('solutions')}
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {solutionsLinks.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#1F5CFF] transition-colors text-xs sm:text-sm block py-0.5"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links - Shown on mobile only */}
          <div className="col-span-1 md:hidden">
            <h3 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
              {t('legal')}
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#1F5CFF] transition-colors text-xs block py-0.5"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal - Hidden on small mobile, visible on md+ */}
          <div className="hidden md:block col-span-1">
            <h3 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wide mb-4 sm:mb-6">
              {t('contact')}
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm">
              {t('readyToStreamline')}
            </p>
            <motion.a
              href="https://calendly.com/anwar-softwaredev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-5 py-2.5 sm:px-6 sm:py-3 bg-[#1F5CFF] text-white font-semibold rounded-full hover:bg-[#1a4edb] transition-all duration-300 shadow-md text-xs sm:text-sm mb-6 sm:mb-8"
            >
              {t('scheduleConsultation')}
            </motion.a>

            {/* Legal Links */}
            <div className="mt-6 sm:mt-8">
              <h3 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wide mb-4 sm:mb-6">
                {t('legal')}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.text}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-[#1F5CFF] transition-colors text-xs sm:text-sm block py-0.5"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="mt-6 sm:mt-8 space-y-2 text-xs sm:text-sm text-gray-600">
              <p>
                <strong>{t('email')}:</strong>{' '}
                <a href="mailto:info@yieldge.com" className="hover:text-[#1F5CFF]">
                  info@yieldge.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Mobile CTA - Only visible on small screens */}
        <div className="md:hidden mb-8 text-center">
          <p className="text-gray-600 mb-4 text-sm">{t('readyToStreamline')}</p>
          <motion.a
            href="https://calendly.com/anwar-softwaredev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block w-full px-6 py-3.5 bg-[#1F5CFF] text-white font-semibold rounded-xl hover:bg-[#1a4edb] transition-all duration-300 shadow-md text-sm"
          >
            {t('scheduleConsultation')}
          </motion.a>
          <div className="mt-4 text-xs text-gray-600">
            <a href="mailto:info@yieldge.com" className="hover:text-[#1F5CFF]">
              info@yieldge.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 lg:pt-10 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
            {t('copyright', { year: currentYear })}
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg bg-white border border-gray-200 hover:border-[#1F5CFF] hover:bg-[#eff4ff] text-gray-600 hover:text-[#1F5CFF] transition-all"
            aria-label={t('backToTop')}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
