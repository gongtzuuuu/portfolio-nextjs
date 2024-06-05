'use client';
import React, { useTransition } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

const LangSelect = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const handleLangChange = (locale: string) => {
    startTransition(() => {
      router.replace(`/${locale}`);
    });
  };

  return (
    <div>
      {localActive === 'en' && (
        <p className="cursor-pointer" onClick={() => handleLangChange('zh')}>
          ZH
        </p>
      )}
      {localActive === 'zh' && (
        <p className="cursor-pointer" onClick={() => handleLangChange('en')}>
          EN
        </p>
      )}
    </div>
  );
};

export default LangSelect;
