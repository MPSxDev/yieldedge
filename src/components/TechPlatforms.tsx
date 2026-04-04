'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/ui/Container';

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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const platforms = [
  { name: 'AWS', src: '/assets/services/aws.jpg' },
  { name: 'Microsoft Azure', src: '/assets/services/microsoftazure.webp' },
  { name: 'Google Cloud', src: '/assets/services/googlecloud.webp' },
  { name: 'OpenAI', src: '/assets/services/openai.jpeg' },
  { name: 'Salesforce', src: '/assets/services/salesforce.jpg' },
  { name: 'Cloudflare', src: '/assets/services/cloudflare.jpg' },
];

interface TechPlatformsProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

export default function TechPlatforms({
  eyebrow = 'TECNOLOGÍA ENTERPRISE',
  title = 'Plataformas que Implementamos',
  subtitle = 'Utilizamos tecnologías líderes en la industria para entregar soluciones de nivel empresarial.',
}: TechPlatformsProps) {
  return (
    <section className="relative bg-gradient-to-b from-white to-[#eff4ff]/20 py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#dbe6ff]/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <span className="inline-block text-[#1F5CFF] font-bold text-xs sm:text-sm uppercase tracking-[0.15em] mb-4 sm:mb-6 px-4 py-1.5 rounded-full bg-[#eff4ff] border border-[#dbe6ff]">
              {eyebrow}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center max-w-5xl mx-auto"
          >
            {platforms.map((platform) => (
              <motion.div
                key={platform.name}
                variants={fadeInUp}
                className="group relative w-full aspect-square bg-white rounded-xl p-2 border border-gray-100 hover:border-[#1F5CFF]/30 hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <Image
                  src={platform.src}
                  alt={platform.name}
                  fill
                  className="object-contain p-2 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
