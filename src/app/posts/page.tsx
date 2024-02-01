import Link from 'next/link'

import { getContent } from '@/lib/getContent'

export default async function Posts() {
  const posts = getContent('posts').sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    )
  })
  return (
    <section className="mb-24">
      <h1>Posts</h1>
      <p>
        Posts about code, dev life and various{' '}
        <span role="image" aria-label="technomagical">
          ⚗️
        </span>{' '}
        things.
      </p>
      <hr />
      <div className="flex flex-col">
        {posts.length ? (
          posts.map((post) => (
            <div key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
                <h2 className="link-underlined text-lg md:text-[22px] md:text-2xl tracking-tight text-gray-100 font-normal">
                  {post.metadata.title}
                </h2>
              </Link>
            </div>
          ))
        ) : (
          <p className="italic">No posts yet</p>
        )}
      </div>
    </section>
  )
}
