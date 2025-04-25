'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const animationVariants = {
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

type SidebarItemProps = {
  id: number;
  label: string;
  href: string;
  onClick: (nextUrl: string) => void;
};

export const SidebarItem: React.FC<SidebarItemProps> = ({
  id,
  label,
  href,
  onClick,
}) => {
  return (
    <motion.div
      id={id.toString()}
      variants={animationVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-fit"
    >
      <Link className="w-fit flex" href={href} onClick={() => onClick(href)}>
        <h3 className="text-4xl md:text-6xl font-extrabold">
          <span className="text-base font-light mr-2">{`0${id + 1}`}</span>
          {label}
        </h3>
      </Link>
    </motion.div>
  );
};
