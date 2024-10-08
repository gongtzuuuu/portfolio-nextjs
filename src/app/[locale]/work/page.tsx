import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import WorkPage from '@/layout/WorkPage';

interface PageProps {
  params: {
    locale: string;
  };
}

const Page: React.FC<PageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const activeLocale = useLocale();
  const t = useTranslations('WorkPage');
  const pageTitle = t('title');
  const workTypePersonal = t('type.personal');
  const workTypeCollaboration = t('type.collaboration');
  return (
    <WorkPage
      activeLocale={activeLocale}
      pageTitle={pageTitle}
      workTypePersonal={workTypePersonal}
      workTypeCollaboration={workTypeCollaboration}
    />
  );
};

export default Page;
