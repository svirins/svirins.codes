import SnippetPreview from 'components/SnippetPreview';
import { getSnippets } from 'lib/sanity-api';

export default async function Snippets() {
  const snippets = await getSnippets();
  return (
    <div className='flex flex-col  max-w-2xl mx-auto w-full'>
      <div className='flex flex-col mb-4'>
        <h1 className='mb-4 text-3xl font-bold tracking-tight capsize  md:text-5xl text-gray-100'>
          Code Snippets
        </h1>
        <h2 className='text-[22px] md:text-2xl tracking-tight text-gray-100 font-normal'>
          Some{' '}
          <span role='image' aria-label='random'>
            🎲
          </span>{' '}
          <span className='font-semibold  full-stack'>stuff</span> I&lsquo;ve
          found useful and want to share.
        </h2>
      </div>
      <hr className='w-full max-w-2xl mx-auto border-1 border-gray-600 mt-4' />
      <div className='grid grid-cols-1 divide-y divide-gray-600'>
        {snippets.length > 0 ? (
          snippets.map((snippet) => (
            <SnippetPreview
              key={snippet.slug}
              title={snippet.title}
              slug={snippet.slug}
              iconTitle={snippet.iconTitle}
              description={snippet.description}
            />
          ))
        ) : (
          <p className='text-gray-400 italic text-lg'>No results found</p>
        )}
      </div>
    </div>
  );
}
