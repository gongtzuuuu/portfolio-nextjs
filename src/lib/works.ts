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
    techStack: ['CHATGPT', 'FIREBASE', 'REACT', 'TYPESCRIPT', `SHADCN`],
    desc: {
      en: [
        `Superchat's birth was driven by a desire to harness the power of AI and cloud services in the modern era. This project utilises Firebase's robust features: Firebase Authentication allows users to seamlessly log in with their Google accounts, while Firestore Database ensures efficient data storage and near-instantaneous synchronisation. This responsiveness keeps the user experience smooth and effectively caters to users' needs.`,
        `Furthermore, Superchat integrates with OpenAI's GPT-3.5 Turbo model, empowering users to choose between conversing with real people or interacting with ChatGPT after logging in. This integration allows users to engage in informative chats, posing questions and receiving insightful responses.`,
      ],
      zh: [
        `superchat 誕生的原因主要是為因應 AI 及雲服務時代所做的一次嘗試。在這個專案中，我採用了 Firebase 的權限控管及 Firestore Database，前者是為了讓使用者整合使用其 Google 帳號登入這個平台；後者相較於其他 DB 則是可以達到儲存和同步資料的功能，讓資料實時更新，快速響應用戶的需求。`,
        `另外，superchat 也介接了 Open AI 的 GPT-3.5 Turbo 模型，讓使用者登入後選擇跟真人聊天或者是跟 ChatGPT 對話，享受由人們及 AI 所驅動的雙重資訊服務。`,
      ],
    },
  },
  {
    index: 1,
    label: 'portfolio',
    src: '/works/portfolio.png',
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
    techStack: ['AWS', 'NEXT', 'REACT', 'TYPESCRIPT', 'SHADCN', 'STORYBOOK'],
    desc: {
      en: [
        `Built from the ground up, the portfolio website utilises a modern tech stack including Next.js, React, TypeScript, Storybook, and Shadcn. Deployment is managed on an AWS EC2 server.`,
        `Additionally, it employs the i18n library to handle multi-language versions and integrates Framer Motion to create smooth animations, enhancing the user experience.`,
        `This website serves as a dynamic platform that not only showcases my skills and experience in text and visual design but also brings them to life through the underlying technology. It is a testament to my drive to push boundaries, evolve as a developer, and explore new technologies.`,
      ],
      zh: [
        `作品集網站採用 Next.js 作為主要的前端開發框架，搭配 React、TypeScript 和 Shadcn 等技術，並將之部署在 AWS 的 EC2 虛擬環境上。同時，這個專案也採用 i18n 來管理多語系版本，結合 Framer Motion 來製作流暢的動畫，進而提升使用者體驗。`,
        `從設計到開發，再從開發到部署，這個網站不僅是一個展示過往前端開發專案的空間，本身更可以作為一個匯合我目前的開發技術的最佳實例。`,
      ],
    },
  },
  {
    index: 2,
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
        `meloverse is a music app, enabling users to express themselves through captivating posts built around their favourite songs. Leveraging the Spotify API, Meloverse seamlessly integrates users' personal music libraries, allowing them to explore new tracks by keyword or artist.`,
        `The app also introduces a thriving community of music enthusiasts, where users share their love for songs and discover a harmonious array of posts. Content can be filtered by tags to explore topics of interest, connecting with like-minded individuals.`,
        `Built with cutting-edge technologies like Next.js, React, MongoDB, and TailwindCSS, Meloverse offers a smooth and performant user experience.`,
      ],
      zh: [
        `meloverse 為一款音樂日記應用程式。透過介接 Spotify API，讓用戶即可用 Spotify 帳號登入。用戶可以在 meloverse 上搜尋到所有 Spotify 歌曲，並且同步新增到個人音樂庫。`,
        `最重要的是，用戶可以針對每首歌曲發表個人心得文章，除此之外，同時也能看見其他音樂愛好者們傾訴對這些歌曲的深切連結。用戶還可以透過標籤（hashtag）篩選文章內容，探索任何感興趣的主題，並且與志同道合的人建立聯繫。`,
        `這款應用程式使用了 Next.js、React、MongoDB 和 TailwindCSS 等當代網站開發技術，為用戶提供流暢且高性能的用戶體驗。`,
      ],
    },
  },
  {
    index: 3,
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
    techStack: ['REACT', 'NODE', 'EXPRESS', 'MONGODB'],
    desc: {
      en: [
        `GluttonGlobe is an interactive global mapping platform designed to ignite user engagement in travel discovery and sharing. This user-friendly app allows users to log in, pinpoint their explored cities on a world map, and leave insightful comments for fellow adventurers.`,
        `We leveraged the power of the Leaflet API, an open-source, mobile-friendly JavaScript library, to create a smooth and interactive map interface. Additionally, we built APIs using the Express.js and Node.js frameworks, and utilised MongoDB to securely store all the collected travel data.`,
        `The app was developed in collaboration with Panthari Panthong and Solen Wanono. My primary focus was crafting the interactive Leaflet map and integrating all the geographical information.`,
      ],
      zh: [
        'GluttonGlobe 為一款旅遊紀錄應用程式，用戶登入後即可在互動式世界地圖上標註他們曾到訪過的城市，或者收藏紀錄將來 想要探索的城市，並為這些熱門旅遊景點留下心得或評語，與來自世界各地的旅客交換心得體驗。',
        '我們結合了 Leaflet 地圖套件以及 React 框架來製作前端介面，後端則是採用 Express.js 及 Node.js ，並且串接 MongoDB 資料庫。',
        '這款應用程式是我和兩位團隊夥伴：Panthari Panthong 和 Solen Wanono 一起合作開發的專案項目，我主要負責開發 Leaflet 地圖及相關地理數據存取。',
      ],
    },
  },
  {
    index: 4,
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
        `FitQuest is a fitness tracker app that enables users to create and track daily workouts. By logging into the app, users can log exercises with sets, weights, and reps, earning points based on difficulty.`,
        `We integrated the Exercise API from API Ninja, providing users with a variety of workout templates to choose from. On the personalised profile page, the app displays each user's workout history and allows them to edit personal details and change their profile pictures.`,
        `The app was developed in collaboration with Ian Mason. I was primarily responsible for the authentication and authorisation of the app, as well as the CRUD functionalities on the profile page.`,
      ],
      zh: [
        `FitQuest 為一款健身日記應用程式，提供大量健身模組，讓用戶自由選擇並記錄每日運動數據。用戶登入後即可開始記錄，並根據運動難度獲得積分。`,
        `我們整合了 API Ninja 的 Exercise API，讓用戶可以選擇各種運動模組，並在個人檔案頁面中顯示用戶的運動歷史記錄，並允許用戶編輯個人資料和更改個人頭像。`,
        `這款應用程式是我和 Ian Mason 共同合作開發的專案項目，我主要負責應用程式的身份驗證和授權，以及個人檔案頁面上的 CRUD 功能。`,
      ],
    },
  },
  {
    index: 5,
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
        `Office Simulator is a JavaScript-Canvas-based web game inspired by classic 2D web games, combining Asian workplace culture with a touch of humour.`,
        `The game was developed using JavaScript Canvas to create the visual elements and animations.`,
        `During gameplay, players can use the up and down arrow keys to control the character precisely, with the main objective being to accumulate 15 dollars in revenue within a one-minute timeframe. Regardless of whether the game is won or lost, users have the option to start anew after encountering an Easter egg.`,
      ],
      zh: [
        `Office Simulator 是一款基於 JavaScript Canvas 的網頁遊戲，靈感來自經典的 2D 網頁遊戲，結合亞洲職場文化和幽默元素。`,
        `這款遊戲是使用 JavaScript Canvas 開發的，用於創建遊戲的視覺元素和動畫。`,
        `在遊戲中，玩家可以使用上下箭頭鍵控制角色，主要目標是在一分鐘內累積15美元的收入。無論遊戲是贏還是輸，玩家都可以在遇到彩蛋後選擇重新開始。`,
      ],
    },
  },
];
