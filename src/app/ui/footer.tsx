import { Suspense } from 'react'

import { SOCIAL_ICONS } from '@/app/ui/icons'
import { NowPlaying } from '@/app/ui/now-playing'
import { Spinner } from '@/app/ui/spinner'

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
        <div className="my-2 space-x-4 flex flex-row">
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
        <div className=" text-gray-400 text-xs md:text-sm mt-8">
          © <span className="font-medium">{new Date().getFullYear()}</span>
          <span>{` • `}</span>
          Dzmitry Svirin
        </div>
        <div className="text-xs md:text-sm text-gray-400 mt-1">
          <span>The code of this site was originally a fork of </span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className=" text-gray-300  font-medium link-underlined "
            href="https://leerob.io"
          >
            Lee Robinson
          </a>
          {` `}personal site,
          <span>almost entirely rewritten.</span>
        </div>
      </div>
    </footer>
  )
}
