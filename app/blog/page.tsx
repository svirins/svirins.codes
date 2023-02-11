// import { useState } from 'react';
import { getPosts } from 'lib/sanity-api';
import PostPreview from 'components/PostPreview';

export default async function Blog() {
  const posts = await getPosts();
  // const [searchValue, setSearchValue] = useState('');
  // // const filteredBlogPosts = posts.filter((post) =>
  // //   post.title.toLowerCase().includes(searchValue.toLowerCase())
  // // );
  return (
    <div className='flex flex-col  max-w-2xl mx-auto w-full'>
      <div className='flex flex-col mb-4'>
        <h1 className='mb-4 text-3xl font-bold tracking-tight capsize  md:text-5xl text-gray-100'>
          Blog
        </h1>
        <h2 className='text-[22px] md:text-2xl tracking-tight text-gray-100 font-normal'>
          Posts about code, dev life and{' '}
          <span className='font-semibold  full-stack'>various</span>{' '}
          <span role='image' aria-label='technomagical'>
            ⚗️
          </span>{' '}
          things.
        </h2>
      </div>
      <hr className='w-full max-w-2xl mx-auto border-1 border-gray-600 mt-4' />

      {/* <div className="relative w-full mt-4 mb-2">
        <input
          aria-label="Search articles"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search articles by title"
          className="block w-full px-4 py-2 text-gray-900 bg-gray-50 border border-gray-200 rounded-md dark:border-gray-700  dark:bg-gray-800 dark:text-gray-100 focus:border-active/80 focus-visible:ring-1 focus:ring-active/75 focus:outline-none md:text-lg"
        />
        <svg
          className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div> */}
      <div className='grid grid-cols-1 divide-y divide-gray-600'>
        {posts.length ? (
          posts.map((post) => (
            <PostPreview
              key={post!.title}
              slug={post!.slug}
              title={post!.title}
              excerpt={post!.excerpt}
              tags={post!.tags}
            />
          ))
        ) : (
          <p className='text-gray-400 italic text-lg'>No results found</p>
        )}
      </div>
    </div>
  );
}
