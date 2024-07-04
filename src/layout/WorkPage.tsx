'use client';
import React, { Fragment, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { works, WorkType } from '@/lib/works';
import { useRouter } from 'next/navigation';
import { workLabelToSegment } from '@/lib/url-utils';

interface WorkPageProps {
  activeLocale: string;
}

const WorkPage: React.FC<WorkPageProps> = ({ activeLocale }) => {
  const router = useRouter();
  const [selectWorkIndex, setSelectWorkIndex] = useState<number | null>(null);
  // const [, setSelectWork] = useState<WorkType>(works[0]);

  const handleWorkHover = (index: number) => {
    setSelectWorkIndex(index);
    // setSelectWork(works[index]);
  };

  const handleWorkClick = (label: string) => {
    const segment = workLabelToSegment(label);
    router.push(`work/${segment}`);
  };

  return (
    <div className="h-full flex items-end">
      {/** WORK IMAGE */}
      {/* <div className="h-[200px] w-[50%] hidden md:flex px-4 pt-4"></div> */}
      {/** style={{ backgroundImage: `url(${selectWork.src})` }} */}
      <AnimatePresence>
        <div className="h-[200px] w-[50%] flex-col px-4 pt-4 overflow-hidden">
          {works.map((work) => (
            <motion.img
              key={work.index}
              src={work.src}
              hidden={selectWorkIndex !== work.index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-tr-2xl object-cover w-full h-full bg-cover bg-center"
            />
          ))}
        </div>
      </AnimatePresence>
      {/* WORK EXPERIENCE LIST */}
      <div className="w-full md:w-[50%] max-h-96 overflow-y-scroll no-scrollbar flex flex-col space-y-4 px-0 md:p-4">
        <div className="space-y-2">
          <h3 className="text-4xl font-bold">work</h3>
        </div>
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
                {`${work.date} / ${work.type}`}
              </p>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default WorkPage;
