'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { crCompanyContent } from '@/lib/content';
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

export default function CRCompanyPageContent() {
  const content = crCompanyContent;

  return (
    <>
      {/* Mission Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#eff4ff] via-white to-white">
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.p
              variants={fadeInUp}
              className="text-[#1F5CFF] font-semibold mb-4 text-sm uppercase tracking-wide"
            >
              {content.mission.subtitle}
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6"
            >
              {content.mission.title}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 leading-relaxed mb-12"
            >
              {content.mission.description}
            </motion.p>
          </motion.div>

          {/* Donation Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 lg:p-16 max-w-5xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                {content.mission.donation.title}
              </h2>
              
              {/* First Paragraph */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
                {content.mission.donation.firstParagraph}
              </p>

              {/* Images - Centered and Larger */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 max-w-5xl mx-auto">
                {content.mission.donation.images.map((img, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="relative aspect-square rounded-2xl overflow-hidden shadow-xl"
                  >
                    <Image
                      src={img}
                      alt={`Donación ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Second Paragraph */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
                {content.mission.donation.secondParagraph}
              </p>

              {/* Einstein Quote */}
              <div className="mb-12 p-6 sm:p-8 bg-[#eff4ff] rounded-2xl border-l-4 border-[#1F5CFF] max-w-3xl mx-auto">
                <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 italic mb-3">
                  &ldquo;{content.mission.donation.quote.text}&rdquo;
                </p>
                <p className="text-base sm:text-lg text-gray-500">
                  — {content.mission.donation.quote.author}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#eff4ff] via-white to-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4"
              >
                {content.hero.title}
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-2xl sm:text-3xl text-[#1F5CFF] font-medium mb-6"
              >
                {content.hero.subtitle}
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-600 leading-relaxed"
              >
                {content.hero.description}
              </motion.p>
            </motion.div>
            {content.hero.image && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={content.hero.image}
                  alt={content.hero.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1F5CFF]/10 to-transparent" />
              </motion.div>
            )}
          </div>
        </Container>
      </section>

      {/* About Section with Highlights */}
      <section id="about" className="py-16 sm:py-24 scroll-mt-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="max-w-3xl mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {content.about.title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {content.about.description}
              </p>
            </motion.div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-6">
              {content.about.highlights.map((highlight, index) => {
                const IconComponent = iconMap[highlight.icon] || iconMap.Globe;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-[#eff4ff] rounded-2xl p-8 text-center"
                  >
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <IconComponent className="w-8 h-8 text-[#1F5CFF]" />
                    </div>
                    <div className="text-3xl font-bold text-[#1F5CFF] mb-1">
                      {highlight.value}
                    </div>
                    <div className="text-gray-600">{highlight.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Values Section */}
      <section id="values" className="py-16 sm:py-24 bg-gray-50 scroll-mt-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {content.values.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {content.values.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.values.items.map((value, index) => {
                const IconComponent = iconMap[value.icon] || iconMap.Globe;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#1F5CFF] hover:shadow-lg transition-all"
                  >
                    <div className="w-14 h-14 bg-[#dbe6ff] rounded-2xl flex items-center justify-center mb-4">
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

      {/* Team Section */}
      <section id="team" className="py-16 sm:py-24 scroll-mt-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
            >
              {content.team.title}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 mb-8"
            >
              {content.team.description}
            </motion.p>
            <motion.a
              variants={fadeInUp}
              href="https://wa.me/50688888888?text=Hola%2C%20quiero%20conocer%20más%20sobre%20Yieldge"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1da851] transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Hablemos por WhatsApp
            </motion.a>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
