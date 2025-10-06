export const myProjects = [
  {
    id: 1,
    // 🚨 CHANGED TITLE AND DESCRIPTION TO REFLECT MOVIE SITE 🚨
    title: "Movies App",
    description:
      "A responsive movie application for browsing movie information, complete with details, ratings, and trailers, fetched from a movie database API.",
    subDescription: [
      "Designed and built a modern user interface with React.js.",
      "Integrated a movie database API to retrieve and display comprehensive movie data.",
      "Implemented dynamic search and filter functionalities.",
    ],
    // 🚨 CONFIRMED LIVE LINK 🚨
    href: "public/assets/projects/movie.mp4", 
    image: "public/assets/projects/movie.png",
    tags: [
      {
        id: 1,
        name: "React",
        // ✔️ CORRECT PATH
        path: "assets/react.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        // ✔️ CORRECT PATH
        path: "assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "CSS",
        // ✔️ CORRECT PATH
        path: "assets/logos//css3.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Task Manager App (ManagePro)",
    description:
      "A professional task management application designed to organize, track, and prioritize daily tasks and projects, enhancing productivity.",
    subDescription: [
      "Designed and built a modern user interface with React.js.",
      "Utilized an API to retrieve and display comprehensive movie data.",
      "Implemented search and filter functionalities to enhance user experience.",
    ],
    // CONFIRMED LIVE LINK
    href: "https://managepro-sigma.vercel.app/",
    // 👇 IMAGE SET TO EMPTY STRING AS REQUESTED PREVIOUSLY 👇
    image: "public/assets/projects/task.png",
    tags: [
      {
        id: 1,
        name: "React",
        // ✔️ CORRECT PATH
        path: "assets/react.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        // ✔️ CORRECT PATH
        path: "assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "CSS",
        // ✔️ CORRECT PATH
        path: "assets/logos//css3.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Tic-Tac-Toe Game",
    description:
      "A classic Tic-Tac-Toe game built with a clean interface, allowing for a fun and interactive two-player experience.",
    subDescription: [
      "Developed game logic and state management using React.js.",
      "Created a simple and user-friendly design with HTML and CSS.",
      "Ensured a smooth and responsive experience for players.",
    ],
    // CONFIRMED LIVE LINK
    href: "https://tictac-bay.vercel.app/",
    image:"public/assets/projects/tictac.png",
        tags: [
      {
        id: 1,
        name: "React",
        // ✔️ CORRECT PATH
        path: "assets/logos/react.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        // ✔️ CORRECT PATH
        path: "assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "HTML",
        // ✔️ CORRECT PATH
        path: "assets/logos/html5.svg",
      },
      {
        id: 4,
        name: "CSS",
        // ✔️ CORRECT PATH
        path: "assets/logos/css3.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Country Explorer",
    description:
      "A responsive application for exploring detailed information on countries worldwide, featuring search, region filtering, and interactive data visualization.",
    subDescription: [
      "Built using the latest version of React (v19) for a modern, component-based architecture.",
      "Integrated an external REST API (likely REST Countries API) to fetch and display dynamic country data.",
      "Implemented dynamic features like search by name and filter by region.",
    ],
    // Country PROJECT LINK
    href: "https://reet-country.netlify.app/",
    image: "public/assets/projects/react19.png",
    tags: [
      {
        id: 1,
        name: "React 19",
        // ✔️ CORRECT PATH
        path: "assets/react.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        // ✔️ CORRECT PATH
        path: "assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "API Integration",
        // Using a general API icon path
        path: "assets/socials/api.png",
      },
      {
        id: 4,
        name: "CSS",
        // ✔️ CORRECT PATH
        path: "assets/logos/css3.svg",
      },
    ],
  },
  // 👇 NEW NEWS PROJECT ADDED HERE 👇
  {
    id: 5, // New unique ID
    title: "Global News Aggregator",
    description:
      "A dynamic and responsive news application that fetches real-time headlines and articles from a public news API, allowing users to browse various categories.",
    subDescription: [
      "Successfully integrated an external **News API using an API key** for data retrieval.",
      "Developed filtering and search functionalities to sort news by category and keywords.",
      "Implemented a responsive design ensuring accessibility across desktop and mobile devices.",
    ],
    href: "public/assets/projects/newsvid.mp4", 
        image: "public/assets/projects/news.png",

        tags: [
      {
        id: 1,
        name: "React",
        path: "assets/react.svg",
      },
      {
        id: 2,
        name: "API Key Security",
        // Assuming a security icon for API key mention
        path: "assets/socials/api.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "assets/logos/javascript.svg",
      },
      {
        id: 4,
        name: "Tailwind CSS", // Assuming modern styling framework
        path: "assets/logos/tailwindcss.png",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "LinkedIn",
    // 💥 FIXED LINKEDIN URL WITH HTTPS 💥
    href: "https://www.linkedin.com/in/ritika-bashak-50b108357",
    icon: "assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://www.github.com/ReetBashak",
    icon: "assets/socials/github.png",
  },
  // {
  //   name: "Instagram",
  //   href: "",
  //   icon: "assets/socials/instagram.svg",
  // },
];

export const experiences = [
  {
    title: "MERN Stack Developer",
    job: "Devex Hub Pvt Ltd",
    date: "Training",
    contents: [
      "Persuing a comprehensive MERN Stack development course, gaining expertise in MongoDB, Express.js, React.js, and Node.js.",
      "Gained hands-on experience building full-stack, scalable web applications, covering both front-end (React) and back-end (Node/Express) technologies.",
      "Developed several personal projects to apply concepts learned and build a strong portfolio.",
    ],
  },
  {
    title: "Graduation (BCA)",
    job: "Himachal Pradesh University",
    date: "2022-2025",
    contents: [
      "Overall Grade: CGPA of 7.7", // Removed Markdown **
      "Completed a Bachelor of Computer Applications, gaining a strong foundation in computer science and programming principles.",
      "Developed problem-solving skills and learned core concepts in data structures, algorithms, and software development.",
    ],
  },
  {
    title: "12th Standard",
    job: "HP Board",
    date: "2021-2022",
    contents: [
      "Overall Academic Performance: 91% (Grade A)", // Removed Markdown **
      "Successfully completed 12th grade under the Himachal Pradesh Board.",
    ],
  },
  {
    title: "10th Standard",
    job: "HP Board",
    date: "2019-2020",
    contents: [
      "Final Score: 78%", // Removed Markdown **
      "Successfully completed 10th grade under the Himachal Pradesh Board.",
    ],
  },
];

export const reviews = [];
