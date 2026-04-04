'use client';
import React from 'react';
import { Locales } from '@/i18n';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FolderOpenDot, Gem } from 'lucide-react';
import { IconLink } from '@/components/IconLink/IconLink';
import { HomeTexts } from '@/components/base/home/HomeTexts';

export const HomePageLayout = () => {
  const t = useTranslations('HomePage');
  const activeLocale = useLocale() as Locales;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      className="flex flex-col gap-y-6 items-center"
    >
      <HomeTexts.Title>
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          {t('title')}
        </h1>
      </HomeTexts.Title>
      <HomeTexts.Description delay={0.2}>
        {t.rich('description', { break: () => <br /> })}
      </HomeTexts.Description>
      <div className="flex flex-col md:flex-row md:gap-x-6 items-center justify-center">
        <HomeTexts.Link delay={0.4}>
          <IconLink
            type="internal"
            label={t('links.works')}
            href={`${activeLocale}/work`}
            Icon={FolderOpenDot}
          />
        </HomeTexts.Link>
        <HomeTexts.Link delay={0.6}>
          <IconLink
            type="internal"
            label={t('links.about')}
            href={`${activeLocale}/about`}
            Icon={Gem}
          />
        </HomeTexts.Link>
      </div>
    </motion.div>
  );
};
