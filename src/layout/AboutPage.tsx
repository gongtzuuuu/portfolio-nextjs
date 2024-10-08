import React from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowDownToLine, Headset } from 'lucide-react';
import SocialMediaItem from '@/components/SocialMediaItem';

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = ({}) => {
  const activeLocale = useLocale();
  const t = useTranslations('AboutPage');
  const pageTitle = t('title');
  const pageDescription = t.rich('description', {
    break: (chunks: any) => (
      <>
        <br />
        <br />
      </>
    ),
  });
  const pageLinksResume = t('links.resume');
  const pageLinkContact = t('links.contact');

  const resumeLink =
    activeLocale === 'en'
      ? 'https://drive.google.com/file/d/12oRetIKRQguKSOMrBFELBGkpL2yfuzJd/view?usp=drive_link'
      : 'https://drive.google.com/file/d/1Q3Za77hk5rn_g4kuRiNsuHbqV9povVVp/view?usp=sharing';

  return (
    <div className="h-full flex items-end">
      {/** ABOUT ME PARAGRAPH */}
      <div className="w-full md:w-[50%] max-h-96 overflow-y-scroll no-scrollbar flex flex-col space-y-4 px-0 md:p-4">
        <div className="space-y-2">
          <h3 className="text-4xl font-bold">{pageTitle}</h3>
        </div>
        <hr className="w-[90%]" />
        <div className="flex flex-col space-y-8">
          <p className="w-[90%]">{pageDescription}</p>
          <SocialMediaItem
            label={pageLinksResume}
            href={resumeLink}
            icon={<ArrowDownToLine size={16} />}
            isHideMobile={false}
          />
        </div>
      </div>
      {/** ABOUT ME IMAGE */}
      <div className="relative h-[200px] w-[50%] hidden md:flex px-4 pt-4">
        <Image
          fill
          src="/about.png"
          alt="Menu Image"
          className="w-full h-full rounded-tr-2xl object-cover"
          priority={true}
        />
      </div>
    </div>
  );
};

export default AboutPage;
