'use client';
import React, { useEffect } from 'react';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Router } from 'next/router';
import { motion } from 'framer-motion';
import { Locales } from '@/i18n';
import { useMenuContext } from '@/context/MenuProvider';
import { SIDEBAR_LINKS } from '@/const/sidebar-links';
import { normalizePath } from '@/utils.ts/path';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {}

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Sidebar: React.FC<SidebarProps> = ({}) => {
  const activeLocale = useLocale() as Locales;
  const pathname = usePathname();

  const { setIsMenuOpen } = useMenuContext();

  /**
   * Close the menu once the route has changed
   */
  useEffect(() => {
    const handleRouteChangeComplete = () => setIsMenuOpen(false);

    Router.events?.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      Router.events?.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [setIsMenuOpen]);

  // Ensure that the menu closes after the next page is loaded
  const handleMenuClose = (nextUrl: string) => {
    const current = normalizePath(pathname);
    const next = normalizePath(nextUrl);

    if (current === next) {
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.div
      initial="closed"
      animate="open"
      variants={variants}
      className="w-full flex flex-col gap-y-6"
    >
      {Object.entries(SIDEBAR_LINKS).map(([key, value], index) => (
        <SidebarItem
          key={key}
          id={index}
          href={`/${activeLocale}${value.href}`}
          label={value.label}
          onClick={handleMenuClose}
        />
      ))}
    </motion.div>
  );
};

export default Sidebar;
