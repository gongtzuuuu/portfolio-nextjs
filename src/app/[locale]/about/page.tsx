import React from 'react';
import { useTranslations } from 'next-intl';
import AboutPage from '@/layout/AboutPage';

interface AboutPageProps {}

const Page: React.FC<AboutPageProps> = ({}) => {
  const t = useTranslations('AboutPage');
  return <AboutPage />;
};

export default Page;
