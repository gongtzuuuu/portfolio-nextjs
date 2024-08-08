'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useMenuContext } from '@/context/MenuProvider';

const NavigationEvents = () => {
  const pathname = usePathname();
  const { setIsMenuOpen } = useMenuContext();

  useEffect(() => {
    // You can now use the current URL
    setIsMenuOpen(false);
  }, [pathname]);

  return null;
};

export default NavigationEvents;
