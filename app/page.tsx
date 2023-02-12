// import { wrapAppDirComponentWithSentry } from '@sentry/nextjs';
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';
import getWakaStats from 'lib/waka-api';
import TypewriterEffect from 'components/TypewriterEffect';
import { MyStack } from 'components/Icons';
import WakaStats from 'components/WakaStats';

async function IndexPage() {
  const { languages, totalHours } = await getWakaStats();
  const { base64, img } = await getPlaiceholder('/svirins.webp');
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
              src={img}
              width={256}
              height={256}
              className='rounded-xl'
              priority={true}
              placeholder='blur'
              blurDataURL={base64}
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
