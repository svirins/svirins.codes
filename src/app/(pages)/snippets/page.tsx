import { getContent } from '@/app/lib/getContent'
import Image from 'next/image'
import Link from 'next/link'

export default async function Snippets() {
  const snippets = getContent('snippets')

  return (
    <section className="flex flex-col mx-auto w-full">
      <h1 className="mb-4 text-3xl font-bold tracking-tight capsize md:text-5xl">Code Snippets</h1>
      <h2 className="text-[22px] md:text-2xl tracking-tight font-normal">
        Some{' '}
        <span role="image" aria-label="random">
          🎲
        </span>{' '}
        stuff I&apos;ve found useful and want to share.
      </h2>
      <div className="pb-16 mt-4 md:mt-10">
        <div className="grid grid-cols-1 divide-y divide-gray-300/25">
          {snippets.length ? (
            snippets.map((snippet) => (
              <div key={snippet.slug} className="w-full py-4">
                <div className="p-4 w-full border border-gray-700 rounded  transition-all   hover:border-active/50 dark:hover:border-active/50 duration-150 ease-in-out [&>h3]:  [&>h3]:hover:text-active">
                  <div className="pb-2 float-right ml-4 origin-centers pr-2 pt-2">
                    <Image
                      src={snippet.metadata.coverImage}
                      alt={snippet.metadata.title}
                      className="w-8 h-8 md:w-10"
                    />
                  </div>
                  <Link
                    href={`/snippets/${snippet.slug}`}
                    className=" w-full  duration-150 ease-in-out py-4"
                  >
                    <h3 className="text-xl md:text-2xl font-medium text-left  hover:text-active">
                      {snippet.metadata.title}
                    </h3>
                  </Link>
                  <p className="text-gray-400 md:text-lg">{snippet.metadata.summary}</p>
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
