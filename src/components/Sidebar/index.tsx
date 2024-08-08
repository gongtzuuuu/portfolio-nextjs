'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useMenuContext } from '@/context/MenuProvider';
import MenuItem from '../MenuItem';

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
  const { isMenuOpen } = useMenuContext();
  return (
    isMenuOpen && (
      <motion.div initial="closed" animate="open" variants={variants}>
        <MenuItem key={0} />
      </motion.div>
    )
  );
};

export default Sidebar;
