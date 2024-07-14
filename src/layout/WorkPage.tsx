'use client';
import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, Reorder } from 'framer-motion';
import { works, WorkType } from '@/lib/works';
import { useRouter } from 'next/navigation';
import { workLabelToSegment } from '@/lib/url-utils';

interface WorkPageProps {
  activeLocale: string;
  pageTitle: string;
  workTypePersonal: string;
  workTypeCollaboration: string;
}

const WorkPage: React.FC<WorkPageProps> = ({
  activeLocale,
  pageTitle,
  workTypePersonal,
  workTypeCollaboration,
}) => {
  const router = useRouter();
  const [selectWorkIndex, setSelectWorkIndex] = useState<number | null>(null);
  const [selectWork, setSelectWork] = useState<WorkType>(works[0]);
  // const [, setSelectWork] = useState<WorkType>(works[0]);

  const handleWorkHover = (index: number) => {
    setSelectWorkIndex(index);
    setSelectWork(works[index]);
  };

  const handleWorkClick = (label: string) => {
    const segment = workLabelToSegment(label);
    router.push(`work/${segment}`);
  };

  return (
    <div className="h-full flex items-end">
      {/** WORK IMAGE */}
      <div className="h-[200px] w-[50%] flex-col px-4 pt-4 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectWork ? selectWork.label : 'empty'}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
          >
            {selectWork ? (
              <Image
                src={selectWork.src}
                alt={selectWork.label}
                width={400}
                height={400}
                className="rounded-tr-2xl object-cover w-full h-full bg-cover bg-center hover:cursor-pointer"
                onClick={() => handleWorkClick(selectWork.label)}
              />
            ) : null}
          </motion.div>
        </AnimatePresence>
      </div>
      {/* WORK EXPERIENCE LIST */}
      <div className="w-full md:w-[50%] max-h-96 overflow-y-scroll no-scrollbar flex flex-col space-y-4 px-0 md:p-4">
        <div className="space-y-2">
          <h3 className="text-4xl font-bold">{pageTitle}</h3>
        </div>
        <AnimatePresence>
          {works.map((work) => (
            <Fragment key={work.index}>
              <hr />
              <div
                className="space-y-2"
                // onClick={() => handleWorkSelect(work.index)}
              >
                <motion.h3
                  initial={{ scaleX: 1, transformOrigin: 'left center' }}
                  whileHover={{ scaleX: 1.2, transformOrigin: 'left center' }}
                  transition={{ duration: 0.1, ease: 'easeInOut' }}
                  className="text-3xl font-bold cursor-pointer"
                  onHoverStart={() => handleWorkHover(work.index)}
                  onClick={() => handleWorkClick(work.label)}
                >
                  {work.label}{' '}
                </motion.h3>
                <p className="text-xs font-extralight mr-2">
                  {activeLocale === 'en'
                    ? `${work.date.en} / ${work.type.en}`
                    : `${work.date.zh} / ${work.type.zh}`}
                </p>
              </div>
            </Fragment>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WorkPage;
