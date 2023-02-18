import NowPlaying from './NowPlaying';
import { SocialIcons } from 'components/Icons';

export default function Footer() {
  return (
    <footer className='flex flex-col items-start md:items-center min-w-full mb-4 mx-auto px-6'>
      <hr className='horizontal-divider mb-4' />
      <NowPlaying />
      <SocialIcons />
      <p className='min-w-full mx-auto text-gray-400 mb-1 pt-2  text-left md:text-center text-xs'>
        © <span className='font-medium'>{new Date().getFullYear()}</span>
        <span>{` • `}</span>
        Dzmitry Svirin{` • `}
        <a
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-300 link-underline link-underline-gradient'
          href='https://svirins.codes/feed.xml'
        >
          RSS
        </a>
      </p>
      <p className='min-w-full mx-auto  text-xs text-gray-400 text-left md:text-center'>
        <span>The code of this site was originally a fork of </span>
        <a
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-300 link-underline link-underline-gradient'
          href='https://leerob.io'
        >
          Lee Robinson
        </a>
        {` `}personal site,
        <span>almost entirely rewritten.</span>
      </p>
    </footer>
  );
}
