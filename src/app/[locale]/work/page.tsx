import React, { FC } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Locale } from '@/i18n';
import WorkPage from '@/layout/WorkPage';

const Page: FC = () => {
  const activeLocale = useLocale() as Locale;
  const t = useTranslations('WorkPage');
  const pageTitle = t('title');

  return <WorkPage activeLocale={activeLocale} pageTitle={pageTitle} />;
};

export default Page;
