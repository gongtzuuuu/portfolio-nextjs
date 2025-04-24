import React, { FC } from 'react';
import Link from 'next/link';
import { SwitchTheme } from '@/components/SwitchTheme/SwitchTheme';
import { SwitchLanguage } from '@/components/SwitchLanguage/SwitchLanguage';
import { SidebarToggle } from '@/components/SidebarToggle/SidebarToggle';

export const Header: FC = () => (
  <div className="w-full flex justify-between items-center">
    <Link href="/" className="font-bold">
      TZU
    </Link>
    <div className="flex items-center gap-x-5">
      <SwitchTheme />
      <SwitchLanguage />
      <SidebarToggle />
    </div>
  </div>
);
