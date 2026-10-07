import React, { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Info, Globe, Layers3 } from 'lucide-react';
import { Locales } from '@/i18n';
import { TechStack } from '@/const/tech-stacks';
import { WorkType } from '@/const/works';
import { GoBackLink } from '@/components/base/links/GoBackLink';

interface WorkDetailLayoutProps {
  work: WorkType;
}

export const WorkDetailLayout = ({
  work: currentWork,
}: WorkDetailLayoutProps) => {
  const activeLocale = useLocale() as Locales;

  const { links, techStack, desc } = currentWork;

  const renderPcImage = () => {
    return (
      <div className="relative hidden h-[200px] w-full md:w-[50%] md:flex flex-col mb-4 md:mb-0 md:px-4 md:pt-4 overflow-hidden">
        <Image
          alt={currentWork.label}
          src={currentWork.src}
          fill
          className="rounded-tr-2xl object-cover object-center"
          loading="lazy"
        />
      </div>
    );
  };

  const renderMobileImage = () => {
    return (
      <div className="relative md:hidden h-[160px] w-full mb-4 overflow-hidden">
        <Image
          alt={currentWork.label}
          src={currentWork.src}
          fill
          className="rounded-tr-2xl object-cover object-center"
          loading="lazy"
        />
      </div>
    );
  };

  const renderInfo = () => {
    return (
      <div className="flex flex-wrap items-center gap-2 text-sm font-light">
        <Info size={14} className="shrink-0" />
        <p>{currentWork.date[activeLocale]}</p>
        <p>{' / '}</p>
        <p>{currentWork.type[activeLocale]}</p>
      </div>
    );
  };

  const renderLink = () => {
    return (
      <div className="flex flex-wrap items-center gap-2 text-sm font-light">
        <Globe size={14} />
        {links.map((link, index) => {
          const linkLabel = link[activeLocale];
          return (
            <Fragment key={index}>
              <Link
                href={link.url}
                target="_blank"
                className="hover:text-[#937829]"
              >
                {linkLabel}
              </Link>
              <p className="[&:last-child]:hidden">{' / '}</p>
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
            <p className="[&:last-child]:hidden">{' / '}</p>
          </Fragment>
        ))}
      </div>
    );
  };

  const renderDescription = () => {
    const projectDescription = desc[activeLocale];
    return projectDescription?.map((desc, index) => (
      <p key={index} className="mb-5">
        {desc}
      </p>
    ));
  };

  return (
    <div className="h-full flex items-end flex-col md:flex-row space-x-5 overflow-y-scroll no-scrollbar">
      {renderPcImage()}
      <div className="w-full md:w-[50%] max-h-96 md:overflow-y-scroll no-scrollbar flex flex-col space-y-4 px-0 md:p-4">
        <div className="flex flex-wrap gap-y-2 justify-between items-end">
          {renderMobileImage()}
          <h3 className="text-4xl font-bold">{currentWork.label}</h3>
          <GoBackLink />
        </div>
        <hr />
        <div className="space-y-2">
          {renderInfo()}
          {renderLink()}
          {renderTechStack()}
          <hr />
          {renderDescription()}
          <div>🚀</div>
        </div>
      </div>
    </div>
  );
};
