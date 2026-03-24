// i18n configuration
// Defines supported locales and default locale

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

// Spanish is the default language
export const defaultLocale: Locale = 'es';

// Cookie name for persisting user's locale preference
export const LOCALE_COOKIE = 'locale';

// Country code to locale mapping for geolocation-based detection
export const countryToLocale: Record<string, Locale> = {
  CR: 'es', // Costa Rica -> Spanish
  US: 'en', // United States -> English
};

// Locale display names for the language switcher
export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
};

// Short locale codes for the language switcher
export const localeShortNames: Record<Locale, string> = {
  es: 'ES',
  en: 'EN',
};
