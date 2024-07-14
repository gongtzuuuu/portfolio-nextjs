import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import WorkDetailPage from '@/layout/WorkDetailPage';

interface PageProps {}

const Page: React.FC<PageProps> = (params) => {
  const t = useTranslations('WorkDetailPage');
  const pageLink = t('links.back');

  return <WorkDetailPage pageLink={pageLink} />;
};

export default Page;
