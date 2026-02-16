import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { locales, type Locale } from "@/i18n/config";
import "./globals.css";
import FaviconSwitcher from "@/components/FaviconSwitcher";
import HashScrollFix from "@/components/HashScrollFix";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yieldge.com";

// Generate static params for all supported locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Generate metadata based on locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const t = messages.metadata as Record<string, string>;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t.title,
      template: t.titleTemplate,
    },
    description: t.description,
    keywords: t.keywords?.split(", "),
    authors: [{ name: "Yieldge" }],
    creator: "Yieldge",
    publisher: "Yieldge",
    applicationName: "Yieldge",
    referrer: "origin-when-cross-origin",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons: {
      icon: [
        { url: "/brand/favicon-light.png", type: "image/png" },
        { url: "/brand/favicon-dark.png", type: "image/png", media: "(prefers-color-scheme: dark)" },
      ],
      apple: [
        { url: "/brand/favicon-light.png", sizes: "180x180", type: "image/png" },
      ],
    },
    manifest: "/manifest.json",
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
      url: locale === "es" ? siteUrl : `${siteUrl}/en`,
      siteName: "Yieldge",
      title: t.title,
      description: t.description,
      images: [
        {
          url: "/assets/featured.jpg",
          width: 1200,
          height: 630,
          alt: "Yieldge - Technology that Performs",
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@yieldge",
      creator: "@yieldge",
      title: t.title,
      description: t.description,
      images: {
        url: "/assets/featured.jpg",
        alt: "Yieldge - Technology that Performs",
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: locale === "es" ? siteUrl : `${siteUrl}/en`,
      languages: {
        es: siteUrl,
        en: `${siteUrl}/en`,
        "x-default": siteUrl,
      },
    },
    category: "technology",
    classification: "Business Services",
    other: {
      "google-site-verification": "your-google-verification-code", // Add your verification code
      "msvalidate.01": "your-bing-verification-code", // Add your Bing verification code
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate the locale is supported
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering for this locale
  setRequestLocale(locale);

  // Get messages for the current locale
  const messages = await getMessages();

  // Structured data for SEO (localized)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Yieldge",
    url: siteUrl,
    logo: `${siteUrl}/brand/logo-main.png`,
    description:
      locale === "es"
        ? "Socio tecnológico especializado en servicios web, infraestructura en la nube y desarrollo offshore con más de 15 años de experiencia."
        : "Technology partner specialized in web services, cloud infrastructure, and offshore development with 15+ years of expertise.",
    sameAs: [
      "https://twitter.com/yieldge",
      "https://www.linkedin.com/company/yieldge",
      "https://github.com/yieldge",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "info@yieldge.com",
      availableLanguage: ["Spanish", "English"],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Yieldge",
    url: siteUrl,
    description:
      locale === "es"
        ? "Transforma negocios con sitios web modernos, automatización con IA y sistemas escalables que entregan resultados medibles."
        : "Transform businesses with modern websites, AI automation, and scalable systems that deliver measurable results.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType:
      locale === "es"
        ? "Soluciones Tecnológicas y Desarrollo Offshore"
        : "Technology Solutions & Offshore Development",
    provider: {
      "@type": "Organization",
      name: "Yieldge",
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name:
        locale === "es"
          ? "Servicios de Soluciones Tecnológicas y Desarrollo Offshore"
          : "Technology Solutions & Offshore Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name:
              locale === "es"
                ? "QA y Automatización de Pruebas"
                : "QA and Test Automation",
            description:
              locale === "es"
                ? "Servicios integrales de aseguramiento de calidad y pruebas automatizadas para asegurar que tu software cumpla los más altos estándares"
                : "Comprehensive quality assurance and automated testing services to ensure your software meets the highest standards",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name:
              locale === "es" ? "Servicios de Seguridad" : "Security Services",
            description:
              locale === "es"
                ? "Soluciones avanzadas de ciberseguridad y protección contra amenazas para salvaguardar tus activos digitales"
                : "Advanced cybersecurity solutions and threat protection to safeguard your digital assets",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name:
              locale === "es"
                ? "Consultoría Tecnológica"
                : "Technology Consulting",
            description:
              locale === "es"
                ? "Orientación tecnológica estratégica para impulsar la transformación digital y el crecimiento del negocio"
                : "Strategic technology guidance to drive digital transformation and business growth",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name:
              locale === "es" ? "Apps Móviles y Web" : "Mobile & Web Apps",
            description:
              locale === "es"
                ? "Desarrollo de aplicaciones móviles y web personalizadas para experiencias de usuario excepcionales"
                : "Custom mobile and web application development for exceptional user experiences",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name:
              locale === "es" ? "Aumento de Personal" : "Staff Augmentation",
            description:
              locale === "es"
                ? "Accede a talento técnico de primer nivel para escalar tu equipo de manera rápida y eficiente"
                : "Access top technical talent to scale your team quickly and efficiently",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name:
              locale === "es" ? "Análisis e Insights" : "Analytics and Insights",
            description:
              locale === "es"
                ? "Insights basados en datos y soluciones de análisis para impulsar decisiones comerciales informadas"
                : "Data-driven insights and analytics solutions to power informed business decisions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name:
              locale === "es" ? "Soluciones en la Nube" : "Cloud Solutions",
            description:
              locale === "es"
                ? "Infraestructura en la nube escalable y servicios de migración para negocios modernos"
                : "Scalable cloud infrastructure and migration services for modern businesses",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name:
              locale === "es"
                ? "Desarrollo Offshore"
                : "Offshore Development",
            description:
              locale === "es"
                ? "Equipos de desarrollo de software nearshore que entregan calidad y valor"
                : "Nearshore software development teams delivering quality and value",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: locale === "es" ? "Software a Medida" : "Tailored Software",
            description:
              locale === "es"
                ? "Soluciones de software personalizadas diseñadas específicamente para las necesidades únicas de tu negocio"
                : "Custom software solutions designed specifically for your unique business needs",
          },
        },
      ],
    },
  };

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function updateFavicon() {
                  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const favicon = isDarkMode ? '/brand/favicon-dark.png' : '/brand/favicon-light.png';

                  // Remove all existing favicon links
                  document.querySelectorAll("link[rel*='icon']").forEach(link => link.remove());

                  // Add new favicon
                  const link = document.createElement('link');
                  link.rel = 'icon';
                  link.type = 'image/png';
                  link.href = favicon;
                  document.head.appendChild(link);

                  // Add shortcut icon for compatibility
                  const shortcut = document.createElement('link');
                  shortcut.rel = 'shortcut icon';
                  shortcut.type = 'image/png';
                  shortcut.href = favicon;
                  document.head.appendChild(shortcut);
                }

                // Set immediately
                updateFavicon();

                // Listen for changes
                if (window.matchMedia) {
                  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body className="antialiased min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <FaviconSwitcher />
          <HashScrollFix />
          <div className="w-full overflow-x-hidden">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
