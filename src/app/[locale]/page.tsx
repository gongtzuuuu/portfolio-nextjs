import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Locales } from '@/i18n';
import HomePage from '@/layout/HomePage';

const Page: React.FC = () => {
  const activeLocale = useLocale() as Locales;
  const t = useTranslations('HomePage');

  const pageTitle = t('title');
  const pageDescription = t.rich('description', {
    break: () => <br />,
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
