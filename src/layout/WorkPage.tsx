'use client';
import React, { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { works, WorkType } from '@/lib/works';
import { workLabelToSegment } from '@/lib/url-utils';
import { ChevronDown } from 'lucide-react';

interface WorkPageProps {
  activeLocale: string;
  pageTitle: string;
}

const WorkPage: React.FC<WorkPageProps> = ({ activeLocale, pageTitle }) => {
  const router = useRouter();
  const [selectWork, setSelectWork] = useState<WorkType>(works[0]);

  const handleWorkHover = (index: number) => {
    setSelectWork(works[index]);
  };

  const handleWorkClick = (label: string) => {
    const segment = workLabelToSegment(label);
    router.push(`work/${segment}`);
  };

  return (
    <div className="relative h-full flex items-end flex-col md:flex-row space-x-5 overflow-y-scroll no-scrollbar">
      {/** WORK IMAGE */}
      <div className="relative hidden md:flex md:flex-col md:w-[50%] md:h-[200px] ">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectWork ? selectWork.label : 'empty'}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
            className="md:w-full md:h-full mb-4 md:mb-0 md:px-4 md:pt-4 overflow-hidden"
          >
            <Image
              fill
              alt={selectWork.label}
              src={selectWork.src}
              className="rounded-tr-2xl object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      {/* WORK EXPERIENCE LIST */}
      <div className="relative w-full md:w-[50%] max-h-96 overflow-y-scroll no-scrollbar flex flex-col space-y-4 px-0 md:p-4">
        <div className="space-y-2">
          <h3 className="text-4xl font-bold">{pageTitle}</h3>
        </div>
        <AnimatePresence>
          {works.map((work) => (
            <Fragment key={work.index}>
              <hr />
              <div className="space-y-2">
                <motion.h3
                  initial={{ scaleX: 1, transformOrigin: 'left center' }}
                  whileHover={{ scaleX: 1.2, transformOrigin: 'left center' }}
                  transition={{ duration: 0.1, ease: 'easeInOut' }}
                  onHoverStart={() => handleWorkHover(work.index)}
                  onClick={() => handleWorkClick(work.label)}
                  className="text-3xl font-bold cursor-pointer"
                >
                  {work.label}
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
      {/* WORK LIST INDICATOR */}
      <motion.div
        animate={['initial']}
        whileHover={['grow']}
        variants={{
          rotate: {
            rotate: [null, -5, 5, 0],
            transition: {
              duration: 10,
            },
          },
          initial: {
            y: [10, 20],
            rotate: 0,
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            },
          },
        }}
        className="absolute flex w-12 h-12 bg-[#F5F6F4]/70 right-1 bottom-5 rounded-full border"
      >
        <ChevronDown
          size={24}
          className="text-[#1F1F1F] m-auto cursor-pointer"
        />
      </motion.div>
    </div>
  );
};

export default WorkPage;
