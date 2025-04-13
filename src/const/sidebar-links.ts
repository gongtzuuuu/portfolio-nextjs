type SidebarLinksKey = 'home' | 'about' | 'work' | 'contact';

type SidebarLinksValue = {
  serialNumber: string;
  label: string;
  href: string;
};

export const SIDEBAR_LINKS: Record<SidebarLinksKey, SidebarLinksValue> = {
  home: {
    serialNumber: '01',
    label: 'home',
    href: '/',
  },
  about: {
    serialNumber: '02',
    label: 'about',
    href: '/about',
  },
  work: {
    serialNumber: '03',
    label: 'work',
    href: '/work',
  },
  contact: {
    serialNumber: '04',
    label: 'contact',
    href: '/contact',
  },
};
