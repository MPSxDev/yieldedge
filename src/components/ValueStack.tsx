'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, Gift, Shield } from 'lucide-react';
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
    <section id="value-stack" className="relative py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-100 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6"
          >
            {content.sectionLabel}
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            {content.title}{' '}
            <span className="text-blue-600">{content.titleHighlight}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {content.items.map((item, index) => {
            const IconComponent = iconMap[item.icon] || iconMap.Globe;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                  item.highlight
                    ? 'bg-blue-50 border-blue-200 shadow-lg shadow-blue-100'
                    : 'bg-white border-gray-200 hover:border-blue-200 hover:shadow-lg'
                }`}
              >
                {item.highlight && (
                  <span className="absolute -top-3 left-6 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    Most Popular
                  </span>
                )}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  item.highlight ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
                }`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                {item.perceivedValue && (
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-green-600 font-semibold">{item.perceivedValue}</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Price Comparison */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-2xl mx-auto mb-12"
        >
          <motion.div
            variants={fadeInUp}
            className="bg-white border-2 border-gray-200 rounded-3xl p-8 text-center shadow-xl"
          >
            <div className="mb-6">
              <span className="text-gray-500 text-lg">Total Value:</span>
              <div className="text-4xl font-bold text-gray-400 line-through">
                {content.totalPerceivedValue}
              </div>
            </div>
            <div className="mb-6">
              <span className="text-gray-500 text-lg">Your Investment:</span>
              <div className="text-5xl sm:text-6xl font-bold text-blue-600">
                {content.actualPrice}
              </div>
            </div>
            <div className="inline-block px-6 py-2 bg-green-100 text-green-700 rounded-full font-bold text-lg mb-8">
              {content.savings}
            </div>

            {/* CTA Button */}
            <motion.a
              href={content.ctaLink}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-blue-600 text-white text-xl font-bold rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40"
            >
              {content.ctaText}
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            {content.ctaSubtext && (
              <p className="mt-4 text-sm text-gray-500">{content.ctaSubtext}</p>
            )}
          </motion.div>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="max-w-2xl mx-auto"
        >
          <div className="flex items-start gap-4 p-6 bg-green-50 border-2 border-green-200 rounded-2xl">
            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{content.guarantee.title}</h4>
              <p className="text-gray-600">{content.guarantee.description}</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
