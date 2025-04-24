'use client';
import { FC } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

type IconLinkProps = {
  type: 'internal' | 'external';
  label: string;
  href: string;
  Icon?: LucideIcon;
};

export const IconLink: FC<IconLinkProps> = ({ type, label, href, Icon }) => {
  const target = type === 'external' ? '_blank' : '_self';
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        target={target}
        className="flex items-center gap-2 hover:text-[#937829]"
      >
        {Icon && <Icon size={16} />}
        {label}
      </Link>
    </motion.div>
  );
};
