import React from 'react';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import WorkDetailPage from '@/layout/WorkDetailPage';

interface PageProps {
  params: {
    locale: string;
  };
}

const Page: React.FC<PageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('WorkDetailPage');
  const pageLink = t('links.back');

  return <WorkDetailPage pageLink={pageLink} />;
};

export default Page;
