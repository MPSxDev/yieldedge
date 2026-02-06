import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

// Middleware to handle locale detection and routing
// Routes:
// - `/` -> Spanish (default)
// - `/es/*` -> Spanish (explicit, will redirect to remove /es prefix)
// - `/en/*` -> English
export default createMiddleware({
  locales,
  defaultLocale,
  // 'as-needed' hides the default locale (es) from URLs
  // This means `/` serves Spanish, `/en` serves English
  localePrefix: 'as-needed',
  // Detect locale from browser Accept-Language header
  // If detected locale is not Spanish, redirect to that locale
  localeDetection: true,
});

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
