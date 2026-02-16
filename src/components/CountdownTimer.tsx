'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface CountdownTimerProps {
  targetDate?: Date;
  className?: string;
}

export default function CountdownTimer({
  targetDate,
  className = ''
}: CountdownTimerProps) {
  const t = useTranslations('common');
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Default to 24 hours from now if no target date provided
    const defaultTarget = targetDate || new Date(Date.now() + 24 * 60 * 60 * 1000);
    
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = defaultTarget.getTime();
      const difference = target - now;

      if (difference > 0) {
        const totalSeconds = Math.floor(difference / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const totalHours = Math.floor(totalMinutes / 60);
        
        setTimeLeft({
          hours: totalHours,
          minutes: totalMinutes % 60,
          seconds: totalSeconds % 60,
        });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (value: number) => {
    return value.toString().padStart(2, '0');
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <motion.div
        className="bg-gray-100 rounded-lg px-6 py-4 text-center countdown-pulse border border-gray-200"
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-4xl font-bold" style={{ color: 'hsl(25, 95%, 53%)' }}>
          {formatTime(timeLeft.hours)}
        </div>
        <div className="text-xs text-gray-600 uppercase mt-1">{t('hours')}</div>
      </motion.div>
      <motion.div
        className="bg-gray-100 rounded-lg px-6 py-4 text-center countdown-pulse border border-gray-200"
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-4xl font-bold" style={{ color: 'hsl(25, 95%, 53%)' }}>
          {formatTime(timeLeft.minutes)}
        </div>
        <div className="text-xs text-gray-600 uppercase mt-1">{t('minutes')}</div>
      </motion.div>
      <motion.div
        className="bg-gray-100 rounded-lg px-6 py-4 text-center countdown-pulse border border-gray-200"
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-4xl font-bold" style={{ color: 'hsl(25, 95%, 53%)' }}>
          {formatTime(timeLeft.seconds)}
        </div>
        <div className="text-xs text-gray-600 uppercase mt-1">{t('seconds')}</div>
      </motion.div>
    </div>
  );
}

