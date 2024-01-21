import Link from 'next/link'

import { getContent } from '@/app/lib/getContent'

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
      <h3>
        Posts about code, dev life and various{' '}
        <span role="image" aria-label="technomagical">
          ⚗️
        </span>{' '}
        things.
      </h3>
      <hr />
      <div className="flex flex-col">
        {posts.length ? (
          posts.map((post) => (
            <div key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
                <h3 className="heading-link">{post.metadata.title}</h3>
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
