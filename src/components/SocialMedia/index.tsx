import Link from 'next/link';
import { SquareArrowOutUpRight as LinkIcon } from 'lucide-react';

interface SocialMediaItemProps {
  label: string;
  href: string;
}

interface SocialMediaProps {}

const SocialMediaItem: React.FC<SocialMediaItemProps> = ({ label, href }) => (
  <Link target="_blank" href={href}>
    <p className="flex items-center">
      <span className="hidden md:block lg:block mr-1">
        <LinkIcon size={16} />
      </span>
      {label}
    </p>
  </Link>
);

const SocialMedia: React.FC<SocialMediaProps> = ({}) => {
  return (
    <div className="h-8 flex space-x-3">
      <SocialMediaItem
        label="LinkedIn"
        href="https://www.linkedin.com/in/tyliang/"
      />
      <SocialMediaItem label="Medium" href="https://www.medium.com/@tyliang" />
      <SocialMediaItem label="Github" href="https://github.com/gongtzuuuu" />
    </div>
  );
};

export default SocialMedia;
