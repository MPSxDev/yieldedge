'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  companySize: string;
  country: string;
  role: string;
  source: string;
  sourceOther: string;
  message: string;
}

export default function DiagnosisForm() {
  const t = useTranslations('diagnosisForm');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    companySize: '',
    country: '',
    role: '',
    source: '',
    sourceOther: '',
    message: '',
  });

  const companySizes = [
    { value: '1-5', label: '1-5' },
    { value: '6-20', label: '6-20' },
    { value: '21-50', label: '21-50' },
    { value: '51-200', label: '51-200' },
    { value: '201-500', label: '201-500' },
    { value: '500+', label: '500+' },
  ];

  const sources = [
    { value: 'linkedin', label: 'LinkedIn' },
    { value: 'google', label: 'Google' },
    { value: 'referral', label: t('sources.referral') },
    { value: 'event', label: t('sources.event') },
    { value: 'other', label: t('sources.other') },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#1F5CFF] rounded-3xl p-8 lg:p-12 text-center"
      >
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Send className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">
          {t('success.title')}
        </h3>
        <p className="text-white/80">
          {t('success.message')}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-[#1F5CFF] rounded-3xl p-8 lg:p-12"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
          {t('title')}
        </h3>
        <p className="text-white/80 max-w-lg mx-auto">
          {t('subtitle')}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
              {t('fields.name')} *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder={t('placeholders.name')}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
              {t('fields.email')} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder={t('placeholders.email')}
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
              {t('fields.phone')} *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block text-white text-sm font-medium mb-2">
              {t('fields.company')} *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder={t('placeholders.company')}
            />
          </div>

          {/* Company Size */}
          <div>
            <label htmlFor="companySize" className="block text-white text-sm font-medium mb-2">
              {t('fields.companySize')} *
            </label>
            <select
              id="companySize"
              name="companySize"
              required
              value={formData.companySize}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none cursor-pointer"
            >
              <option value="">{t('placeholders.select')}</option>
              {companySizes.map(size => (
                <option key={size.value} value={size.value}>
                  {size.label} {t('fields.employees')}
                </option>
              ))}
            </select>
          </div>

          {/* Country */}
          <div>
            <label htmlFor="country" className="block text-white text-sm font-medium mb-2">
              {t('fields.country')} *
            </label>
            <input
              type="text"
              id="country"
              name="country"
              required
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder={t('placeholders.country')}
            />
          </div>

          {/* Role */}
          <div>
            <label htmlFor="role" className="block text-white text-sm font-medium mb-2">
              {t('fields.role')} *
            </label>
            <input
              type="text"
              id="role"
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder={t('placeholders.role')}
            />
          </div>

          {/* Source */}
          <div>
            <label htmlFor="source" className="block text-white text-sm font-medium mb-2">
              {t('fields.source')}
            </label>
            <select
              id="source"
              name="source"
              value={formData.source}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none cursor-pointer"
            >
              <option value="">{t('placeholders.select')}</option>
              {sources.map(source => (
                <option key={source.value} value={source.value}>
                  {source.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Source Other - only show if "other" is selected */}
        {formData.source === 'other' && (
          <div>
            <label htmlFor="sourceOther" className="block text-white text-sm font-medium mb-2">
              {t('fields.sourceOther')}
            </label>
            <input
              type="text"
              id="sourceOther"
              name="sourceOther"
              value={formData.sourceOther}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder={t('placeholders.sourceOther')}
            />
          </div>
        )}

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
            {t('fields.message')}
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
            placeholder={t('placeholders.message')}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 px-8 bg-white text-[#1F5CFF] font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              {t('submitting')}
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              {t('submit')}
            </>
          )}
        </button>

        <p className="text-white/60 text-sm text-center">
          {t('privacy')}
        </p>
      </form>
    </motion.div>
  );
}
