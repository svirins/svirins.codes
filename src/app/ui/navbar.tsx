'use client'

import { NAV_LINKS } from '@/app/lib/constants'
import { isActive } from '@/app/lib/utils'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col justify-center">
      <nav className="flex items-center justify-between w-full relative  mx-auto  pb-8 md:pb-16">
        <div>
          {NAV_LINKS.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={clsx(
                isActive(item.href, pathname)
                  ? 'font-semibold  text-gray-200 '
                  : 'font-medium text-gray-400',
                'inline-block  transition-all pr-4 duration-150  hover:text-gray-200 ease-in-out text-lg',
              )}
            >
              <span className="capsize">{item.text}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}
