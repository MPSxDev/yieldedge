import { createNavigation } from 'next-intl/navigation';
import { locales, defaultLocale } from './config';

// Create navigation utilities that work with localized routes
// These are used for Link, redirect, usePathname, useRouter
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation({
    locales,
    defaultLocale,
    // Use 'as-needed' to hide the default locale from URLs
    // / -> Spanish (default)
    // /en -> English
    localePrefix: 'as-needed',
  });
