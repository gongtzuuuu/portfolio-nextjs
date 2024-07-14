import React from 'react';
import { useTranslations } from 'next-intl';
import ContactPage from '@/layout/ContactPage';

interface ContactPageProps {}

const Page: React.FC<ContactPageProps> = ({}) => {
  const t = useTranslations('ContactPage');
  const pageTitle = t('title');
  const columnEmail = t('columns.email');
  const columnSocalMedia = t('columns.social');
  return (
    <ContactPage
      pageTitle={pageTitle}
      columnEmail={columnEmail}
      columnSocalMedia={columnSocalMedia}
    />
  );
};

export default Page;
