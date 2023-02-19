import { notFound } from 'next/navigation';
import SnippetPreview from 'components/SnippetPreview';
import { getSnippets } from 'lib/sanity-api';

export default async function Snippets() {
  const snippets = await getSnippets();
  return (
    <div className='container'>
      <div className='items-flex-col pb-4'>
        <h1 className='page-header'>Code Snippets</h1>
        <h2 className='inner-header'>
          Some random{' '}
          <span role='image' aria-label='random'>
            🎲
          </span>{' '}
          <span className='text-gradient'>stuff</span> I&lsquo;ve found useful
          and want to share.
        </h2>
      </div>
      <hr className='horizontal-divider' />
      <div className='items-grid'>
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
