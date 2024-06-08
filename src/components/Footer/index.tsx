import React from 'react';

interface FooterLinkProps {
  text: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ text }) => {
  return <p className="cursor-pointer hover:text-lg">{text}</p>;
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
