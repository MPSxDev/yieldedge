'use client';

import { motion } from 'framer-motion';
import { AlertCircle, Search, Smartphone, Clock, Users, TrendingDown } from 'lucide-react';
import Container from '@/components/ui/Container';

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  AlertCircle,
  Search,
  Smartphone,
  Clock,
  Users,
  TrendingDown,
};

interface PainPoint {
  icon: string;
  title: string;
  description: string;
}

interface PainPointsContent {
  sectionLabel: string;
  title: string;
  titleHighlight: string;
  description: string;
  painPoints: PainPoint[];
  ctaText: string;
  ctaSubtext: string;
}

interface PainPointsProps {
  content: PainPointsContent;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export default function PainPoints({ content }: PainPointsProps) {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10"
        >
          {/* Section header */}
          <div className="text-center mb-12 sm:mb-16">
            <motion.span
              variants={fadeInUp}
              className="inline-block text-sm font-semibold text-red-600 uppercase tracking-wider mb-4"
            >
              {content.sectionLabel}
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              {content.title}{' '}
              <span className="text-red-600">{content.titleHighlight}</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              {content.description}
            </motion.p>
          </div>

          {/* Pain points grid */}
          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12"
          >
            {content.painPoints.map((painPoint, index) => {
              const IconComponent = iconMap[painPoint.icon] || AlertCircle;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                    <IconComponent className="w-6 h-6 text-red-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    {painPoint.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {painPoint.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeInUp} className="text-center">
            <p className="text-lg sm:text-xl font-medium text-gray-900 mb-2">
              {content.ctaText}
            </p>
            <p className="text-gray-500">
              {content.ctaSubtext}
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
