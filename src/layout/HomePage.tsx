'use client';
import React, { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FolderOpenDot, Gem } from 'lucide-react';

interface HomePageProps {
  activeLocale: string;
  pageTitle: string;
  pageDescription:
    | string
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray;
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

const HoverEffect = ({ children }: { children: ReactNode }) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
      className="flex flex-col space-y-6 items-center"
    >
      <TitleAnimation>
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          {pageTitle}
        </h1>
      </TitleAnimation>
      <TextAnimation delay={0.2}>{pageDescription}</TextAnimation>
      <div className="flex flex-col md:flex-row md:space-x-6">
        <LinkAnimation delay={0.4}>
          <HoverEffect>
            <Link href={`${activeLocale}/work`} className="flex items-center">
              <FolderOpenDot size={16} className="mr-1" />
              {linkWork}
            </Link>
          </HoverEffect>
        </LinkAnimation>
        <LinkAnimation delay={0.6}>
          <HoverEffect>
            <Link href={`${activeLocale}/about`} className="flex items-center">
              <Gem size={16} className="mr-1" />
              {linkAbout}
            </Link>
          </HoverEffect>
        </LinkAnimation>
      </div>
    </motion.div>
  );
};

export default HomePage;
