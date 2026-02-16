'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import Container from '@/components/ui/Container';
import { crCareersContent } from '@/lib/content';
import { iconMap } from '@/lib/iconMap';

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

export default function CRCareersPageContent() {
  const content = crCareersContent;

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#eff4ff] via-white to-white">
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.p
              variants={fadeInUp}
              className="text-[#1F5CFF] font-semibold mb-4 text-sm uppercase tracking-wide"
            >
              {content.hero.label}
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6"
            >
              {content.hero.title}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 leading-relaxed"
            >
              {content.hero.description}
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Culture Section */}
      <section id="culture" className="py-16 sm:py-24 scroll-mt-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {content.culture.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {content.culture.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.culture.values.map((value, index) => {
                const IconComponent = iconMap[value.icon] || iconMap.Globe;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#1F5CFF] hover:shadow-lg transition-all text-center"
                  >
                    <div className="w-14 h-14 bg-[#dbe6ff] rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-7 h-7 text-[#1F5CFF]" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Opportunities Section */}
      <section id="opportunities" className="py-16 sm:py-24 bg-gray-50 scroll-mt-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
            >
              {content.opportunities.title}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 mb-8"
            >
              {content.opportunities.description}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <div className="w-16 h-16 bg-[#dbe6ff] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-[#1F5CFF]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {content.opportunities.ctaText}
              </h3>
              <p className="text-gray-600 mb-6">
                {content.opportunities.ctaDescription}
              </p>
              <a
                href="mailto:careers@yieldge.com"
                className="inline-flex items-center gap-2 bg-[#1F5CFF] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0d47a1] transition-colors"
              >
                <Mail className="w-5 h-5" />
                careers@yieldge.com
              </a>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Why Join Section */}
      <section className="py-16 sm:py-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                ¿Por qué trabajar con nosotros?
              </h2>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-[#eff4ff] rounded-xl">
                <div className="w-8 h-8 bg-[#1F5CFF] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Impacto directo</h3>
                  <p className="text-gray-600 text-sm">Trabajás directamente con clientes y ves cómo tu trabajo ayuda a negocios reales a crecer.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-[#eff4ff] rounded-xl">
                <div className="w-8 h-8 bg-[#1F5CFF] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Flexibilidad real</h3>
                  <p className="text-gray-600 text-sm">Trabajo remoto, horarios flexibles y respeto por tu vida personal.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-[#eff4ff] rounded-xl">
                <div className="w-8 h-8 bg-[#1F5CFF] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Crecimiento profesional</h3>
                  <p className="text-gray-600 text-sm">Te apoyamos en certificaciones, cursos y desarrollo de nuevas habilidades.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
