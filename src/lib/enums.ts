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

  NODE: 'Node.js',
  EXPRESS: 'Express.js',
  MONGODB: 'MongoDB',
  FIREBASE: 'Firebase',
  CHATGPT: 'ChatGPT',

  REACT: 'React',
  NEXT: 'Next.js',
} as const;
