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
                <h1 className='page-header pt-6'>
                  Hi, I&apos;m <span className='text-active'>Dzmitry</span>
                </h1>
                <h2 className='inner-header pb-6'>
                  I Specialize in turning
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
              width={128}
              height={128}
              quality='100'
              className='rounded-full'
              priority={true}
              placeholder='blur'
              blurDataURL='data:image/webp;base64,UklGRjIDAABXRUJQVlA4WAoAAAAgAAAAkAAAkAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggRAEAALAOAJ0BKpEAkQA+7WivU6mlJCKk0Rw5MB2JaW7f/22MjVMD5B61/AB8CZP/IjoMUbQMm7MXmkxFr9QngBAZb+tnhpS8nFCC59PM0UIbnc4CY3YMS1/fWdzs9NbbzxSY5VBiWBjinA1H2kO5s6fGLq/u1Igqu5BssWTPNY6HwAD+6wn6D4uMwNSr/qpk3Y6OlvKe1JHACTRF+Mhy6+3GRyecK+HSChuQltUe3A0iJckMCSuhZFt+MD1dmJyfSBAxslxxU1JxLDf904KhU7Eghfc1mK8Q4VGaQ6dmFf693iOPYbuOT0L1K63s+h3PiVgDg5QW0E+BBjd3hBOdFlNldBgjGsQvjc2krnJjJ5UPqfPcb5etC55TsrVxk0khIPnCNg19S0/Kz8oT1SKDt5P1I21MGJ/e5J+GErg473J1J4yAtAgAAA=='
            />
          </div>
        </div>
      </div>

      <div className='flex flex-col max-w-2xl mx-auto pb-8 w-full'>
        <div className='flex flex-col'>
          <h2 className='inner-header'>In short:</h2>
          <ul className='u-list'>
            <li className='common-text'>
              A full-stack developer with a passion for the Next.js, TypeScript
              and serverless backends.
            </li>
            <li className='common-text'>
              10+ years of building products for customers in multiple
              countries;
            </li>
            <li className='common-text'>
              currently working with regular customers, but open to new
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
              and I like swimming, mountains and good movies;
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
                className='text-gray-300  link-underline link-underline-gradient'
                href='https://twitter.com/svirins'
              >
                @svirins
              </a>
            </li>
            <li className='common-text'>
              GitHub:{' '}
              <a
                className='text-gray-300  link-underline link-underline-gradient'
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
