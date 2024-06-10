import React from 'react';
// import Image from 'next/image';
// import { Linkedin } from 'lucide-react';
// import GithubIcon from '@/assets/github-142-svgrepo-com.svg';
import { Toggle } from '@/components/ui/Toggle/Toggle';

interface FooterLinkProps {
  text: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ text }) => {
  return (
    <Toggle>
      <p className="cursor-pointer">{text}</p>
    </Toggle>
  );
};

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center md:justify-between">
      <div className="hidden md:flex h-8 flex-row space-x-3">
        <FooterLink text="LinkedIn" />
        <FooterLink text="Medium" />
        <FooterLink text="Github" />
      </div>
      <p className="text-xs text-center">
        Copyright © 2024 Tzu-Yun Liang. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
