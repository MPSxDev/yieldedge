import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diseño Web Costa Rica | Más Clientes Para Tu Negocio | Yieldge',
  description: 'Ayudamos a PYMEs en Costa Rica a atraer más clientes y vender más. Sitios web profesionales, SEO local, WhatsApp Business. Diseño web desde ₡350,000. Diagnóstico gratis.',
  keywords: 'diseño web Costa Rica, páginas web para pymes Costa Rica, SEO local Costa Rica, diseño web San José, agencia digital Costa Rica, WhatsApp Business Costa Rica, sitios web profesionales, marketing digital Costa Rica',
  openGraph: {
    title: 'Diseño Web Costa Rica | Yieldge',
    description: 'Más clientes para tu negocio en Costa Rica. Sitios web profesionales desde ₡350,000. Diagnóstico gratis.',
    type: 'website',
    locale: 'es_CR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diseño Web Costa Rica | Yieldge',
    description: 'Más clientes para tu negocio. Sitios web profesionales para PYMEs en Costa Rica.',
  },
  alternates: {
    canonical: '/cr',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
