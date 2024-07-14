import { TechStack } from './enums';
interface LinkType {
  en: string;
  zh: string;
  url: string;
}
export interface WorkType {
  index: number;
  label: string;
  src: string;
  techStack: string[];
  date: {
    zh: string;
    en: string;
  };
  type: {
    zh: string;
    en: string;
  };
  links: LinkType[];
  desc: {
    zh: string[];
    en: string[];
  };
}

export const works: WorkType[] = [
  {
    index: 0,
    label: 'superchat',
    src: '/works/chat.png',
    date: { en: 'July 2024', zh: '2024年7月' },
    type: { en: 'Personal Project', zh: '個人專案' },
    links: [
      {
        en: 'Deploy Link',
        zh: '部署版本',
        url: '#',
      },
      {
        en: 'Github Link',
        zh: 'GitHub連結',
        url: '#',
      },
    ],
    techStack: ['CHATGPT', 'FIREBASE', 'REACT', `SHADCN`],
    desc: { en: [''], zh: [''] },
  },
  {
    index: 1,
    label: 'meloverse',
    src: '/works/music.png',
    date: { en: 'June 2023', zh: '2023年6月' },
    type: { en: 'Personal Project', zh: '個人專案' },
    links: [
      {
        en: 'Deploy Link',
        zh: '部署版本',
        url: 'https://meloverse.vercel.app',
      },
      {
        en: 'Github Link',
        zh: 'GitHub連結',
        url: 'https://github.com/gongtzuuuu/meloverse',
      },
    ],
    techStack: ['NEXT', 'REACT', 'MONGODB', 'TAILWINDCSS'],
    desc: {
      en: [
        'meloverse is an innovative music app that enables users to craft engaging posts with their favorite songs. Users can seamlessly log in with Spotify account to access their personal collection or explore new tracks by keywords or artists. The app also introduce a thriving community of music enthusiasts, where users share their love for songs and discover a harmonious array of posts. Filter content by tags to explore topics of your interest, connecting with like-minded individuals.',
      ],
      zh: ['一個音樂平台，讓用戶發現新音樂並與他人分享他們最喜歡的歌曲。'],
    },
  },
  {
    index: 2,
    label: 'GluttonGlobe',
    src: '/works/travel.png',
    date: { en: 'June 2023', zh: '2023年6月' },
    type: { en: 'Collaboration Project', zh: '團隊協作專案' },
    links: [
      {
        en: 'Deploy Link',
        zh: '部署版本',
        url: 'https://bejewelled-alfajores-c72f6e.netlify.app/',
      },
      {
        en: 'Frontend Repository',
        zh: 'GitHub連結（前端）',
        url: 'https://github.com/Panthari-Panthong/gluttonGlobe-client',
      },
      {
        en: 'Backend Repository',
        zh: 'GitHub連結（後端）',
        url: 'https://github.com/Panthari-Panthong/gluttonGlobe-server/',
      },
    ],
    techStack: ['REACT', 'NODE', 'MONGODB'],
    desc: {
      en: [
        `GluttonGlobe is an interactive global mapping platform designed to facilitate user engagement in discovering and sharing travel experiences. With a user-friendly interface, users can log into the app and conveniently mark the cities they have visited or aspire to explore on a world map. Additionally, users can leave insightful comments that are accessible to fellow users, offering a powerful feature for the global community of travel enthusiasts to exchange valuable recommendations on a worldwide scale.`,
        `The app was developed in collaboration with partners Panthari Panthong and Solen Wanono.`,
      ],
      zh: ['一個旅遊平台，讓用戶發現新地方並與他人分享他們最喜歡的目的地。'],
    },
  },
  {
    index: 3,
    label: 'FitQuest',
    src: '/works/gym.png',
    date: { en: 'June 2023', zh: '2023年6月' },
    type: { en: 'Collaboration Project', zh: '團隊協作專案' },
    links: [
      {
        en: 'Deploy Link',
        zh: '部署版本',
        url: 'https://fitness-tracker.adaptable.app/',
      },
      {
        en: 'Github Link',
        zh: 'GitHub連結',
        url: 'https://github.com/imason5/FitQuest',
      },
    ],
    techStack: ['NODE', 'EXPRESS', 'MONGODB'],
    desc: {
      en: [
        `FitQuest is a fitness tracker app enabling users to create and track daily workouts. By logging into the app, users can log exercises with sets, weights, and reps, also earning points based on difficulty. By integrating API Ninjas Exercise API, the app provides a variety of workout templates for users to choose from freely. On the personalised profile page, the app displays each user's workout history and allows them to make and edit personal details and change their profile pictures.`,
        `The app was developed in collaboration with partner Ian Mason.`,
      ],
      zh: [
        '一個健身平台，讓用戶發現新的鍛煉方式並與他人分享他們最喜歡的運動。',
      ],
    },
  },
  {
    index: 4,
    label: 'Office Simulator',
    src: '/works/office.png',
    date: { en: 'May 2023', zh: '2023年5月' },
    type: { en: 'Personal Project', zh: '個人專案' },
    links: [
      {
        en: 'Deploy Link',
        zh: '部署版本',
        url: 'https://gongtzuuuu.github.io/office-simulator/',
      },
      {
        en: 'Github Link',
        zh: 'GitHub連結',
        url: 'https://github.com/gongtzuuuu/office-simulator',
      },
    ],
    techStack: ['HTML', 'CSS', 'JAVASCRIPT'],
    desc: {
      en: [
        `Office Simulator is a JavaScript-Canvas-based web game inspired by classic 2D web games, combining the theme with Asian workplace culture and a touch of humor. During gameplay, players can utilize the up and down arrow keys to precisely control the character, with the main objective being to accumulate 15 dollars in revenue within a one-minute timeframe. Regardless of whether the game is won or lost, users have the option to start anew after encountering an Easter egg.`,
      ],
      zh: ['一個模擬遊戲，讓用戶體驗辦公室工作人員的日常生活。'],
    },
  },
];
