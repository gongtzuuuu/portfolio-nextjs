'use client';
import React, { useTransition } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

const LangSelect = () => {
  const router = useRouter();
  const pathname = usePathname();
  const segment = pathname.split('/');
  const localActive = useLocale();
  const [isPending, startTransition] = useTransition();

  // const handleLangChange = (locale: string) => {
  //   const pathnameArray = pathname.split('/');
  //   startTransition(() => {
  //     router.push(`/${locale}/${pathnameArray.slice(2).join('/')}`);
  //   });
  // };

  return (
    <div>
      {localActive === 'en' && (
        <Link href={`/zh/${segment.slice(2).join('/')}`}>ZH</Link>
      )}
      {localActive === 'zh' && (
        <Link href={`/en/${segment.slice(2).join('/')}`}>EN</Link>
      )}
    </div>
  );
};

export default LangSelect;
