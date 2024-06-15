import Link from 'next/link';
import { SquareArrowOutUpRight as LinkIcon } from 'lucide-react';

interface SocialMediaItemProps {
  label: string;
  href: string;
  icon?: React.ReactNode;
  isHideMobile?: boolean;
}

const SocialMediaItem: React.FC<SocialMediaItemProps> = ({
  label,
  href,
  icon,
  isHideMobile = true,
}) => {
  const Icon = icon ? icon : <LinkIcon size={16} />;
  return (
    <Link target="_blank" href={href}>
      <p className="flex items-center">
        <span className={`${isHideMobile ? 'hidden' : ''} md:block mr-1`}>
          {Icon}
        </span>
        {label}
      </p>
    </Link>
  );
};

export default SocialMediaItem;
