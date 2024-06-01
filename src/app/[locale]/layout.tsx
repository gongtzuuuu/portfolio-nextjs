import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '../providers';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TZU',
  description: `Welcome to Tzu Yun's website! Explore my software engineering skills, projects, resume, and blog. Connect with me on LinkedIn, GitHub, and more. Let's create innovative solutions together!`,
};

interface RootLayoutProps {
  children: React.ReactNode;
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
