import { getContent } from '@/app/lib/getContent'
import { formatDate } from '@/app/lib/utils'
import { MDXContent } from '@/app/ui/mdx'
import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Balancer from 'react-wrap-balancer'
import { getBase64 } from '@/app/lib/getBase64'

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string
  }
}): Promise<Metadata | undefined> {
  let post = getContent('posts').find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let { title, publishedAt: publishedTime, coverImage: image } = post?.metadata
  let ogImage = image
    ? `${process.env.NEXT_PUBLIC_URL}${image}`
    : `${process.env.NEXT_PUBLIC_URL}/api/og?title=${title}`
  const description = ''
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${process.env.NEXT_PUBLIC_URL}/posts/${post?.slug}`,
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

export async function generateStaticParams() {
  return getContent('posts').map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({
  params,
}: {
  params: { slug: string; searchParams: URLSearchParams }
}) {
  const post = getContent('posts').find((post) => post.slug === params.slug)
  if (!post) notFound()

  // const base64 = await getBase64(post?.metadata.coverImage)
  return (
    <article className="mb-24">
      <h1>
        <Balancer ratio={0.85}>{post!.metadata.title}</Balancer>
      </h1>
      {post?.metadata.coverImage && (
        <div className="my-4">
          <Image
            className="rounded-lg"
            src={post.metadata.coverImage}
            alt={post.metadata.title}
            // blurDataURL={base64 ?? undefined}
          />
        </div>
      )}
      <p className="text-xs md:text-sm lg:text-base  text-gray-400">
        {formatDate(post!.metadata.publishedAt)}
      </p>
      {post?.content && (
        <div className="prose  prose-invert  md:prose-lg">
          <MDXContent source={post.content} />
        </div>
      )}
    </article>
  )
}
