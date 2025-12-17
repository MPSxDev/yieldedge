import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Increase Leads & Revenue | Website & Automation Solutions',
  description: 'Turn website visitors into booked calls and paying customers. We build high-converting websites with automated follow-ups that work 24/7 for service businesses, agencies, and SMBs.',
  keywords: 'lead generation, website automation, CRM integration, email automation, SMS follow-up, business automation, lead capture, conversion optimization',
  openGraph: {
    title: 'Increase Leads & Revenue | Yieldge',
    description: 'Turn website visitors into booked calls and paying customers through smart websites and automated follow-ups.',
    type: 'website',
  },
  alternates: {
    canonical: '/yieldedge',
  },
};

export default function YieldedgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

