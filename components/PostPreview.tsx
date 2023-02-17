import type { IPost } from 'lib/sanity-api';
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
      <Tags tags={tags!} />
      <Link
        href={`/blog/${slug}`}
        className='link-underline link-underline-gradient text-xl md:text-2xl text-gray-100'
      >
        {title}
      </Link>
      <p className='common-text'>{excerpt}</p>
    </div>
  );
}
