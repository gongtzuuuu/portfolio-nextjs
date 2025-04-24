'use client';
import { ArrowDownToLine } from 'lucide-react';
import { IconLink } from './IconLink';

type IconLinkResumeProps = { label: string; href: string };

export const IconLinkResume: React.FC<IconLinkResumeProps> = ({
  label,
  href,
}) => (
  <IconLink type="external" label={label} href={href} Icon={ArrowDownToLine} />
);
