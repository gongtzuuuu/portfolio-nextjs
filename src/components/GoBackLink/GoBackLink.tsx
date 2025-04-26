import React, { FC } from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

type GoBackLinkProps = {
  label: string;
  href: string;
};

export const GoBackLink: FC<GoBackLinkProps> = ({ label, href }) => (
  <Link
    className="flex items-center gap-1 text-xs font-light hover:text-[#937829]"
    href={href}
  >
    <ChevronLeft size={16} />
    {label}
  </Link>
);
