import '../styles/globals.css';
import localFont from '@next/font/local';

import NavItem from './components/NavItem';
import ToggleMode from './components/ToggleMode';
import NowPlaying from './components/NowPlaying';
import FooterSocials from './components/FooterSocials';
import ThemeWrapper from './components/ThemeWrapper';

import { NAV_LINKS } from '../config';

const plexSans = localFont({
  src: './fonts/ibm-plex-sans-var.woff2',
  weight: '300 700',
  variable: '--plex-sans'
});
const plexSansMono = localFont({
  src: './fonts/ibm-plex-mono-var.woff2',
  weight: '400',
  variable: '--plex-mono'
});

//TODO: Consider mobile menu
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <ThemeWrapper>
        <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <div className="flex flex-col justify-center px-8">
            <nav className="flex items-center justify-between w-full relative max-w-2xl mx-auto pt-8 pb-8 md:pb-16">
              <a href="#skip" className="skip-nav">
                Skip to content
              </a>
              <div className="ml-[-0.60rem">
                {NAV_LINKS.map((item, index) => (
                  <NavItem key={index} href={item.href} text={item.text} />
                ))}
              </div>
              <ToggleMode />
            </nav>
          </div>
          <main
            id="skip"
            className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900"
          >
            {children}
          </main>
          <footer className="flex flex-col items-start  md:items-center  max-w-2xl w-full mx-auto mb-4">
            <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-4" />
            <NowPlaying />
            <FooterSocials />

            <p className=" text-gray-500 dark:text-gray-400 mb-1 pt-2  text-left md:text-center text-xs">
              © <span className="font-medium">{new Date().getFullYear()}</span>
              <span>{` • `}</span>
              Dzmitry Svirin{` • `}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-300  font-medium link-underline link-underline-gradient"
                href="https://svirins.codes/feed.xml"
              >
                RSS
              </a>
            </p>
            <p className="w-full  text-xs text-gray-500 dark:text-gray-400 text-left md:text-center">
              <span>The code of this site was originally a fork of </span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-300  font-medium link-underline link-underline-gradient"
                href="https://leerob.io"
              >
                Lee Robinson
              </a>
              {` `}personal site,
              <span>almost entirely rewritten.</span>
            </p>
          </footer>
        </body>
      </ThemeWrapper>
    </html>
  );
}
