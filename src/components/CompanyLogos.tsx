'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export interface CompanyLogo {
  name: string;
  logo: string;
  url?: string;
  large?: boolean;
}

interface CompanyLogosProps {
  sectionLabel?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  logos: CompanyLogo[];
}

export default function CompanyLogos({
  sectionLabel = 'Selected Work',
  title = 'Companies that trust',
  titleHighlight = 'us',
  description = 'We work with companies across different sectors and stages of growth.',
  logos,
}: CompanyLogosProps) {
  const totalLogos = logos?.length || 0;
  const [currentIndex, setCurrentIndex] = useState(totalLogos);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [visibleCount, setVisibleCount] = useState(1); // Start with 1 for mobile-first

  // Update visible count on mount and resize
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  if (!logos || logos.length === 0) {
    return null;
  }

  const logoHeightClass = 'max-h-64 sm:max-h-56 lg:max-h-64';
  const logoSize = 480;
  const logoSizeLarge = 600;

  // Triple the logos for seamless infinite scroll
  const extendedLogos = [...logos, ...logos, ...logos];

  const handlePrev = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  // Handle infinite loop reset
  useEffect(() => {
    if (currentIndex <= 0) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalLogos);
      }, 500);
      return () => clearTimeout(timeout);
    }
    if (currentIndex >= totalLogos * 2) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalLogos);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, totalLogos]);

  // Re-enable transition after reset
  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  // Calculate the width percentage for each logo item
  const itemWidthPercent = 100 / visibleCount;

  return (
    <section
      id="selected-work"
      className="relative bg-gradient-to-b from-white to-[#eff4ff]/20 py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .logo-carousel { --item-width: 100%; }
        @media (min-width: 640px) { .logo-carousel { --item-width: 50%; } }
        @media (min-width: 1024px) { .logo-carousel { --item-width: 33.333333%; } }
      `}} />
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#dbe6ff]/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: '0px 0px -100px 0px' }}
        >
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <motion.p
              variants={fadeInUp}
              className="text-[#1F5CFF] font-medium mb-4 text-xs uppercase tracking-wide"
            >
              {sectionLabel}
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6 leading-tight"
            >
              {title}{' '}
              {titleHighlight && <span className="text-[#1F5CFF]">{titleHighlight}</span>}
            </motion.h2>
            {description && (
              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg text-gray-600 leading-relaxed"
              >
                {description}
              </motion.p>
            )}
          </div>

          {/* Carousel with arrows */}
          <motion.div variants={fadeInUp} className="w-full">
            <div className="relative flex items-center gap-4">
              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-gray-300 text-gray-600 hover:border-[#1F5CFF] hover:text-[#1F5CFF] hover:bg-[#1F5CFF]/5 cursor-pointer flex items-center justify-center transition-all duration-200"
                aria-label="Previous logos"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Carousel Container */}
              <div
                className="logo-carousel flex-1 overflow-hidden"
                aria-label="Company logos carousel"
              >
                <div
                  className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-out' : ''}`}
                  style={{
                    transform: `translateX(calc(-${currentIndex} * var(--item-width)))`,
                  }}
                >
                  {extendedLogos.map((company, index) => {
                    const LogoWrapper = company.url ? 'a' : 'div';
                    const linkProps = company.url
                      ? {
                          href: company.url,
                          target: '_blank' as const,
                          rel: 'noopener noreferrer' as const,
                        }
                      : {};
                    const isLarge = company.large ?? false;

                    return (
                      <div
                        key={`${company.name}-${index}`}
                        className="flex-shrink-0 px-4 sm:px-6 lg:px-8 group/logo"
                        style={{ width: 'var(--item-width)' }}
                      >
                        <LogoWrapper
                          {...linkProps}
                          className={`block ${company.url ? 'cursor-pointer' : 'cursor-default'}`}
                        >
                          <div
                            className="relative w-full h-72 sm:h-60 lg:h-72 flex items-center justify-center transition-transform duration-300 ease-out group-hover/logo:scale-105 motion-reduce:transition-none motion-reduce:group-hover/logo:scale-100"
                          >
                            <Image
                              src={company.logo}
                              alt={`${company.name} logo`}
                              width={isLarge ? logoSizeLarge : logoSize}
                              height={isLarge ? 288 : 224}
                              className={`${logoHeightClass} max-w-full object-contain`}
                              sizes={isLarge ? '600px' : '480px'}
                            />
                          </div>
                        </LogoWrapper>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-gray-300 text-gray-600 hover:border-[#1F5CFF] hover:text-[#1F5CFF] hover:bg-[#1F5CFF]/5 cursor-pointer flex items-center justify-center transition-all duration-200"
                aria-label="Next logos"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
