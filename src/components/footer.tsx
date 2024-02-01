import { Suspense } from 'react'

import { SOCIAL_ICONS } from '@/components/icons'
import { NowPlaying } from '@/components/now-playing'
import { Spinner } from '@/components/spinner'

export function Footer() {
  return (
    <footer className="flex flex-col">
      <hr />
      <div className="flex  mb-8 space-x-0 sm:space-x-2">
        <Suspense
          fallback={
            <Spinner
              text="Loading player..."
              classNames="min-h-[54px] md:min-h-[30px]"
            />
          }
        >
          <NowPlaying />
        </Suspense>
      </div>
      <div className="flex flex-col">
        <div className="mb-8 space-x-4 flex flex-row">
          {SOCIAL_ICONS.map((social, index) => (
            <a
              key={index}
              href={social.href}
              title={social.text}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p className="text-gray-400 text-xs lg:text-sm my-1">{`©${new Date().getFullYear()} • Dzmitry Svirin`}</p>
        <p className="text-gray-400 text-xs lg:text-sm my-1">
          The code of this site was originally a fork of
          <a
            target="_blank"
            rel="noopener noreferrer"
            className=" text-gray-300  font-medium link-underlined "
            href="https://leerob.io"
          >
            Lee Robinson{` `}
          </a>
          {` `}personal site, almost entirely rewritten.
        </p>
      </div>
    </footer>
  )
}
