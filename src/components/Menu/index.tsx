'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useMenuContext } from '@/context/MenuProvider';

interface MenuProps {}

const Menu: React.FC<MenuProps> = ({}) => {
  const router = useRouter();
  const localActive = useLocale();
  const { isMenuOpen, setIsMenuOpen } = useMenuContext();

  const handleRouteChange = (path: string) => {
    setIsMenuOpen(false);
    router.push(`/${localActive}/${path}`);
  };

  return (
    <div
      hidden={!isMenuOpen}
      className="container flex flex-col items-center space-y-6"
    >
      <p className="cursor-pointer" onClick={() => handleRouteChange('')}>
        HOME
      </p>
      <p className="cursor-pointer" onClick={() => handleRouteChange('about')}>
        ABOUT
      </p>
      <p className="cursor-pointer" onClick={() => handleRouteChange('work')}>
        WORK
      </p>
      <p
        className="cursor-pointer"
        onClick={() => handleRouteChange('contact')}
      >
        CONTACT
      </p>
    </div>
  );
};

export default Menu;
