import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Balancer from 'react-wrap-balancer'

import { MDXContent } from '@/components/mdx'
import { getContent } from '@/lib/getContent'
import { formatDate } from '@/lib/utils'

export async function generateMetadata({
  params
}: {
  params: {
    slug: string
  }
}): Promise<Metadata | undefined> {
  const post = getContent('posts').find(
    (post) => post.slug === params.slug
  )
  if (!post) {
    return
  }

  const { title, publishedAt, coverImage } = post.metadata
  const ogImage = coverImage
    ? `${process.env.NEXT_PUBLIC_URL}${coverImage}`
    : `${process.env.NEXT_PUBLIC_URL}/og.png`
  const description = ''
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: publishedAt,
      url: `${process.env.NEXT_PUBLIC_URL}/posts/${post?.slug}`,
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
  }
}

export async function generateStaticParams() {
  return getContent('posts').map((post) => ({
    slug: post.slug
  }))
}

export default async function PostPage({
  params
}: {
  params: { slug: string; searchParams: URLSearchParams }
}) {
  const post = getContent('posts').find(
    (post) => post.slug === params.slug
  )
  if (!post) notFound()

  const { title, coverImage, publishedAt } = post.metadata

  return (
    <article className="mb-12 md:mb-24">
      <div className="mb-12">
        {' '}
        <h1>
          <Balancer ratio={0.85}>{title}</Balancer>
        </h1>
        {coverImage && (
          <div className="my-8">
            <Image
              className="sm:hidden md:block rounded-lg w-full h-full"
              src={coverImage}
              alt={title}
              priority
            />
          </div>
        )}
        <p className="text-xs md:text-sm lg:text-base  text-gray-400">
          {formatDate(publishedAt)}
        </p>
      </div>
      {post?.content && (
        <div className="prose prose-invert ">
          <MDXContent source={post.content} />
        </div>
      )}
    </article>
  )
}
