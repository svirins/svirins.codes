import SnippetPreview from 'components/SnippetPreview';
import { getSnippets } from 'lib/sanity-api';

export default async function Snippets() {
  const snippets = await getSnippets();
  return (
    <div className='flex flex-col  max-w-2xl mx-auto pb-16'>
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

      <div className='grid w-full grid-cols-1 gap-4 my-2 mt-2'>
        {snippets?.length &&
          snippets?.map((snippet) => (
            <SnippetPreview
              key={snippet.slug}
              title={snippet.title}
              slug={snippet.slug}
              iconTitle={snippet.iconTitle}
              description={snippet.description}
            />
          ))}
      </div>
    </div>
  );
}
