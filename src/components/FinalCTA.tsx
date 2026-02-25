'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, Clock } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import { FinalCTAContent, homepageContent } from '@/lib/content';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

interface FinalCTAProps {
  content?: FinalCTAContent;
  useContentDirectly?: boolean;
  ctaLink?: string;
  phoneNumber?: string;
  schedule?: string;
}

export default function FinalCTA({
  content = homepageContent.finalCTA,
  useContentDirectly = false,
  ctaLink = 'https://calendly.com/anwar-softwaredev',
  phoneNumber,
  schedule,
}: FinalCTAProps) {
  const t = useTranslations('finalCTA');

  // Use content directly or from translations
  const sectionLabel = useContentDirectly ? content.sectionLabel : t('sectionLabel');
  const title = useContentDirectly ? content.title : t('title');
  const description = useContentDirectly ? content.description : t('description');
  const benefits = useContentDirectly ? content.benefits : (t.raw('benefits') as string[]);
  const ctaText = useContentDirectly ? content.ctaText : t('ctaText');
  const ctaSubtext = useContentDirectly ? content.ctaSubtext : t('ctaSubtext');
  const imageAlt = useContentDirectly ? content.imageAlt : t('imageAlt');

  return (
    <section className="relative bg-white py-12 sm:py-20 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#eff4ff] via-white to-[#eff4ff]/30" />

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: '0px 0px -100px 0px' }}
        >
          <div className="bg-gradient-to-br rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl" style={{ background: 'linear-gradient(135deg, hsl(217, 91%, 60%) 0%, hsl(221, 83%, 53%) 100%)' }}>
            <div className="grid lg:grid-cols-2">
              {/* Content */}
              <div className="p-6 sm:p-10 lg:p-12 xl:p-16 flex flex-col justify-center order-2 lg:order-1">
                <motion.div variants={fadeInUp}>
                  <p className="text-[#dbe6ff] font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wide">
                    {sectionLabel}
                  </p>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                    {title}
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl text-[#eff4ff] leading-relaxed mb-6 sm:mb-8">
                    {description}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-10">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-white text-sm sm:text-base">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mr-2 sm:mr-3">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white" />
                        </div>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="mb-4 sm:mb-6">
                    <motion.a
                      href={ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3.5 sm:px-8 sm:py-5 bg-white text-[#1F5CFF] text-base sm:text-lg font-bold rounded-xl sm:rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-[#eff4ff] group w-full sm:w-auto"
                    >
                      {ctaText}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>

                  {/* Trust indicators */}
                  {(phoneNumber || schedule) && (
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-4 text-sm text-white/90">
                      {phoneNumber && (
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          <span>{phoneNumber}</span>
                        </div>
                      )}
                      {schedule && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{schedule}</span>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="text-xs sm:text-sm text-[#dbe6ff]">
                    <p>{ctaSubtext}</p>
                  </div>
                </motion.div>
              </div>

              {/* Image */}
              <div className="relative min-h-[240px] sm:min-h-[320px] lg:min-h-[500px] xl:min-h-[600px] bg-[#1a4edb] order-1 lg:order-2">
                <Image
                  src={content.image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                  loading="lazy"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-transparent to-[#1F5CFF]/20" />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
