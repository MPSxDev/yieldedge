'use client';

import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Shield } from 'lucide-react';

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

const values = [
  {
    icon: Target,
    title: 'Enfoque en resultados',
    description:
      'Cada línea de código, cada decisión técnica está orientada a generar impacto medible en tu negocio.',
  },
  {
    icon: Lightbulb,
    title: 'Innovación constante',
    description:
      'Aplicamos las tecnologías más avanzadas sin perder de vista la estabilidad y el rendimiento.',
  },
  {
    icon: Users,
    title: 'Colaboración cercana',
    description:
      'Trabajamos como una extensión de tu equipo, con transparencia total en cada etapa del proceso.',
  },
  {
    icon: Shield,
    title: 'Calidad garantizada',
    description:
      'Código limpio, arquitecturas sólidas y pruebas exhaustivas para garantizar la máxima fiabilidad.',
  },
];

export default function Vision() {
  return (
    <section
      id="sobre-nosotros"
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden py-24 sm:py-32 lg:py-40"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-white to-white pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

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
            Nuestra{' '}
            <span className="font-light bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              visión
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl md:text-3xl font-light text-gray-600 leading-relaxed"
          >
            En Yieldge, creemos que la tecnología debe ser un motor de
            crecimiento, no una barrera. Por eso construimos sistemas que no
            solo funcionan, sino que{' '}
            <span className="text-gray-900 font-normal">rinden</span>.
          </motion.p>
        </div>

        {/* Values grid - Uniform cards, centered content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-20 sm:mb-24">
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative"
            >
              <div className="bg-white rounded-3xl p-10 sm:p-12 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 h-full flex flex-col items-center text-center">
                {/* Icon - Centered and uniform */}
                <div className="mb-8">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                    <value.icon className="w-8 h-8 sm:w-9 sm:h-9 text-blue-600" />
                  </div>
                </div>

                {/* Content - Centered */}
                <h3 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-5">
                  {value.title}
                </h3>
                <p className="text-lg sm:text-xl font-light text-gray-600 leading-relaxed max-w-md">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA - Centered */}
        <motion.div
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-gray-600 mb-8 text-xl sm:text-2xl font-light">
            Trabajemos juntos para hacer realidad tu visión
          </p>
          <motion.a
            href="https://calendly.com/anwar-softwaredev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-10 py-5 bg-blue-600 text-white text-lg sm:text-xl font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-2xl hover:shadow-blue-600/40"
          >
            Comienza hoy
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
