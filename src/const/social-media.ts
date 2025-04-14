type SocialMediaKey = 'linkedin' | 'github' | 'medium';

type SocialMediaValue = {
  label: string;
  href: string;
};

export const SOCIAL_MEDIA: Record<SocialMediaKey, SocialMediaValue> = {
  linkedin: {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tyliang/',
  },
  github: {
    label: 'Github',
    href: 'https://github.com/gongtzuuuu',
  },
  medium: {
    label: 'Medium',
    href: 'https://www.medium.com/@tyliang',
  },
};
