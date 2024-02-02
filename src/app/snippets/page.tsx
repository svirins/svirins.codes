import Link from 'next/link'

import { getContent } from '@/lib/getContent'

export default async function Snippets() {
  const snippets = getContent('snippets').sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    )
  })

  return (
    <section className="mb-24">
      <h1>Code Snippets</h1>
      <p>
        Some{' '}
        <span role="image" aria-label="random">
          🎲
        </span>{' '}
        stuff I&apos;ve found useful and want to share
      </p>
      <hr />
      <div>
        {snippets.length ? (
          snippets.map((snippet) => (
            <div key={snippet.slug}>
              <Link href={`/snippets/${snippet.slug}`}>
                <h2 className="link-underlined text-lg md:text-[22px] md:text-2xl tracking-tight text-gray-200 mb-2 md:mb-4 font-normal max-w-fit">
                  {snippet.metadata.title}
                </h2>
              </Link>
            </div>
          ))
        ) : (
          <p className="italic">No snippets yet</p>
        )}
      </div>
    </section>
  )
}
