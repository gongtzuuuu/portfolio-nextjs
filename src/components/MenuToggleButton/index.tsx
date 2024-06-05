'use client';
import React from 'react';
import { AlignJustify, XIcon } from 'lucide-react';
import { useMenuContext } from '@/context/MenuProvider';

const MenuToggleButton = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenuContext();

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="cursor-pointer" onClick={toggleMenu}>
      {isMenuOpen ? <XIcon size={24} /> : <AlignJustify size={24} />}
    </div>
  );
};

export default MenuToggleButton;
