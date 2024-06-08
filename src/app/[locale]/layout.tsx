import type { Metadata } from 'next';
import React, { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeProvider';
import { MenuProvider } from '@/context/MenuProvider';
import Header from '@/components/Header';
import Body from '@/components/Body';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

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
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <MenuProvider>
            <main className="flex min-h-screen flex-col justify-between p-12 md:p-24 lg:p-24">
              <Header />
              <Body>{children}</Body>
              <Footer />
            </main>
          </MenuProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
