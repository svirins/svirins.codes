import { notFound } from 'next/navigation';
import SnippetPreview from 'components/SnippetPreview';
import { getSnippets } from 'lib/sanity-api';

export default async function Snippets() {
  const snippets = await getSnippets();
  return (
    <div className='flex flex-col  max-w-2xl mx-auto w-full pb-8'>
      <div className='flex flex-col'>
        <h1 className='mb-4 text-3xl font-bold tracking-tight capsize  md:text-5xl text-gray-100'>
          Code Snippets
        </h1>
        <h2 className='inner-header'>
          Some{' '}
          <span role='image' aria-label='random'>
            🎲
          </span>{' '}
          <span className='font-semibold  text-gradient'>stuff</span> I&lsquo;ve
          found useful and want to share.
        </h2>
      </div>
      <hr className='w-full max-w-2xl mx-auto border-1 border-gray-600 mt-4' />
      <div className='grid grid-cols-1 divide-y divide-gray-600'>
        {snippets && snippets.length > 0
          ? snippets.map((snippet) => (
              <SnippetPreview
                key={snippet.slug}
                title={snippet.title}
                slug={snippet.slug}
                iconTitle={snippet.iconTitle}
                description={snippet.description}
              />
            ))
          : notFound()}
      </div>
    </div>
  );
}
