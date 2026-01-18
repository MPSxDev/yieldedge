'use client';

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import Container from '@/components/ui/Container';
import { ValueStackContent, valueStackContent } from '@/lib/content';
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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

interface ValueStackProps {
  content?: ValueStackContent;
}

export default function ValueStack({ content = valueStackContent }: ValueStackProps) {
  return (
    <section id="value-stack" className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#dbe6ff] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#dbe6ff] rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center mb-10 sm:mb-16 px-2"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[#dbe6ff] text-[#1F5CFF] rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6"
          >
            {content.sectionLabel}
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6"
          >
            {content.title}{' '}
            <span className="text-[#1F5CFF]">{content.titleHighlight}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {content.subtitle}
          </motion.p>
        </motion.div>

        {/* Value Items Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12"
        >
          {content.items.map((item, index) => {
            const IconComponent = iconMap[item.icon] || iconMap.Globe;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`relative p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 ${
                  item.highlight
                    ? 'bg-[#eff4ff] border-[#dbe6ff] shadow-lg shadow-[#dbe6ff]'
                    : 'bg-white border-gray-200 hover:border-[#dbe6ff] hover:shadow-lg'
                }`}
              >
                {item.highlight && (
                  <span className="absolute -top-2.5 sm:-top-3 left-4 sm:left-6 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-[#1F5CFF] text-white text-xs font-semibold rounded-full">
                    Most Popular
                  </span>
                )}
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 ${
                  item.highlight ? 'bg-[#1F5CFF] text-white' : 'bg-[#dbe6ff] text-[#1F5CFF]'
                }`}>
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="max-w-2xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-green-50 border-2 border-green-200 rounded-xl sm:rounded-2xl">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2">{content.guarantee.title}</h4>
              <p className="text-sm sm:text-base text-gray-600">{content.guarantee.description}</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
