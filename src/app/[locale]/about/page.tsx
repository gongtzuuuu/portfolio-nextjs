import React, { FC } from 'react';
import AboutPage from '@/layout/AboutPage';
import { useTranslations } from 'next-intl';

const Page: FC = () => {
  const t = useTranslations('AboutPage');

  const pageTitle = t('title');
  const paragraph = t.rich('description', {
    break: (chunks: any) => (
      <>
        <br />
        <br />
      </>
    ),
  });
  const resumeLabel = t('resume.label');
  const resumeLink = t('resume.link');

  return (
    <AboutPage
      pageTitle={pageTitle}
      paragraph={paragraph}
      resume={{ label: resumeLabel, href: resumeLink }}
    />
  );
};

export default Page;
