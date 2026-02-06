import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aumenta Leads e Ingresos | Soluciones Web y Automatización',
  description: 'Convierte visitantes en llamadas agendadas y clientes que pagan. Construimos sitios web de alta conversión con seguimientos automatizados que trabajan 24/7 para negocios de servicios, agencias y PYMEs.',
  keywords: 'generación de leads, automatización web, integración CRM, automatización de email, seguimiento SMS, automatización de negocios, captura de leads, optimización de conversión',
  openGraph: {
    title: 'Aumenta Leads e Ingresos | Yieldge',
    description: 'Convierte visitantes en llamadas agendadas y clientes que pagan a través de sitios web inteligentes y seguimientos automatizados.',
    type: 'website',
  },
  alternates: {
    canonical: '/cr',
  },
};

export default function CRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
