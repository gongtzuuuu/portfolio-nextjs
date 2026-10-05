import React from 'react';
import { useTranslations } from 'next-intl';
import { SOCIAL_MEDIA } from '@/const/social-media';
import { IconLink } from '@/components/IconLink/IconLink';

export const ContactLayout = () => {
  const t = useTranslations('ContactPage');

  return (
    <div className="flex items-end">
      <div className="w-full max-h-96 overflow-y-scroll no-scrollbar flex flex-col gap-y-4 px-0 md:p-4">
        <h3 className="text-4xl font-bold">{t('title')}</h3>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid gap-4">
            <p className="font-bold">{t('columns.email')}</p>
            <p>liangtuzyun@gmail.com</p>
          </div>
          <div className="grid gap-4">
            <p className="font-bold">{t('columns.social')}</p>
            <div className="flex gap-x-4">
              {Object.entries(SOCIAL_MEDIA).map(([key, value]) => (
                <IconLink
                  key={key}
                  type="external"
                  label={value.label}
                  href={value.href}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
