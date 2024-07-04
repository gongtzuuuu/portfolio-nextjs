'use client';
import React, { useEffect, useState, Fragment } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Github, Globe } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { works, WorkType } from '@/lib/works';
import { segmentToWorkLabel } from '@/lib/url-utils';

interface WorkDetailPageProps {}

const WorkDetailPage: React.FC<WorkDetailPageProps> = ({}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [currentWork, setCurrentWork] = useState<WorkType | undefined>();
  const [currentLocale, setCurrentLocale] = useState<string>('en');

  useEffect(() => {
    const pathnameArray = pathname.split('/');
    const lowerCaseLabel = segmentToWorkLabel(
      pathnameArray[pathnameArray.length - 1]
    );
    const selectWork = works.find(
      (work) => work.label.toLowerCase() === lowerCaseLabel
    );

    if (selectWork) {
      setCurrentWork(selectWork);
    }

    const currentLocale = pathnameArray[1];

    switch (currentLocale) {
      case 'en':
        setCurrentLocale('en');
        break;
      case 'zh':
        setCurrentLocale('zh');
        break;
      default:
        setCurrentLocale('en');
        break;
    }
  }, []);

  if (currentWork)
    return (
      <div className="h-full flex flex-col md:flex-row md:items-end">
        {/** WORK IMAGE */}
        {/* <div className="h-[200px] w-[50%] hidden md:flex px-4 pt-4"></div> */}
        {/** style={{ backgroundImage: `url(${selectWork.src})` }} */}
        <AnimatePresence>
          <div className="h-[200px] w-full md:w-[50%] flex-col mb-4 md:mb-0 md:px-4 md:pt-4 overflow-hidden">
            <motion.img
              src={currentWork.src}
              className="rounded-tr-2xl object-cover w-full h-full bg-cover bg-center"
            />
          </div>
        </AnimatePresence>
        {/* WORK DETAILS */}
        <div className="w-full md:w-[50%] max-h-96 overflow-y-scroll no-scrollbar flex flex-col space-y-4 px-0 md:p-4">
          <div className="flex space-y-2 justify-between items-end">
            <h3 className="text-4xl font-bold">{currentWork.label}</h3>
            <p
              className="text-xs font-extralight hover:cursor-pointer"
              onClick={() => router.push(`/${currentLocale}/work`)}
            >
              {`< Back to List`}
            </p>
          </div>
          <hr />
          <div
            className="space-y-2"
            // onClick={() => handleWorkSelect(work.index)}
          >
            <p className="text-xs font-extralight mr-2">
              {`${currentWork.date} / ${currentWork.type}`}
            </p>
            <Link
              href={currentWork.deploy}
              className="flex items-center text-xs font-extralight"
            >
              <Globe size={14} className="mr-1" />
              Deploy Link
            </Link>
            <Link
              href={currentWork.github}
              className="flex items-center text-xs font-extralight"
            >
              <Github size={14} className="mr-1" />
              Github Link
            </Link>

            {currentLocale === 'en' &&
              currentWork.descEng.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            {currentLocale === 'zh' && <p>{currentWork.descMand}</p>}
          </div>
        </div>
      </div>
    );
};

export default WorkDetailPage;

{
  /* <div className="w-full my-8 flex justify-center items-start">
        <div className="max-w-[1280px] flex-col space-y-4 md:space-y-8">
          <div className="max-w-[1080px] lg:h-[500px] overflow-hidden rounded-tr-2xl object-cover">
            <Image
              src={currentWork.src}
              alt="Work Image"
              className=" "
              width={1080}
              height={500}
            />
          </div>
          <div className="max-w-[1080px]">
            <h1 className="text-2xl md:text-4xl font-bold">
              {currentWork.label}
            </h1>
            <p className="text-gray-500">{`${currentWork.type} / ${currentWork.date}`}</p>
            <p className=" text-gray-500">{currentWork.date}</p>
            {currentLocale === 'en' &&
              currentWork.descEng.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            {currentLocale === 'zh' && <p>{currentWork.descMand}</p>}
          </div>
        </div>
      </div> */
}
