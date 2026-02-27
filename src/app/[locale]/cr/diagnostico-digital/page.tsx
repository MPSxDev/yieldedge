'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Container from '@/components/ui/Container';
import CompanyLogos from '@/components/CompanyLogos';
import { crDiagnosticoContent, crContent } from '@/lib/content';
import { iconMap } from '@/lib/iconMap';
import { CheckCircle, ArrowRight, Phone, Mail, Clock } from 'lucide-react';

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

export default function DiagnosticoDigitalPage() {
  const content = crDiagnosticoContent;

  return (
    <div className="min-h-screen bg-white">
      <Navbar hideNavLinks />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={content.hero.backgroundImage}
            alt="Diagnóstico Digital"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <Container className="relative z-10 py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
            >
              {content.hero.heading}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-2xl sm:text-3xl text-[#60a5fa] font-medium mb-4"
            >
              {content.hero.subheading}
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8"
            >
              {content.hero.description}
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <a
                href={content.hero.primaryCtaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1da851] transition-all text-lg shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {content.hero.primaryCta}
              </a>
              <a
                href="#pain-points"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all text-lg border border-white/20"
              >
                {content.hero.softCta}
              </a>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* 2. PAIN POINTS SECTION */}
      <section id="pain-points" className="py-20 sm:py-28 bg-gray-50 scroll-mt-20">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <p className="text-[#1F5CFF] font-semibold mb-4 text-sm uppercase tracking-wide">
                {content.painPoints.sectionLabel}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {content.painPoints.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {content.painPoints.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {content.painPoints.points.map((point, index) => {
                const IconComponent = iconMap[point.icon] || iconMap.AlertCircle;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all group"
                  >
                    <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                      <IconComponent className="w-7 h-7 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {point.description}
                    </p>
                    <p className="text-red-600 font-medium text-sm">
                      → {point.impact}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              variants={fadeInUp}
              className="text-center bg-gradient-to-r from-[#eff4ff] to-[#dbe6ff] rounded-2xl p-8 sm:p-12"
            >
              <p className="text-xl sm:text-2xl text-gray-800 font-medium leading-relaxed">
                {content.painPoints.emotionalClose}
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* 3. REFRAME SECTION */}
      <section className="py-20 sm:py-28 bg-white">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center"
            >
              {content.reframe.title}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 mb-6 text-center"
            >
              {content.reframe.intro}
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-2xl font-bold text-[#1F5CFF] mb-8 text-center"
            >
              {content.reframe.problem}
            </motion.p>

            <motion.div variants={fadeInUp} className="mb-8">
              <p className="text-lg text-gray-700 mb-4 font-medium">Un sistema que:</p>
              <ul className="space-y-3">
                {content.reframe.systemBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-lg text-gray-700">
                    <CheckCircle className="w-6 h-6 text-[#1F5CFF] mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid sm:grid-cols-2 gap-6 mb-8"
            >
              <div className="bg-red-50 rounded-2xl p-6 border-l-4 border-red-500">
                <p className="text-lg text-red-800 font-medium">
                  {content.reframe.comparison.without}
                </p>
              </div>
              <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-500">
                <p className="text-lg text-green-800 font-medium">
                  {content.reframe.comparison.with}
                </p>
              </div>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-2xl font-bold text-gray-900 text-center"
            >
              {content.reframe.transition}
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* 4. AUTHORITY SECTION */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <p className="text-[#60a5fa] font-semibold mb-4 text-sm uppercase tracking-wide">
                {content.authority.sectionLabel}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                {content.authority.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {content.authority.description}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4 mb-12 max-w-3xl mx-auto">
              {content.authority.points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10"
                >
                  <ArrowRight className="w-6 h-6 text-[#60a5fa] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-200 leading-relaxed">{point}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12"
            >
              {content.authority.stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-[#60a5fa] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-center text-gray-400 italic"
            >
              {content.authority.trustLine}
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Company Logos */}
      {crContent.companyLogos && crContent.companyLogos.logos.length > 0 && (
        <CompanyLogos
          sectionLabel={crContent.companyLogos.sectionLabel}
          title={crContent.companyLogos.title}
          titleHighlight={crContent.companyLogos.titleHighlight}
          description={crContent.companyLogos.description}
          logos={crContent.companyLogos.logos}
        />
      )}

      {/* 5. SOLUTIONS SECTION */}
      <section className="py-20 sm:py-28 bg-white">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <p className="text-[#1F5CFF] font-semibold mb-4 text-sm uppercase tracking-wide">
                {content.solutions.sectionLabel}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {content.solutions.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {content.solutions.intro}
              </p>
            </motion.div>

            <div className="space-y-16">
              {content.solutions.items.map((item, index) => {
                const IconComponent = iconMap[item.icon] || iconMap.Globe;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                      isEven ? '' : 'lg:flex-row-reverse'
                    }`}
                  >
                    <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-[#dbe6ff] rounded-2xl flex items-center justify-center">
                          <IconComponent className="w-7 h-7 text-[#1F5CFF]" />
                        </div>
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                            {item.title}
                          </h3>
                          <p className="text-[#1F5CFF] font-medium">{item.tagline}</p>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <CheckCircle className="w-5 h-5 text-[#1F5CFF] mr-3 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="bg-green-50 rounded-xl p-4 border-l-4 border-green-500">
                        <p className="text-green-800 font-medium">
                          <strong>Resultado:</strong> {item.result}
                        </p>
                      </div>
                    </div>

                    <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                      <div className="relative w-full h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-[#eff4ff] to-gray-100 shadow-xl">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-16 text-center bg-gradient-to-r from-[#eff4ff] to-[#dbe6ff] rounded-2xl p-8 sm:p-12"
            >
              <p className="text-xl sm:text-2xl text-gray-800 font-medium leading-relaxed">
                {content.solutions.integrationNote}
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* 6. DIFFERENTIATION SECTION */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center"
            >
              {content.differentiation.title}
            </motion.h2>

            <motion.div variants={fadeInUp} className="mb-12">
              <div className="bg-red-50 rounded-2xl p-6 sm:p-8 border border-red-200 mb-6">
                <p className="text-lg text-red-800 leading-relaxed">
                  {content.differentiation.chaosDescription}
                </p>
              </div>

              <p className="text-2xl font-bold text-gray-900 text-center mb-6">
                O podés tener un sistema.
              </p>

              <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                <p className="text-lg text-gray-700 mb-4 font-medium">Un sistema donde:</p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {content.differentiation.systemBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-green-800">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {content.differentiation.strategicTitle}
              </h3>
              <div className="bg-[#1F5CFF] rounded-2xl p-6 sm:p-8">
                <p className="text-white/80 mb-4">Negocios con sistemas digitales estructurados:</p>
                <ul className="space-y-3">
                  {content.differentiation.strategicBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-white">
                      <ArrowRight className="w-5 h-5 text-white/60 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </motion.div>
        </Container>
      </section>

      {/* 7. FINAL CTA SECTION */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-[#1F5CFF] to-[#0d47a1]">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.p
              variants={fadeInUp}
              className="text-white/70 font-semibold mb-4 text-sm uppercase tracking-wide"
            >
              {content.finalCta.sectionLabel}
            </motion.p>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              {content.finalCta.title}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-white/90 mb-8 leading-relaxed"
            >
              {content.finalCta.description}
            </motion.p>

            <motion.div variants={fadeInUp} className="mb-8">
              <p className="text-white/80 mb-4">Te vamos a mostrar:</p>
              <ul className="space-y-2 text-left max-w-md mx-auto">
                {content.finalCta.deliverables.map((item, index) => (
                  <li key={index} className="flex items-center text-white">
                    <CheckCircle className="w-5 h-5 text-[#25D366] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-8">
              <a
                href={content.finalCta.primaryCtaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold hover:bg-[#1da851] transition-all text-xl shadow-2xl hover:shadow-3xl hover:scale-105"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {content.finalCta.primaryCta}
              </a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
            >
              {content.finalCta.supportingDetails.map((detail, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 text-white/80 text-sm"
                >
                  {detail}
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70 text-sm mb-8"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {content.finalCta.phoneNumber}
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {content.finalCta.email}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {content.finalCta.schedule}
              </div>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-white/60 italic text-lg"
            >
              {content.finalCta.finalTrustLine}
            </motion.p>
          </motion.div>
        </Container>
      </section>

      <Footer description="Yieldge Costa Rica y Latam: Tu aliado en soluciones digitales para PYMEs. Sitios web profesionales, SEO local y marketing digital que generan resultados." />
    </div>
  );
}
