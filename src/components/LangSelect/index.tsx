'use client';
import React, { ChangeEvent, useTransition } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu/DropdownMenu';
import { Globe } from 'lucide-react';
import zhFlag from '@/assets/flag-tw-svgrepo-com.svg';
import enFlag from '@/assets/flag-us-svgrepo-com.svg';
import Image from 'next/image';

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex space-x-2 cursor-pointer">
          <Globe />
          <p>Language</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="flex space-x-2"
            onClick={() => handleLangChange('en')}
          >
            <Image src={enFlag} alt="EN" className="w-4 h-4" />
            <span>EN</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex space-x-2"
            onClick={() => handleLangChange('zh')}
          >
            <Image src={zhFlag} alt="ZH" className="w-4 h-4" />
            <span>ZH</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LangSelect;
