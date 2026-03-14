import type { Metadata } from 'next';
import WhatsAppCTA from '@/components/WhatsAppCTA';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yieldge.com';
const CR_WHATSAPP_NUMBER = '+50670724236';

export const metadata: Metadata = {
  title: 'Consultoría Digital para Clínicas | Más Pacientes, Menos Desorden | Yieldge CR',
  description: 'Consultoría gratuita de 15 minutos para clínicas privadas. Descubrí cómo atraer más pacientes, organizar tu agenda y reducir la carga administrativa. Sin compromiso.',
  keywords: 'sistema digital clínicas Costa Rica, agenda médica automatizada, reservas citas online, presencia digital médicos, marketing clínicas privadas, sistema citas pacientes, clínica digital Costa Rica',
  authors: [{ name: 'Yieldge Costa Rica' }],
  creator: 'Yieldge',
  publisher: 'Yieldge',
  openGraph: {
    title: 'Consultoría Digital para Clínicas | Más Pacientes, Menos Desorden',
    description: 'Consultoría gratuita de 15 minutos para clínicas privadas. Atraé más pacientes y organizá tu consulta con sistemas digitales diseñados para médicos.',
    type: 'website',
    locale: 'es_CR',
    url: `${siteUrl}/cr/diagnostico-digital`,
    siteName: 'Yieldge Costa Rica',
    images: [
      {
        url: `${siteUrl}/assets/featured.jpg`,
        width: 1200,
        height: 630,
        alt: 'Consultoría Digital para Clínicas - Yieldge Costa Rica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consultoría Digital para Clínicas | Yieldge Costa Rica',
    description: 'Consultoría gratuita para clínicas privadas. Más pacientes, mejor organización, menos carga administrativa.',
    images: [`${siteUrl}/assets/featured.jpg`],
    creator: '@yieldge',
  },
  alternates: {
    canonical: `${siteUrl}/cr/diagnostico-digital`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function DiagnosticoDigitalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const diagnosticoSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Consultoría Digital para Clínicas Privadas',
    description: 'Consultoría gratuita de 15 minutos para clínicas privadas. Te ayudamos a atraer más pacientes, organizar tu agenda y reducir la carga administrativa con sistemas digitales.',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Yieldge Costa Rica',
      url: `${siteUrl}/cr`,
      telephone: CR_WHATSAPP_NUMBER,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Costa Rica',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CRC',
      description: 'Consultoría digital gratuita de 15 minutos para clínicas',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué incluye la consultoría digital gratuita para clínicas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La consultoría incluye un análisis de tu presencia digital actual, identificación de dónde estás perdiendo pacientes potenciales, y recomendaciones específicas para tu clínica. Dura 15 minutos por WhatsApp o videollamada.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Por qué mi clínica necesita un sistema digital y no solo una página web?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Una página web sin sistema es solo un folleto digital. Un sistema digital permite agendar citas automáticamente, envía recordatorios a tus pacientes para reducir ausencias, organiza la información de pacientes, y te muestra de dónde vienen tus nuevas citas. Es la diferencia entre tener presencia online y tener un sistema que hace crecer tu clínica.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Trabajan con consultorios pequeños y clínicas grandes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. Trabajamos desde consultorios individuales hasta clínicas con múltiples especialistas. Nos especializamos en clínicas privadas de distintas especialidades médicas en Costa Rica.',
        },
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Costa Rica',
        item: `${siteUrl}/cr`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Diagnóstico Digital',
        item: `${siteUrl}/cr/diagnostico-digital`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(diagnosticoSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
      <WhatsAppCTA phoneNumber={CR_WHATSAPP_NUMBER} />
    </>
  );
}
