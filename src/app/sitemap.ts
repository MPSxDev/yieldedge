import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yieldge.com';
  const currentDate = new Date();

  // Main pages (ES - default)
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
      alternates: {
        languages: {
          es: baseUrl,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      alternates: {
        languages: {
          es: `${baseUrl}/solutions`,
          en: `${baseUrl}/en/solutions`,
        },
      },
    },
    {
      url: `${baseUrl}/company`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          es: `${baseUrl}/company`,
          en: `${baseUrl}/en/company`,
        },
      },
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          es: `${baseUrl}/careers`,
          en: `${baseUrl}/en/careers`,
        },
      },
    },
    {
      url: `${baseUrl}/get-in-touch`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      alternates: {
        languages: {
          es: `${baseUrl}/get-in-touch`,
          en: `${baseUrl}/en/get-in-touch`,
        },
      },
    },
  ];

  // Costa Rica specific pages (high priority for local SEO)
  const crPages = [
    {
      url: `${baseUrl}/cr`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/cr/solutions`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cr/company`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cr/careers`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cr/mision`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // Vertical industry pages
  const verticals = ['real-estate', 'beauty', 'construction', 'professional-services', 'viberescue'];
  const verticalPages = verticals.flatMap(vertical => [
    {
      url: `${baseUrl}/${vertical}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          es: `${baseUrl}/${vertical}`,
          en: `${baseUrl}/en/${vertical}`,
        },
      },
    },
    {
      url: `${baseUrl}/${vertical}/solutions`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: {
        languages: {
          es: `${baseUrl}/${vertical}/solutions`,
          en: `${baseUrl}/en/${vertical}/solutions`,
        },
      },
    },
    {
      url: `${baseUrl}/${vertical}/company`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
      alternates: {
        languages: {
          es: `${baseUrl}/${vertical}/company`,
          en: `${baseUrl}/en/${vertical}/company`,
        },
      },
    },
    {
      url: `${baseUrl}/${vertical}/careers`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
      alternates: {
        languages: {
          es: `${baseUrl}/${vertical}/careers`,
          en: `${baseUrl}/en/${vertical}/careers`,
        },
      },
    },
  ]);

  // Legal pages
  const legalPages = [
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
      alternates: {
        languages: {
          es: `${baseUrl}/privacy-policy`,
          en: `${baseUrl}/en/privacy-policy`,
        },
      },
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
      alternates: {
        languages: {
          es: `${baseUrl}/terms`,
          en: `${baseUrl}/en/terms`,
        },
      },
    },
  ];

  return [...mainPages, ...crPages, ...verticalPages, ...legalPages];
}

