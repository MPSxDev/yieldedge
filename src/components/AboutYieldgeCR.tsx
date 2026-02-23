'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { iconMap } from '@/lib/iconMap';
import { AboutYieldgeContent } from '@/lib/content';

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

interface AboutYieldgeCRProps {
  content: AboutYieldgeContent;
}

export default function AboutYieldgeCR({ content }: AboutYieldgeCRProps) {
  return (
    <section
      id="sobre-nosotros"
      className="relative bg-gradient-to-b from-[#eff4ff]/30 to-white py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: '0px 0px -100px 0px' }}
        >
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14 px-2">
            <motion.p
              variants={fadeInUp}
              className="text-[#1F5CFF] font-semibold mb-4 text-sm uppercase tracking-wide"
            >
              {content.sectionLabel}
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6 leading-tight"
            >
              {content.title}{' '}
              <span className="text-[#1F5CFF]">{content.titleHighlight}</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed"
            >
              {content.description}
            </motion.p>
          </div>

          {/* Stats Row */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14 max-w-4xl mx-auto"
          >
            {content.stats.map((stat, index) => {
              const IconComponent = iconMap[stat.icon] || iconMap.Star;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#eff4ff] flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-[#1F5CFF]" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-[#1F5CFF] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm sm:text-base">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14">
            {content.values.map((value, index) => {
              const IconComponent = iconMap[value.icon] || iconMap.Shield;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-200 hover:border-[#1F5CFF] hover:shadow-xl transition-all duration-300 motion-safe:hover:-translate-y-1 flex flex-col h-full"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#eff4ff] flex items-center justify-center mb-5">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-[#1F5CFF]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Commitment Section */}
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <Link href="/cr/mision" className="block">
              <div className="bg-gradient-to-r from-[#1F5CFF] to-[#4B7BFF] rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-center text-white shadow-xl cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-5">
                  <iconMap.Heart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  {content.commitment.title}
                </h3>
                <p className="text-white/90 leading-relaxed text-base sm:text-lg">
                  {content.commitment.description}
                </p>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
