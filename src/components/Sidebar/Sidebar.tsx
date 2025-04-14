'use client';
import React, { FC, useState, useEffect } from 'react';
import Router from 'next/router';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { useMenuContext } from '@/context/MenuProvider';
import { SidebarItem } from '@/components/SidebarItem/SidebarItem';
import { SIDEBAR_LINKS } from '@/const/sidebar-links';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Sidebar: FC = () => {
  const activeLocale = useLocale();

  const { isMenuOpen } = useMenuContext();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeComplete = () => setIsLoading(false);
    Router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [isLoading]);

  if (!isMenuOpen) return null;

  return (
    <motion.div initial="closed" animate="open" variants={variants}>
      <div key={0} className="flex flex-col gap-y-3">
        {Object.entries(SIDEBAR_LINKS).map(
          ([key, { label, href, serialNumber }]) => (
            <SidebarItem
              key={key}
              serialNumber={serialNumber}
              label={label}
              href={`/${activeLocale}` + href}
              setIsLoading={setIsLoading}
            />
          )
        )}
      </div>
    </motion.div>
  );
};
