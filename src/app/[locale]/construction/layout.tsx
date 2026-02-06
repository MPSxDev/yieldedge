import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yieldge.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Construction & Contractor Websites | Get More Local Job Requests | Yieldge",
  description: "Turn website visitors into qualified job leads. We build high-converting contractor websites and automated follow-up systems that book more estimates and fill your calendar. Built for HVAC, roofing, plumbing, electrical, remodeling, and general contractors.",
  keywords: [
    "contractor websites",
    "construction website design",
    "HVAC websites",
    "roofing contractor websites",
    "plumbing websites",
    "contractor lead generation",
    "home service websites",
    "contractor automation",
    "estimate scheduling",
    "contractor CRM",
    "local contractor marketing",
    "construction business websites"
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteUrl}/construction`,
    siteName: 'Yieldge',
    title: "Construction & Contractor Websites | Get More Local Job Requests",
    description: "Turn website visitors into qualified job leads. We build high-converting contractor websites and automated follow-up systems that book more estimates.",
    images: [
      {
        url: '/assets/featured.jpg',
        width: 1200,
        height: 630,
        alt: 'Yieldge - Contractor Websites That Convert',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Construction & Contractor Websites | Get More Local Job Requests",
    description: "Turn website visitors into qualified job leads. We build high-converting contractor websites and automated follow-up systems that book more estimates.",
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
    canonical: `${siteUrl}/construction`,
  },
  category: 'construction',
};

export default function ConstructionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
