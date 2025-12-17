'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { HeroContent, homepageContent } from '@/lib/content';

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
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

interface HeroProps {
  content?: HeroContent;
}

export default function Hero({ content = homepageContent.hero }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-24"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-white" />

      {/* Main container - perfectly centered */}
      <Container className="relative z-10 py-20 sm:py-32">
        {/* Content grid - balanced on large screens */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
                {content.badge}
              </span>
            </motion.div>

            {/* Headline - MASSIVE */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.05]"
            >
              {content.headline}{' '}
              <span className="text-blue-600">{content.headlineHighlight}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed max-w-xl"
            >
              {content.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="https://calendly.com/anwar-softwaredev"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40"
              >
                {content.primaryCTA}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-5 bg-white text-gray-900 text-lg font-medium rounded-full border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
              >
                {content.secondaryCTA}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={content.heroImage}
                alt={content.heroImageAlt}
                fill
                className="object-cover"
                priority
              />
              {/* Subtle overlay for text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
