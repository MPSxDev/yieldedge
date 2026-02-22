'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import { WhyChooseUsContent, homepageContent } from '@/lib/content';
import { iconMap } from '@/lib/iconMap';
import { Target, TrendingUp, Lightbulb, Users } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

interface WhyChooseUsProps {
  content?: WhyChooseUsContent;
}

// Mini-card icons mapping
const miniCardIcons = {
  experience: Target,
  results: TrendingUp,
  innovation: Lightbulb,
  collaboration: Users,
};

export default function WhyChooseUs({ content = homepageContent.whyChooseUs }: WhyChooseUsProps) {
  const t = useTranslations('whyChooseUs');
  const hasNewLayout = content.topImage && content.bottomImage;
  const isStacked = content.layout === 'stacked';

  // Value keys for translations
  const valueKeys = ['experience', 'results', 'innovation', 'collaboration'] as const;

  // Bullet points data
  const bulletPoints = [
    { key: 'experience', text: t('bullets.experience') },
    { key: 'results', text: t('bullets.results') },
    { key: 'innovation', text: t('bullets.innovation') },
    { key: 'collaboration', text: t('bullets.collaboration') },
  ];

  // Use compact layout for homepage (default), legacy layouts for other pages
  const useCompactLayout = !hasNewLayout && !isStacked && content === homepageContent.whyChooseUs;

  if (useCompactLayout) {
    return (
      <section
        id="porque-elegirnos"
        className="relative bg-gradient-to-b from-white to-[#eff4ff]/30 py-10 lg:py-14 overflow-hidden"
      >
        <Container className="relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1">
              {/* Headline */}
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-3 leading-tight"
              >
                {t('title')}{' '}
                <span className="text-[#1F5CFF]">{t('titleHighlight')}</span>
              </motion.h2>

              {/* Subtitle / Positioning statement */}
              <motion.p
                variants={fadeInUp}
                className="text-sm sm:text-base text-gray-600 mb-5 leading-relaxed"
              >
                {t('subtitle')}
              </motion.p>

              {/* Bullet Points */}
              <motion.ul variants={fadeInUp} className="space-y-2 mb-6">
                {bulletPoints.map((bullet) => (
                  <li key={bullet.key} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1F5CFF] flex-shrink-0" />
                    {bullet.text}
                  </li>
                ))}
              </motion.ul>

              {/* Mini Cards Grid 2x2 */}
              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-3">
                {valueKeys.map((key) => {
                  const IconComponent = miniCardIcons[key];
                  return (
                    <div
                      key={key}
                      className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:border-[#1F5CFF]/30 hover:shadow-md transition-all duration-200"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#eff4ff] flex items-center justify-center mb-2">
                        <IconComponent className="w-4 h-4 text-[#1F5CFF]" />
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900">
                        {t(`miniCards.${key}`)}
                      </h3>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Right Column - Image */}
            <motion.div
              variants={fadeInUp}
              className="order-1 lg:order-2 flex items-center justify-center"
            >
              <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-[#eff4ff] to-gray-100">
                <Image
                  src={content.image}
                  alt={content.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                  loading="lazy"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1F5CFF]/5 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    );
  }

  // Original layouts for other pages
  return (
    <section
      id="porque-elegirnos"
      className="relative bg-gradient-to-b from-white to-[#eff4ff]/30 py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: '0px 0px -100px 0px' }}
        >
          {/* Main Statement */}
          <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14 px-2">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6 leading-tight"
            >
              {t('title')}{' '}
              <span className="text-[#1F5CFF]">{t('titleHighlight')}</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed"
            >
              {t('description')}
            </motion.p>
          </div>

          {hasNewLayout ? (
            <>
              {/* Top Image */}
              <motion.div variants={fadeInUp} className="mb-10 sm:mb-14">
                <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-[#eff4ff] to-gray-100">
                  <Image
                    src={content.topImage!}
                    alt={content.topImageAlt || 'Top section image'}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    quality={90}
                    loading="lazy"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
              </motion.div>

              {/* Cards Grid - 2x2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-14">
                {valueKeys.map((key, index) => {
                  const IconComponent = iconMap[content.values[index]?.icon] || iconMap.Shield;
                  return (
                    <motion.div
                      key={key}
                      variants={fadeInUp}
                      className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-200 hover:border-[#1F5CFF] hover:shadow-xl transition-all duration-300 motion-safe:hover:-translate-y-1 flex flex-col h-full"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#eff4ff] flex items-center justify-center mb-5">
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-[#1F5CFF]" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                        {t(`values.${key}.title`)}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base">
                        {t(`values.${key}.description`)}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Image */}
              <motion.div variants={fadeInUp}>
                <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-[#eff4ff] to-gray-100">
                  <Image
                    src={content.bottomImage!}
                    alt={content.bottomImageAlt || 'Bottom section image'}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    quality={90}
                    loading="lazy"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
              </motion.div>
            </>
          ) : isStacked ? (
            /* Stacked Layout: Image on top, Cards below */
            <>
              {/* Top Image */}
              <motion.div variants={fadeInUp} className="mb-10 sm:mb-14">
                <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-[#eff4ff] to-gray-100">
                  <Image
                    src={content.image}
                    alt={content.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    quality={90}
                    loading="lazy"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
              </motion.div>

              {/* Cards Grid - 2x2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {valueKeys.map((key, index) => {
                  const IconComponent = iconMap[content.values[index]?.icon] || iconMap.Shield;
                  return (
                    <motion.div
                      key={key}
                      variants={fadeInUp}
                      className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-200 hover:border-[#1F5CFF] hover:shadow-xl transition-all duration-300 motion-safe:hover:-translate-y-1 flex flex-col h-full"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#eff4ff] flex items-center justify-center mb-5">
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-[#1F5CFF]" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                        {t(`values.${key}.title`)}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base">
                        {t(`values.${key}.description`)}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </>
          ) : (
            /* Legacy Layout: Side-by-side Image + Cards */
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
              {/* Image Column */}
              <motion.div
                variants={fadeInUp}
                className="relative lg:min-h-[520px]"
              >
                <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-full rounded-xl overflow-hidden shadow-md bg-gradient-to-br from-[#eff4ff] to-gray-100">
                  <Image
                    src={content.image}
                    alt={content.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={90}
                    loading="lazy"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#1F5CFF]/10 to-transparent" />
                </div>
              </motion.div>

              {/* Cards Column - 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {valueKeys.map((key, index) => {
                  const IconComponent = iconMap[content.values[index]?.icon] || iconMap.Shield;
                  return (
                    <motion.div
                      key={key}
                      variants={fadeInUp}
                      className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200/60 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#eff4ff] flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-[#1F5CFF]" />
                      </div>
                      <h3 className="text-2xl font-semibold leading-tight text-gray-900 mb-3">
                        {t(`values.${key}.title`)}
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {t(`values.${key}.description`)}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
