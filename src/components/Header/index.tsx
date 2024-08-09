'use server';
import React from 'react';
import Link from 'next/link';
import ThemeSwitch from '@/components/ThemeSwitch';
import LangSelect from '@/components/LangSelect';
import MenuToggleButton from '@/components/MenuToggleButton';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className="w-full flex justify-between items-center">
      <Link href="/" className="font-bold">
        TZU
      </Link>
      <div className="flex items-center space-x-5">
        <ThemeSwitch />
        <LangSelect />
        <MenuToggleButton />
      </div>
    </header>
  );
};

export default Header;
