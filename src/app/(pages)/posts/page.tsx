import { getContent } from '@/app/lib/getContent'
import Link from 'next/link'

export default async function Posts() {
  const posts = getContent('posts').sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  })
  return (
    <section className="mb-24">
      <h1>Posts</h1>
      <h2>
        Posts about code, dev life and various{' '}
        <span role="image" aria-label="technomagical">
          ⚗️
        </span>{' '}
        things.
      </h2>
      <hr />
      <div className="flex flex-col">
        {posts.length ? (
          posts.map((post) => (
            <div key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
                <h3 className="hover:text-active duration-150 ease-in-out">
                  {post.metadata.title}
                </h3>
              </Link>
              <p className="text-gray-400 md:text-lg">{post.metadata.summary}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400 italic text-lg">No posts yet</p>
        )}
      </div>
    </section>
  )
}
