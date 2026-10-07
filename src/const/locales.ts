// Kept free of Next.js imports so non-Next code (e.g. utils/notion.ts) can use it
export const locales = ['en', 'zh'] as const;

export type Locales = (typeof locales)[number];

export const defaultLocale = 'en' satisfies Locales;

export const isLocale = (locale: string): locale is Locales => {
  return locales.includes(locale as Locales);
};
