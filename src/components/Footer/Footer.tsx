import React, { FC } from 'react';
import { SOCIAL_MEDIA } from '@/const/social-media';
import { IconLink } from '../IconLink/IconLink';

export const Footer: FC = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center md:justify-between">
      <div className="hidden md:flex h-8 flex-row gap-x-4">
        {Object.entries(SOCIAL_MEDIA).map(([key, value]) => (
          <IconLink
            key={key}
            type="external"
            label={value.label}
            href={value.href}
          />
        ))}
      </div>
      <p className="text-xs text-center">
        Copyright © 2024 Tzu-Yun Liang. All rights reserved.
      </p>
    </div>
  );
};
