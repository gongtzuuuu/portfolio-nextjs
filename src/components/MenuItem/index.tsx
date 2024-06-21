'use client';
import React, { ReactNode } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { useMenuContext } from '@/context/MenuProvider';
import SocialMediaItem from '../SocialMediaItem';

interface MenuItemProps {
  id: number;
  href: string;
  onClick: () => void;
  number: string;
  label: string;
}

interface MenuItemGroupProps {}

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

const AnimationContainer = ({
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

const MenuItemGroup: React.FC<MenuItemGroupProps> = ({}) => {
  const localActive = useLocale();
  const { setIsMenuOpen } = useMenuContext();

  const handleMenuClose = () => setTimeout(() => setIsMenuOpen(false), 500);

  return (
    <>
      {/** Menu Content */}
      <div className="flex flex-col space-y-10">
        <div className="flex flex-col space-y-3">
          <MenuItem
            id={0}
            href={`/${localActive}/`}
            onClick={handleMenuClose}
            number="01"
            label="HOME"
          />
          <MenuItem
            id={1}
            href={`/${localActive}/about`}
            onClick={handleMenuClose}
            number="02"
            label="ABOUT"
          />
          <MenuItem
            id={2}
            href={`/${localActive}/work`}
            onClick={handleMenuClose}
            number="03"
            label="WORK"
          />
          <MenuItem
            id={3}
            href={`/${localActive}/contact`}
            onClick={handleMenuClose}
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
