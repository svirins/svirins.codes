import { getContent } from '@/app/lib/getContent'
import Image from 'next/image'
import Link from 'next/link'

export default async function Snippets() {
  const snippets = getContent('snippets').sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  })

  return (
    <section className="flex flex-col mx-auto w-full  mb-24">
      <h1 className="mb-4 text-3xl font-bold tracking-tight capsize md:text-5xl">Code Snippets</h1>
      <h2 className="text-[22px] md:text-2xl tracking-tight font-normal">
        Some{' '}
        <span role="image" aria-label="random">
          🎲
        </span>{' '}
        stuff I&apos;ve found useful and want to share.
      </h2>
      <div className="mt-4 md:mt-10">
        <div className="grid grid-cols-1">
          {snippets.length ? (
            snippets.map((snippet) => (
              <div key={snippet.slug} className="w-full py-4">
                <div className="p-4 w-full">
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
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 italic text-lg">No snippets yet</p>
          )}
        </div>
      </div>
    </section>
  )
}
