import React from 'react';
import { useTranslations } from 'next-intl';

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = ({}) => {
  const t = useTranslations('AboutPage');
  return (
    <div className="container">
      <h3>{t('title')}</h3>
      <p>{t('description')}</p>
    </div>
  );
};

export default AboutPage;
