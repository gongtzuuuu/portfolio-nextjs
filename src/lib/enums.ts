interface TechStackType {
  [key: string]: string;
}

export const TechStack: TechStackType = {
  HTML: 'HTML',
  CSS: 'CSS',
  JAVASCRIPT: 'JavaScript',
  TYPESCRIPT: 'TypeScript',
  TAILWINDCSS: 'Tailwind CSS',
  MATERIALUI: 'Material UI',
  SHADCN: 'shadcn',
  FRAMERMOTION: 'Framer Motion',
  STORYBOOK: 'Storybook',

  REACT: 'React',
  NEXT: 'Next.js',

  NODE: 'Node.js',
  EXPRESS: 'Express.js',
  MONGODB: 'MongoDB',
  FIREBASE: 'Firebase',
  CHATGPT: 'OpenAI',
  AWS: 'AWS',
} as const;
