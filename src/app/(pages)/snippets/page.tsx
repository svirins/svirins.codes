import { getContent } from '@/app/lib/getContent'
import Image from 'next/image'
import Link from 'next/link'

export default async function Snippets() {
  const snippets = getContent('snippets').sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  })

  return (
    <section className="mb-24">
      <h1>Code Snippets</h1>
      <h2>
        Some{' '}
        <span role="image" aria-label="random">
          🎲
        </span>{' '}
        stuff I&apos;ve found useful and want to share
      </h2>
      <hr />
      <div className="flex flex-col">
        {snippets.length ? (
          snippets.map((snippet) => (
            <div key={snippet.slug}>
              <div className="float-right ml-4 origin-centers">
                <Image
                  src={snippet.metadata.coverImage}
                  alt={snippet.metadata.title}
                  className="w-12 h-12 md:w-16"
                />
              </div>
              <Link href={`/snippets/${snippet.slug}`}>
                <h3 className=" hover:text-active duration-150 ease-in-out">
                  {snippet.metadata.title}
                </h3>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-400 italic text-lg">No snippets yet</p>
        )}
      </div>
    </section>
  )
}
