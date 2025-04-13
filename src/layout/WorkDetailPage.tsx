/* eslint-disable @next/next/no-img-element */
'use client';
import React, { FC, Fragment, useContext } from 'react';
import Link from 'next/link';
import { Info, Globe, Layers3 } from 'lucide-react';
import { ProjectContext } from '@/context/ProjectProvider';
import { BackToListLink } from '@/components/BackToListLink/BackToListLink';
import { TechStack } from '@/lib/enums';
import { Locale } from '@/i18n';
import { DEFAULT_YELLOW } from '@/const/color';

const PCImage = ({ alt, src }: { alt: string; src: string }) => (
  <div className="relative hidden h-[200px] w-full md:w-[50%] md:flex flex-col mb-4 md:mb-0 md:px-4 md:pt-4 overflow-hidden">
    <img
      alt={alt}
      src={src}
      className="rounded-tr-2xl object-cover w-full h-full bg-cover bg-center"
      loading="lazy"
    />
  </div>
);

const MobileImage = ({ alt, src }: { alt: string; src: string }) => (
  <div className="relative md:hidden h-[160px] w-full mb-4 overflow-hidden">
    <img
      alt={alt}
      src={src}
      className="rounded-tr-2xl object-cover w-full h-full bg-cover bg-center"
      loading="lazy"
    />
  </div>
);

type WorkDetailPageProps = {
  activeLocale: Locale;
  backToListLinkLabel: string;
};

const WorkDetailPage: FC<WorkDetailPageProps> = ({
  activeLocale,
  backToListLinkLabel,
}) => {
  const { selectedProject } = useContext(ProjectContext);

  if (!selectedProject) return null;

  const { label, src, techStack, date, type, links, desc } = selectedProject;

  const renderInfo = () => {
    const projectDate = activeLocale === 'en' ? date.en : date.zh;
    const projectType = activeLocale === 'en' ? type.en : type.zh;

    return (
      <div className="flex flex-wrap items-center gap-2 text-sm font-light">
        <Info size={14} className="shrink-0" />
        <p>{projectDate}</p>
        <p>{' / '}</p>
        <p>{projectType}</p>
      </div>
    );
  };

  const renderLink = () => {
    return (
      <div className="flex flex-wrap items-center gap-2 text-sm font-light">
        <Globe size={14} />
        {links.map((link, index) => {
          const linkLabel = activeLocale === 'en' ? link.en : link.zh;
          return (
            <Fragment key={index}>
              <Link
                href={link.url}
                target="_blank"
                className={`hover:text-[${DEFAULT_YELLOW}]`}
              >
                {linkLabel}
              </Link>
              {index !== links.length - 1 && <p>{' / '}</p>}
            </Fragment>
          );
        })}
      </div>
    );
  };

  const renderTechStack = () => {
    return (
      <div className="flex flex-wrap items-center gap-2 text-sm font-light">
        <Layers3 size={14} />
        {techStack.map((tech, index) => (
          <Fragment key={index}>
            <p>{TechStack[tech]}</p>
            {index !== techStack.length - 1 && <p>{' / '}</p>}
          </Fragment>
        ))}
      </div>
    );
  };

  const renderDescription = () => {
    const projectDescription = activeLocale === 'en' ? desc.en : desc.zh;

    return projectDescription?.map((desc, index) => (
      <p key={index} className="mb-5">
        {desc}
      </p>
    ));
  };

  return (
    <div className="h-full flex items-end flex-col md:flex-row space-x-5 overflow-y-scroll no-scrollbar">
      <PCImage alt={label} src={src} />
      <div className="w-full md:w-[50%] max-h-96 md:overflow-y-scroll no-scrollbar flex flex-col space-y-4 px-0 md:p-4">
        <div className="flex flex-wrap space-y-2 justify-between items-end">
          <MobileImage alt={label} src={src} />
          <h3 className="text-4xl font-bold">{label}</h3>
          <BackToListLink
            label={backToListLinkLabel}
            href={`/${activeLocale}/work`}
          />
        </div>
        <hr />
        <div className="space-y-2">
          {renderInfo()}
          {renderLink()}
          {renderTechStack()}
        </div>
        <hr />
        <div className="space-y-2">
          {renderDescription()}
          <p>🚀</p>
        </div>
      </div>
    </div>
  );
};

export default WorkDetailPage;
