interface ProfessionalServiceSchemaProps {
  locale?: string;
}

export default function ProfessionalServiceSchema({ locale = 'es' }: ProfessionalServiceSchemaProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yieldge.com';
  const isEnglish = locale === 'en';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteUrl}/#organization`,
    name: 'Yieldge',
    alternateName: 'Yieldge Technology Solutions',
    url: siteUrl,
    logo: `${siteUrl}/brand/logo-main.png`,
    image: `${siteUrl}/assets/featured.jpg`,
    description: isEnglish
      ? 'Technology partner specialized in software development, cloud solutions, QA automation, and offshore development with 15+ years of experience delivering measurable business results.'
      : 'Socio tecnológico especializado en desarrollo de software, soluciones cloud, automatización QA y desarrollo offshore con más de 15 años de experiencia entregando resultados medibles.',
    foundingDate: '2009',
    priceRange: '$$',
    telephone: '+506 7072 4236',
    email: 'contact@yieldge.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CR',
      addressRegion: 'San Jose',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '9.9281',
      longitude: '-84.0907',
    },
    areaServed: [
      {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: '9.9281',
          longitude: '-84.0907',
        },
        geoRadius: '50000',
      },
      {
        '@type': 'Country',
        name: 'United States',
      },
      {
        '@type': 'Country',
        name: 'Costa Rica',
      },
      {
        '@type': 'Continent',
        name: 'North America',
      },
      {
        '@type': 'Continent',
        name: 'South America',
      },
    ],
    serviceType: isEnglish
      ? [
          'Software Development',
          'QA Automation',
          'Cloud Solutions',
          'Staff Augmentation',
          'Technology Consulting',
          'Mobile App Development',
          'Web Development',
          'Cybersecurity Services',
        ]
      : [
          'Desarrollo de Software',
          'Automatización QA',
          'Soluciones Cloud',
          'Aumento de Personal',
          'Consultoría Tecnológica',
          'Desarrollo de Apps Móviles',
          'Desarrollo Web',
          'Servicios de Ciberseguridad',
        ],
    sameAs: [
      'https://twitter.com/yieldge',
      'https://www.linkedin.com/company/yieldge',
      'https://github.com/yieldge',
    ],
    knowsAbout: [
      'Software Engineering',
      'Cloud Computing',
      'DevOps',
      'Quality Assurance',
      'Digital Transformation',
      'AI Integration',
      'Data Analytics',
      'Cybersecurity',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: isEnglish ? 'Technology Services' : 'Servicios Tecnológicos',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: isEnglish ? 'Software Development' : 'Desarrollo de Software',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: isEnglish ? 'Custom Software Development' : 'Desarrollo de Software a Medida',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: isEnglish ? 'Mobile App Development' : 'Desarrollo de Apps Móviles',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: isEnglish ? 'Web Application Development' : 'Desarrollo de Aplicaciones Web',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: isEnglish ? 'Cloud & Infrastructure' : 'Cloud e Infraestructura',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: isEnglish ? 'Cloud Migration' : 'Migración Cloud',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: isEnglish ? 'Infrastructure as Code' : 'Infraestructura como Código',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: isEnglish ? 'DevOps Services' : 'Servicios DevOps',
              },
            },
          ],
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '47',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
