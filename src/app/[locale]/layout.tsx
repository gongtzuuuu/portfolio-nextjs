import type { Metadata } from 'next';
import React, { Suspense } from 'react';
import { Noto_Sans, Noto_Sans_TC } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { NextIntlClientProvider } from 'next-intl';
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from 'next-intl/server';
import { locales } from '@/i18n';
import { SITE_URL } from '@/const/site';
import { cn } from '@/utils/style';
import { MenuProvider } from '@/context/MenuProvider';
import { ThemeProvider } from '@/context/ThemeProvider';
import { Header } from '@/components/Header/Header';
import { MainContent } from '@/components/layouts/MainContent';
import { NavigationEvents } from '@/components/layouts/NavigationEvents';
import { Footer } from '@/components/Footer/Footer';

// Latin text uses Noto Sans, Chinese falls through to Noto Sans TC
// (see fontFamily.sans in tailwind.config.ts)
const notoSans = Noto_Sans({
  subsets: ['cyrillic', 'latin', 'latin-ext'],
  variable: '--font-noto-sans',
});

// No Chinese subset to preload: Google Fonts splits CJK by unicode-range,
// so the browser only downloads the slices a page uses
const notoSansTC = Noto_Sans_TC({
  preload: false,
  variable: '--font-noto-sans-tc',
});

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Omit<LocaleLayoutProps, 'children'>): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t('title'), template: `%s | ${t('title')}` },
    description: t('description'),
    alternates: {
      types: { 'application/rss+xml': `/${locale}/feed.xml` },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<LocaleLayoutProps>) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn(notoSans.variable, notoSansTC.variable, 'font-sans')}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NextTopLoader color="#937829" showSpinner={false} />
          <ThemeProvider>
            <MenuProvider>
              <main className="flex min-h-screen flex-col justify-between p-12 md:p-24 lg:p-24 z-10">
                <Header />
                <MainContent>{children}</MainContent>
                {/* Only NavigationEvents needs the boundary; wrapping page
                    content would turn notFound() into a 200 response */}
                <Suspense fallback={null}>
                  <NavigationEvents />
                </Suspense>
                <Footer />
              </main>
            </MenuProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
