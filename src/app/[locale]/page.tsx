import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import HomePage from '@/layout/HomePage';

interface HomePageProps {}

const Page: React.FC<HomePageProps> = ({}) => {
  const activeLocale = useLocale();
  const t = useTranslations('HomePage');
  const pageTitle = t('title');
  const pageDescription = t.rich('description', {
    break: (chunks: any) => <br />,
  });
  const linkWork = t('links.works');
  const linkAbout = t('links.about');
  return (
    <HomePage
      activeLocale={activeLocale}
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      linkWork={linkWork}
      linkAbout={linkAbout}
    />
  );
};

export default Page;
