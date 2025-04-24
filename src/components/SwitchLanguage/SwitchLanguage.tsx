'use client';
import React, { FC, useTransition } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

type Locale = 'en' | 'zh';

export const SwitchLanguage: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const activeLocale = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (newLocale: Locale) => {
    if (isPending) return;

    const pattern = /^\/(en|zh)(\/.*)?$/;
    const match = pathname.match(pattern);

    let newPath = '/';

    if (match) {
      const restPath = match[2] ?? '';
      newPath = `/${newLocale}/${restPath}`;
    } else {
      newPath = `/${newLocale}`;
    }

    startTransition(() => {
      router.replace(newPath);
    });
  };

  const renderSwitcher = () => {
    const newLocale: Locale = activeLocale === 'en' ? 'zh' : 'en';

    return (
      <div
        className="text-sm font-medium cursor-pointer hover:text-[#937829] transition-color duration-200 ease-in-out"
        onClick={() => handleLanguageChange(newLocale)}
      >
        {activeLocale.toLocaleUpperCase()}
      </div>
    );
  };

  return renderSwitcher();
};
