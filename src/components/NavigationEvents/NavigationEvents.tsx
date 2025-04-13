'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useMenuContext } from '@/context/MenuProvider';

export const NavigationEvents = () => {
  const pathname = usePathname();
  const { setIsMenuOpen } = useMenuContext();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname, setIsMenuOpen]);

  return null;
};
