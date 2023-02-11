import { IPost } from 'lib/sanity-api';
import Link from 'next/link';

import { Tags } from 'components/Tags';

export default function PostPreview({
  slug,
  title,
  excerpt,
  tags
}: Partial<IPost>) {
  return (
    <div className='w-full py-4 text-left'>
      {/* <Tags tags={tags!} /> */}
      <Link
        href={`/blog/${slug}`}
        className='link-underline link-underline-gradient text-xl md:text-2xl font-medium text-gray-100'
      >
        {title}
      </Link>
      <p className='text-gray-400 md:text-lg'>{excerpt}</p>
    </div>
  );
}
