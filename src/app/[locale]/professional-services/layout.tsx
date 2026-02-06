import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yieldge.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Professional Services Websites | Build Trust Before the First Call | Yieldge",
  description: "We build authoritative websites and client intake systems that establish credibility, capture qualified leads, and convert visitors into consultations. Built for law firms, accounting practices, insurance agencies, business consultants, and professional services.",
  keywords: [
    "professional services websites",
    "law firm websites",
    "accounting firm websites",
    "CPA websites",
    "consultant websites",
    "insurance agency websites",
    "professional website design",
    "client intake forms",
    "consultation booking",
    "professional services marketing",
    "legal websites",
    "financial services websites"
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteUrl}/professional-services`,
    siteName: 'Yieldge',
    title: "Professional Services Websites | Build Trust Before the First Call",
    description: "We build authoritative websites and client intake systems that establish credibility, capture qualified leads, and convert visitors into consultations.",
    images: [
      {
        url: '/assets/featured.jpg',
        width: 1200,
        height: 630,
        alt: 'Yieldge - Professional Services Websites',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Professional Services Websites | Build Trust Before the First Call",
    description: "We build authoritative websites and client intake systems that establish credibility, capture qualified leads, and convert visitors into consultations.",
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
    canonical: `${siteUrl}/professional-services`,
  },
  category: 'professional-services',
};

export default function ProfessionalServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
