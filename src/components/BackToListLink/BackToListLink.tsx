import React, { FC } from 'react';
import Link from 'next/link';
import { DEFAULT_YELLOW } from '@/const/color';
import { ChevronLeft } from 'lucide-react';

type BackToListLinkProps = {
  label: string;
  href: string;
};

export const BackToListLink: FC<BackToListLinkProps> = ({ label, href }) => (
  <Link
    className={`flex items-center gap-1 text-xs font-light hover:text-[${DEFAULT_YELLOW}]`}
    href={href}
  >
    <ChevronLeft size={16} />
    {label}
  </Link>
);
