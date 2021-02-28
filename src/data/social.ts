export const Social = {
  github: {
    name: 'Github',
    href: 'https://github.com/dangolbeeker',
    imgSrc: './images',
  },
  twitter: {
    name: 'Twitter',
    href: 'https://twitter.com/beeker_scott',
    imgSrc: './images/',
  },
  devto: {
    name: 'devto',
    href: 'https://devto.com/dangolbeeker',
    imgSrc: './images/'
  },
  linkedin: {
    name: 'Linkedin',
    href: 'https://linkedin.com/in/beekbeek'
    imgSrc: './images',
  },
} as const;

export type Social = typeof Social[keyof typeof Social];