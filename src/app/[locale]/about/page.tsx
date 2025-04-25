/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Locales } from '@/i18n';
import { IconLinkResume } from '@/components/IconLink/IconLinkResume';
import { RESUME_LINKS } from '@/const/resume-links';

const Page: React.FC = () => {
  const activeLocale = useLocale() as Locales;
  const t = useTranslations('AboutPage');

  const pageTitle = t('title');
  const pageDescription = t.rich('description', {
    break: () => (
      <>
        <br />
        <br />
      </>
    ),
  });
  const resumeLabel = t('links.resume');
  const resumeLink = RESUME_LINKS[activeLocale];

  return (
    <div className="flex items-end">
      <div className="w-full md:w-[50%] max-h-96 overflow-y-scroll no-scrollbar flex flex-col gap-y-4 px-0 md:p-4">
        <h3 className="text-4xl font-bold">{pageTitle}</h3>
        <hr className="w-full md:w-[90%]" />
        <p className="w-full md:w-[90%] mb-4">{pageDescription}</p>
        <IconLinkResume label={resumeLabel} href={resumeLink} />
      </div>
      <div className="relative h-[200px] w-[50%] hidden md:flex px-4 pt-4">
        <img
          src="/about.png"
          alt="Menu Image"
          className="w-full h-full rounded-tr-2xl object-cover object-center"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Page;
