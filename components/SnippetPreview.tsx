import Link from 'next/link';
import { SnippetIcon } from 'components/Icons';
import { ISnippet } from 'lib/sanity-api';

export default function SnippetPreview({
  title,
  description,
  slug,
  iconTitle,
  ...rest
}: Partial<ISnippet>) {
  return (
    <div className='p-4 w-full border border-gray-400 dark:border-gray-700 rounded'>
      <div className='pb-2 float-right  scale-125 md:scale-150 ml-4 origin-centers pr-2 pt-2'>
        <SnippetIcon iconTitle={iconTitle!} />
      </div>
      <Link
        href={`/snippets/${slug}`}
        className='link-underline link-underline-gradient text-xl md:text-2xl font-medium  text-gray-900   dark:text-gray-100'
      >
        {title}
      </Link>
      <p className='text-gray-700 dark:text-gray-400 pt-2  md:text-lg'>
        {description}
      </p>
    </div>
  );
}
