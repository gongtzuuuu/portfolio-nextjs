import React from 'react';
import SocialMediaItem from '../SocialMediaItem';

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center md:justify-between">
      <div className="hidden md:flex h-8 flex-row space-x-3">
        <SocialMediaItem
          isLogo={false}
          label="LinkedIn"
          href="https://www.linkedin.com/in/tyliang/"
        />
        <SocialMediaItem
          isLogo={false}
          label="Medium"
          href="https://www.medium.com/@tyliang"
        />
        <SocialMediaItem
          isLogo={false}
          label="Github"
          href="https://github.com/gongtzuuuu"
        />
      </div>
      <p className="text-xs text-center">
        Copyright © 2024 Tzu-Yun Liang. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
