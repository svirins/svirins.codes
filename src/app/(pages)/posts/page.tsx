import { getContent } from '@/app/lib/getContent'
import Link from 'next/link'

export default async function Posts() {
  const posts = getContent('posts').sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  })
  return (
    <section className="flex flex-col mx-auto w-full mb-24">
      <h1 className="mb-4 text-3xl font-bold tracking-tight capsize md:text-5xl">Posts</h1>
      <h2 className="text-[22px] md:text-2xl tracking-tight font-normal">
        Posts about code, dev life and various{' '}
        <span role="image" aria-label="technomagical">
          ⚗️
        </span>{' '}
        things.
      </h2>
      <div className="mt-4 md:mt-10">
        <div className="flex flex-col">
          {posts.length ? (
            posts.map((post) => (
              <div key={post.slug}>
                <div>
                  <Link
                    href={`/posts/${post.slug}`}
                    className=" w-full  duration-150 ease-in-out py-4"
                  >
                    <h3 className="text-xl md:text-2xl font-medium text-left  hover:text-active">
                      {post.metadata.title}
                    </h3>
                  </Link>
                  <p className="text-gray-400 md:text-lg">{post.metadata.summary}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 italic text-lg">No posts yet</p>
          )}
        </div>
      </div>
    </section>
  )
}
