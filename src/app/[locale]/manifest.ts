import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {

  return {
    name: 'Yieldge - Technology that Performs',
    short_name: 'Yieldge',
    description: 'Transform businesses with modern websites, AI automation, and scalable systems that deliver measurable results.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/brand/logo-isotipo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}

