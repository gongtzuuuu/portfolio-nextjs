import React from 'react';
import { useTranslations } from 'next-intl';

interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = ({}) => {
  const t = useTranslations('HomePage');
  return (
    <div className="container flex flex-col items-center">
      <h1 className="text-4xl font-bold">Hello</h1>
      <p>{t('description')}</p>
    </div>
  );
};

export default ContactPage;
