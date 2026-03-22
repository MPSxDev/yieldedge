'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import ValueProps from '@/components/sections/ValueProps';

const charityImages = [
  '/assets/charity/1cha.jpeg',
];

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

interface CompanyPageContentProps {
  verticalName?: string;
}

export default function CompanyPageContent({ verticalName }: CompanyPageContentProps) {
  const t = useTranslations('company');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % charityImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? charityImages.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#eff4ff] via-white to-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeInUp}
                className="text-[#1F5CFF] font-semibold mb-4 text-sm uppercase tracking-wide"
              >
                {t('aboutUs')}
              </motion.p>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6"
              >
                {t('buildingFuture')}
                {verticalName && (
                  <span className="block text-2xl sm:text-3xl lg:text-4xl text-gray-600 mt-2 font-normal">
                    {t('division', { vertical: verticalName })}
                  </span>
                )}
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-600 leading-relaxed"
              >
                {t('leadershipDescription')}
              </motion.p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Mission/Donation Section */}
      <section className="py-16 sm:py-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.p
              variants={fadeInUp}
              className="text-[#1F5CFF] font-semibold mb-4 text-sm uppercase tracking-wide"
            >
              {t('mission.subtitle')}
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6"
            >
              {t('mission.title')}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 leading-relaxed"
            >
              {t('mission.description')}
            </motion.p>
          </motion.div>

          {/* Donation Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 lg:p-16 max-w-5xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                {t('mission.donation.title')}
              </h3>

              {/* Paragraphs */}
              <div className="space-y-4 mb-12 max-w-3xl mx-auto">
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  {t('mission.donation.firstParagraph')}
                </p>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  {t('mission.donation.secondParagraph')}
                </p>
              </div>

              {/* Images Carousel */}
              <div className="mb-12 max-w-3xl mx-auto">
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
                        src={charityImages[currentImageIndex]}
                        alt={`${t('mission.donation.imageAlt')} ${currentImageIndex + 1}`}
                        fill
                        className="object-contain p-4"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Controls */}
                {charityImages.length > 1 && (
                  <div className="flex items-center justify-center gap-4 mt-6">
                    <motion.button
                      onClick={prevImage}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 rounded-full bg-[#1F5CFF] flex items-center justify-center transition-all shadow-md hover:bg-[#1a4fdb] hover:shadow-lg"
                      aria-label={t('mission.donation.prevImage')}
                    >
                      <ChevronLeft className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </motion.button>

                    {/* Dots Indicator */}
                    <div className="flex items-center gap-2 px-2">
                      {charityImages.map((_, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          className={`h-2.5 rounded-full transition-all duration-300 ${
                            index === currentImageIndex
                              ? 'bg-[#1F5CFF] w-8'
                              : 'bg-gray-300 hover:bg-gray-400 w-2.5'
                          }`}
                          aria-label={`${t('mission.donation.goToImage')} ${index + 1}`}
                        />
                      ))}
                    </div>

                    <motion.button
                      onClick={nextImage}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 rounded-full bg-[#1F5CFF] flex items-center justify-center transition-all shadow-md hover:bg-[#1a4fdb] hover:shadow-lg"
                      aria-label={t('mission.donation.nextImage')}
                    >
                      <ChevronRight className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </motion.button>
                  </div>
                )}
              </div>

              {/* Einstein Quote */}
              <div className="p-6 sm:p-8 bg-[#eff4ff] rounded-2xl border-l-4 border-[#1F5CFF] max-w-3xl mx-auto">
                <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 italic mb-3">
                  &ldquo;{t('mission.donation.quote.text')}&rdquo;
                </p>
                <p className="text-base sm:text-lg text-gray-500">
                  — {t('mission.donation.quote.author')}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 scroll-mt-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {t('aboutYieldge')}
                {verticalName && <span className="text-[#1F5CFF]"> {verticalName}</span>}
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {t('leadershipDescription')}
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex justify-center"
            >
              <div className="bg-[#eff4ff] rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-[#1F5CFF] mb-2">15+</div>
                <div className="text-gray-600">{t('experience')}</div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Value Props Section */}
      <ValueProps />

      {/* Development Program Section */}
      <section id="development-program" className="py-16 sm:py-24 scroll-mt-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp}>
              <div className="w-20 h-20 bg-[#dbe6ff] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-10 h-10 text-[#1F5CFF]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {t('developmentProgram')}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t('programDescription')}
              </p>
              <div className="grid sm:grid-cols-3 gap-6 text-left">
                <div className="bg-[#eff4ff] rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{t('training.technical')}</h3>
                  <p className="text-gray-600 text-sm">{t('training.technicalDesc')}</p>
                </div>
                <div className="bg-[#eff4ff] rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{t('training.certification')}</h3>
                  <p className="text-gray-600 text-sm">{t('training.certificationDesc')}</p>
                </div>
                <div className="bg-[#eff4ff] rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{t('training.career')}</h3>
                  <p className="text-gray-600 text-sm">{t('training.careerDesc')}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
