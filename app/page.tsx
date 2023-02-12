// import { wrapAppDirComponentWithSentry } from '@sentry/nextjs';
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
                <h1 className='text-3xl md:text-5xl tracking-tight mb-4 capsize font-bold text-gray-100'>
                  Hi, I&apos;m <span className='text-active'>Dzmitry</span>
                </h1>
                <h2 className='text-[22px] md:text-2xl tracking-tight text-gray-100 font-normal'>
                  I specialize in turning ideas into{` `}
                  <span className='font-semibold  full-stack'>real-life </span>
                  products. Full-stack developer with a passion for the React
                  ecosystem, TypeScript, and serverless backends.
                </h2>
              </div>
            </div>
          </div>
          <div className='hidden md:block'>
            <Image
              alt='Dzmitry Svirin'
              src='/svirins.webp'
              width={256}
              height={256}
              className='rounded-xl'
              priority={true}
              placeholder='blur'
              blurDataURL='data:image/webp;base64,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'
            />
          </div>
        </div>
      </div>

      <div className='flex flex-col max-w-2xl mx-auto pb-8 w-full'>
        <div className='flex flex-col'>
          <h2 className='text-xl md:text-2xl mt-4 tracking-tight text-gray-200 font-normal'>
            In short:
          </h2>
          <ul className='list-inside list-[square] pt-2 pb-6 [&>*]:py-[0.1rem]'>
            <li className='text-gray-400 md:text-lg'>
              {' '}
              Full-stack developer with a passion for the React ecosystem,
              TypeScript, and serverless backends.
            </li>
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
          <h2 className='text-xl md:text-2xl mt-2 tracking-tight text-gray-200 font-normal'>
            My values:
          </h2>
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
          <h2 className='text-xl md:text-2xl mb-4 mt-2 tracking-tight text-gray-200 font-normal '>
            Technologies I use frequently:
          </h2>
          <MyStack />
          {totalHours > 8 && (
            <WakaStats languages={languages} totalHours={totalHours} />
          )}
          <h2 className='text-xl md:text-2xl mt-8 tracking-tight text-gray-200 font-normal'>
            Get in touch:
          </h2>
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

// export default wrapAppDirComponentWithSentry(IndexPage);
export default IndexPage;
