import React from 'react';
import { useTranslations } from 'next-intl';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  const t = useTranslations('HomePage');
  return (
    <div id="home-page" className="container flex flex-col items-center">
      <h1 className="text-4xl font-bold">{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
};

export default HomePage;
