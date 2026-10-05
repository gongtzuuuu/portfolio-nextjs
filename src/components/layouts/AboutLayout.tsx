import React, { useMemo } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Locales } from '@/i18n';
import { IconLinkResume } from '@/components/IconLink/IconLinkResume';
import { RESUME_LINKS } from '@/const/resume-links';

export const AboutLayout = () => {
  const activeLocale = useLocale() as Locales;
  const t = useTranslations('AboutPage');

  const pageDescription = t.rich('description', {
    break: () => (
      <>
        <br />
        <br />
      </>
    ),
  });

  const resumeLink = useMemo(() => RESUME_LINKS[activeLocale], [activeLocale]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
      <div className="max-h-96 overflow-y-scroll no-scrollbar flex flex-col gap-y-4 p-4">
        <h3 className="text-4xl font-bold">{t('title')}</h3>
        <hr className="w-full md:w-[90%]" />
        <p className="w-full mb-4">{pageDescription}</p>
        <IconLinkResume label={t('links.resume')} href={resumeLink} />
      </div>
      <div className="relative h-[200px] hidden md:flex px-4 pt-4">
        <Image
          src="/about.png"
          alt="About Image"
          fill
          className="rounded-tr-2xl object-cover object-center"
          loading="eager"
        />
      </div>
    </div>
  );
};
