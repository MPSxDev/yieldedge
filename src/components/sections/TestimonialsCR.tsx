'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  title: string;
  location: string;
  rating: number;
  quote: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Dr. Daniel Zuniga',
    title: 'Gastromedical',
    location: 'San Jose, Costa Rica',
    rating: 5,
    quote:
      'Yieldge construyo nuestro sitio web y automatizo nuestro sistema de citas. Ahora nuevos pacientes encuentran nuestra clinica en linea cada semana.',
    image: '/images/testimonials/avatar-1.jpg',
  },
  {
    name: 'E. Logan',
    title: 'Cliente Empresarial',
    location: 'Costa Rica',
    rating: 5,
    quote:
      'Desde que lanzamos nuestra tienda en linea con Yieldge, nuestras ventas se duplicaron. El proceso fue profesional y los resultados superaron nuestras expectativas.',
    image: '/images/testimonials/avatar-2.jpg',
  },
  {
    name: 'Geovani',
    title: 'HSGAC International',
    location: 'Costa Rica',
    rating: 5,
    quote:
      'La automatizacion de procesos que implemento Yieldge nos ahorro horas de trabajo manual cada semana. Un verdadero socio estrategico para nuestro crecimiento.',
    image: '/images/testimonials/avatar-3.jpg',
  },
];

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
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating
              ? 'fill-amber-400 text-amber-400'
              : 'fill-gray-200 text-gray-200'
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#dbe6ff] transition-all duration-300 hover:shadow-xl hover:shadow-[#1F5CFF]/5"
    >
      {/* Rating */}
      <div className="mb-6">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Quote */}
      <blockquote className="text-gray-700 text-lg leading-relaxed mb-8">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-[#1F5CFF] to-[#60a5fa] flex-shrink-0">
          {testimonial.image ? (
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white font-semibold text-lg">
              {testimonial.name
                .split(' ')
                .map((n) => n[0])
                .join('')
                .slice(0, 2)}
            </div>
          )}
        </div>

        {/* Name & Details */}
        <div>
          <p className="font-semibold text-gray-900">{testimonial.name}</p>
          <p className="text-sm text-gray-600">{testimonial.title}</p>
          <p className="text-sm text-[#1F5CFF]">{testimonial.location}</p>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute top-6 right-6 text-6xl text-[#eff4ff] font-serif leading-none select-none">
        &ldquo;
      </div>
    </motion.div>
  );
}

export default function TestimonialsCR() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <p className="text-[#1F5CFF] font-semibold mb-4 text-sm uppercase tracking-wide">
              Testimonios
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Empresas en Costa Rica{' '}
              <span className="text-[#1F5CFF]">creciendo con Yieldge</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
              Negocios locales que confiaron en nosotros para impulsar su
              presencia digital y automatizar sus operaciones.
            </p>

            {/* Rating indicator */}
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-100">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="text-gray-700 font-medium">
                4.9 calificacion promedio de negocios locales
              </span>
            </div>
          </motion.div>

          {/* Testimonial Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
