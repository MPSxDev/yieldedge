'use client';

import { motion } from 'framer-motion';
import { Users, Target, Award, Briefcase } from 'lucide-react';
import { useTranslations } from 'next-intl';
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

interface CompanyPageContentProps {
  verticalName?: string;
}

export default function CompanyPageContent({ verticalName }: CompanyPageContentProps) {
  const t = useTranslations('company');

  const leadershipItems = [
    { name: 'Executive Team', icon: Users, descKey: 'vision' as const },
    { name: 'Technical Leaders', icon: Target, descKey: 'innovation' as const },
    { name: 'Client Partners', icon: Award, descKey: 'quality' as const },
  ];

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
              {t('aboutUs')}
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6"
            >
              {t('buildingFuture')}
              {verticalName && (
                <span className="block text-2xl sm:text-3xl lg:text-4xl text-gray-600 mt-2 font-normal">
                  {t('division', { vertical: verticalName })}
                </span>
              )}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 leading-relaxed"
            >
              {t('leadershipDescription')}
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 scroll-mt-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {t('aboutYieldge')}
                {verticalName && <span className="text-[#1F5CFF]"> {verticalName}</span>}
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {t('leadershipDescription')}
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex justify-center"
            >
              <div className="bg-[#eff4ff] rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-[#1F5CFF] mb-2">15+</div>
                <div className="text-gray-600">{t('experience')}</div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-16 sm:py-24 bg-gray-50 scroll-mt-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {t('leadershipTeam')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t('leadershipDescription')}
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {leadershipItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-8 text-center border border-gray-200"
                >
                  <div className="w-16 h-16 bg-[#dbe6ff] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-[#1F5CFF]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600">{t(`roles.${item.descKey}`)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Development Program Section */}
      <section id="development-program" className="py-16 sm:py-24 scroll-mt-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp}>
              <div className="w-20 h-20 bg-[#dbe6ff] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-10 h-10 text-[#1F5CFF]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {t('developmentProgram')}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t('programDescription')}
              </p>
              <div className="grid sm:grid-cols-3 gap-6 text-left">
                <div className="bg-[#eff4ff] rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{t('training.technical')}</h3>
                  <p className="text-gray-600 text-sm">{t('training.technicalDesc')}</p>
                </div>
                <div className="bg-[#eff4ff] rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{t('training.certification')}</h3>
                  <p className="text-gray-600 text-sm">{t('training.certificationDesc')}</p>
                </div>
                <div className="bg-[#eff4ff] rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{t('training.career')}</h3>
                  <p className="text-gray-600 text-sm">{t('training.careerDesc')}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
