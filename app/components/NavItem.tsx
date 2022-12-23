`use client`;

import clsx from 'clsx';
import { useSelectedLayoutSegments } from 'next/navigation';
import NextLink from 'next/link';

function getActiveStatus(href: string, segments: string[]): boolean {
  if (segments.indexOf(href) > 0)
    if (href === segments[0]) {
      return true;
    }
  if (
    href === 'blog' &&
    (segments.indexOf('blog') > 0 || segments.indexOf('tag') > 0)
  ) {
    return true;
  }
  if (href === 'snippets' && segments.indexOf('snippets') > 0) {
    return true;
  }

  return false;
}

interface INavItem {
  href: string;
  text: string;
}

export default function NavItem({ href, text }: INavItem) {
  const segments = useSelectedLayoutSegments();
  return (
    <NextLink
      href={`/${href}`}
      className={clsx(
        getActiveStatus(href, segments)
          ? 'font-semibold text-gray-800 dark:text-gray-200 '
          : 'font-medium text-gray-600 dark:text-gray-400',
        'hidden md:inline-block  transition-all pr-4 duration-150 hover:text-gray-800 dark:hover:text-gray-200 ease-in-out text-lg'
      )}
    >
      <span className="capsize">{text}</span>
    </NextLink>
  );
}
