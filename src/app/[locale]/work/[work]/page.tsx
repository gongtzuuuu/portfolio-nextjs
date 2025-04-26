import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Locales } from '@/i18n';
import WorkDetailPage from '@/layout/WorkDetailPage';

const Page: React.FC = () => {
  const activeLocale = useLocale() as Locales;
  const t = useTranslations('WorkDetailPage');

  const goBackLinkLabel = t('links.back');

  return (
    <WorkDetailPage
      activeLocale={activeLocale}
      goBackLinkLabel={goBackLinkLabel}
    />
  );
};

export default Page;
