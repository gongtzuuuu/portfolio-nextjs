'use client';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { FolderOpenDot, Gem } from 'lucide-react';
import { Locales } from '@/i18n';
import { IconLink } from '@/components/IconLink/IconLink';

interface HomePageProps {
  activeLocale: Locales;
  pageTitle: string;
  pageDescription: ReactNode;
  linkWork: string;
  linkAbout: string;
}

const TitleAnimation = ({ children }: { children: ReactNode }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }}
    className="text-3xl md:text-4xl font-bold text-center"
  >
    {children}
  </motion.div>
);

const TextAnimation = ({
  children,
  delay,
}: {
  children: ReactNode;
  delay: number;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: [0.17, 0.67, 0.83, 0.91], delay }}
    variants={{
      visible: { y: 0, opacity: 1 },
      hidden: { y: 10, opacity: 0 },
    }}
    className="text-center"
  >
    {children}
  </motion.div>
);

const LinkAnimation = ({
  children,
  delay,
}: {
  children: ReactNode;
  delay: number;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: [0.17, 0.67, 0.83, 0.91], delay }}
    variants={{
      visible: { y: 0, opacity: 1 },
      hidden: { y: 10, opacity: 0 },
    }}
  >
    {children}
  </motion.div>
);

const HomePage: React.FC<HomePageProps> = ({
  activeLocale,
  pageTitle,
  pageDescription,
  linkWork,
  linkAbout,
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      className="flex flex-col gap-y-6 items-center"
    >
      <TitleAnimation>
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          {pageTitle}
        </h1>
      </TitleAnimation>
      <TextAnimation delay={0.2}>{pageDescription}</TextAnimation>
      <div className="flex flex-col md:flex-row md:gap-x-6 items-center justify-center">
        <LinkAnimation delay={0.4}>
          <IconLink
            type="internal"
            label={linkWork}
            href={`${activeLocale}/work`}
            Icon={FolderOpenDot}
          />
        </LinkAnimation>
        <LinkAnimation delay={0.6}>
          <IconLink
            type="internal"
            label={linkAbout}
            href={`${activeLocale}/about`}
            Icon={Gem}
          />
        </LinkAnimation>
      </div>
    </motion.div>
  );
};

export default HomePage;
