'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { works, WorkType } from '@/lib/works';
import musicImg from '@/assets/music.svg';
import travelImg from '@/assets/travel.svg';
import gymImg from '@/assets/gym.svg';
import officeImg from '@/assets/office.svg';

interface WorkPageProps {}

const WorkPage: React.FC<WorkPageProps> = ({}) => {
  const [selectWorkIndex, setSelectWorkIndex] = useState<number>(0);
  // const [selectWork, setSelectWork] = useState<WorkType>(works[0]);

  const handleWorkSelect = (index: number) => {
    setSelectWorkIndex(index);
    // setSelectWork(works[index]);
  };

  const handleWorkImg = (index: number) => {
    switch (index) {
      case 0:
        return musicImg;
      case 1:
        return travelImg;
      case 2:
        return gymImg;
      case 3:
        return officeImg;
      default:
        return musicImg;
    }
  };

  return (
    <div className="h-full flex items-end">
      {/** WORK IMAGE */}
      <motion.div
        key={selectWorkIndex}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.17, 0.67, 0.83, 0.91] }}
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: 10, opacity: 0 },
        }}
        className="h-[200px] w-[50%] hidden md:flex px-4 pt-4"
      >
        <Image
          src={handleWorkImg(selectWorkIndex)}
          alt="Menu Image"
          className="w-full h-full rounded-tr-2xl object-cover"
          width={500}
          height={500}
        />
      </motion.div>
      {/* WORK EXPERIENCE LIST */}
      <div className="w-full md:w-[50%] max-h-96 overflow-y-scroll no-scrollbar flex flex-col space-y-4 px-0 md:p-4">
        <div className="space-y-2">
          <h3 className="text-4xl font-bold">work</h3>
        </div>
        {works.map((work) => (
          <>
            <hr />
            <div
              className="space-y-2"
              onClick={() => handleWorkSelect(work.index)}
            >
              <h3 className="text-3xl font-bold">{work.label} </h3>
              <p className="text-xs font-extralight mr-2">
                {`${work.date} / ${work.type}`}
              </p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default WorkPage;
