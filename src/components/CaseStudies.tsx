'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Zap, Clock } from 'lucide-react';

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

const caseStudies = [
  {
    title: 'E-Commerce Platform',
    industry: 'Retail',
    challenge: 'Tiempos de carga lentos afectaban las conversiones',
    solution: 'Optimización de arquitectura y CDN',
    results: [
      { icon: TrendingUp, metric: '+156%', label: 'Conversiones' },
      { icon: Zap, metric: '-73%', label: 'Tiempo de carga' },
      { icon: Clock, metric: '99.9%', label: 'Uptime' },
    ],
    color: 'blue',
  },
  {
    title: 'FinTech SaaS',
    industry: 'Finanzas',
    challenge: 'Escalabilidad limitada para crecimiento internacional',
    solution: 'Migración a arquitectura serverless',
    results: [
      { icon: TrendingUp, metric: '+320%', label: 'Usuarios' },
      { icon: Zap, metric: '-62%', label: 'Costos infra' },
      { icon: Clock, metric: '<50ms', label: 'Latencia API' },
    ],
    color: 'emerald',
  },
  {
    title: 'HealthTech Platform',
    industry: 'Salud',
    challenge: 'Procesamiento lento de datos médicos',
    solution: 'Pipeline de datos optimizado con IA',
    results: [
      { icon: TrendingUp, metric: '+89%', label: 'Eficiencia' },
      { icon: Zap, metric: '-85%', label: 'Tiempo proceso' },
      { icon: Clock, metric: '100%', label: 'Compliance' },
    ],
    color: 'violet',
  },
];

export default function CaseStudies() {
  return (
    <section
      id="resultados"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50/30 overflow-hidden py-24 sm:py-32 lg:py-40"
    >
      {/* Background decoration */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
      >
        {/* Section content - Perfectly centered */}
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-gray-900 mb-8 sm:mb-10 leading-[1.1] flex flex-col items-center justify-center gap-4"
          >
            <span className="text-5xl sm:text-6xl md:text-7xl">🌎</span>
            <span>Empresas que confían en la innovación</span>
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="space-y-8 text-xl sm:text-2xl md:text-3xl font-light text-gray-600 leading-relaxed mb-12 sm:mb-16 max-w-5xl mx-auto"
          >
            <p>
              En Costa Rica y Chile, decenas empresas están transformando su crecimiento con soluciones digitales inteligentes.
            </p>
            <p>
              Desde PYMEs en San José hasta startups en Santiago, ayudamos a marcas a optimizar procesos, escalar ventas y crear experiencias que conectan.
            </p>
          </motion.div>

          {/* CTA - BIGGER */}
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
            >
              Sé parte del cambio
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
