'use client';

import { getActiveStatus } from 'lib/utils';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface INavItem {
  href: string;
  text: string;
}

export default function NavItem({ href, text }: INavItem) {
  const path = usePathname() ?? '/';
  const isActive = getActiveStatus(href, path);
  return (
    <Link
      href={href}
      className={clsx(
        'inline-block  transition-all pr-4 duration-150 hover:text-gray-200 ease-in-out text-lg',
        {
          'text-gray-200': isActive,
          'text-gray-400': !isActive
        }
      )}
    >
      <span className='capsize'>{text}</span>
    </Link>
  );
}
