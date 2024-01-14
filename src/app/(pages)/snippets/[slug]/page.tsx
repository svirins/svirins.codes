import { getContent } from '@/app/lib/getContent'
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
  let { title, publishedAt: publishedTime, summary: description } = snippet.metadata
  let ogImage = `${process.env.NEXT_PUBLIC_URL}/api/og?title=${title}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${process.env.NEXT_PUBLIC_URL}/snippets/${snippet.slug}`,
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
    <article className="mb-24">
      <div className="flex flew-row">
        <div className="flex-1">
          <h1>
            <Balancer ratio={0.85}>{snippet?.metadata.title}</Balancer>
          </h1>
        </div>
        {snippet?.metadata.coverImage && (
          <div className="flex-none pl-8">
            <Image
              src={snippet.metadata.coverImage}
              alt={snippet.metadata.title}
              className="w-[30px] h-[30px] md:w-[48px] md:h-[48px]"
            />
          </div>
        )}
      </div>
      {snippet?.content && (
        <div className="prose  prose-invert  md:prose-lg">
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
