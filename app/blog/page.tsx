import PostPreview from '../ui/PostPreview';
import { getPosts } from '../../lib/sanity-api';

//TODO: Implement search (NextSearch)
export default async function BlogList() {
  const posts = await getPosts();
  return (
    <>
      <div className="flex flex-col max-w-2xl mx-auto w-full">
        <div className="flex flex-col">
          <h1 className="mb-4 text-3xl font-bold tracking-tight capsize text-gray-900 md:text-5xl dark:text-gray-100">
            Blog
          </h1>
          <p className="text-gray-900 font-semibold  dark:text-gray-100 text-base mt-2 md:text-lg">
            Posts about code, dev life and various{' '}
            <span role="image" aria-label="technomagical">
              ⚗️
            </span>{' '}
            things.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 divide-y divide-gray-700/25 dark:divide-gray-300/25">
        {posts.length ? (
          posts.map((post) => (
            <PostPreview
              key={post.title}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              tags={post.tags}
            />
          ))
        ) : (
          <p className=" text-gray-700 dark:text-gray-400 italic text-lg">
            No results found
          </p>
        )}
      </div>
    </>
  );
}
