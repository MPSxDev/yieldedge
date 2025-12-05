'use client';

import { motion } from 'framer-motion';
import { Target, Lightbulb, Shield, Zap } from 'lucide-react';
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

const values = [
  {
    icon: Target,
    title: 'Orientado a resultados',
    description: 'Cada línea de código está diseñada para generar impacto medible en tu negocio.',
  },
  {
    icon: Zap,
    title: 'Rápido y eficiente',
    description: 'Entregas ágiles sin comprometer la calidad. Tu proyecto en producción más rápido.',
  },
  {
    icon: Lightbulb,
    title: 'Innovación práctica',
    description: 'Tecnología de vanguardia aplicada a problemas reales con ROI comprobado.',
  },
  {
    icon: Shield,
    title: 'Calidad garantizada',
    description: 'Código limpio, arquitecturas sólidas y soporte continuo post-lanzamiento.',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="porque-elegirnos"
      className="relative bg-gradient-to-b from-white to-blue-50/30 py-24 sm:py-32 overflow-hidden"
    >
      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
        {/* Main Statement */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight"
          >
            No es un problema de tecnología.
            <br />
            <span className="text-blue-600">Es un problema de rendimiento.</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl text-gray-600 leading-relaxed"
          >
            En Yieldge, transformamos cada inversión en tecnología en una
            herramienta de crecimiento medible. No solo funciona —{' '}
            <span className="text-gray-900 font-semibold">rinde</span>.
          </motion.p>
        </div>

        {/* Split Layout: Image + Values */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image Side */}
          <motion.div
            variants={fadeInUp}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/img7.jpg"
                alt="Growth and performance"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
            </div>
          </motion.div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Soy un{' '}
            <span className="text-gray-900 font-semibold">ingeniero de software</span>{' '}
            enfocado en construir sistemas digitales que generan{' '}
            <span className="text-gray-900 font-semibold">crecimiento empresarial real</span>
            . Cada proyecto está diseñado para impulsar ingresos, reducir costos
            y escalar con tu negocio.
          </p>
        </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
