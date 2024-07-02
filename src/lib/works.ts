export interface WorkType {
  index: number;
  label: string;
  date: string;
  type: string;
  src: string;
}

export const works: WorkType[] = [
  {
    index: 0,
    label: 'meloverse',
    date: 'June 2023',
    type: 'Personal Project',
    src: '/music.svg',
  },
  {
    index: 1,
    label: 'GluttonGlobe',
    date: 'June 2023',
    type: 'Collaboration Project',
    src: '/travel.svg',
  },
  {
    index: 2,
    label: 'FitQuest',
    date: 'June 2023',
    type: 'Collaboration Project',
    src: '/gym.svg',
  },
  {
    index: 3,
    label: 'Office Simulator',
    date: 'June 2023',
    type: 'Personal Project',
    src: '/office.svg',
  },
];
