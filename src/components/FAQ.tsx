'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const faqs = [
  {
    question: 'Does AI replace human expertise in real-estate?',
    answer:
      'No. Our AI solutions enhance your expertise, not replace it. We automate repetitive tasks like lead qualification, document processing, and follow-ups — freeing you to focus on building relationships and closing deals. The human touch remains essential in real-estate.',
  },
  {
    question: 'Is my data safe and private?',
    answer:
      'Absolutely. We implement enterprise-grade security measures including encrypted data storage, secure cloud infrastructure, and strict access controls. Your client information and business data are protected with industry-leading security standards. We never share or sell your data.',
  },
  {
    question: 'How long does implementation take?',
    answer:
      'It depends on the scope of your project. Simple automation solutions can be deployed in 2-4 weeks. More comprehensive systems typically take 6-12 weeks. We work in phases, so you\'ll start seeing value early in the process, not just at the end.',
  },
  {
    question: 'What\'s the cost?',
    answer:
      'Investment varies based on your specific needs and business size. During your free consultation, we\'ll provide a detailed proposal with clear pricing. Most clients see ROI within 6-12 months through time savings, increased conversions, and reduced overhead costs.',
  },
  {
    question: 'Do I need technical staff to use your systems?',
    answer:
      'No technical expertise required. We design user-friendly interfaces and provide comprehensive training for your team. We also offer ongoing support to ensure smooth operation. If issues arise, our support team is available to help.',
  },
  {
    question: 'Can your solutions integrate with my existing tools?',
    answer:
      'Yes. We specialize in integrating with popular real-estate platforms, CRMs (like Zillow, Realtor.com, HubSpot), property management systems, and other tools you already use. Our solutions are built to enhance your current workflow, not disrupt it.',
  },
];

interface FAQItemProps {
  faq: typeof faqs[0];
  index: number;
}

function FAQItem({ faq }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      className="border-b border-gray-200 last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-start justify-between gap-4 text-left hover:bg-gray-50/50 transition-colors px-6 rounded-lg"
      >
        <span className="text-lg sm:text-xl font-semibold text-gray-900 flex-1">
          {faq.question}
        </span>
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
          {isOpen ? (
            <Minus className="w-5 h-5 text-blue-600" />
          ) : (
            <Plus className="w-5 h-5 text-blue-600" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-gray-600 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  // FAQ Structured Data for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section
      id="faq"
      className="relative bg-white py-24 sm:py-32 overflow-hidden"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.p
              variants={fadeInUp}
              className="text-blue-600 font-semibold mb-4 text-sm uppercase tracking-wide"
            >
              FAQ
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6"
            >
              Questions?{' '}
              <span className="text-blue-600">We&apos;ve got answers</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Common questions about our real-estate automation solutions
            </motion.p>
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-lg">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">
              Still have questions?
            </p>
            <motion.a
              href="https://calendly.com/anwar-softwaredev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Schedule a free consultation
            </motion.a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
