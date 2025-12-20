'use client';

import { motion } from 'framer-motion';
import Container from './ui/Container';
import { iconMap } from '@/lib/iconMap';

interface SocialProofSectionProps {
  stats: Array<{
    icon: string;
    value: string;
    label: string;
  }>;
}

export default function SocialProofSection({ stats }: SocialProofSectionProps) {
  return (
    <section className="relative bg-white py-16 sm:py-20 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon] || iconMap.Timer;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'hsl(173, 80%, 95%)' }}>
                    <IconComponent className="w-6 h-6" style={{ color: 'hsl(173, 80%, 40%)' }} />
                  </div>
                </div>
                <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2" style={{ color: 'hsl(173, 80%, 40%)' }}>
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

