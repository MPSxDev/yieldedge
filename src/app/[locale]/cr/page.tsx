'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { crContent } from '@/lib/content';

// Lazy load below-the-fold components
const PainPoints = dynamic(() => import('@/components/PainPoints'), {
  loading: () => <div className="min-h-[600px]" />,
});

const Services = dynamic(() => import('@/components/Services'), {
  loading: () => <div className="min-h-screen" />,
});

const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'), {
  loading: () => <div className="min-h-screen" />,
});

const AboutYieldgeCR = dynamic(() => import('@/components/AboutYieldgeCR'), {
  loading: () => <div className="min-h-screen" />,
});

const Process = dynamic(() => import('@/components/Process'), {
  loading: () => <div className="min-h-screen" />,
});

const CRSolutionsPageContent = dynamic(() => import('@/components/CRSolutionsPageContent'), {
  loading: () => <div className="min-h-screen" />,
});

const FinalCTA = dynamic(() => import('@/components/FinalCTA'), {
  loading: () => <div className="min-h-[400px]" />,
});

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="min-h-[400px]" />,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[400px]" />,
});

const CompanyLogos = dynamic(() => import('@/components/CompanyLogos'), {
  loading: () => <div className="min-h-[200px]" />,
});

export default function CRPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero content={crContent.hero} />

      {/* Main content sections with spacing */}
      <main className="space-y-20 sm:space-y-24 lg:space-y-32">
        {crContent.painPoints && (
          <PainPoints content={crContent.painPoints} />
        )}
        <Services content={crContent.services} useContentDirectly={true} />
        {crContent.companyLogos && crContent.companyLogos.logos.length > 0 && (
          <CompanyLogos
            sectionLabel={crContent.companyLogos.sectionLabel}
            title={crContent.companyLogos.title}
            titleHighlight={crContent.companyLogos.titleHighlight}
            description={crContent.companyLogos.description}
            logos={crContent.companyLogos.logos}
          />
        )}
        <CRSolutionsPageContent hideHero={true} />
        <AboutYieldgeCR content={crContent.aboutYieldge!} />
        <WhyChooseUs content={crContent.whyChooseUs} />
        <Process content={crContent.process} />
        <FAQ
          content={crContent.faq}
          ctaLink="https://wa.me/50670724236?text=Hola%2C%20tengo%20una%20pregunta"
        />
        <FinalCTA
          content={crContent.finalCTA}
          useContentDirectly={true}
          ctaLink="https://wa.me/50670724236?text=Hola%2C%20me%20interesa%20agendar%20una%20conversaci%C3%B3n%20estrat%C3%A9gica"
          phoneNumber="+506 7072-4236"
          schedule="Lun - Vie, 8am - 6pm"
        />
      </main>

      <Footer description="Yieldge Costa Rica: Socio estratégico en infraestructura digital. Arquitectura web, sistemas de conversión y posicionamiento orgánico para empresas que buscan crecer de forma estructurada." />
    </div>
  );
}
