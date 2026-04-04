import React, { Suspense } from 'react';
import NextTopLoader from 'nextjs-toploader';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { MenuProvider } from '@/context/MenuProvider';
import { ThemeProvider } from '@/context/ThemeProvider';
import { Header } from '@/components/Header/Header';
import { MainContent } from '@/components/layouts/MainContent';
import { NavigationEvents } from '@/components/layouts/NavigationEvents';
import { Footer } from '@/components/Footer/Footer';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<LocaleLayoutProps>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <NextTopLoader color="#937829" showSpinner={false} />
      <ThemeProvider>
        <MenuProvider>
          <main className="flex min-h-screen flex-col justify-between p-12 md:p-24 lg:p-24 z-10">
            <Header />
            <Suspense fallback={null}>
              <MainContent>{children}</MainContent>
              <NavigationEvents />
            </Suspense>
            <Footer />
          </main>
        </MenuProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
