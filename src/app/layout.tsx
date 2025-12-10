import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "Yieldge - Technology that Performs",
  description: "Transformamos negocios con sitios web modernos, automatización IA y sistemas escalables que generan resultados medibles.",
  icons: {
    icon: '/brand/logo-isotipo.png',
    apple: '/brand/logo-isotipo.png',
  },
  openGraph: {
    title: "Yieldge - Technology that Performs",
    description: "Sitios web modernos, automatización IA y sistemas escalables para impulsar tu crecimiento",
    images: ['/brand/logo-main.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Yieldge - Technology that Performs",
    description: "Sitios web modernos, automatización IA y sistemas escalables para impulsar tu crecimiento",
    images: ['/brand/logo-main.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen">
        <div className="w-full overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
