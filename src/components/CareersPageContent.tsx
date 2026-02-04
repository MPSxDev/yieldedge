'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';

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

interface CareersPageContentProps {
  /**
   * Optional vertical name to display in the title.
   * If provided, displays "Careers at Yieldge - {verticalName}"
   */
  verticalName?: string;
}

/**
 * Reusable careers page content component.
 * Used by both the global /careers page and vertical-specific careers pages.
 */
export default function CareersPageContent({ verticalName }: CareersPageContentProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#eff4ff] via-white to-white">
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
              Join Our Team
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6"
            >
              Careers at{' '}
              <span className="text-[#1F5CFF]">Yieldge</span>
              {verticalName && (
                <span className="block text-2xl sm:text-3xl lg:text-4xl text-gray-600 mt-2 font-normal">
                  {verticalName} Division
                </span>
              )}
            </motion.h1>
          </motion.div>
        </Container>
      </section>

      {/* No Open Positions */}
      <section className="py-16 sm:py-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-xl text-gray-700">
              We currently don&apos;t have any open positions.
            </p>
            <p className="text-gray-500 mt-4">
              Check back soon or follow us on social media for updates.
            </p>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
