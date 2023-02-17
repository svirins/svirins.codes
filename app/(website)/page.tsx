import Image from 'next/image';
import getWakaStats from 'lib/waka-api';
import TypewriterEffect from 'components/TypewriterEffect';
import { MyStack } from 'components/Icons';
import WakaStats from 'components/WakaStats';

async function IndexPage() {
  const { languages, totalHours } = await getWakaStats();
  return (
    <>
      <div className='flex flex-col  max-w-2xl mx-auto w-full'>
        <div className='md:grid md:grid-cols-5'>
          <div className='md:col-span-4 '>
            <div className='flex flex-col  max-w-2xl mx-auto w-full'>
              <div className='flex flex-col items-start'>
                <h1 className='page-header'>
                  Hi, I&apos;m <span className='text-active'>Dzmitry</span>
                </h1>
                <h2 className='text-gray-50 md:text-lg'>
                  A Full-stack developer with a passion for the React ecosystem,
                  TypeScript, and serverless backends.
                  <br /> Specialized in turning ideas into{` `}
                  <span className='font-semibold  text-gradient'>real </span>
                  products.
                </h2>
              </div>
            </div>
          </div>
          <div className='hidden md:block'>
            <Image
              alt='Dzmitry Svirin'
              src='/svirins-light.webp'
              width={192}
              height={192}
              className='rounded-full'
              priority={true}
              placeholder='blur'
              blurDataURL='data:image/webp;base64,UklGRlIDAABXRUJQVlA4WAoAAAAgAAAArQAArQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggZAEAAJAPAJ0BKq4ArgA+7XSwVKmmpSMgS3kwHYlpbuADjY4W22fPvsn7mfIBRYF49s2JNY1CtYbJ6kl/x3ag9Bq4oOepgpoYblXSaIwYas/4pv66VDdBUBR/DfyhDzKqvJJiRlVAX9+ctSuVeq46VRYrooxnnDqFlc3oPMro/RSBlrG91id0z8AA/usJ+g+LjMDH8cfFv0KoEfqWyH0o5GTpN1WctcLH/JC1tg3twjcoJUIopBjmUqzimAqgUohzYl17VDFzqirgAKO9u1M0FYFwojR1wFVQqlaUr3WEYQ7KpX/hqKSeYRVeqv/X094Vjvp7GkJ9HyOSDXVpAZ+UTSVYnkJJ+GO8jo8Q1CaueziCR2SZqKE5xCZ8bXn6DB0PYvIVRUotVnf9jBpRoiYFnSgEB5spmvuC2jxgpz0m7yeLmOoKuL9ML+1tg6FWnPGJdQ8V1mOjsY+b3bzM+SnwXoR7rqSY0AAA'
            />
          </div>
        </div>
      </div>

      <div className='flex flex-col max-w-2xl mx-auto pb-8 w-full'>
        <div className='flex flex-col'>
          <h2 className='inner-header'>In short:</h2>
          <ul className='list-inside list-[square] pt-2 pb-6 [&>*]:py-[0.1rem]'>
            <li className='text-gray-400 md:text-lg'>
              10+ years of building products for clients across several
              countries;
            </li>
            <li className='text-gray-400 md:text-lg'>
              currently working with regular clients, but open to new
              opportunities;
            </li>
            <li className='text-gray-400 md:text-lg'>
              I live in Batumi{' '}
              <span role='img' aria-label='wave'>
                🌊
              </span>
              <span role='img' aria-label='sun'>
                🔆
              </span>
              <span role='img' aria-label='georgia flag'>
                🇬🇪
              </span>{' '}
              and enjoy swimming, mountains and good movies;
            </li>
          </ul>
          <h2 className='inner-header'>My values:</h2>
          <ul className='list-inside  list-[square] pt-2 pb-6 [&>*]:py-[0.1rem]'>
            <li className='text-gray-400 md:text-lg'>
              consistency over speed;
            </li>
            <li className='text-gray-400 md:text-lg'>
              honesty, reliability, responsibility;
            </li>
            <li className='text-gray-400 md:text-lg'>
              keep coding standards and best practices;
            </li>
            <li className='text-gray-400 md:text-lg'>
              be curious, learn iteratively;
            </li>
          </ul>
          <h2 className='inner-header mb-4'>Technologies I use frequently:</h2>
          <MyStack />
          {totalHours > 8 && (
            <WakaStats languages={languages} totalHours={totalHours} />
          )}
          <h2 className='inner-header'>Get in touch:</h2>
          <ul className='list-inside  list-[square] pt-2 pb-6 [&>*]:py-[0.1rem]'>
            <li className='text-gray-400 md:text-lg'>
              Twitter:{' '}
              <a
                className=' text-gray-300  link-underline link-underline-gradient'
                href='https://twitter.com/svirins'
              >
                @svirins
              </a>
            </li>
            <li className='text-gray-400 md:text-lg'>
              GitHub:{' '}
              <a
                className=' text-gray-300  link-underline link-underline-gradient'
                href='https://github.com/svirins'
              >
                @svirins
              </a>
            </li>
            <li className='text-gray-400 md:text-lg'>
              Mail:{' '}
              <a
                className='text-gray-300  link-underline link-underline-gradient'
                href='mailto:svirins@gmail.com'
              >
                svirins@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <p className='mt-2'>
          <TypewriterEffect />
        </p>
      </div>
    </>
  );
}

export default IndexPage;
