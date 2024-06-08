import React from 'react';
import { useTranslations } from 'next-intl';

interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = ({}) => {
  const t = useTranslations('ContactPage');
  return (
    <div className="container flex flex-col items-center">
      <h1 className="text-4xl font-bold">{t('title')}</h1>
      <div className="flex space-x-12">
        {/** Mail Section */}
        <div className="flex space-x-3">
          <p className="font-semibold">MAIL</p>
          <div>
            <p>liangtuzyun@gmail.com</p>
          </div>
        </div>
        {/** Social Media Section */}
        <div className="flex space-x-3">
          <p className="font-semibold">SOCIAL MEDIA</p>
          <div>
            <p>LinkedIn</p>
            <p>Medium</p>
            <p>Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
