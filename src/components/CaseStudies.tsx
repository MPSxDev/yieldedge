'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/ui/Container';

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
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const stats = [
  { value: '+156%', label: 'Conversión promedio', icon: '📈' },
  { value: '99%', label: 'Satisfacción del cliente', icon: '⭐' },
  { value: '-62%', label: 'Reducción de costos', icon: '💰' },
  { value: '24/7', label: 'Soporte automatizado', icon: '🤖' },
];

export default function CaseStudies() {
  return (
    <section
      id="resultados"
      className="relative bg-gradient-to-b from-blue-50/30 to-white py-24 sm:py-32 overflow-hidden"
    >
      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
        {/* Header with Image Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Content */}
          <motion.div variants={fadeInUp}>
            <p className="text-blue-600 font-semibold mb-4 text-sm uppercase tracking-wide">
              Resultados comprobados
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Empresas que confían en{' '}
              <span className="text-blue-600">la innovación</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Desde PYMEs en San José hasta startups en Santiago, ayudamos a
              marcas a optimizar procesos, escalar ventas y crear experiencias
              que conectan.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Costa Rica y Chile:</span> Decenas
                  de empresas transformando su crecimiento
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Resultados medibles:</span> ROI
                  promedio superior a 150% en el primer año
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image Mosaic */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/img12.jpg"
                  alt="Success story"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/img8.jpg"
                  alt="Client success"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/img2.jpg"
                  alt="Business growth"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/img13.jpg"
                  alt="Innovation"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 sm:p-8 text-center border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
