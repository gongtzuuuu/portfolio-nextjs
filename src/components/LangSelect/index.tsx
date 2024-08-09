'use client';
import React, { useTransition } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '../ui/Button/Button';

const LangSelect = () => {
  const router = useRouter();
  const pathname = usePathname();
  const segment = pathname.split('/');
  const localActive = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleLangChange = (locale: string) => {
    const pathnameArray = pathname.split('/');
    startTransition(() => {
      router.replace(`/${locale}/${pathnameArray.slice(2).join('/')}`);
    });
  };

  return (
    <div>
      {localActive === 'en' && (
        // <Link href={`/zh/${segment.slice(2).join('/')}`}>ZH</Link>
        <Button
          variant="secondary"
          onClick={() => handleLangChange('zh')}
          disabled={isPending}
        >
          ZH
        </Button>
      )}
      {localActive === 'zh' && (
        // <Link href={`/en/${segment.slice(2).join('/')}`}>EN</Link>
        <Button
          variant="secondary"
          onClick={() => handleLangChange('en')}
          disabled={isPending}
        >
          EN
        </Button>
      )}
    </div>
  );
};

export default LangSelect;
