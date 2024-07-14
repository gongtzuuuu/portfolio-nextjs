'use client';
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Info, Globe, Layers3 } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { works, WorkType } from '@/lib/works';
import { segmentToWorkLabel } from '@/lib/url-utils';
import { TechStack } from '@/lib/enums';

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
      <div className="h-full flex flex-col mt-5 md:mt-0 md:flex-row md:items-end">
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
          <div className="flex flex-wrap space-y-2 justify-between items-end">
            <h3 className="text-4xl font-bold">{currentWork.label}</h3>
            <p
              className="text-xs font-extralight hover:cursor-pointer"
              onClick={() => router.push(`/${currentLocale}/work`)}
            >
              {`< Back to List`}
            </p>
          </div>
          <hr />
          <div className="space-y-2">
            <p className="flex text-xs font-extralight mr-2">
              <span>
                <Info size={14} className="mr-1" />
              </span>
              {`${currentWork.date} / ${currentWork.type}`}
            </p>
            <div className="flex">
              <Globe size={14} className="mr-1" />
              {currentWork.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className="text-xs font-extralight mr-2 flex"
                >
                  {`${link.name}${index + 1 !== currentWork.links.length ? ' / ' : ''}`}
                </Link>
              ))}
            </div>
            <div className="flex">
              <Layers3 size={14} className="mr-1" />
              {currentWork.techStack.map((tech, index) => (
                <p key={index} className="text-xs font-extralight mr-2 flex">
                  {`${TechStack[tech]}${index + 1 !== currentWork.techStack.length ? ' / ' : ''}`}
                </p>
              ))}
            </div>
            <hr />
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
