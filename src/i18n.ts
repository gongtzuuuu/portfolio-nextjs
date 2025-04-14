import { redirect } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'zh'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en' as const;

export default getRequestConfig(async ({ locale }) => {
  /**
   * Check if the locale is supported
   * If not, redirect to the default locale
   */
  if (!locales.includes(locale as Locale)) {
    redirect(`/${defaultLocale}`);
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
