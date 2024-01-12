import { getContent } from '@/app/lib/getContent'
import { SearchBar } from '@/app/ui/search-bar'
import Link from 'next/link'

type Props = {
  params: {}
  searchParams: { title?: string }
}

const isEmptyObject = (obj: Object) => {
  return JSON.stringify(obj) === '{}'
}

export default async function Posts(props: Props) {
  const searchParams = props.searchParams
  const queryString = isEmptyObject(searchParams) ? '*' : `${searchParams.title}*`
  // const posts = await searchPosts(queryString);
  // TODO: implement sort by date
  const posts = getContent('posts')
  return (
    <section className="flex flex-col mx-auto w-full">
      <h1 className="mb-4 text-3xl font-bold tracking-tight capsize md:text-5xl">Posts</h1>
      <h2 className="text-[22px] md:text-2xl tracking-tight font-normal">
        Posts about code, dev life and various{' '}
        <span role="image" aria-label="technomagical">
          ⚗️
        </span>{' '}
        things.
      </h2>
      <div className="pb-16 mt-4 md:mt-10">
        <SearchBar />
        <div className="grid grid-cols-1 divide-y divide-gray-300/25">
          {posts.length ? (
            posts.map((post) => (
              <div key={post.slug} className="w-full py-4">
                <div className="w-full">
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
            <p className="text-gray-400 italic text-lg">No results found</p>
          )}
        </div>
      </div>
    </section>
  )
}
