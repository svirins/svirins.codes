import { Suspense } from 'react'
import Image from 'next/image'

import { STACK_ICONS } from '@/components/icons'
import { Spinner } from '@/components/spinner'
import { Typewriter } from '@/components/typewriter'
import { WakaStats } from '@/components/wakatime'

export default function Page() {
  return (
    <section className="mb-12 md:mb-24">
      <div className="md:grid md:grid-cols-8">
        <div className="md:col-span-7 ">
          <h1 className="text-3xl md:text-5xl tracking-tight mb-4 capsize font-bold text-gray-100">
            Hi, I&apos;m <span className="text-active">Dzmitry</span>
          </h1>
          <h2 className="text-lg md:text-[22px] md:text-2xl tracking-tight text-gray-100 font-normal">
            I specialize in turning ideas into into{' '}
            <span className="font-semibold italic">real-life </span>
            products
          </h2>
        </div>
        <div className="hidden md:block">
          <Image
            alt="Dzmitry Svirin"
            // src="/dzmitry.webp"
            src="/me.png"
            width={256}
            height={256}
            className="rounded-full"
            priority
          />
        </div>
      </div>
      <p className="mt-4 md:mt-6">
        Full-stack developer with a passion for the Next.js,
        TypeScript and databases
      </p>
      <hr />
      <div className="mt-8">
        <h4>In short:</h4>
        <ul>
          <li>
            10+ years of building products for clients across several
            countries;
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
        <h4 className="mb-2">I mainly work with a stack:</h4>
      </div>
      <div className="grid grid-cols-6 items-center justify-between gap-x-6  gap-y-6 pb-8  pt-2 lg:pt-4 lg:grid-cols-9">
        {STACK_ICONS.sort((a, b) =>
          a?.text?.localeCompare(b?.text)
        ).map((stack, index) => (
          <a
            href={stack.url}
            title={stack.text}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            {stack.icon}
          </a>
        ))}
      </div>
      <h4 className="mb-2 md:mb-4">Some stats:</h4>
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
      <p className="mt-2">
        <Suspense
          fallback={
            <Spinner
              text="Loading typed.js..."
              classNames="min-h-6"
            />
          }
        >
          <Typewriter />
        </Suspense>
      </p>
    </section>
  )
}
