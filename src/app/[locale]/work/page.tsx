import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import PlaceHolderImg from '@/assets/scott-webb-PkJOP7JfVfk-unsplash.jpg';

interface WorkPageProps {}

const WorkPage: React.FC<WorkPageProps> = ({}) => {
  const t = useTranslations('WorkPage');
  return (
    <div className="h-full flex items-end">
      {/** WORK IMAGE */}
      <div className="h-[200px] w-[50%] hidden md:flex px-4 pt-4">
        <Image
          src={PlaceHolderImg}
          alt="Menu Image"
          className="w-full h-full rounded-tr-2xl object-cover"
          width={500}
          height={500}
        />
      </div>
      {/** WORK EXPERIENCE LIST */}
      <div className="w-full md:w-[50%] max-h-96 overflow-y-scroll no-scrollbar flex flex-col space-y-4 px-0 md:p-4">
        <div className="space-y-2">
          <h3 className="text-4xl font-bold">work</h3>
        </div>
        <hr />
        <div className="space-y-2">
          <h3 className="text-3xl font-bold">meloverse</h3>
          <p className="text-xs font-extralight mr-2">
            June 2023 / Personal Project
          </p>
        </div>
        <hr />
        <div className="space-y-2">
          <h3 className="text-3xl font-bold">GluttonGlobe</h3>
          <p className="text-xs font-extralight mr-2">
            June 2023 / Collaboration Project
          </p>
        </div>
        <hr />
        <div className="space-y-2">
          <h3 className="text-3xl font-bold">FitQuest</h3>
          <p className="text-xs font-extralight mr-2">
            June 2023 / Collaboration Project
          </p>
        </div>
        <hr />
        <div className="space-y-2">
          <h3 className="text-3xl font-bold">Office Simulator</h3>
          <p className="text-xs font-extralight mr-2">
            June 2023 / Personal Project
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
