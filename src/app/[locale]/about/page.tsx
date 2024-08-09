import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';
import AboutPage from '@/layout/AboutPage';

interface AboutPageProps {
  params: {
    locale: string;
  };
}

const Page: React.FC<AboutPageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  return <AboutPage />;
};

export default Page;
