'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { crCompanyContent } from '@/lib/content';

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % content.mission.donation.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? content.mission.donation.images.length - 1 : prev - 1
    );
  };

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
            animate="visible"
            variants={staggerContainer}
            className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 lg:p-16 max-w-5xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                {content.mission.donation.title}
              </h2>
              
              {/* Paragraphs Together */}
              <div className="space-y-4 mb-12 max-w-3xl mx-auto">
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  {content.mission.donation.firstParagraph}
                </p>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  {content.mission.donation.secondParagraph}
                </p>
              </div>

              {/* Images Carousel - One at a time */}
              <div className="mb-12 max-w-3xl mx-auto">
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gray-50">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={content.mission.donation.images[currentImageIndex]}
                        alt={`Donación ${currentImageIndex + 1}`}
                        fill
                        className="object-contain p-4"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Controls - Below the image */}
                {content.mission.donation.images.length > 1 && (
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <button
                      onClick={prevImage}
                      className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 hover:border-[#1F5CFF] shadow-md flex items-center justify-center transition-all hover:scale-110"
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft className="w-5 h-5 text-[#1F5CFF]" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex gap-2">
                      {content.mission.donation.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`h-2.5 rounded-full transition-all ${
                            index === currentImageIndex
                              ? 'bg-[#1F5CFF] w-8'
                              : 'bg-gray-300 hover:bg-gray-400 w-2.5'
                          }`}
                          aria-label={`Ir a imagen ${index + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={nextImage}
                      className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 hover:border-[#1F5CFF] shadow-md flex items-center justify-center transition-all hover:scale-110"
                      aria-label="Siguiente imagen"
                    >
                      <ChevronRight className="w-5 h-5 text-[#1F5CFF]" />
                    </button>
                  </div>
                )}
              </div>

              {/* Einstein Quote */}
              <div className="p-6 sm:p-8 bg-[#eff4ff] rounded-2xl border-l-4 border-[#1F5CFF] max-w-3xl mx-auto">
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
              href="mailto:contacto@yieldge.com"
              className="inline-flex items-center gap-2 bg-[#1F5CFF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a4edb] transition-colors"
            >
              Iniciar Conversación
            </motion.a>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
