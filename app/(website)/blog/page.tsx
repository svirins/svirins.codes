import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPosts } from 'lib/sanity-api';
import PostPreview from 'components/PostPreview';

export const metadata: Metadata = {
  title: 'Blog',
  description: ' Posts about code, dev life and other exiting things.'
};

export default async function Blog() {
  const posts = await getPosts();
  return (
    <div className='container'>
      <div className='items-flex-col pb-4'>
        <h1 className='page-header'>Blog</h1>
        <h2 className='inner-header'>
          Posts about code, dev life and{' '}
          <span className=' text-gradient'>various</span>{' '}
          <span role='image' aria-label='technomagical'>
            🛸
          </span>{' '}
          other exiting things.
        </h2>
      </div>
      <hr className='horizontal-divider' />
      <div className='items-grid'>
        {posts && posts.length > 0
          ? posts.map((post) => (
              <PostPreview
                key={post.title}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                tags={post.tags}
              />
            ))
          : notFound()}
      </div>
    </div>
  );
}
