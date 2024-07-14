import React from 'react';
import { useTranslations } from 'next-intl';

const NotFound = () => {
  const t = useTranslations('NotFoundPage');
  const pageTitle = t('title');
  const pageDescription = t('description');
  return (
    <div className="flex flex-col items-center space-y-2">
      <h3 className="text-4xl font-bold">{pageTitle}</h3>
      <p>{pageDescription}</p>
    </div>
  );
};

export default NotFound;
