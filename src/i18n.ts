import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { isLocale } from '@/const/locales';

export { locales, defaultLocale, isLocale } from '@/const/locales';
export type { Locales } from '@/const/locales';

export default getRequestConfig(async ({ requestLocale }) => {
  // The [locale] segment, set via setRequestLocale in layouts and pages
  const locale = await requestLocale;
  if (!locale || !isLocale(locale)) notFound();

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
