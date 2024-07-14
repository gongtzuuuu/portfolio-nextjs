import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import HomePage from '@/layout/HomePage';

interface HomePageProps {}

const Page: React.FC<HomePageProps> = ({}) => {
  const activeLocale = useLocale();
  return <HomePage activeLocale={activeLocale} />;
};

export default Page;
