import React from 'react';

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="w-full flex justify-between">
      <div className="flex space-x-3">
        <p>LinkedIn</p>
        <p>Medium</p>
        <p>Github</p>
      </div>
      <p className="text-xs">
        Copyright © 2024 Tzu-Yun Liang. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
