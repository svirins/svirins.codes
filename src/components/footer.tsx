import { Suspense } from 'react'

import { SOCIAL_ICONS } from '@/components/icons'
import { NowPlaying } from '@/components/now-playing'
import { Spinner } from '@/components/spinner'

export function Footer() {
  return (
    <footer className="flex flex-col">
      <hr />
      <div className="flex space-x-3">
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
        <div className="my-6 md:my-8  md:space-x-3 flex flex-row">
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
        <p className="text-gray-400 text-xs font-light md:text-sm my-1">{`©${new Date().getFullYear()} • Dzmitry Svirin`}</p>
        <p className="text-gray-400 text-xs md:text-sm my-1 font-light">
          The code of this site was originally a fork of{` `}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className=" text-gray-300  font-medium link-underlined "
            href="https://leerob.io"
          >
            Lee Robinson
          </a>
          {` `}personal site, almost entirely rewritten.
        </p>
      </div>
    </footer>
  )
}
