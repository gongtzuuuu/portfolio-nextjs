import React, { FC } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { DEFAULT_BLACK } from '@/const/color';

const NotFound: FC = () => {
  const t = useTranslations('NotFoundPage');

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-4xl font-bold mb-2">{t('title')}</h3>
      <p className="text-center mb-5">{t('description')}</p>
      <Link className="relative group" href="/">
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-200 to-yellow-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
          <div className="space-y-2">
            <p className={`text-[${DEFAULT_BLACK}]`}> {t('link')}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
