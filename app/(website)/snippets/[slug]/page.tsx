import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { font_mono } from 'fonts';
import BlockContent from 'components/BlockContent';
import { getSnippet, getSnippetSlugs } from 'lib/sanity-api';
import { SnippetIcon } from 'components/Icons';
import Balancer from 'react-wrap-balancer';

export async function generateStaticParams() {
  const paths = await getSnippetSlugs();
  return paths.map((slug) => ({ slug: slug }));
}

export async function generateMetadata({
  params
}: {
  params: any;
}): Promise<Metadata | undefined> {
  const snippet = await getSnippet(params.slug);
  if (!snippet) {
    return;
  }
  // todo: add og generation logic
  const {
    title,
    date: publishedTime,
    description: description,
    slug
  } = snippet;

  const ogImage = 'https://www.svirins.codes/social-banner.webp';
  // ? `https://svirins.codes${image}`
  // : `https://svirins.codes/api/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://svirins.codes/snippets/${slug}`,
      images: [
        {
          url: ogImage
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage]
    }
  };
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
    <article className='container justify-center items-start pb-4'>
      <div className={font_mono.variable}>
        <div className='flex justify-between w-full'>
          <div>
            <h1 className='page-header'>
              <Balancer>{snippet.title}</Balancer>
            </h1>
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
