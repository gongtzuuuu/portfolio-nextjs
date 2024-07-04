import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import WorkPage from '@/layout/WorkPage';

interface PageProps {}

const Page: React.FC<PageProps> = ({}) => {
  const t = useTranslations('WorkPage');
  const activeLocale = useLocale();
  return <WorkPage activeLocale={activeLocale} />;
};

export default Page;
