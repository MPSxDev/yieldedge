'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { crSolutionsContent } from '@/lib/content';
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

interface CRSolutionsPageContentProps {
  hideHero?: boolean;
}

export default function CRSolutionsPageContent({ hideHero = false }: CRSolutionsPageContentProps) {
  const content = crSolutionsContent;

  return (
    <>
      {/* Hero Section */}
      {!hideHero && <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#eff4ff] via-white to-white">
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.p
              variants={fadeInUp}
              className="text-[#1F5CFF] font-semibold mb-4 text-sm uppercase tracking-wide"
            >
              {content.hero.label}
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6"
            >
              {content.hero.title}{' '}
              <span className="text-[#1F5CFF]">{content.hero.titleHighlight}</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 leading-relaxed"
            >
              {content.hero.description}
            </motion.p>
          </motion.div>
        </Container>
      </section>}

      {/* Quick Navigation */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <Container>
          <div className="flex flex-wrap gap-3 justify-center">
            {content.solutions.map((solution, index) => (
              <a
                key={index}
                href={`#solution-${index}`}
                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-600 hover:text-[#1F5CFF] hover:bg-[#eff4ff] border border-gray-200 hover:border-[#dbe6ff] transition-all"
              >
                {solution.title}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 sm:py-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={staggerContainer}
            className="space-y-16"
          >
            {content.solutions.map((solution, index) => {
              const IconComponent = iconMap[solution.icon] || iconMap.Globe;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  id={`solution-${index}`}
                  variants={fadeInUp}
                  className={`grid lg:grid-cols-2 gap-12 items-center scroll-mt-32 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-[#dbe6ff] rounded-2xl flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-[#1F5CFF]" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        {solution.title}
                      </h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {solution.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-gray-700"
                        >
                          <svg
                            className="w-5 h-5 text-[#1F5CFF] mr-3 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-[#1F5CFF] font-medium bg-[#eff4ff] px-4 py-2 rounded-full inline-block">
                      {solution.forWho}
                    </p>
                  </div>

                  {/* Image */}
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="relative w-full h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-[#eff4ff] to-gray-100">
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#1F5CFF] to-[#0d47a1]">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
            >
              {content.cta.title}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-white/90 mb-8"
            >
              {content.cta.description}
            </motion.p>
            <motion.a
              variants={fadeInUp}
              href="mailto:contacto@yieldge.com"
              className="inline-flex items-center gap-2 bg-[#1F5CFF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a4edb] transition-colors text-lg"
            >
              {content.cta.buttonText}
            </motion.a>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
