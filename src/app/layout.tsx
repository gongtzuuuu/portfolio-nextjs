import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import { getTranslations, getLocale } from 'next-intl/server';
import { cn } from '@/utils/style';
import './globals.css';

const notoSans = Noto_Sans({
  subsets: ['cyrillic', 'latin', 'latin-ext'],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={cn(notoSans.className)}>{children}</body>
    </html>
  );
}
