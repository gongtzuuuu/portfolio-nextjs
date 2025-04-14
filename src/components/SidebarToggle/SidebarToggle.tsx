'use client';
import React, { FC } from 'react';
import { AlignJustify, XIcon } from 'lucide-react';
import { useMenuContext } from '@/context/MenuProvider';

export const SidebarToggle: FC = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenuContext();

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const renderIcon = () => {
    const Icon = isMenuOpen ? XIcon : AlignJustify;
    return (
      <Icon
        size={20}
        className="cursor-pointer hover:text-[#937829] transition-color duration-200 ease-in-out"
        onClick={toggleMenu}
      />
    );
  };

  return renderIcon();
};
