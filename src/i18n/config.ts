// i18n configuration
// Defines supported locales and default locale

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

// Spanish is the default language
export const defaultLocale: Locale = 'es';

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
