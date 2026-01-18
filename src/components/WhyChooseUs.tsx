'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { WhyChooseUsContent, homepageContent } from '@/lib/content';
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

interface WhyChooseUsProps {
  content?: WhyChooseUsContent;
}

export default function WhyChooseUs({ content = homepageContent.whyChooseUs }: WhyChooseUsProps) {
  return (
    <section
      id="porque-elegirnos"
      className="relative bg-gradient-to-b from-white to-[#eff4ff]/30 py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: '0px 0px -100px 0px' }}
        >
          {/* Main Statement */}
          <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-16 lg:mb-20 px-2">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6 leading-tight"
            >
              {content.title}{' '}
              <span className="text-[#1F5CFF]">{content.titleHighlight}</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed"
            >
              {content.description}
            </motion.p>
          </div>

          {/* Split Layout: Image + Values */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
            {/* Image Side */}
            <motion.div
              variants={fadeInUp}
              className="relative"
            >
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl bg-gradient-to-br from-[#eff4ff] to-gray-100">
                <Image
                  src={content.image}
                  alt={content.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                  loading="lazy"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1F5CFF]/20 to-transparent" />
              </div>
            </motion.div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
              {content.values.map((value, index) => {
                const IconComponent = iconMap[value.icon] || iconMap.Shield;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-lg border border-gray-200 hover:border-[#1F5CFF] hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-11 h-11 sm:w-12 lg:w-14 sm:h-12 lg:h-14 rounded-xl sm:rounded-2xl bg-[#eff4ff] flex items-center justify-center mb-4 sm:mb-5 lg:mb-6">
                      <IconComponent className="w-5 h-5 sm:w-6 lg:w-7 sm:h-6 lg:h-7 text-[#1F5CFF]" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
