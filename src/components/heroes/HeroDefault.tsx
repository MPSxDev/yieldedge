'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import { EnhancedHeroSlide } from '@/lib/content';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

interface HeroDefaultProps {
  slide: EnhancedHeroSlide;
}

export default function HeroDefault({ slide }: HeroDefaultProps) {
  const t = useTranslations('hero');

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center bg-white overflow-hidden pt-20 sm:pt-24"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#eff4ff]/50 via-white to-white" />

      {/* Background Image */}
      {slide.backgroundImage && (
        <div className="absolute inset-0 opacity-10">
          <Image
            src={slide.backgroundImage}
            alt={t('heading')}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <Container className="relative z-10 py-10 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Heading */}
            <motion.div variants={fadeInUp} className="mb-4 sm:mb-6">
              <h2 className="text-xs sm:text-sm uppercase tracking-widest text-[#1F5CFF] font-semibold mb-3 sm:mb-4">
                {t('heading')}
              </h2>
            </motion.div>

            {/* Subheading */}
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6 leading-[1.1] sm:leading-[1.05]"
            >
              {t('subheading')}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              {t('description')}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <motion.a
                href={t('ctaLink')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-4 sm:px-8 sm:py-5 bg-[#1F5CFF] text-white text-base sm:text-lg font-semibold rounded-xl sm:rounded-full hover:bg-[#1a4edb] transition-all duration-300 shadow-lg shadow-[#1F5CFF]/30 hover:shadow-xl hover:shadow-[#1F5CFF]/40"
              >
                {t('ctaText')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {slide.secondaryCta && (
                <motion.a
                  href={slide.secondaryCta.link}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 sm:px-8 sm:py-5 bg-white text-gray-700 text-base sm:text-lg font-semibold rounded-xl sm:rounded-full border-2 border-gray-200 hover:border-[#1F5CFF] hover:text-[#1F5CFF] transition-all duration-300"
                >
                  {slide.secondaryCta.text}
                </motion.a>
              )}
            </motion.div>
          </motion.div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="order-1 lg:order-2 relative"
          >
            {slide.backgroundImage && (
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
                <Image
                  src={slide.backgroundImage}
                  alt={t('heading')}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1F5CFF]/10 to-transparent" />
              </div>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
