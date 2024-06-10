import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import PlaceHolderImg from '@/assets/scott-webb-PkJOP7JfVfk-unsplash.jpg';

interface WorkPageProps {}

const WorkPage: React.FC<WorkPageProps> = ({}) => {
  const t = useTranslations('WorkPage');
  return (
    <div className="h-full flex items-end">
      <div className="h-[200px] w-[50%] hidden md:flex p-4">
        <Image
          src={PlaceHolderImg}
          alt="Menu Image"
          className="w-full h-full rounded-tr-2xl object-cover"
          width={500}
          height={500}
        />
      </div>
      <div className="w-full md:w-[50%] flex flex-col space-y-4 px-0 md:p-4">
        <h3 className="text-4xl font-bold">work</h3>
        <hr />
        <h3 className="text-3xl font-bold">
          <span className="text-base font-extralight mr-2">01</span>meloverse
        </h3>
        <hr />
        <h3 className="text-3xl font-bold">
          <span className="text-base font-extralight mr-2">02</span>GluttonGlobe
        </h3>
        <hr />
        <h3 className="text-3xl font-bold">
          <span className="text-base font-extralight mr-2">03</span>FitQuest
        </h3>
        <hr />
        <h3 className="text-3xl font-bold">
          <span className="text-base font-extralight mr-2">04</span>Office
          Simulator
        </h3>
      </div>
    </div>
  );
};

export default WorkPage;
