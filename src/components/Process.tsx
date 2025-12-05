'use client';

import { motion } from 'framer-motion';
import { Target, Code, Rocket, ArrowRight } from 'lucide-react';
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
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const steps = [
  {
    icon: Target,
    number: '01',
    title: 'Descubrimiento',
    description:
      'Analizamos tus objetivos, público y competencia. Definimos KPIs claros y una estrategia de implementación.',
    image: '/assets/img9.jpg',
    deliverables: ['Roadmap del proyecto', 'Arquitectura técnica', 'Timeline de entregas'],
  },
  {
    icon: Code,
    number: '02',
    title: 'Desarrollo',
    description:
      'Construimos con las mejores prácticas. Iteraciones rápidas, comunicación constante y demos regulares.',
    image: '/assets/img10.jpg',
    deliverables: ['Código limpio y documentado', 'Tests automatizados', 'Deploy en staging'],
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Lanzamiento',
    description:
      'Implementación sin fricción. Monitoreo activo, optimización continua y soporte dedicado post-lanzamiento.',
    image: '/assets/img11.jpg',
    deliverables: ['Deploy en producción', 'Monitoreo 24/7', 'Soporte y mejoras'],
  },
];

export default function Process() {
  return (
    <section
      id="proceso"
      className="relative bg-white py-24 sm:py-32 overflow-hidden"
    >
      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <motion.p
            variants={fadeInUp}
            className="text-blue-600 font-semibold mb-4 text-sm uppercase tracking-wide"
          >
            Cómo trabajamos
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6"
          >
            Un proceso{' '}
            <span className="text-blue-600">simple y efectivo</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Transformamos tus ideas en productos digitales con un enfoque
            estructurado y transparente.
          </motion.p>
        </div>

        {/* Timeline Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 top-full w-px h-24 bg-gradient-to-b from-blue-200 to-transparent -translate-x-1/2" />
              )}

              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl group">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />

                    {/* Number Overlay */}
                    <div className="absolute top-6 left-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <span className="text-2xl font-bold text-blue-600">
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
                    {step.description}
                  </p>

                  {/* Deliverables */}
                  <div className="mb-8">
                    <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                      Entregables
                    </p>
                    <ul className="space-y-3">
                      {step.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          className="mt-20 text-center"
        >
          <p className="text-gray-600 mb-6 text-lg">
            ¿Listo para comenzar tu transformación digital?
          </p>
          <motion.a
            href="https://calendly.com/anwar-softwaredev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-5 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40"
          >
            Agenda tu llamada
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
