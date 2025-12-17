'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MessageCircle, Zap } from 'lucide-react';
import Image from 'next/image';
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
}

export default function FinalCTA({ content = homepageContent.finalCTA }: FinalCTAProps) {
  return (
    <section className="relative bg-white py-24 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/30" />

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: '0px 0px -100px 0px' }}
        >
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            {/* Content */}
            <div className="p-10 sm:p-12 lg:p-16 flex flex-col justify-center">
              <motion.div variants={fadeInUp}>
                <p className="text-blue-100 font-semibold mb-4 text-sm uppercase tracking-wide">
                  {content.sectionLabel}
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  {content.title}
                </h2>
                <p className="text-lg sm:text-xl text-blue-50 leading-relaxed mb-8">
                  {content.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-3 mb-10">
                  {content.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-white">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mr-3">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.a
                  href="https://calendly.com/anwar-softwaredev"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 px-8 py-5 bg-white text-blue-600 text-lg font-bold rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  {content.ctaText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-blue-100">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Immediate availability</span>
                  </div>
                  <span className="hidden sm:inline">•</span>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>No commitment</span>
                  </div>
                  <span className="hidden sm:inline">•</span>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    <span>Clear results</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Image */}
            <div className="relative min-h-[400px] lg:min-h-[600px] bg-blue-700">
              <Image
                src={content.image}
                alt={content.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
                loading="lazy"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-600/20" />
            </div>
          </div>
        </div>
        </motion.div>
      </Container>
    </section>
  );
}
