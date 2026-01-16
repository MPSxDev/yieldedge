'use client';

import { motion } from 'framer-motion';
import { ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';
import Image from 'next/image';
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

interface HeroProblemAgitationProps {
  slide: EnhancedHeroSlide;
}

export default function HeroProblemAgitation({ slide }: HeroProblemAgitationProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-24"
    >
      {/* Subtle gradient background with red tint for urgency */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 via-white to-white" />

      {/* Background Image */}
      {slide.backgroundImage && (
        <div className="absolute inset-0 opacity-10">
          <Image
            src={slide.backgroundImage}
            alt={slide.heading}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <Container className="relative z-10 py-20 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Heading - The Problem */}
            <motion.div variants={fadeInUp} className="mb-4">
              <h2 className="text-sm uppercase tracking-widest text-red-600 font-semibold mb-4">
                {slide.heading}
              </h2>
            </motion.div>

            {/* Subheading */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.05]"
            >
              {slide.subheading}
            </motion.h1>

            {/* Pain Points */}
            {slide.painPoints && slide.painPoints.length > 0 && (
              <motion.div variants={fadeInUp} className="mb-6 space-y-3">
                {slide.painPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Agitation Text */}
            {slide.agitationText && (
              <motion.p
                variants={fadeInUp}
                className="text-lg text-red-700/80 mb-6 leading-relaxed max-w-xl italic border-l-4 border-red-300 pl-4"
              >
                {slide.agitationText}
              </motion.p>
            )}

            {/* Promise Text */}
            {slide.promiseText && (
              <motion.div variants={fadeInUp} className="mb-8">
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-green-800 font-medium">{slide.promiseText}</p>
                </div>
              </motion.div>
            )}

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <motion.a
                href={slide.ctaLink}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-green-600 text-white text-lg font-semibold rounded-full hover:bg-green-700 transition-all duration-300 shadow-lg shadow-green-600/30 hover:shadow-xl hover:shadow-green-600/40"
              >
                {slide.ctaText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {slide.secondaryCta && (
                <motion.a
                  href={slide.secondaryCta.link}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-white text-gray-700 text-lg font-semibold rounded-full border-2 border-gray-200 hover:border-green-300 hover:text-green-600 transition-all duration-300"
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
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={slide.backgroundImage}
                  alt={slide.heading}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/20 to-transparent" />
              </div>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
