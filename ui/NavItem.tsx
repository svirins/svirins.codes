`use client`;
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { isActive } from 'lib/isActive';

interface INavItem {
  href: string;
  text: string;
}

export default function NavItem({ href, text }: INavItem) {
  const currentPath = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        isActive(href, currentPath)
          ? 'font-semibold text-gray-800 dark:text-gray-200 '
          : 'font-medium text-gray-600 dark:text-gray-400',
        'hidden md:inline-block  transition-all pr-4 duration-150 hover:text-gray-800 dark:hover:text-gray-200 ease-in-out text-lg'
      )}
    >
      <span className="capsize">{text}</span>
    </Link>
  );
}
