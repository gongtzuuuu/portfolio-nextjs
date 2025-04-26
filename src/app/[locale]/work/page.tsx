import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Locales } from '@/i18n';
import WorkPage from '@/layout/WorkPage';

const Page: React.FC = () => {
  const activeLocale = useLocale() as Locales;
  const t = useTranslations('WorkPage');

  const pageTitle = t('title');

  return <WorkPage activeLocale={activeLocale} pageTitle={pageTitle} />;
};

export default Page;
