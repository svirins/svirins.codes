import { MDXRemote } from 'next-mdx-remote';
import { IconContext } from 'react-icons';

import StackIcon from '../../ui/StackIcon';
import { PageProps } from '../../../typings';
import components from '../../ui/MDXComponents';
import { mdxToHtml } from '../../../lib/mdx';
import { getSnippet, getSnippetSlugs } from '../../../lib/sanity-api';

export default async function SnippetLayout({ params }: PageProps) {
  const snippet = await getSnippet(params.slug);

  if (!snippet) {
    return { notFound: true };
  }

  const { html } = await mdxToHtml(snippet.content);
  return (
    <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
      <div className="flex justify-between w-full">
        <div>
          <h1 className="font-bold capsize text-3xl  md:text-5xl tracking-tight mb-4 text-gray-900 dark:text-gray-100">
            {snippet.title}
          </h1>
          <p className="text-gray-800 dark:text-gray-200 py-2 md:text-lg">
            {snippet.description}
          </p>
        </div>
        <div className="mt-2 md:mt-6 scale-125 md:scale-150 ml-4 origin-center">
          <IconContext.Provider
            value={{
              className: 'w-9 h-9 fill-gray-900  dark:fill-gray-100'
            }}
          >
            <StackIcon iconTitle={snippet.iconTitle!} />
          </IconContext.Provider>
        </div>
      </div>
      {/* <hr className="w-full border-1 max-w-2xl border-gray-200 dark:border-gray-800" /> */}

      <div className="prose dark:prose-invert prose-slate  max-w-2xl  w-full md:prose-lg">
        <IconContext.Provider
          value={{
            className: 'w-7 h-7 md:w-8 md:h-8 fill-gray-900  dark:fill-gray-100'
          }}
        >
          <MDXRemote
            {...html!}
            components={
              {
                ...components
              } as any
            }
          />
        </IconContext.Provider>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  const paths = await getSnippetSlugs();
  return paths.map((slug) => ({
    slug: slug
  }));
}
