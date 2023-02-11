import Link from 'next/link';
import { SnippetIcon } from 'components/Icons';
import { ISnippet } from 'lib/sanity-api';

export default function SnippetPreview({
  title,
  description,
  slug,
  iconTitle
}: Partial<ISnippet>) {
  return (
    <div className='w-full py-4 text-left'>
      <div className='float-right  scale-125 ml-4 origin-centers pr-2 pt-1 md:pt-2'>
        <SnippetIcon iconTitle={iconTitle!} />
      </div>
      <Link
        href={`/snippets/${slug}`}
        className='link-underline link-underline-gradient text-xl md:text-2xl font-medium  text-gray-100'
      >
        {title}
      </Link>
      <p className='text-gray-400  md:text-lg'>{description}</p>
    </div>
  );
}
