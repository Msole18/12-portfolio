import { ISizes } from "../types"

export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
]

export const calculateSizes = (
  isSmall: boolean,
  isMobile: boolean,
  isTablet: boolean
): ISizes => {
  return {
    notebookScale: isSmall ? 0.5 : isMobile ? 0.6 : isTablet ? 0.7 : 0.8,
    notebookPosition: isSmall
      ? [0, 0.5, 0]
      : isMobile
      ? [0.4, 0.5, 0]
      : isTablet
      ? [0.3, 0.5, 0]
      : [0.2, 0.5, 0],
  }
}

export const myProjects = [
  {
    title: 'Pictlify - Social Media Platform',
    desc: 'Pictlify is a revolutionary Software-as-a-Service platform that allows users to create, share, and interact with posts.',
    subdesc:
      'Built with React, TypeScript, and Vite. The application uses Appwrite for backend services, including authentication, database, and storage.',
    href: 'https://pictlify.vercel.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.svg',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.svg',
      },
      {
        id: 4,
        name: 'AppWrite',
        path: '/assets/appwrite.svg',
      },
      {
        id: 5,
        name: 'Vite',
        path: '/assets/vite.svg',
      },
    ],
  },
  {
    title: 'Pokedex',
    desc: 'Pokedex is a powerful app that allows users to search, filter, and explore a list of Pokémon. It implements different functionalities such as searching by pokémon name and number, filtering by type, paging, and sorting Pokémon by different criteria.',
    subdesc: 'Built with React, TypeScript, and Vite.',
    href: 'https://msolepokedex.netlify.app/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.webp',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TypeScript',
        path: '/assets/typescript.svg',
      },
      {
        id: 3,
        name: 'Vite',
        path: '/assets/vite.svg',
      },
    ],
  },
]

export const workExperiences = [
  {
    id: 1,
    name: 'GESTIÓN DE PROCESOS Y SERVICIOS S.A.',
    pos: 'Fiber Optic Project Designer',
    duration: '2018 - 2024',
    title:
      'I led design and implementation projects for FTTH and HFC networks, optimizing planning and execution processes. Additionally, I coordinated the delivery of network upgrade projects, ensuring they were completed on time and contributed to high client satisfaction.',
    icon: '/assets/gps.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'INSOHA C.A.',
    pos: 'Front-End Developer',
    duration: '2015 - 2016',
    title:
      'As a Front-End Developer, I designed user-centered web interfaces for small business informational websites. My focus was on creating accessible and modern navigation experiences. I implemented solutions using HTML, CSS, and JavaScript, improving interaction flows and facilitating access to key information.',
    icon: '/assets/insoha.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'SERVICIOS Y SUMINISTROS DE ORIENTE C.A.',
    pos: 'Software Developer',
    duration: '2014 - 2015',
    title:
      'As a Software Developer, I developed a maintenance management application that enhanced the organization and accessibility of database information. I also implemented advanced SQL queries and preventive maintenance strategies, contributing to the efficient performance of critical tools.',
    icon: '/assets/sso.png',
    animation: 'salute',
  },
]
