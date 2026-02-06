import type { Metadata } from "next";

// Root layout - minimal wrapper for the entire app
// The [locale] layout handles all the actual content and i18n

export const metadata: Metadata = {
  icons: {
    apple: '/brand/favicon-light.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
