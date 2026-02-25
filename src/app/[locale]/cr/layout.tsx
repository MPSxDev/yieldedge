import type { Metadata } from 'next';
import WhatsAppCTA from '@/components/WhatsAppCTA';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yieldge.com';
const CR_WHATSAPP_NUMBER = '+50670724236';

export const metadata: Metadata = {
  title: '¿Tu Página No Genera Clientes? | Mejorar Web Costa Rica',
  description: '¿Tu página web no te genera clientes? Arreglamos sitios que no funcionan para PYMEs en Costa Rica. Diagnóstico gratis por WhatsApp. Desde ₡350,000.',
  keywords: 'mejorar página web Costa Rica, página web no genera clientes, arreglar página web Costa Rica, optimizar sitio web pymes, diseño web San José, agencia digital Costa Rica, WhatsApp Business Costa Rica, SEO local Costa Rica, sitios web profesionales, marketing digital Costa Rica',
  authors: [{ name: 'Yieldge Costa Rica' }],
  creator: 'Yieldge',
  publisher: 'Yieldge',
  openGraph: {
    title: '¿Tu Página No Genera Clientes? | Mejorar Web Costa Rica',
    description: '¿Tu página web no te genera clientes? Arreglamos sitios que no funcionan para PYMEs en Costa Rica. Diagnóstico gratis por WhatsApp. Desde ₡350,000.',
    type: 'website',
    locale: 'es_CR',
    url: `${siteUrl}/cr`,
    siteName: 'Yieldge Costa Rica',
    images: [
      {
        url: `${siteUrl}/assets/featured.jpg`,
        width: 1200,
        height: 630,
        alt: 'Mejorar Página Web Costa Rica - Yieldge | Arreglamos sitios que no funcionan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '¿Tu Página No Genera Clientes? | Mejorar Web Costa Rica',
    description: 'Arreglamos páginas web que no generan clientes para PYMEs en Costa Rica. Diagnóstico gratis. Desde ₡350,000.',
    images: [`${siteUrl}/assets/featured.jpg`],
    creator: '@yieldge',
  },
  alternates: {
    canonical: `${siteUrl}/cr`,
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
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
};

export default function CRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Costa Rica specific structured data for local SEO
  const crOrganizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Yieldge Costa Rica',
    description: 'Diseño web profesional para PYMEs en Costa Rica. Sitios web, SEO local y marketing digital.',
    url: `${siteUrl}/cr`,
    telephone: CR_WHATSAPP_NUMBER,
    email: 'info@yieldge.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CR',
      addressLocality: 'San José',
      addressRegion: 'San José',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 9.9281,
      longitude: -84.0907,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Costa Rica',
    },
    priceRange: '₡₡',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47',
    },
    sameAs: [
      'https://twitter.com/yieldge',
      'https://www.linkedin.com/company/yieldge',
      'https://www.facebook.com/yieldge',
    ],
  };

  const crServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Diseño Web y Marketing Digital',
    provider: {
      '@type': 'Organization',
      name: 'Yieldge Costa Rica',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Costa Rica',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios Digitales para PYMEs en Costa Rica',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Diseño de Sitios Web Profesionales',
            description: 'Sitios web modernos, responsive y optimizados para SEO desde ₡350,000',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO Local Costa Rica',
            description: 'Optimización para aparecer en búsquedas locales de Google y Google Maps',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Integración WhatsApp Business',
            description: 'Conectá tu sitio web con WhatsApp para más conversiones',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Marketing Digital',
            description: 'Estrategias de marketing digital para atraer más clientes',
          },
        },
      ],
    },
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
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cuánto cuesta mejorar una página web en Costa Rica?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nos adaptamos a tus necesidades, desde PYMEs hasta empresas grandes (enterprise). Conversamos primero para entender tu negocio y te damos una propuesta clara con precios exactos. Sin sorpresas.',
        },
      },
      {
        '@type': 'Question',
        name: '¿En cuánto tiempo pueden arreglar mi página web?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Un sitio web básico puede estar listo en 2-3 semanas. Proyectos más completos con automatizaciones toman 4-6 semanas. Siempre damos fechas claras desde el inicio.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Trabajan con negocios pequeños en Costa Rica?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. Nos especializamos en PYMEs: clínicas, restaurantes, bufetes de abogados, salones de belleza, talleres y profesionales independientes en todo Costa Rica.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Por qué mi página web no me genera clientes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Las razones más comunes son: no aparece en Google, carga lento en celular, no tiene llamados a la acción claros, o no transmite confianza profesional. Ofrecemos un diagnóstico gratis para identificar exactamente qué está fallando.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Necesito saber de tecnología para trabajar con ustedes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Para nada. Nosotros nos encargamos de todo lo técnico. Te entregamos algo que podés usar fácilmente y te enseñamos a manejarlo. Si tenés dudas después, estamos disponibles para ayudarte.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Mi información está segura?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. Cumplimos con la Ley N.º 8968 de Protección de Datos de Costa Rica. Usamos servidores seguros, conexiones encriptadas y nunca compartimos ni vendemos tu información.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crOrganizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
      <WhatsAppCTA phoneNumber={CR_WHATSAPP_NUMBER} />
    </>
  );
}
