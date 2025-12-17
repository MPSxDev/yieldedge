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
      className="relative bg-gradient-to-b from-white to-blue-50/30 py-24 sm:py-32 overflow-hidden"
    >
      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: '0px 0px -100px 0px' }}
        >
        {/* Main Statement */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight"
          >
            {content.title}{' '}
            <span className="text-blue-600">{content.titleHighlight}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl text-gray-600 leading-relaxed"
          >
            {content.description}
          </motion.p>
        </div>

        {/* Split Layout: Image + Values */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image Side */}
          <motion.div
            variants={fadeInUp}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-gray-100">
              <Image
                src={content.image}
                alt={content.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                loading="lazy"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
            </div>
          </motion.div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {content.values.map((value, index) => {
              const IconComponent = iconMap[value.icon] || iconMap.Shield;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
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
