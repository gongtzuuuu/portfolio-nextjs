'use client';
import React, { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FolderOpenDot, Gem } from 'lucide-react';
// import TextEffect from '@/components/TextEffect';

interface HomePageProps {
  activeLocale: string;
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

const HomePage: React.FC<HomePageProps> = ({ activeLocale }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      className="flex flex-col space-y-6 items-center"
    >
      <TitleAnimation>
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Hello, I am Tzu-Yun Liang
        </h1>
      </TitleAnimation>
      <TextAnimation delay={0.2}>
        <p className="text-center">
          I am a software engineer & product designer
          <br />
          who loves to deliver high-quality digital solutions.
        </p>
      </TextAnimation>
      <div className="flex flex-col md:flex-row space-x-6">
        <LinkAnimation delay={0.4}>
          <HoverEffect>
            <Link href={`${activeLocale}/work`} className="flex items-center">
              <FolderOpenDot size={16} className="mr-1" />
              see my project
            </Link>
          </HoverEffect>
        </LinkAnimation>
        <LinkAnimation delay={0.6}>
          <HoverEffect>
            <Link href={`${activeLocale}/about`} className="flex items-center">
              <Gem size={16} className="mr-1" />
              more about me
            </Link>
          </HoverEffect>
        </LinkAnimation>
      </div>
    </motion.div>
  );
};

export default HomePage;
