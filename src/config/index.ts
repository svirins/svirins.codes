export const NAV_LINKS = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About' },
  { href: '/blog', text: 'Blog' },
  { href: '/snippets', text: 'Snippets' }
];

export const AUTHOR = {
  name: 'Dzmitry Svirin',
  email: 'svirins@gmail.com',
  link: 'https://twitter.com/svirins'
};

export const DEFAULT_SEO = {
  title: 'Default description',
  description: 'Default description',
  openGraph: {
    titleTemplate: 'Default description',
    description: 'Default description.',
    type: 'website',
    url: 'https://www.svirins.cf/',
    site_name: 'Default description'
  },
  twitter: {
    handle: '@svirins',
    site: '@site',
    cardType: 'summary_large_image'
  }
};

export const SANITY_CONFIG = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  useCdn: process.env.NODE_ENV !== 'production',
  apiVersion: '2021-03-25'
};