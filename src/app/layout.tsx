import type { Metadata } from "next";
import "./globals.css";
import FaviconSwitcher from "@/components/FaviconSwitcher";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yieldge.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yieldge - Technology that Performs",
    template: "%s | Yieldge"
  },
  description: "Transform businesses with modern websites, AI automation, and scalable systems that deliver measurable results. Technology solutions for real estate: lead generation, property management, and market analysis.",
  keywords: [
    "AI automation real estate",
    "real estate technology",
    "automated lead generation",
    "property management",
    "real estate market analysis",
    "scalable real estate systems",
    "cloud infrastructure real estate",
    "property management software",
    "real estate technology solutions",
    "real estate automation",
    "real estate CRM",
    "property management automation"
  ],
  authors: [{ name: "Yieldge" }],
  creator: "Yieldge",
  publisher: "Yieldge",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Icons are handled dynamically via script in head
  icons: {
    apple: '/brand/favicon-light.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Yieldge',
    title: "Yieldge - Technology that Performs",
    description: "Modern websites, AI automation, and scalable systems to drive your growth. Specialized technology solutions for the real estate industry.",
    images: [
      {
        url: '/assets/featured.jpg',
        width: 1200,
        height: 630,
        alt: 'Yieldge - Technology that Performs',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Yieldge - Technology that Performs",
    description: "Modern websites, AI automation, and scalable systems to drive your growth",
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
    canonical: siteUrl,
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Yieldge",
    "url": siteUrl,
    "logo": `${siteUrl}/brand/logo-main.png`,
    "description": "Technology partner specialized in web services, cloud infrastructure, and AI automation for the real-estate industry.",
    "sameAs": [
      "https://twitter.com/yieldge",
      "https://www.linkedin.com/company/yieldge",
      "https://github.com/yieldge"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "contact@yieldge.com",
      "availableLanguage": ["Spanish", "English"]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Yieldge",
    "url": siteUrl,
    "description": "Transform businesses with modern websites, AI automation, and scalable systems that deliver measurable results.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Real Estate Technology Solutions",
    "provider": {
      "@type": "Organization",
      "name": "Yieldge"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Real Estate Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automated Lead Generation & Qualification",
            "description": "Capture and qualify leads 24/7 so you only talk to real prospects."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Document & Data Handling Automation",
            "description": "Contracts, valuations, leases, and portfolios — organized, searchable, and analyzed automatically."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Market Analytics & Valuation Insights",
            "description": "Get predictive pricing and investment guidance based on real data."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Property & Tenant Management",
            "description": "Rent collection, maintenance scheduling, tenant communications, lease renewals — automated reliably."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Scalable Web & Cloud Infrastructure",
            "description": "Secure, reliable, and customized for real-estate businesses ready to grow."
          }
        }
      ]
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
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
        <FaviconSwitcher />
        <div className="w-full overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
