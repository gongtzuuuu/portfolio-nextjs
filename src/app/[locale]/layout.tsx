import type { Metadata } from 'next';
import React, { ReactNode, Suspense } from 'react';
import { Inter, Noto_Sans } from 'next/font/google';
import { unstable_setRequestLocale } from 'next-intl/server';
import NextTopLoader from 'nextjs-toploader';
import { ThemeProvider } from '@/context/ThemeProvider';
import { MenuProvider } from '@/context/MenuProvider';
import { ProjectProvider } from '@/context/ProjectProvider';
import { Header } from '@/components/Header/Header';
import { BodyContainer } from '@/components/BodyContainer/BodyContainer';
import { Footer } from '@/components/Footer/Footer';
import { NavigationEvents } from '@/components/NavigationEvents/NavigationEvents';
import { DEFAULT_YELLOW } from '@/const/color';
import '@/styles/globals.css';

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
        <NextTopLoader color={DEFAULT_YELLOW} showSpinner={false} />
        <ThemeProvider>
          <MenuProvider>
            <ProjectProvider>
              <main className="flex min-h-screen flex-col justify-between p-12 md:p-24 lg:p-24 z-10">
                <Header />
                <BodyContainer>{children}</BodyContainer>
                <Suspense fallback={null}>
                  <NavigationEvents />
                </Suspense>
                <Footer />
              </main>
            </ProjectProvider>
          </MenuProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
