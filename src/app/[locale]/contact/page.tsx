import React from 'react';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import ContactPage from '@/layout/ContactPage';

interface ContactPageProps {
  params: {
    locale: string;
  };
}

const Page: React.FC<ContactPageProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
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
