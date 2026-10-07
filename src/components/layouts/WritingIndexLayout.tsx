import React from 'react';
import { useTranslations } from 'next-intl';
import { ArrowLeft } from 'lucide-react';
import { WRITING_COLUMN_CLASS } from '@/const/writing';
import { ScrollBox } from '@/components/base/ScrollBox';

type WritingIndexLayoutProps = {
  hasPosts: boolean;
};

/** Right column at /writing, before a post is picked (desktop only) */
export const WritingIndexLayout = ({ hasPosts }: WritingIndexLayoutProps) => {
  const t = useTranslations('WritingPage');

  return (
    <ScrollBox className={WRITING_COLUMN_CLASS}>
      <div className="flex flex-col gap-y-3 pb-4">
        <p className="text-2xl font-bold leading-snug">{t('description')}</p>
        {hasPosts && (
          <p className="flex items-center gap-2 text-sm font-light">
            <ArrowLeft size={14} className="shrink-0" />
            {t('pick')}
          </p>
        )}
      </div>
    </ScrollBox>
  );
};
