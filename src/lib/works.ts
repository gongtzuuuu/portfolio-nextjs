import { StaticImageData } from 'next/image';
import musicImg from '@/assets/music.svg';
import travelImg from '@/assets/travel.svg';
import gymImg from '@/assets/gym.svg';
import officeImg from '@/assets/office.svg';

export interface WorkType {
  index: number;
  label: string;
  date: string;
  type: string;
  image: StaticImageData;
}

export const works: WorkType[] = [
  {
    index: 0,
    label: 'meloverse',
    date: 'June 2023',
    type: 'Personal Project',
    image: '/assets/music.svg',
  },
  {
    index: 1,
    label: 'GluttonGlobe',
    date: 'June 2023',
    type: 'Collaboration Project',
    image: travelImg,
  },
  {
    index: 2,
    label: 'FitQuest',
    date: 'June 2023',
    type: 'Collaboration Project',
    image: gymImg,
  },
  {
    index: 3,
    label: 'Office Simulator',
    date: 'June 2023',
    type: 'Personal Project',
    image: officeImg,
  },
];
