'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useRef } from 'react';

// Smooth fade-in animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: 'easeOut' as const,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const scrollToContent = () => {
    const nextSection = document.querySelector('#servicios');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden"
      role="banner"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-white to-white" />

      {/* Soft radial glow - Apple style */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"
      />

      {/* Main content container - Perfectly centered */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-28 sm:pt-40 sm:pb-48"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-6xl mx-auto"
        >
          {/* Eyebrow text - minimalist badge */}
          <motion.div
            variants={fadeIn}
            className="mb-8 sm:mb-10"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm sm:text-base font-medium tracking-wide">
              Innovación con retorno
            </span>
          </motion.div>

          {/* Main headline - BIGGER Apple style typography */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight text-gray-900 mb-8 sm:mb-10 leading-[1.08]"
          >
            Precisión que impulsa{' '}
            <span className="block mt-3 sm:mt-4 font-light bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              el crecimiento
            </span>
          </motion.h1>

          {/* Subtitle - BIGGER and more readable */}
          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl md:text-3xl font-light text-gray-600 mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed"
          >
            Diseñamos sistemas que generan impacto real, optimizan tu infraestructura
            y escalan tu rendimiento con{' '}
            <span className="text-gray-900 font-normal">resultados medibles</span>.
          </motion.p>

          {/* CTA buttons - BIGGER and more prominent */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
          >
            {/* Primary CTA */}
            <motion.a
              href="https://calendly.com/anwar-softwaredev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full sm:w-auto px-10 py-5 text-lg sm:text-xl font-semibold bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-2xl hover:shadow-blue-600/40 text-center"
              aria-label="Agenda tu llamada gratuita"
            >
              <span className="flex items-center justify-center gap-3">
                Agenda tu llamada
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="#resultados"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-10 py-5 bg-white/80 backdrop-blur-sm text-gray-900 text-lg sm:text-xl font-medium rounded-full hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:border-gray-300 text-center"
            >
              Ver casos de éxito
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - Apple style */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 p-3 rounded-full hover:bg-gray-100 transition-colors duration-300 group"
        aria-label="Desplazarse hacia abajo"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-7 h-7 text-gray-400 group-hover:text-gray-600 transition-colors" />
        </motion.div>
      </motion.button>
    </section>
  );
}
