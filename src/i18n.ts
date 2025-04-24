import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'zh'] as const;

export type Locales = (typeof locales)[number];

export const defaultLocale = 'en' satisfies Locales;

const isLocale = (locale: string): locale is Locales => {
  return locales.includes(locale as Locales);
};

export default getRequestConfig(async ({ locale }) => {
  if (!isLocale(locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
