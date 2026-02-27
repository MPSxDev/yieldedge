import type { Metadata } from 'next';
import WhatsAppCTA from '@/components/WhatsAppCTA';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yieldge.com';
const CR_WHATSAPP_NUMBER = '+50670724236';

export const metadata: Metadata = {
  title: 'Diagnóstico Digital Gratis | Tu Negocio Crece, Tu Sistema No | Yieldge CR',
  description: 'Diagnóstico digital gratuito de 15 minutos. Descubrí qué está frenando el crecimiento de tu negocio y cómo solucionarlo. Sin compromiso. Para PYMEs en Costa Rica.',
  keywords: 'diagnóstico digital Costa Rica, sistema digital pymes, automatización negocios, WhatsApp Business Costa Rica, SEO local, sitio web profesional, marketing digital Costa Rica, infraestructura digital',
  authors: [{ name: 'Yieldge Costa Rica' }],
  creator: 'Yieldge',
  publisher: 'Yieldge',
  openGraph: {
    title: 'Diagnóstico Digital Gratis | Tu Negocio Crece, Tu Sistema No',
    description: 'Diagnóstico digital gratuito de 15 minutos. Descubrí qué está frenando tu crecimiento y cómo solucionarlo. Para PYMEs en Costa Rica.',
    type: 'website',
    locale: 'es_CR',
    url: `${siteUrl}/cr/diagnostico-digital`,
    siteName: 'Yieldge Costa Rica',
    images: [
      {
        url: `${siteUrl}/assets/featured.jpg`,
        width: 1200,
        height: 630,
        alt: 'Diagnóstico Digital Gratis - Yieldge Costa Rica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diagnóstico Digital Gratis | Yieldge Costa Rica',
    description: 'Diagnóstico digital gratuito de 15 minutos para PYMEs en Costa Rica. Descubrí qué está frenando tu crecimiento.',
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
    name: 'Diagnóstico Digital Gratuito',
    description: 'Diagnóstico digital de 15 minutos para identificar qué está frenando el crecimiento de tu negocio y cómo solucionarlo.',
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
      description: 'Diagnóstico digital gratuito de 15 minutos',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué incluye el diagnóstico digital gratuito?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El diagnóstico incluye un análisis de tu presencia digital actual, identificación de dónde estás perdiendo clientes, y recomendaciones específicas para tu negocio. Dura 15 minutos por WhatsApp o videollamada.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Por qué necesito un sistema digital y no solo una página web?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Una página web sin sistema es solo un folleto digital. Un sistema digital captura clientes automáticamente, responde cuando no podés, organiza tus contactos, y te muestra de dónde vienen tus ventas. Es la diferencia entre tener presencia online y tener una máquina de crecimiento.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Trabajan con negocios pequeños?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. Trabajamos desde PYMEs hasta empresas enterprise. Nos especializamos en clínicas, bufetes, restaurantes, empresas de servicios y profesionales independientes en Costa Rica.',
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
