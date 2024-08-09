import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import '@/styles/notfound.css';

interface NotFoundProps {
  params: {
    locale: string;
  };
}

const NotFound: React.FC<NotFoundProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
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
