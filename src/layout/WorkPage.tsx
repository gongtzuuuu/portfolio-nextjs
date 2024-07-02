'use client';
import React, { Fragment, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { works, WorkType } from '@/lib/works';

const variants = {
  enter: (direction: number) => {
    return {
      y: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      y: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

interface WorkPageProps {}

const WorkPage: React.FC<WorkPageProps> = ({}) => {
  const [selectWorkIndex, setSelectWorkIndex] = useState<number | null>(null);
  // const [, setSelectWork] = useState<WorkType>(works[0]);

  const handleWorkSelect = (index: number) => {
    setSelectWorkIndex(index);
    // setSelectWork(works[index]);
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
                onHoverStart={() => handleWorkSelect(work.index)}
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
