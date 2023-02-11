`use client`;

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface INavItem {
  href: string;
  text: string;
}

export default function NavItem({ href, text }: INavItem) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        'hidden md:inline-block  transition-all pr-4 duration-150 hover:text-gray-200 ease-in-out text-lg',
        {
          'font-semibold text-gray-200': path === href,
          'font-medium text-gray-400': path !== href
        }
      )}
    >
      <span className="capsize">{text}</span>
    </Link>
  );
}
