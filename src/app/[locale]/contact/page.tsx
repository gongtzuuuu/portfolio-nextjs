import React from 'react';
import { useTranslations } from 'next-intl';
import SocialMediaItem from '@/components/SocialMediaItem';

interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = ({}) => {
  const t = useTranslations('ContactPage');
  return (
    <div className="h-full flex items-end">
      <div className="w-full max-h-96 overflow-y-scroll no-scrollbar flex flex-col space-y-4 px-0 md:p-4">
        <div className="space-y-2">
          <h3 className="text-4xl font-bold">contact</h3>
        </div>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/** Mail Section */}
          <div className="grid grid-cols-1 gap-4">
            <p className="font-semibold">MAIL</p>
            <div>
              <p>liangtuzyun@gmail.com</p>
            </div>
          </div>
          {/** Social Media Section */}
          <div className="grid grid-cols-1 gap-4">
            <p className="font-semibold">SOCIAL MEDIA</p>
            <div className="flex space-x-4">
              <SocialMediaItem
                label="LinkedIn"
                href="https://www.linkedin.com/in/tyliang/"
              />
              <SocialMediaItem
                label="Medium"
                href="https://www.medium.com/@tyliang"
              />
              <SocialMediaItem
                label="Github"
                href="https://github.com/gongtzuuuu"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
