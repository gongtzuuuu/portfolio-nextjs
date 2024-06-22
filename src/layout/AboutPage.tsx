import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ArrowDownToLine } from 'lucide-react';
import PlaceHolderImg from '@/assets/scott-webb-PkJOP7JfVfk-unsplash.jpg';
import SocialMediaItem from '@/components/SocialMediaItem';

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = ({}) => {
  const t = useTranslations('AboutPage');
  return (
    <div className="h-full flex items-end">
      {/** ABOUT ME PARAGRAPH */}
      <div className="w-full md:w-[50%] max-h-96 overflow-y-scroll no-scrollbar flex flex-col space-y-4 px-0 md:p-4">
        <div className="space-y-2">
          <h3 className="text-4xl font-bold">about me</h3>
        </div>
        <hr />
        <div className="flex flex-col space-y-8">
          <p className="w-[90%]">
            I am a junior web developer with a background in project management
            and art. With enthusiasm, I am actively seeking employment
            opportunities that will allow me to make the best use of my skills
            and further develop them.
          </p>
          <SocialMediaItem
            label="resume"
            href="#"
            icon={<ArrowDownToLine size={16} />}
            isHideMobile={false}
          />
        </div>
      </div>
      {/** ABOUT ME IMAGE */}
      <div className="h-[200px] w-[50%] hidden md:flex px-4 pt-4">
        <Image
          src={PlaceHolderImg}
          alt="Menu Image"
          className="w-full h-full rounded-tr-2xl object-cover"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default AboutPage;
