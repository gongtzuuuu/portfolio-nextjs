import React, { FC } from 'react';
import { IconLink } from '@/components/IconLink/IconLink';
import { SOCIAL_MEDIA } from '@/const/social-media';

type ContactPageProps = {
  pageTitle: string;
  email: string;
  socialMedia: string;
};

const ContactPage: FC<ContactPageProps> = ({
  pageTitle,
  email,
  socialMedia,
}) => (
  <div className="h-full flex items-end">
    <div className="w-full max-h-96 overflow-y-scroll no-scrollbar flex flex-col space-y-4 px-0 md:p-4">
      <h3 className="text-4xl font-bold">{pageTitle}</h3>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="grid grid-cols-1 gap-4">
          <p className="font-bold">{email}</p>
          <p>liangtuzyun@gmail.com</p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <p className="font-bold">{socialMedia}</p>
          <div className="flex space-x-4">
            {Object.entries(SOCIAL_MEDIA).map(([key, { label, href }]) => (
              <IconLink key={key} type="external" label={label} href={href} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;
