import { FC, Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMenuContext } from '@/context/MenuProvider';
import { AnimationWrapper } from '@/components/AnimationWrapper/AnimationWrapper';
import { normalizeUrl } from '@/lib/url-utils';

type SidebarItemProps = {
  serialNumber: string;
  label: string;
  href: string;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export const SidebarItem: FC<SidebarItemProps> = ({
  serialNumber,
  label,
  href,
  setIsLoading,
}) => {
  const pathname = usePathname();

  const { setIsMenuOpen } = useMenuContext();

  const handleSameHrefCheck = () => {
    if (normalizeUrl(pathname) === normalizeUrl(href)) {
      setIsMenuOpen(false);
    }
    setIsLoading?.(true);
  };

  return (
    <AnimationWrapper id={serialNumber}>
      <Link
        href={href}
        className="text-4xl md:text-6xl font-extrabold"
        onClick={handleSameHrefCheck}
      >
        <span className="text-base font-light mr-2">{serialNumber}</span>
        {label}
      </Link>
    </AnimationWrapper>
  );
};
