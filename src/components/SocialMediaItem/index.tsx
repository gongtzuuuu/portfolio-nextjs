'use client';
import Link from 'next/link';
import { SquareArrowOutUpRight as LinkIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimationContainer } from '../MenuItem';

interface SocialMediaItemProps {
  label: string;
  href: string;
  icon?: React.ReactNode;
  isHideMobile?: boolean;
  isLogo?: boolean;
}

const SocialMediaItem: React.FC<SocialMediaItemProps> = ({
  label,
  href,
  icon,
  isHideMobile = true,
  isLogo = true,
}) => {
  const Icon = icon ? icon : <LinkIcon size={16} />;
  return (
    <Link target="_blank" href={href}>
      <AnimationContainer id={1}>
        <motion.p className="flex items-center">
          {isLogo && (
            <span className={`${isHideMobile ? 'hidden' : ''} md:block mr-1`}>
              {Icon}
            </span>
          )}
          {label}
        </motion.p>
      </AnimationContainer>
    </Link>
  );
};

export default SocialMediaItem;
