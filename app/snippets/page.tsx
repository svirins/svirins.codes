import SnippetPreview from 'components/SnippetPreview';
import { getSnippets } from 'lib/sanity-api';

export default async function Snippets() {
  const snippets = await getSnippets();
  return (
    <div className="flex flex-col  max-w-2xl mx-auto pb-16">
      <h1 className="mb-4 text-3xl font-bold capsize tracking-tight text-gray-900 md:text-5xl dark:text-gray-100">
        Code Snippets
      </h1>
      <p className="text-gray-900 font-semibold dark:text-gray-100 text-base md:text-lg mb-4 mt-2">
        Some{' '}
        <span role="image" aria-label="random">
          🎲
        </span>{' '}
        stuff &lsquo;ve found useful and want to share.
      </p>
      <div className="grid w-full grid-cols-1 gap-4 my-2 mt-2">
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
