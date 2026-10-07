'use client';
import React from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { ChevronLeft } from 'lucide-react';

type GoBackLinkProps = {
  /** Defaults to the work list */
  href?: string;
  label?: string;
};

export const GoBackLink = ({ href, label }: GoBackLinkProps) => {
  const activeLocale = useLocale();
  const t = useTranslations('WorkDetailPage');

  return (
    <Link
      className="flex items-center gap-1 text-xs font-light hover:text-[#937829]"
      href={href ?? `/${activeLocale}/work`}
    >
      <ChevronLeft size={16} />
      {label ?? t('links.back')}
    </Link>
  );
};
