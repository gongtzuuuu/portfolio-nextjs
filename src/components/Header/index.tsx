import React from 'react';
import Link from 'next/link';
import ThemeSwitch from '@/components/ThemeSwitch';
import LangSelect from '@/components/LangSelect';
import MenuToggleButton from '@/components/MenuToggleButton';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="w-full flex justify-between">
      <Link href="/" className="font-bold">
        TZU
      </Link>
      <div className="flex space-x-5">
        <ThemeSwitch />
        <LangSelect />
        <MenuToggleButton />
      </div>
    </div>
  );
};

export default Header;
