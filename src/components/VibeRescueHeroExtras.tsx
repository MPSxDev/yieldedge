'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, Star } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import Container from './ui/Container';

// Set countdown to 24 hours from now
const getTargetDate = () => {
  const date = new Date();
  date.setHours(date.getHours() + 24);
  return date;
};

export default function VibeRescueHeroExtras() {
  return (
    <>
      {/* Stats Row - positioned after hero content */}
      <Container className="py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-8 lg:gap-12"
        >
          <div className="flex items-center gap-3">
            <Zap className="w-6 h-6" style={{ color: 'hsl(173, 80%, 40%)' }} />
            <span className="text-gray-900 font-semibold">Response in 2 Hours</span>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6" style={{ color: 'hsl(173, 80%, 40%)' }} />
            <span className="text-gray-900 font-semibold">100% Success Rate</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5" style={{ fill: 'hsl(173, 80%, 40%)', color: 'hsl(173, 80%, 40%)' }} />
              ))}
            </div>
            <span className="text-gray-900 font-semibold">50+ Projects Rescued</span>
          </div>
        </motion.div>
      </Container>

      {/* Limited Offer Section with Countdown */}
      <section className="py-12">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-100 rounded-2xl p-8 border border-gray-200"
          >
            <div className="flex flex-col items-center text-center gap-6">
              <div className="flex items-center gap-2" style={{ color: 'hsl(173, 80%, 40%)' }}>
                <Zap className="w-5 h-5" />
                <span className="text-lg font-semibold">50% OFF First Rescue Session — Offer Expires In:</span>
              </div>
              <CountdownTimer targetDate={getTargetDate()} />
              <p className="text-sm text-gray-600">
                *Applies to your first project rescue. Limited to first 10 clients.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}

