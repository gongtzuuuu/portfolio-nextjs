import React from 'react';
import ThemeSwitch from '@/components/ThemeSwitch';
import LangSelect from '@/components/LangSelect';
import MenuToggleButton from '@/components/MenuToggleButton';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="w-full flex justify-between">
      <h3 className="font-bold">TZU</h3>
      <div className="flex space-x-5">
        <ThemeSwitch />
        <LangSelect />
        <MenuToggleButton />
      </div>
    </div>
  );
};

export default Header;
