import Image from 'next/image'
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
      <h3>
        Some{' '}
        <span role="image" aria-label="random">
          🎲
        </span>{' '}
        stuff I&apos;ve found useful and want to share
      </h3>
      <hr />
      <div className="flex flex-col">
        {snippets.length ? (
          snippets.map((snippet) => (
            <div key={snippet.slug} className="flex flex-row">
              <Image
                src={
                  snippet.metadata.coverImage ??
                  '/assets/svg/placeholder.svg'
                }
                alt={snippet.metadata.title}
                className="w-10 h-10 flex-none mr-4"
              />
              <Link href={`/snippets/${snippet.slug}`}>
                <h3 className="heading-link flex-1">
                  {snippet.metadata.title}
                </h3>
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
