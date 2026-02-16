import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yieldge.com';

export const metadata: Metadata = {
  title: 'Diseño Web Costa Rica | Más Clientes Para Tu Negocio',
  description: 'Ayudamos a PYMEs en Costa Rica a atraer más clientes y vender más. Sitios web profesionales, SEO local, WhatsApp Business. Diseño web desde ₡350,000. Diagnóstico gratis.',
  keywords: 'diseño web Costa Rica, páginas web para pymes Costa Rica, SEO local Costa Rica, diseño web San José, agencia digital Costa Rica, WhatsApp Business Costa Rica, sitios web profesionales, marketing digital Costa Rica, desarrollo web pymes, diseño responsive, optimización SEO, sitios web económicos Costa Rica',
  authors: [{ name: 'Yieldge Costa Rica' }],
  creator: 'Yieldge',
  publisher: 'Yieldge',
  openGraph: {
    title: 'Diseño Web Costa Rica | Más Clientes Para Tu Negocio | Yieldge',
    description: 'Más clientes para tu negocio en Costa Rica. Sitios web profesionales desde ₡350,000. Diagnóstico gratis. SEO local, WhatsApp Business integrado.',
    type: 'website',
    locale: 'es_CR',
    url: `${siteUrl}/cr`,
    siteName: 'Yieldge Costa Rica',
    images: [
      {
        url: `${siteUrl}/assets/featured.jpg`,
        width: 1200,
        height: 630,
        alt: 'Diseño Web Costa Rica - Yieldge | Soluciones digitales para PYMEs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diseño Web Costa Rica | Más Clientes Para Tu Negocio',
    description: 'Sitios web profesionales para PYMEs en Costa Rica. Desde ₡350,000. Diagnóstico gratis.',
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
    telephone: '+506-XXXX-XXXX', // Add actual phone number
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
      {children}
    </>
  );
}
