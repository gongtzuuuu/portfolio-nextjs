/* eslint-disable @next/next/no-img-element */
'use client';
import React, { FC, Fragment, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { workLabelToSegment } from '@/lib/url-utils';
import { ProjectContext } from '@/context/ProjectProvider';
import { WorkListIndicator } from '@/components/WorkListIndicator/WorkListIndicator';
import { WORK_LIST, WorkType } from '@/const/works';
import { Locale } from '@/i18n';

type WorkPageProps = {
  activeLocale: Locale;
  pageTitle: string;
};

const WorkPage: FC<WorkPageProps> = ({ activeLocale, pageTitle }) => {
  const router = useRouter();

  const { selectedProject, handleProjectSelect } = useContext(ProjectContext);

  const handleWorkHover = (index: number) => {
    handleProjectSelect(WORK_LIST[index]);
  };

  const handleWorkClick = (label: string) => {
    const segment = workLabelToSegment(label);
    router.push(`work/${segment}`);
  };

  const renderImage = () => (
    <div className="relative hidden md:flex md:flex-col md:w-[50%] md:h-[200px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedProject.label}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.15 }}
          className="md:w-full md:h-full mb-4 md:mb-0 md:px-4 md:pt-4 overflow-hidden"
        >
          <img
            alt={selectedProject.label}
            src={selectedProject.src}
            className="w-full h-full rounded-tr-2xl object-cover object-center"
            loading="lazy"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );

  const renderWork = (work: WorkType) => {
    const date = activeLocale === 'en' ? work.date.en : work.date.zh;
    const type = activeLocale === 'en' ? work.type.en : work.type.zh;

    return (
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
          <p className="text-xs font-light mr-2">{date + ' / ' + type}</p>
        </div>
      </Fragment>
    );
  };

  return (
    <div className="relative h-full flex items-end flex-col md:flex-row space-x-5 overflow-y-scroll no-scrollbar">
      {renderImage()}
      <div className="relative w-full md:w-[50%] max-h-96 overflow-y-scroll no-scrollbar flex flex-col space-y-4 px-0 md:p-4">
        <div className="space-y-2">
          <h3 className="text-4xl font-bold">{pageTitle}</h3>
        </div>
        <AnimatePresence>
          {WORK_LIST.map((work) => renderWork(work))}
        </AnimatePresence>
      </div>
      <WorkListIndicator />
    </div>
  );
};

export default WorkPage;
