'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface NavLink {
  text: string;
  href: string;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks: SocialLink[] = [
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:contact@yieldge.com', label: 'Email' },
  ];

  const quickLinks: NavLink[] = [
    { text: 'Inicio', href: '#hero' },
    { text: 'Servicios', href: '#servicios' },
    { text: 'Proceso', href: '#proceso' },
    { text: 'Resultados', href: '#resultados' },
  ];

  const companyLinks: NavLink[] = [
    { text: 'Sobre nosotros', href: '#sobre-nosotros' },
    { text: 'Casos de éxito', href: '#resultados' },
    { text: 'Contacto', href: '#cta' },
  ];

  const legalLinks: NavLink[] = [
    { text: 'Privacidad', href: '#' },
    { text: 'Términos', href: '#' },
    { text: 'Cookies', href: '#' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-white border-t border-gray-200" role="contentinfo">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-white pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main footer content */}
        <div className="py-16 sm:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Brand section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="col-span-1 sm:col-span-2 lg:col-span-1 text-center lg:text-left"
            >
              <div className="flex items-center gap-3 mb-5 justify-center lg:justify-start">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">Y</span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">Yieldge</h2>
              </div>
              <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-xs mx-auto lg:mx-0">
                Transformamos la tecnología en resultados medibles. Optimización,
                integración y escalabilidad para empresas que quieren crecer.
              </p>

              {/* Social media links */}
              <nav aria-label="Redes sociales">
                <ul className="flex gap-4 justify-center lg:justify-start">
                  {socialLinks.map((social) => (
                    <li key={social.label}>
                      <SocialIcon {...social} />
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center lg:text-left"
            >
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
                Navegación
              </h3>
              <nav aria-label="Enlaces rápidos">
                <ul className="space-y-4">
                  {quickLinks.map((link) => (
                    <FooterLink key={link.text} {...link} onClick={handleLinkClick} />
                  ))}
                </ul>
              </nav>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
                Empresa
              </h3>
              <nav aria-label="Enlaces de empresa">
                <ul className="space-y-4">
                  {companyLinks.map((link) => (
                    <FooterLink key={link.text} {...link} onClick={handleLinkClick} />
                  ))}
                </ul>
              </nav>
            </motion.div>

            {/* Contact & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="col-span-1 sm:col-span-2 lg:col-span-1 text-center lg:text-left"
            >
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
                Contacto
              </h3>
              <p className="text-gray-600 text-base mb-6 max-w-xs mx-auto lg:mx-0">
                ¿Listo para optimizar tu infraestructura?
              </p>
              <motion.a
                href="https://calendly.com/anwar-softwaredev"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block w-full sm:w-auto px-7 py-3.5 bg-blue-600 text-white text-base font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 text-center"
              >
                Agenda una consulta
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 py-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
            {/* Copyright */}
            <p className="text-base text-gray-500 text-center order-2 sm:order-1">
              © {currentYear} Yieldge. Todos los derechos reservados.
            </p>

            {/* Legal links */}
            <nav aria-label="Enlaces legales" className="order-3 sm:order-2">
              <ul className="flex flex-wrap justify-center gap-8 text-base">
                {legalLinks.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Back to top button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg order-1 sm:order-3"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon, href, label }: SocialLink) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="w-11 h-11 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg"
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
}

interface FooterLinkProps extends NavLink {
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

function FooterLink({ text, href, onClick }: FooterLinkProps) {
  return (
    <li className="flex justify-center lg:justify-start">
      <a
        href={href}
        onClick={(e) => onClick(e, href)}
        className="text-base text-gray-600 hover:text-blue-600 transition-colors duration-200 inline-flex items-center group"
      >
        <span className="group-hover:translate-x-1 transition-transform duration-200">
          {text}
        </span>
      </a>
    </li>
  );
}

