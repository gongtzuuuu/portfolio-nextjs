import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import ContactPage from '@/layout/ContactPage';

const Page: FC = () => {
  const t = useTranslations('ContactPage');
  const pageTitle = t('title');
  const contactEmail = t('columns.email');
  const contactSocialMedia = t('columns.social');

  return (
    <ContactPage
      pageTitle={pageTitle}
      email={contactEmail}
      socialMedia={contactSocialMedia}
    />
  );
};

export default Page;
