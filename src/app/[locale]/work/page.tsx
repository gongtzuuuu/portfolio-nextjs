import React from 'react';
import { useTranslations } from 'next-intl';

interface WorkPageProps {}

const WorkPage: React.FC<WorkPageProps> = ({}) => {
  const t = useTranslations('WorkPage');
  return (
    <div className="container flex flex-col items-center">
      <h1 className="text-4xl font-bold">{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
};

export default WorkPage;
