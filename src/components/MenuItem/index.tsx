'use client';
import React, { ReactNode, use, useEffect, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { useMenuContext } from '@/context/MenuProvider';
import SocialMediaItem from '../SocialMediaItem';

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const AnimationContainer = ({
  id,
  children,
}: {
  id: number;
  children: ReactNode;
}) => {
  return (
    <motion.div
      id={id.toString()}
      variants={menuItemVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
};

interface MenuItemProps {
  id: number;
  href: string;
  onClick?: () => void;
  number: string;
  label: string;
}

const MenuItem = (props: MenuItemProps) => {
  const { id, href, onClick, number, label } = props;
  return (
    <AnimationContainer id={id}>
      <Link href={href} onClick={onClick}>
        <h3 className="text-4xl md:text-6xl font-bold">
          <span className="text-base font-extralight mr-2">{number}</span>
          {label}
        </h3>
      </Link>
    </AnimationContainer>
  );
};

interface MenuItemGroupProps {}

const MenuItemGroup: React.FC<MenuItemGroupProps> = ({}) => {
  const localActive = useLocale();
  const pathname = usePathname();
  const { setIsMenuOpen } = useMenuContext();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeComplete = () => setIsLoading(false);
    Router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [isLoading]);

  //TODO: Ensure that the menu closes after the next page is loaded
  const handleMenuClose = (nextUrl: string) => {
    nextUrl.slice(-1) === '/' ? (nextUrl = nextUrl.slice(0, -1)) : nextUrl;
    const currentUrl =
      pathname.slice(-1) === '/' ? pathname.slice(0, -1) : pathname;

    if (pathname === nextUrl) {
      setIsMenuOpen(false);
    }
    setIsLoading(true);
  };

  return (
    <>
      {/** Menu Content */}
      <div className="flex flex-col space-y-10">
        <div className="flex flex-col space-y-3">
          <MenuItem
            id={0}
            href={`/${localActive}/`}
            onClick={() => handleMenuClose(`/${localActive}/`)}
            number="01"
            label="HOME"
          />
          <MenuItem
            id={1}
            href={`/${localActive}/about`}
            onClick={() => handleMenuClose(`/${localActive}/about`)}
            number="02"
            label="ABOUT"
          />
          <MenuItem
            id={2}
            href={`/${localActive}/work`}
            onClick={() => handleMenuClose(`/${localActive}/work`)}
            number="03"
            label="WORK"
          />
          <MenuItem
            id={3}
            href={`/${localActive}/contact`}
            onClick={() => handleMenuClose(`/${localActive}/contact`)}
            number="04"
            label="CONTACT"
          />
        </div>
        {/** Menu Footer */}
        <div className="flex space-x-4">
          <AnimationContainer id={1}>
            <SocialMediaItem
              label="LinkedIn"
              href="https://www.linkedin.com/in/tyliang/"
            />
          </AnimationContainer>
          <AnimationContainer id={2}>
            <SocialMediaItem
              label="Medium"
              href="https://www.medium.com/@tyliang"
            />
          </AnimationContainer>
          <AnimationContainer id={3}>
            <SocialMediaItem
              label="Github"
              href="https://github.com/gongtzuuuu"
            />
          </AnimationContainer>
        </div>
      </div>
    </>
  );
};

export default MenuItemGroup;
