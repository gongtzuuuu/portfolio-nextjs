import { TechStack } from './enums';
import HTMLIcon from '../public/html5.svg';
import CSSIcon from '../public/css3-alt.svg';
import JavaScriptIcon from '../public/square-js.svg';

interface TechIconType {
  namd: string;
  src: string;
}

export const techStackToIcon = (tech: keyof typeof TechStack): TechIconType => {
  switch (tech) {
    case 'HTML':
      return { namd: TechStack.HTML, src: HTMLIcon };
    case 'CSS':
      return { namd: TechStack.HTML, src: CSSIcon };
    case 'JAVASCRIPT':
      return { namd: TechStack.HTML, src: '/html.svg' };
    case 'TYPESCRIPT':
      return { namd: TechStack.HTML, src: '/html.svg' };
    case 'TAILWINDCSS':
      return { namd: TechStack.HTML, src: '/html.svg' };
    case 'MATERIALUI':
      return { namd: TechStack.HTML, src: '/html.svg' };
    case 'FRAMERMOTION':
      return { namd: TechStack.HTML, src: '/html.svg' };
    case 'NODE':
      return { namd: TechStack.HTML, src: '/html.svg' };
    case 'EXPRESS':
      return { namd: TechStack.HTML, src: '/html.svg' };
    case 'MONGODB':
      return { namd: TechStack.HTML, src: '/html.svg' };
    case 'REACT':
      return { namd: TechStack.HTML, src: '/html.svg' };
    case 'NEXT':
      return { namd: TechStack.HTML, src: '/html.svg' };
    default:
      return { namd: TechStack.HTML, src: '/html.svg' };
  }
};
