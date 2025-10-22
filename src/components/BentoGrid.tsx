'use client';

import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Lightbulb, 
  Rocket
} from 'lucide-react';

const steps = [
  {
    number: "1",
    title: "Cuéntanos tu Problema",
    description: "En una simple conversación, nos cuentas qué te quita tiempo o te frena. Sin tecnicismos, solo como hablarías con un amigo.",
    icon: MessageCircle,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    number: "2",
    title: "Creamos tu Solución",
    description: "Diseñamos y construimos una herramienta digital que resuelve exactamente lo que necesitas. Nosotros nos encargamos de todo lo técnico.",
    icon: Lightbulb,
    gradient: "from-cyan-500 to-teal-500"
  },
  {
    number: "3",
    title: "Ves los Resultados",
    description: "En pocas semanas, tu negocio ahorra tiempo, reduce costos y genera más ingresos. Así de simple.",
    icon: Rocket,
    gradient: "from-teal-500 to-green-500"
  }
];

export default function BentoGrid() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 md:py-28 lg:py-36 xl:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Cómo Funciona:{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              3 Pasos Simples
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            No necesitas saber de tecnología. Nosotros convertimos tus ideas en soluciones reales.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-16 sm:space-y-20 md:space-y-32 lg:space-y-40">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-16 lg:gap-20">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0 relative">
                    <div className={`w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-2xl`}>
                      <IconComponent className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" />
                    </div>
                    <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-3 sm:border-4 border-gray-50">
                      <span className={`text-2xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 lg:mb-10 px-2">
                      {step.title}
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-2">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-14 md:left-16 top-40 sm:top-44 md:top-48 w-0.5 h-20 sm:h-24 md:h-28 bg-gradient-to-b from-gray-300 to-transparent"></div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20 md:mt-32 lg:mt-40"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg md:text-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
          >
            Comenzar Ahora
          </motion.a>
          <p className="text-sm sm:text-base text-gray-500 mt-4 sm:mt-6 px-4">Consultoría gratuita • Sin compromiso • Resultados garantizados</p>
        </motion.div>
      </div>
    </section>
  );
}
