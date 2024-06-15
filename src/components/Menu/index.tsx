'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { useMenuContext } from '@/context/MenuProvider';
import SocialMedia from '@/components/SocialMedia';
import MenuImage from '@/assets/scott-webb-PkJOP7JfVfk-unsplash.jpg';
import SocialMediaItem from '../SocialMediaItem';

interface MenuProps {}

const Menu: React.FC<MenuProps> = ({}) => {
  const localActive = useLocale();
  const { isMenuOpen, setIsMenuOpen } = useMenuContext();

  const handleMenuClose = () => setTimeout(() => setIsMenuOpen(false), 500);

  return (
    <div
      hidden={!isMenuOpen}
      className="flex flex-col md:flex-row space-y-4 md:space-x-10"
    >
      {/**  Menu Image */}
      <div className="w-full md:w-[280px] h-[80px] md:h-auto border rounded-lg overflow-hidden">
        <Image
          src={MenuImage}
          alt="Menu Image"
          className="w-full h-full object-cover"
        />
      </div>
      {/** Menu Content */}
      <div className="flex flex-col space-y-10">
        <div className="flex flex-col space-y-3">
          <Link href={`/${localActive}/`} onClick={handleMenuClose}>
            <h3 className="text-4xl md:text-6xl font-bold">
              <span className="text-base font-extralight mr-2">01</span>HOME
            </h3>
          </Link>
          <Link href={`/${localActive}/about`} onClick={handleMenuClose}>
            <h3 className="text-4xl md:text-6xl font-bold">
              <span className="text-base font-extralight mr-2">02</span>ABOUT
            </h3>
          </Link>
          <Link href={`/${localActive}/work`} onClick={handleMenuClose}>
            <h3 className="text-4xl md:text-6xl font-bold">
              <span className="text-base font-extralight mr-2">03</span>WORK
            </h3>
          </Link>
          <Link href={`/${localActive}/contact`} onClick={handleMenuClose}>
            <h3 className="text-4xl md:text-6xl font-bold">
              <span className="text-base font-extralight mr-2">04</span>CONTACT
            </h3>
          </Link>
        </div>
        {/** Menu Footer */}
        <div className="flex space-x-4">
          <SocialMediaItem
            label="LinkedIn"
            href="https://www.linkedin.com/in/tyliang/"
          />
          <SocialMediaItem
            label="Medium"
            href="https://www.medium.com/@tyliang"
          />
          <SocialMediaItem
            label="Github"
            href="https://github.com/gongtzuuuu"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
