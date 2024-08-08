import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import '@/styles/notfound.css';

const NotFound = () => {
  const t = useTranslations('NotFoundPage');

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-4xl font-bold mb-2">{t('title')}</h3>
      <p className="text-center mb-5">{t('description')}</p>
      <Link className="glow-button" href="/">
        {t('link')}
      </Link>
    </div>
  );
};

export default NotFound;
