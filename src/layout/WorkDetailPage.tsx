'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Info, Globe, Layers3 } from 'lucide-react';
import { segmentToWorkLabel } from '@/lib/url-utils';
import { works, WorkType } from '@/lib/works';
import { TechStack } from '@/lib/enums';

interface WorkDetailPageProps {
  pageLink: string;
}

const WorkDetailPage: React.FC<WorkDetailPageProps> = ({ pageLink }) => {
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
      <div className="h-full flex items-end flex-col md:flex-row space-x-5 overflow-y-scroll no-scrollbar">
        {/** WORK IMAGE - PC */}
        <div className="relative hidden h-[200px] w-full md:w-[50%] md:flex flex-col mb-4 md:mb-0 md:px-4 md:pt-4 overflow-hidden">
          <Image
            fill
            alt={currentWork.label}
            src={currentWork.src}
            className="rounded-tr-2xl object-cover w-full h-full bg-cover bg-center"
          />
        </div>
        {/* WORK DETAILS */}
        <div className="w-full md:w-[50%] max-h-96 md:overflow-y-scroll no-scrollbar flex flex-col space-y-4 px-0 md:p-4">
          <div className="flex flex-wrap space-y-2 justify-between items-end">
            {/** WORK IMAGE - Mobile */}
            <div className="relative md:hidden h-[160px] w-full mb-4 overflow-hidden">
              <Image
                fill
                alt={currentWork.label}
                src={currentWork.src}
                className="rounded-tr-2xl object-cover w-full h-full bg-cover bg-center"
              />
            </div>
            <h3 className="text-4xl font-bold">{currentWork.label}</h3>
            <p
              className="text-xs font-extralight hover:cursor-pointer"
              onClick={() => router.push(`/${currentLocale}/work`)}
            >
              {`< ${pageLink}`}
            </p>
          </div>
          <hr />
          <div className="space-y-2">
            <p className="flex flex-wrap items-center text-sm font-extralight mr-2">
              <span>
                <Info size={16} className="mr-2" />
              </span>
              {currentLocale === 'en'
                ? `${currentWork.date.en} / ${currentWork.type.en}`
                : `${currentWork.date.zh} / ${currentWork.type.zh}`}
            </p>
            <div className="flex flex-wrap items-center">
              <Globe size={14} className="mr-2" />
              {currentWork.links.map((link, index) => {
                const linkLabel = currentLocale === 'en' ? link.en : link.zh;
                return (
                  <Link
                    key={index}
                    href={link.url}
                    className="text-sm font-extralight mr-2 flex"
                    target="_blank"
                  >
                    {`${linkLabel}${index + 1 !== currentWork.links.length ? ' / ' : ''}`}
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-wrap items-center">
              <Layers3 size={14} className="mr-2" />
              {currentWork.techStack.map((tech, index) => (
                <p key={index} className="text-sm font-extralight mr-2 flex">
                  {`${TechStack[tech]}${index + 1 !== currentWork.techStack.length ? ' / ' : ''}`}
                </p>
              ))}
            </div>
            <hr />
            {currentLocale === 'en' &&
              currentWork.desc.en.map((desc, index) => (
                <p key={index} className="mb-5">
                  {desc}
                </p>
              ))}
            {currentLocale === 'zh' &&
              currentWork.desc.zh.map((desc, index) => (
                <p key={index} className="mb-5">
                  {desc}
                </p>
              ))}
            <div>🚀</div>
          </div>
        </div>
      </div>
    );
};

export default WorkDetailPage;
