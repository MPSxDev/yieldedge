import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './i18n/config';

// Create the next-intl middleware
const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  // 'as-needed' hides the default locale (es) from URLs
  // This means `/` serves Spanish, `/en` serves English
  localePrefix: 'as-needed',
  // Detect locale from browser Accept-Language header
  // If detected locale is not Spanish, redirect to that locale
  localeDetection: true,
});

// Custom middleware that handles CR routes (always Spanish) before next-intl
export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // CR routes should always be in Spanish - redirect /en/cr/* to /cr/*
  if (pathname.startsWith('/en/cr')) {
    const newPathname = pathname.replace('/en/cr', '/cr');
    return NextResponse.redirect(new URL(newPathname, request.url));
  }

  // For /cr routes without locale prefix, rewrite internally to /es/cr (Spanish)
  // This prevents redirecting /cr to /en/cr based on browser language
  if (pathname.startsWith('/cr')) {
    const newUrl = new URL(request.url);
    newUrl.pathname = `/es${pathname}`;
    return NextResponse.rewrite(newUrl);
  }

  // For all other routes, use the standard next-intl middleware
  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except for:
  // - API routes
  // - Static files (_next/static, _next/image, favicon.ico, etc.)
  // - Public assets (images, brand assets, etc.)
  matcher: [
    '/',
    '/(es|en)/:path*',
    // Match all paths except static files and API
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
