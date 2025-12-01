'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50/30 overflow-hidden"
      id="servicios"
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main content - Perfectly centered */}
      <motion.div
        style={{ opacity, scale }}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32 lg:py-40"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Headline - MUCH BIGGER */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-gray-900 mb-8 sm:mb-10 leading-[1.1]"
          >
            La mayoría de las empresas no tienen{' '}
            <span className="font-light">un problema de tecnología.</span>
            <br />
            <span className="block mt-4 sm:mt-6 font-normal bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Tienen un problema de rendimiento.
            </span>
          </motion.h2>

          {/* Subtitle - BIGGER and more readable */}
          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl md:text-3xl font-light text-gray-600 leading-relaxed max-w-5xl mx-auto mb-12 sm:mb-16"
          >
            En Yieldge transformamos cada línea de código en una herramienta de
            crecimiento medible. Tecnología que no solo funciona, sino que{' '}
            <span className="text-gray-900 font-normal">rinde</span>.
          </motion.p>

          {/* CTA - BIGGER button */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center"
          >
            <motion.a
              href="https://calendly.com/anwar-softwaredev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-10 py-5 bg-blue-600 text-white text-lg sm:text-xl font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-2xl hover:shadow-blue-600/40"
              aria-label="Agenda una consulta gratuita"
            >
              Hablemos de tu proyecto
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

