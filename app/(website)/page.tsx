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
        <div className='md:grid md:grid-cols-5 pb-2'>
          <div className='md:col-span-4 '>
            <div className='flex flex-col  max-w-2xl mx-auto w-full'>
              <div className='flex flex-col items-start'>
                <h1 className='page-header'>
                  Hi, I&apos;m <span className='text-active'>Dzmitry</span>
                </h1>
                <h2 className='text-gray-50 md:text-lg'>
                  A Full-stack developer with a passion for the React ecosystem,
                  TypeScript, and serverless backends. Specialized in turning
                  <span className='font-semibold  text-gradient'>
                    {' '}
                    ideas{' '}
                  </span>{' '}
                  into{' '}
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
              quality='100'
              className='rounded-full'
              priority={true}
              placeholder='blur'
            />
          </div>
        </div>
      </div>

      <div className='flex flex-col max-w-2xl mx-auto pb-8 w-full'>
        <div className='flex flex-col'>
          <h2 className='inner-header'>In short:</h2>
          <ul className='u-list'>
            <li className='common-text'>
              10+ years of building products for clients across several
              countries;
            </li>
            <li className='common-text'>
              currently working with regular clients, but open to new
              opportunities;
            </li>
            <li className='common-text'>
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
          <ul className='list-inside  list-[square] pt-2 pb-4 [&>*]:py-[0.1rem]'>
            <li className='common-text'>consistency over speed;</li>
            <li className='common-text'>
              honesty, reliability, responsibility;
            </li>
            <li className='common-text'>
              keep coding standards and best practices;
            </li>
            <li className='common-text'>be curious, learn iteratively;</li>
          </ul>
          <h2 className='inner-header mb-4'>Technologies I use frequently:</h2>
          <MyStack />
          {totalHours > 8 && (
            <WakaStats languages={languages} totalHours={totalHours} />
          )}
          <h2 className='inner-header pt-2'>Get in touch:</h2>
          <ul className='list-inside  list-[square] pt-2 pb-4 [&>*]:py-[0.1rem]'>
            <li className='common-text'>
              Twitter:{' '}
              <a
                className=' text-gray-300  link-underline link-underline-gradient'
                href='https://twitter.com/svirins'
              >
                @svirins
              </a>
            </li>
            <li className='common-text'>
              GitHub:{' '}
              <a
                className=' text-gray-300  link-underline link-underline-gradient'
                href='https://github.com/svirins'
              >
                @svirins
              </a>
            </li>
            <li className='common-text'>
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
