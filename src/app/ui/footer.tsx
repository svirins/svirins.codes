import { NowPlaying } from '@/app/ui/now-playing'
import { Spinner } from '@/app/ui/spinner'
import Image from 'next/image'
import { Suspense } from 'react'

export function Footer() {
  return (
    <footer className="flex flex-col items-start  md:items-center   w-full mx-auto mb-4">
      <hr className="w-full border-1  border-gray-800 mb-4" />
      <Suspense fallback={<Spinner text="Loading player..." />}>
        <NowPlaying />
      </Suspense>
      <div className="flex my-2 space-x-4">
        <a
          href="https://github.com/svirins"
          title="My GitHub"
          className="duration-150 transform ease-in-out hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/svg/github.svg"
            alt="My GitHub"
            width={18}
            height={18}
            // className="w-6 h-6  fill-gray-400  hover:fill-gray-200"
          />
        </a>
        <a
          href="https://twitter.com/svirins"
          title="My X (ex-Twitter)"
          className="duration-150 transform  ease-in-out hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={18}
            height={18}
            src="/assets/svg/x.svg"
            alt="My X (ex-Twitter)"
            // className="w-6 h-6  fill-gray-400  hover:fill-gray-200"
          />
        </a>
        <a
          href="mailto:svirins@gmail.com"
          title="My Gmail"
          className="duration-150 transform  ease-in-out hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={18}
            height={18}
            src="/assets/svg/gmail.svg"
            alt="My Gmail"
            // className="w-6 h-6  fill-gray-400  hover:fill-gray-200"
          />
        </a>
      </div>
      <p className="  text-gray-400 mb-1 pt-2  text-left md:text-center text-xs">
        © <span className="font-medium">{new Date().getFullYear()}</span>
        <span>{` • `}</span>
        Dzmitry Svirin{` • `}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className=" text-gray-300  font-medium link-underline link-underline-gradient"
          href="https://svirins.codes/feed.xml"
        >
          RSS
        </a>
      </p>
      <p className="w-full  text-xs  text-gray-400 text-left md:text-center">
        <span>The code of this site was originally a fork of </span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className=" text-gray-300  font-medium link-underline link-underline-gradient"
          href="https://leerob.io"
        >
          Lee Robinson
        </a>
        {` `}personal site,
        <span>almost entirely rewritten.</span>
      </p>
    </footer>
  )
}
