import Link from 'next/link';
import { SquareArrowOutUpRight as LinkIcon } from 'lucide-react';

interface SocialMediaItemProps {
  icon?: React.ReactNode;
  label: string;
  href: string;
}

const SocialMediaItem: React.FC<SocialMediaItemProps> = ({
  icon,
  label,
  href,
}) => {
  const Icon = icon ? icon : <LinkIcon size={16} />;
  return (
    <Link target="_blank" href={href}>
      <p className="flex items-center">
        <span className="hidden md:block mr-1">{Icon}</span>
        {label}
      </p>
    </Link>
  );
};

export default SocialMediaItem;
