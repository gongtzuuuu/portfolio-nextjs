import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

export type BaseImageProps = {
  src: string;
  alt: string;
  loading: 'eager' | 'lazy';
  hiddenOnMobile?: boolean;
};

const DesktopImage = ({
  src,
  alt,
  loading,
  hiddenOnMobile,
}: BaseImageProps) => {
  return (
    <div
      className={twMerge(
        'relative h-[200px] hidden md:flex px-4 pt-4',
        hiddenOnMobile && 'hidden md:hidden',
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="rounded-tr-2xl object-cover object-center"
        loading={loading}
      />
    </div>
  );
};

const MobileImage = ({ src, alt, loading }: BaseImageProps) => {
  return (
    <div className="relative md:hidden h-[160px] w-full mb-4 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="rounded-tr-2xl object-cover object-center"
        loading={loading}
      />
    </div>
  );
};

export const BaseImage = {
  Desktop: DesktopImage,
  Mobile: MobileImage,
};
