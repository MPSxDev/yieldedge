import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yieldge.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Beauty & Salon Websites | Turn Followers Into Booked Clients | Yieldge",
  description: "We build Instagram-worthy websites and booking systems that turn your social media followers into paying clients. Built for hair salons, barbershops, nail studios, lash studios, makeup artists, and beauty professionals.",
  keywords: [
    "beauty salon websites",
    "hair salon websites",
    "barbershop websites",
    "nail salon websites",
    "salon booking system",
    "beauty professional websites",
    "Instagram to booking",
    "online booking for salons",
    "beauty business websites",
    "salon automation",
    "salon marketing",
    "beauty appointment booking"
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteUrl}/beauty`,
    siteName: 'Yieldge',
    title: "Beauty & Salon Websites | Turn Followers Into Booked Clients",
    description: "We build Instagram-worthy websites and booking systems that turn your social media followers into paying clients. Built for beauty professionals.",
    images: [
      {
        url: '/assets/featured.jpg',
        width: 1200,
        height: 630,
        alt: 'Yieldge - Beauty Websites That Convert',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Beauty & Salon Websites | Turn Followers Into Booked Clients",
    description: "We build Instagram-worthy websites and booking systems that turn your social media followers into paying clients. Built for beauty professionals.",
    images: ['/assets/featured.jpg'],
    creator: '@yieldge',
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
  alternates: {
    canonical: `${siteUrl}/beauty`,
  },
  category: 'beauty',
};

export default function BeautyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
