'use client';

import { motion } from 'framer-motion';
import { Code, Rocket, Target } from 'lucide-react';

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

const processSteps = [
  {
    icon: Target,
    number: '01',
    title: 'Descubrimiento',
    description: 'Entendemos tus necesidades y objetivos para crear la solución perfecta.',
  },
  {
    icon: Code,
    number: '02',
    title: 'Desarrollo',
    description: 'Construimos tu proyecto con tecnología moderna y las mejores prácticas.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Lanzamiento',
    description: 'Publicamos tu solución y te acompañamos en cada paso del crecimiento.',
  },
];

export default function Process() {
  return (
    <section
      id="proceso"
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden py-24 sm:py-32 lg:py-40"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-white to-white pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
      >
        {/* Section header - BIGGER */}
        <div className="max-w-5xl mx-auto text-center mb-20 sm:mb-24">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-gray-900 mb-8 sm:mb-10 leading-[1.1]"
          >
            Nuestro{' '}
            <span className="font-light bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              proceso
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl md:text-3xl font-light text-gray-600 leading-relaxed"
          >
            Simple, claro y efectivo. Así transformamos tus ideas en realidad.
          </motion.p>
        </div>

        {/* Process steps grid - Perfectly aligned */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-20 sm:mb-24">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative group"
            >
              <div className="bg-white rounded-3xl p-10 sm:p-12 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 h-full flex flex-col items-center text-center">
                {/* Step number - More aesthetic */}
                <div className="text-7xl sm:text-8xl font-extralight text-blue-100 group-hover:text-blue-200 transition-colors mb-6">
                  {step.number}
                </div>

                {/* Icon - Centered and uniform */}
                <div className="mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>

                {/* Content - Centered */}
                <h3 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-5">
                  {step.title}
                </h3>
                <p className="text-lg sm:text-xl font-light text-gray-600 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>

              {/* Connector line - More visible */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-5 w-10 h-0.5 bg-gradient-to-r from-blue-200 via-blue-300 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA - Centered */}
        <motion.div
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-gray-600 mb-8 text-xl sm:text-2xl font-light">
            ¿Listo para empezar tu transformación digital?
          </p>
          <motion.a
            href="https://calendly.com/anwar-softwaredev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-10 py-5 bg-blue-600 text-white text-lg sm:text-xl font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-2xl hover:shadow-blue-600/40"
          >
            Agenda tu llamada
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
