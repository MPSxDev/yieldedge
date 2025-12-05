'use client';

import { motion } from 'framer-motion';
import { Globe, Bot, Database, ArrowRight } from 'lucide-react';
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

const services = [
  {
    icon: Globe,
    title: 'Desarrollo Web de Alto Impacto',
    description:
      'Sitios web modernos diseñados para convertir. Rápidos, mobile-first y optimizados para generar ventas y reservas.',
    features: ['Conversión optimizada', 'Mobile-first', 'SEO integrado', 'Sistemas de reservas'],
    image: '/assets/img4.jpg',
  },
  {
    icon: Bot,
    title: 'Automatización con IA',
    description:
      'Asistentes IA que trabajan 24/7. Automatiza reservas, soporte y seguimientos con privacidad total.',
    features: ['Recepcionista IA', 'Recordatorios auto', 'IA local privada', 'Soporte 24/7'],
    image: '/assets/img5.jpg',
  },
  {
    icon: Database,
    title: 'Sistemas Escalables',
    description:
      'Dashboards y sistemas que crecen con tu negocio. Análisis, reportes y flujos que ahorran tiempo.',
    features: ['Dashboards custom', 'CRM integrado', 'Reportes en tiempo real', 'APIs escalables'],
    image: '/assets/img6.jpg',
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative w-full bg-white overflow-hidden"
    >
      {/* Background decoration - properly contained */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Main container - perfectly centered with equal horizontal padding */}
      <Container className="relative z-10 pt-32 pb-24 sm:pt-40 sm:pb-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.p
            variants={fadeInUp}
            className="text-blue-600 font-semibold mb-4 text-sm uppercase tracking-wide"
          >
            Nuestros servicios
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6"
          >
            Soluciones que impulsan{' '}
            <span className="text-blue-600">resultados</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Ayudamos a negocios en EE.UU. y LATAM con tecnología que aumenta
            ingresos y optimiza operaciones.
          </motion.p>
        </div>

        {/* Bento Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* First Service - Takes full left column */}
          {(() => {
            const service = services[0];
            const IconComponent = service.icon;
            return (
              <motion.div
                variants={fadeInUp}
                className="lg:row-span-2 group relative bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative w-full h-80 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Icon overlay */}
                  <div className="absolute top-6 left-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <IconComponent className="w-7 h-7 text-blue-600" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href="https://calendly.com/anwar-softwaredev"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                  >
                    Más información
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })()}

          {/* Second Service - Top right */}
          {(() => {
            const service = services[1];
            const IconComponent = service.icon;
            return (
              <motion.div
                variants={fadeInUp}
                className="group relative bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500"
              >
                <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 p-8">
                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                      <IconComponent className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <motion.a
                      href="https://calendly.com/anwar-softwaredev"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                    >
                      Explorar
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  </div>

                  {/* Image */}
                  <div className="relative w-full h-64 sm:h-full rounded-2xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })()}

          {/* Third Service - Bottom right */}
          {(() => {
            const service = services[2];
            const IconComponent = service.icon;
            return (
              <motion.div
                variants={fadeInUp}
                className="group relative bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500"
              >
                <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 p-8">
                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                      <IconComponent className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <motion.a
                      href="https://calendly.com/anwar-softwaredev"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                    >
                      Explorar
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  </div>

                  {/* Image */}
                  <div className="relative w-full h-64 sm:h-full rounded-2xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </div>
        </motion.div>
      </Container>
    </section>
  );
}
