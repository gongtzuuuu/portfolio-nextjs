export interface WorkType {
  index: number;
  label: string;
  date: string;
  type: string;
  src: string;
  github: string;
  deploy: string;
  descEng: string[];
  descMand: string;
}

export const works: WorkType[] = [
  {
    index: 0,
    label: 'meloverse',
    date: 'June 2023',
    type: 'Personal Project',
    src: '/music.svg',
    github: '',
    deploy: '',
    descEng: [
      'meloverse is an innovative music app that enables users to craft engaging posts with their favorite songs. Users can seamlessly log in with Spotify account to access their personal collection or explore new tracks by keywords or artists. The app also introduce a thriving community of music enthusiasts, where users share their love for songs and discover a harmonious array of posts. Filter content by tags to explore topics of your interest, connecting with like-minded individuals.',
    ],
    descMand: '一個音樂平台，讓用戶發現新音樂並與他人分享他們最喜歡的歌曲。',
  },
  {
    index: 1,
    label: 'GluttonGlobe',
    date: 'June 2023',
    type: 'Collaboration Project',
    src: '/travel.svg',
    github: '',
    deploy: '',
    descEng: [
      `GluttonGlobe is an interactive global mapping platform designed to facilitate user engagement in discovering and sharing travel experiences. With a user-friendly interface, users can log into the app and conveniently mark the cities they have visited or aspire to explore on a world map. Additionally, users can leave insightful comments that are accessible to fellow users, offering a powerful feature for the global community of travel enthusiasts to exchange valuable recommendations on a worldwide scale.`,
      `The app was developed in collaboration with partners Panthari Panthong and Solen Wanono.`,
    ],
    descMand: '一個旅遊平台，讓用戶發現新地方並與他人分享他們最喜歡的目的地。',
  },
  {
    index: 2,
    label: 'FitQuest',
    date: 'June 2023',
    type: 'Collaboration Project',
    src: '/gym.svg',
    github: '',
    deploy: '',
    descEng: [
      `FitQuest is a fitness tracker app enabling users to create and track daily workouts. By logging into the app, users can log exercises with sets, weights, and reps, also earning points based on difficulty. By integrating API Ninjas Exercise API, the app provides a variety of workout templates for users to choose from freely. On the personalised profile page, the app displays each user's workout history and allows them to make and edit personal details and change their profile pictures.`,
      `The app was developed in collaboration with partner Ian Mason.`,
    ],
    descMand:
      '一個健身平台，讓用戶發現新的鍛煉方式並與他人分享他們最喜歡的運動。',
  },
  {
    index: 3,
    label: 'Office Simulator',
    date: 'June 2023',
    type: 'Personal Project',
    src: '/office.svg',
    github: '',
    deploy: '',
    descEng: [
      `Office Simulator is a JavaScript-Canvas-based web game inspired by classic 2D web games, combining the theme with Asian workplace culture and a touch of humor. During gameplay, players can utilize the up and down arrow keys to precisely control the character, with the main objective being to accumulate 15 dollars in revenue within a one-minute timeframe. Regardless of whether the game is won or lost, users have the option to start anew after encountering an Easter egg.`,
    ],
    descMand: '一個模擬遊戲，讓用戶體驗辦公室工作人員的日常生活。',
  },
];
