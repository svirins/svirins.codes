import { STACKS } from '@/app/lib/constants'
import { Spinner } from '@/app/ui/spinner'
import { Typewriter } from '@/app/ui/typewriter'
import { WakaStats } from '@/app/ui/wakatime'
import Image from 'next/image'
import { Suspense } from 'react'

export default function Page() {
  return (
    <section className="mb-24">
      <div className="md:grid md:grid-cols-5">
        <div className="md:col-span-4 ">
          <h1>
            Hi, I&apos;m <span className="text-active">Dzmitry</span>
          </h1>
          <h2>
            I specialize in turning ideas into{' '}
            <span className="font-semibold italic">real-life </span>
            products.
          </h2>
          <p className="md:text-lg  text-gray-400 ">
            Full-stack developer with a passion for the React ecosystem,
            TypeScript, and serverless backends.
          </p>
        </div>
        <div className="hidden md:block">
          <Image
            alt="Dzmitry Svirin"
            src="/dzmitry.webp"
            width={262}
            height={363}
            className="rounded-sm"
            priority
          />
        </div>
      </div>
      <hr className="mb-6" />
      <h3>In short:</h3>
      <ul className="list-inside list-[circle] pb-8 [&>*]:py-[0.1rem]">
        <li className=" text-gray-400 md:text-lg">
          10+ years of building products for clients across several countries;
        </li>
        <li className=" text-gray-400 md:text-lg">
          currently working with regular clients, but open to new opportunities;
        </li>
        <li className=" text-gray-400 md:text-lg">
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
      <h3>My values:</h3>
      <ul className="list-inside  list-[circle]  pb-8 [&>*]:py-[0.1rem]">
        <li className=" text-gray-400 md:text-lg">consistency over speed;</li>
        <li className=" text-gray-400 md:text-lg">
          honesty, reliability, responsibility;
        </li>
        <li className=" text-gray-400 md:text-lg">
          keep coding standards and best practices;
        </li>
        <li className=" text-gray-400 md:text-lg">
          be curious, learn iteratively;
        </li>
      </ul>
      <h3>Technologies I use frequently:</h3>
      <div className="grid grid-cols-6 md:grid-cols-8 items-center justify-between  gap-x-6 gap-y-6  pt-2 pb-8">
        {STACKS.sort((a, b) => a?.name?.localeCompare(b?.name)).map(
          (stack, index) => (
            <a
              className="duration-150 transform ease-in-out hover:scale-110 fill-gray-400  hover:fill-gray-200 "
              href={stack.url}
              title={stack.name}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <Image src={stack.src} alt={stack.name} className="w-10 h-10" />
            </a>
          ),
        )}
      </div>
      <h3>Some stats:</h3>
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
      <h3>Get in touch:</h3>
      <ul className="list-inside  list-[circle] pb-8 [&>*]:py-[0.1rem]">
        <li className=" text-gray-400 md:text-lg">
          GitHub:{' '}
          <a
            className="  text-gray-300  font-medium link-underlined "
            href="https://github.com/svirins"
          >
            @svirins
          </a>
        </li>
        <li className=" text-gray-400 md:text-lg">
          ex-Twitter:{' '}
          <a
            className="  text-gray-300  font-medium link-underlined "
            href="https://twitter.com/svirins"
          >
            @svirins
          </a>
        </li>
        <li className=" text-gray-400 md:text-lg">
          Email:{' '}
          <a
            className="  text-gray-300  font-medium  link-underlined "
            href="mailto:svirins@gmail.com"
          >
            svirins@gmail.com
          </a>
        </li>
      </ul>
      <p className="mt-2">
        <Typewriter />
      </p>
    </section>
  )
}
