'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import TestimonialModal from '@/components/ui/TestimonialModal';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  title: string;
  location: string;
  rating: number;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Dr. Daniel Zuniga',
    title: 'Gastromedical',
    location: 'San Jose, Costa Rica',
    rating: 5,
    quote:
      'Yieldge construyo nuestro sitio web y automatizo nuestro sistema de citas. Ahora nuevos pacientes encuentran nuestra clinica en linea cada semana.',
  },
  {
    name: 'E. Logan',
    title: 'Cliente Empresarial',
    location: 'Costa Rica',
    rating: 5,
    quote:
      'Quede satisfecho un 200%, todas las ideas las lograron, buscaron soluciones rapidas y efectivas, mi pagina web quedo mejor de lo que me imaginaba. Su acompanamiento integral es impecable. Son un gran equipo de trabajo super creativo, profesional y puntual.',
  },
  {
    name: 'Geovani Abarca',
    title: 'HSGAC International',
    location: 'Costa Rica',
    rating: 5,
    quote:
      'Agradezco sinceramente el excelente trabajo realizado en la creacion de mi sitio web profesional. El proceso se desarrollo con gran responsabilidad, compromiso y atencion a los detalles, logrando reflejar de manera clara y ordenada mis servicios. El resultado es una plataforma moderna, funcional y profesional.',
  },
  {
    name: 'Joshua Palacios',
    title: 'Cliente Empresarial',
    location: 'Costa Rica',
    rating: 5,
    quote:
      'Trabajar con Yieldge fue una muy buena experiencia. Supieron entender la vision de mi proyecto y transformarla en una pagina clara, funcional y con una estetica muy bien lograda. La navegacion es simple, los botones funcionan de forma directa y todo esta pensado para que el usuario tenga una experiencia facil e intuitiva. En poco tiempo ya hemos empezado a ver buenos resultados.',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? 'fill-amber-400 text-amber-400'
              : 'fill-gray-200 text-gray-200'
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  onReadMore,
}: {
  testimonial: Testimonial;
  onReadMore: () => void;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 flex flex-col h-full"
    >
      {/* Rating */}
      <div className="mb-4">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Quote - truncated */}
      <blockquote className="text-gray-600 leading-relaxed mb-4 line-clamp-3 flex-grow">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Read more link */}
      <button
        onClick={onReadMore}
        className="text-[#1F5CFF] text-sm font-medium hover:text-[#0d47a1] transition-colors mb-5 text-left"
      >
        Leer testimonio completo
      </button>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1F5CFF] to-[#60a5fa] flex items-center justify-center text-white font-medium text-sm flex-shrink-0">
          {testimonial.name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .slice(0, 2)}
        </div>

        {/* Details */}
        <div className="min-w-0">
          <p className="font-semibold text-gray-900 text-sm truncate">
            {testimonial.name}
          </p>
          <p className="text-xs text-gray-500 truncate">{testimonial.title}</p>
          <p className="text-xs text-[#1F5CFF]">{testimonial.location}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsCR() {
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedTestimonial(null), 200);
  };

  return (
    <>
      <section id="testimonios" className="py-20 sm:py-24 bg-gray-50 scroll-mt-20">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Header */}
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <p className="text-[#1F5CFF] font-semibold mb-3 text-sm uppercase tracking-wide">
                Testimonios
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Empresas en Costa Rica{' '}
                <span className="text-[#1F5CFF]">creciendo con Yieldge</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-5">
                Negocios locales que confiaron en nosotros para impulsar su
                presencia digital.
              </p>

              {/* Rating indicator */}
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-sm border border-gray-100">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-gray-600 text-sm font-medium">
                  4.9 calificacion promedio
                </span>
              </div>
            </motion.div>

            {/* Testimonial Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  testimonial={testimonial}
                  onReadMore={() => handleReadMore(testimonial)}
                />
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Modal */}
      <TestimonialModal
        testimonial={selectedTestimonial}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
