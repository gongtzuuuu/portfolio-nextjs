import React, { FC } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import WorkDetailPage from '@/layout/WorkDetailPage';
import { Locale } from '@/i18n';

const Page: FC = () => {
  const activeLocale = useLocale() as Locale;
  const t = useTranslations('WorkDetailPage');
  const backToListLinkLabel = t('links.back');

  return (
    <WorkDetailPage
      activeLocale={activeLocale}
      backToListLinkLabel={backToListLinkLabel}
    />
  );
};

export default Page;
