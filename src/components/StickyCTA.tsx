'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations('homepage.hero');

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approximately 600px)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-2xl md:hidden safe-area-inset-bottom"
        >
          <a
            href="https://wa.me/50670724236?text=Hola%2C%20me%20interesa%20agendar%20una%20conversaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Schedule a free consultation"
            className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#1F5CFF] text-white font-bold rounded-full hover:bg-[#1a4edb] transition-all shadow-lg active:scale-[0.98]"
          >
            <Calendar className="w-5 h-5" />
            {t('primaryCta')}
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
