import React, { FC } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import HomePage from '@/layout/HomePage';

const Page: FC = () => {
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
      paragraph={pageDescription}
      workLinkLabel={linkWork}
      aboutLinkLabel={linkAbout}
    />
  );
};

export default Page;
