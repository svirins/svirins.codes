import { SOCIAL_LINKS } from '@/app/lib/constants'
import { NowPlaying } from '@/app/ui/now-playing'
import { Spinner } from '@/app/ui/spinner'
import Image from 'next/image'
import { Suspense } from 'react'

export function Footer() {
  return (
    <footer className="flex flex-col w-full mx-auto mb-4">
      <hr className="w-full border-1 border-gray-800 mb-4" />
      <div className="flex flex-row-reverse items-center sm:flex-row mb-8 space-x-0 sm:space-x-2 w-full">
        <Suspense
          fallback={<Spinner text="Loading player..." classNames="min-h-[54px] md:min-h-[30px]" />}
        >
          <NowPlaying />
        </Suspense>
      </div>
      <div className="text-left md:text-center">
        <div className="flex my-2 space-x-4">
          {SOCIAL_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.href}
              title={link.text}
              className="duration-150 transform ease-in-out hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={link.iconSrc} alt={link.text} width={18} height={18} />
            </a>
          ))}
        </div>
        <p className="  text-gray-400 mb-1 pt-2  text-left md:text-center text-xs">
          © <span className="font-medium">{new Date().getFullYear()}</span>
          <span>{` • `}</span>
          Dzmitry Svirin{` • `}
          <a
            className=" text-gray-300  font-medium link-underline link-underline-gradient"
            href="https://svirins.codes/sitemap.xml"
          >
            Sitemap.xml
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
      </div>
    </footer>
  )
}
