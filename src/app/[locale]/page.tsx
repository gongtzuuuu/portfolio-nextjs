import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  const t = useTranslations('HomePage');
  const activeLocale = useLocale();
  return (
    <div id="home-page" className="flex flex-col space-y-6 items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Hello, I am Tzu-Yun Liang
      </h1>
      <p className="text-center">
        I am a software engineer & product designer
        <br />
        who loves to deliver high-quality digital solutions.
      </p>
      <div className="flex space-x-6">
        <Link href={`${activeLocale}/work`}>see my project</Link>
        <Link href={`${activeLocale}/about`}>more about me</Link>
      </div>
    </div>
  );
};

export default HomePage;
