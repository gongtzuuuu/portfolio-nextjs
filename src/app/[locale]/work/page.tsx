import React from 'react';
import { useTranslations } from 'next-intl';
import WorkPage from '@/layout/WorkPage';

interface PageProps {}

const Page: React.FC<PageProps> = ({}) => {
  const t = useTranslations('WorkPage');
  return <WorkPage />;
};

export default Page;
