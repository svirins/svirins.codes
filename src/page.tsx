import { Suspense } from 'react'
import Image from 'next/image'

import { STACKS } from '@/app/lib/constants'
import { Spinner } from '@/app/ui/spinner'
import { Typewriter } from '@/app/ui/typewriter'
import { WakaStats } from '@/app/ui/wakatime'

export default function Page() {
  return (
    <section className="mb-24">
      <div className="md:grid md:grid-cols-5">
        <div className="md:col-span-4 ">
          <h1>
            Hi, I&apos;m <span className="text-active">Dzmitry</span>
          </h1>
          <h4>
            I specialize in turning ideas into into tangible,{' '}
            <span className="font-semibold italic">real-life </span>
            products.
          </h4>
          <p>
            Full-stack developer with a passion for the React ecosystem,
            TypeScript, and serverless backends.
          </p>
        </div>
        <div className="hidden md:block">
          <Image
            alt="Dzmitry Svirin"
            // src="/dzmitry.webp"
            src="/svirins.png"
            width={350}
            height={350}
            className="rounded-full"
            priority
          />
        </div>
      </div>
      <hr className="mb-6" />
      <div className="prose prose-invert md:prose-lg">
        <h4>In short:</h4>
        <ul>
          <li>
            10+ years of building products for clients across several countries;
          </li>
          <li>
            currently working with regular clients, but open to new
            opportunities;
          </li>
          <li>
            I live in Batumi{' '}
            <span role="img" aria-label="wave">
              🌊
            </span>
            <span role="img" aria-label="sun">
              🔆
            </span>
            <span role="img" aria-label="georgia flag">
              🇬🇪
            </span>{' '}
            and enjoy swimming, mountains and good movies;
          </li>
        </ul>
        <h4>My values:</h4>
        <ul>
          <li>consistency over speed;</li>
          <li>honesty, reliability, responsibility;</li>
          <li>keep coding standards and best practices;</li>
          <li>be curious, learn iteratively;</li>
        </ul>
        <h4>I mainly work with a stack:</h4>
      </div>
      <div className="grid grid-cols-6 items-center justify-between gap-x-6  gap-y-6 pb-8  pt-2 md:grid-cols-8">
        {STACKS.sort((a, b) => a?.name?.localeCompare(b?.name)).map(
          (stack, index) => (
            <a
              className="transform fill-gray-400 duration-150 ease-in-out hover:scale-110  hover:fill-gray-200 "
              href={stack.url}
              title={stack.name}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <Image
                src={stack.src}
                alt={stack.name}
                height={40}
                width={40}
                className="h-10 w-10"
              />
            </a>
          )
        )}
      </div>
      <h4>Some stats:</h4>
      <Suspense
        fallback={
          <Spinner
            text="Loading stats..."
            classNames="min-h-[124px] md:min-h-[76px]"
          />
        }
      >
        <WakaStats />
      </Suspense>
      <div className="prose prose-invert md:prose-lg">
        <p>
          Wanna chat?{' '}
          <a
            href="https://cal.com/svirins/15min?user=svirins"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book my Cal.com!
          </a>
        </p>
        {/* <h4>Get in touch:</h4> */}
        {/* <ul>
          <li>
            GitHub: <a href="https://github.com/svirins">@svirins</a>
          </li>
          <li>
            ex-Twitter: <a href="https://twitter.com/svirins">@svirins</a>
          </li>
          <li>
            Email: <a href="mailto:svirins@gmail.com">svirins@gmail.com</a>
          </li>
        </ul> */}
      </div>
      <p className="mt-2">
        <Typewriter />
      </p>
    </section>
  )
}
