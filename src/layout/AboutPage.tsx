/* eslint-disable @next/next/no-img-element */
'use client';
import React, { FC, ReactNode } from 'react';
import { ArrowDownToLine } from 'lucide-react';
import { IconLink } from '@/components/IconLink/IconLink';

type AboutPageProps = {
  pageTitle: string;
  paragraph: ReactNode;
  resume: {
    label: string;
    href: string;
  };
};

const AboutPage: FC<AboutPageProps> = ({ pageTitle, paragraph, resume }) => {
  return (
    <div className="h-full flex items-end">
      <div className="w-full md:w-[50%] max-h-96 overflow-y-scroll no-scrollbar flex flex-col space-y-4 px-0 md:p-4">
        <h3 className="text-4xl font-bold">{pageTitle}</h3>
        <hr className="w-[90%]" />
        <div className="flex flex-col space-y-8">
          <p className="w-[90%]">{paragraph}</p>
          <IconLink
            type="external"
            label={resume.label}
            href={resume.href}
            Icon={ArrowDownToLine}
          />
        </div>
      </div>
      <div className="relative h-[200px] w-[50%] overflow-hidden hidden md:flex px-4 pt-4">
        <img
          src="/about.png"
          alt="Menu Image"
          className="w-full h-full rounded-tr-2xl object-cover object-center"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default AboutPage;
