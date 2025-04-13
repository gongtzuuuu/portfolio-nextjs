import React, { FC } from 'react';
import { IconLink } from '../IconLink/IconLink';
import { SOCIAL_MEDIA } from '@/const/social-media';

export const Footer: FC = () => (
  <div className="w-full flex flex-col md:flex-row items-center md:justify-between">
    <div className="hidden md:flex h-8 flex-row gap-x-3">
      {Object.entries(SOCIAL_MEDIA).map(([key, { label, href }]) => (
        <IconLink key={key} type="external" label={label} href={href} />
      ))}
    </div>
    <p className="text-xs text-center">
      Copyright © 2024 Tzu-Yun Liang. All rights reserved.
    </p>
  </div>
);
