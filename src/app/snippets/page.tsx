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
        </span>
        stuff I&apos;ve found useful and want to share
      </p>
      <hr />
      <div className="flex flex-col">
        {snippets.length ? (
          snippets.map((snippet) => (
            <div key={snippet.slug} className="flex flex-row">
              <Link href={`/snippets/${snippet.slug}`}>
                <h4 className="heading-link flex-1">
                  {snippet.metadata.title}
                </h4>
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
