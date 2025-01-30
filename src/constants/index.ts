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
    notebookScale: isSmall ? 0.7 : isMobile ? 0.8 : isTablet ? 0.9 : 1,
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
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
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
        path: '/assets/typescript.png',
      },
      {
        id: 3,
        name: 'Vite',
        path: '/assets/vite.svg',
      },
    ],
  },
]