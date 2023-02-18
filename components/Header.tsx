import NavItem from './NavItem';

import { NAV_LINKS } from 'config';

export default function Header() {
  return (
    <header className='flex flex-col justify-center px-6'>
      <nav className='flex items-center justify-between w-full relative max-w-2xl mx-auto pt-8 pb-4 md:pb-8'>
        <a href='#skip' className='skip-nav'>
          Skip to content
        </a>
        <div className='ml-[-0.60rem'>
          {NAV_LINKS.map((item, index) => (
            <NavItem key={index} href={item.href} text={item.text} />
          ))}
        </div>
      </nav>
    </header>
  );
}
