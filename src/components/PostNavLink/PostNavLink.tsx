'use client';
import React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/utils/style';

type PostNavLinkProps = {
  slug: string;
  href: string;
  title: string;
  meta: string;
  /** Shown when the post falls back to another locale */
  localeBadge?: string;
};

// Same look as WorkListItem, as a link that marks the open post
export const PostNavLink = ({
  slug,
  href,
  title,
  meta,
  localeBadge,
}: PostNavLinkProps) => {
  // The open post's slug, read from the URL below /writing
  const isActive = useSelectedLayoutSegment() === slug;

  return (
    <div className="flex flex-col gap-3">
      <Link
        href={href}
        aria-current={isActive ? 'page' : undefined}
        className="w-fit focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#937829]"
      >
        <motion.h4
          initial={{ scaleX: 1, transformOrigin: 'left center' }}
          whileHover={{ scaleX: 1.2, transformOrigin: 'left center' }}
          transition={{ duration: 0.1, ease: 'easeInOut' }}
          className={cn(
            'text-3xl font-bold transition-colors',
            isActive && 'text-[#937829]',
          )}
        >
          {title}
        </motion.h4>
      </Link>
      <p className="flex items-center gap-2 text-xs font-light mr-2">
        {meta}
        {localeBadge && (
          <span className="rounded border px-1 uppercase">{localeBadge}</span>
        )}
      </p>
    </div>
  );
};
