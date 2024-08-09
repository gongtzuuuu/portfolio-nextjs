import type { Metadata } from 'next';
import React, { ReactNode, Suspense } from 'react';
import { Inter, Noto_Sans } from 'next/font/google';
import { unstable_setRequestLocale } from 'next-intl/server';
import NextTopLoader from 'nextjs-toploader';
// ========== Components ========== //
import Header from '@/components/Header';
import Body from '@/components/Body';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';
import Canvas from '@/components/Canvas';
import NavigationEvents from '@/components/NavigationEvents';
// ========== Utils ========== //
// import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from '@/context/ThemeProvider';
import { MenuProvider } from '@/context/MenuProvider';
// import { locales } from '@/i18n';
import '@/styles/globals.css';
import '@/styles/style.css';

const notoSans = Noto_Sans({
  subsets: ['latin'],
});
// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TZU',
  description: `Welcome to Tzu Yun's website! Explore my software engineering skills, projects, resume, and blog. Connect with me on LinkedIn, GitHub, and more. Let's create innovative solutions together!`,
};

interface RootLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={notoSans.className}>
        <NextTopLoader color="#937829" showSpinner={false} />
        {/* <Cursor /> */}
        <ThemeProvider>
          <MenuProvider>
            <main className="flex min-h-screen flex-col justify-between p-12 md:p-24 lg:p-24 z-10">
              <Header />
              <Body>{children}</Body>
              <Suspense fallback={null}>
                <NavigationEvents />
              </Suspense>
              <Footer />
            </main>
          </MenuProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
