'use client';
import { FC } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { DEFAULT_YELLOW } from '@/const/color';

type IconLinkProps = {
  type: 'internal' | 'external';
  label: string;
  href: string;
  Icon?: LucideIcon;
};

export const IconLink: FC<IconLinkProps> = ({ type, label, href, Icon }) => {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        target={type === 'external' ? '_blank' : '_self'}
        className={`flex items-center gap-1 hover:text-[${DEFAULT_YELLOW}]`}
      >
        {Icon && <Icon size={16} />}
        {label}
      </Link>
    </motion.div>
  );
};
