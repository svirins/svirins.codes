import fs from 'node:fs/promises';
import { getPlaiceholder } from 'plaiceholder';

export function isActive(href: string, currentPath: string): boolean {
  if (href === currentPath) {
    return true;
  }
  if (
    href.search('blog') > 0 &&
    (currentPath.search('blog') > 0 || currentPath.search('tag') > 0)
  ) {
    return true;
  }
  if (href.search('snippets') > 0 && currentPath.search('snippets') > 0) {
    return true;
  }

  return false;
}
