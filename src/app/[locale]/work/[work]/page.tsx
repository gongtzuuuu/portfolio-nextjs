import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import WorkDetailPage from '@/layout/WorkDetailPage';

interface PageProps {}

const Page: React.FC<PageProps> = (params) => {
  const t = useTranslations('WorkPage');

  return <WorkDetailPage />;
};

export default Page;
