import { ArticleJsonLd } from 'next-seo';
import { notFound } from 'next/navigation';
import { font_mono } from 'fonts';
import BlockContent from 'components/BlockContent';
import { getSnippet, getSnippetSlugs } from 'lib/sanity-api';
import { SnippetIcon } from 'components/Icons';

export async function generateStaticParams() {
  const paths = await getSnippetSlugs();
  return paths.map((slug) => ({ slug: slug }));
}

export default async function SnippetsPage({
  params
}: {
  params: {
    slug: string;
  };
}) {
  const snippet = await getSnippet(params.slug);
  if (!snippet) {
    return notFound();
  }
  return (
    <article className='container justify-center items-start'>
      <div className={font_mono.variable}>
        <ArticleJsonLd
          useAppDir={true}
          type='Article'
          url='https://example.com/blog'
          title={`${snippet.title} Dzmitry Svirin`}
          authorName='Dzmitry Svirin'
          description='A collection of code snippets – including serverless functions, Node.js scripts, and CSS tricks'
          images={[]}
          datePublished={''}
        />
        <div className='flex justify-between w-full'>
          <div>
            <h1 className='page-header'>{snippet.title}</h1>
            <p className='py-2 common-text'>{snippet.description}</p>
          </div>
          <div className='mt-2 md:mt-7'>
            <SnippetIcon iconTitle={snippet.iconTitle} />
          </div>
        </div>
        <div className='prose prose-invert   max-w-2xl  w-full md:prose-lg'>
          {snippet.body.map((section) => {
            if (!section || Object.keys(section).length === 0) {
              return null;
            }

            return <BlockContent key={section._key} section={section} />;
          })}
        </div>
      </div>
    </article>
  );
}
