/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Locales } from '@/i18n';
import { works, WorkType } from '@/lib/works';
import { workLabelToSegment } from '@/lib/url-utils';
import { GoDownButton } from '@/components/GoDownButton/GoDownButton';
import { WorkListItem } from '@/components/WorkListItem/WorkListItem';

type WorkPageProps = {
  activeLocale: Locales;
  pageTitle: string;
};

const WorkPage: React.FC<WorkPageProps> = ({ activeLocale, pageTitle }) => {
  const router = useRouter();

  const [selectedWork, setSelectedWork] = useState<WorkType>(works[0]);

  const onHoverStart = (label: string) => {
    const hoveredWork = works.filter((work) => work.label === label);
    if (hoveredWork.length === 0) return;

    setSelectedWork(hoveredWork[0]);
  };

  const handleWorkClick = (label: string) => {
    const segment = workLabelToSegment(label);
    router.push(`work/${segment}`);
  };

  const renderSelectedImage = (selectedWork: WorkType) => {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedWork.label}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.15 }}
          className="md:w-full md:h-full mb-4 md:mb-0 md:px-4 md:pt-4 overflow-hidden"
        >
          <img
            alt={selectedWork.label}
            src={selectedWork.src}
            className="w-full h-full rounded-tr-2xl object-cover object-center"
            loading="lazy"
          />
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="relative h-full flex items-end flex-col md:flex-row space-x-5 overflow-y-scroll no-scrollbar">
      <div className="relative hidden md:flex md:flex-col md:w-[50%] md:h-[200px] ">
        {renderSelectedImage(selectedWork)}
      </div>
      <div className="w-full md:w-[50%] max-h-96 overflow-y-scroll no-scrollbar flex flex-col gap-y-4 px-0 md:p-4">
        <h3 className="text-4xl font-bold">{pageTitle}</h3>
        <hr />
        {works.map((work) => (
          <WorkListItem
            key={work.label}
            label={work.label}
            date={work.date[activeLocale]}
            type={work.type[activeLocale]}
            onHoverStart={() => onHoverStart(work.label)}
            onClick={() => handleWorkClick(work.label)}
          />
        ))}
      </div>
      <GoDownButton />
    </div>
  );
};

export default WorkPage;
