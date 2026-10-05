'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Locales } from '@/i18n';
import { GoDownButton } from '@/components/base/GoDownButton';
import { WorkListItem } from '@/components/WorkListItem/WorkListItem';
import { WORK_LIST, WorkType } from '@/const/works';

export const WorkListLayout = () => {
  const router = useRouter();
  const activeLocale = useLocale() as Locales;
  const t = useTranslations('WorkPage');

  const [selectedWork, setSelectedWork] = useState<WorkType>(
    WORK_LIST.superchat,
  );

  const onHoverStart = (id: string) => {
    const hoveredWork = Object.values(WORK_LIST).find((work) => work.id === id);
    if (!hoveredWork) return;

    setSelectedWork(hoveredWork);
  };

  const handleWorkClick = (id: string) => {
    router.push(`work/${id}`);
  };

  const renderSelectedImage = (selectedWork: WorkType) => {
    return (
      <motion.div
        key={selectedWork.label}
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.15 }}
        className="relative md:w-full md:h-full mb-4 md:mb-0 md:px-4 md:pt-4 overflow-hidden"
      >
        <Image
          alt={selectedWork.label}
          src={selectedWork.src}
          fill
          className="rounded-tr-2xl object-cover object-center"
          loading="lazy"
        />
      </motion.div>
    );
  };

  return (
    <div className="relative h-full flex items-end flex-col md:flex-row space-x-5 overflow-y-scroll no-scrollbar">
      <div className="relative hidden md:flex md:flex-col md:w-[50%] md:h-[200px] ">
        {renderSelectedImage(selectedWork)}
      </div>
      <div className="w-full md:w-[50%] max-h-96 overflow-y-scroll no-scrollbar flex flex-col gap-y-4 px-0 md:p-4">
        <h3 className="text-4xl font-bold">{t('title')}</h3>
        <hr />
        {Object.values(WORK_LIST).map((work) => (
          <WorkListItem
            key={work.id}
            label={work.label}
            date={work.date[activeLocale]}
            type={work.type[activeLocale]}
            onHoverStart={() => onHoverStart(work.id)}
            onClick={() => handleWorkClick(work.id)}
          />
        ))}
      </div>
      <GoDownButton />
    </div>
  );
};
