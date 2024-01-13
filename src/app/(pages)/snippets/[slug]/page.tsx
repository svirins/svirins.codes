import { getContent } from '@/app/lib/getContent'
import { isEmptyObject } from '@/app/lib/utils'
import { MDXContent } from '@/app/ui/mdx'
import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Balancer from 'react-wrap-balancer'
// we consider it's always a *.svg for an image
export async function generateMetadata({
  params,
}: {
  params: {
    slug: string
  }
}): Promise<Metadata | undefined> {
  let snippet = getContent('snippets').find((snippet) => snippet.slug === params.slug)
  if (!snippet) {
    return
  }
  process.env.SITE_URL
  const siteUrl =
    process.env.NODE_ENV === 'production' ? process.env.SITE_URL : 'http://localhost:3000'
  let { title, publishedAt: publishedTime, summary: description } = snippet.metadata
  let ogImage = `${siteUrl}/api/og?title=${title}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${siteUrl}/snippets/${snippet.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function SnippetsPage({
  params,
}: {
  params: {
    slug: string
    searchParams: URLSearchParams
  }
}) {
  const snippet = getContent('snippets').find((snippet) => snippet.slug === params.slug)
  if (!snippet) notFound()
  
  return (
    <article className="flex flex-col items-start justify-center w-full  mx-auto mb-12">
      <div className="flex justify-between w-full">
        <h1 className="mb-4 text-3xl font-bold  tracking-tight capsize   md:text-5xl">
          <Balancer ratio={0.85}>{snippet?.metadata.title}</Balancer>
        </h1>
        {snippet?.metadata.coverImage && (
          <div className="ml-8 my-2 origin-center">
            <Image
              src={snippet.metadata.coverImage}
              alt={snippet.metadata.title}
              className="w-[30px] h-[30px] md:w-[48px] md:h-[48px]"
            />
          </div>
        )}
      </div>
      <h2 className="text-[22px] md:text-2xl tracking-tight font-normal">
        {snippet?.metadata.summary}
      </h2>
      {snippet?.content && (
        <div className="w-full  mt-4 prose  prose-invert  md:prose-lg">
          <MDXContent source={snippet.content} />
        </div>
      )}
    </article>
  )
}

export async function generateStaticParams() {
  return getContent('snippets').map((snippet) => ({
    slug: snippet.slug,
  }))
}
