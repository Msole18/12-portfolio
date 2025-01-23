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
    notebookScale: isSmall ? 0.5 : isMobile ? 0.65 : 0.75,
    notebookPosition: isSmall
      ? [0, 0.5, 0]
      : isMobile
      ? [0, -2, 0]
      : [0, -2, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  }
}