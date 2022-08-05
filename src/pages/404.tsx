import Link from 'next/link';

import Container from '@/components/Container';

export default function NotFound() {
  return (
    <Container title="404 – Dzmitry Svirin">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold capsize text-3xl md:text-5xl tracking-tight mb-4 capsize text-gray-900 dark:text-gray-100">
          451 – Unavailable For Legal Reasons
        </h1>
        <p className="text-gray-700 dark:text-gray-400 mb-8 text-lg">
          Why show a generic 404 when I can make it sound mysterious? It seems
          you&apos;ve found something that used to exist, or you spelled
          something wrong. I&apos;m guessing you spelled something wrong. Can
          you double check that URL?
        </p>
        <Link href="/">
          <a className="p-1 transition-all  ease-in-out text-lg  hover:text-active duration-150  sm:p-4 w-64 font-semibold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-gray-900 dark:text-gray-100">
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
