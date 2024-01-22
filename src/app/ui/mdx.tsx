import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getHighlighter } from 'shikiji'

import { getBase64 } from '@/app/lib/getBase64'

function CustomLink(props: any) {
  const href = props.href

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

async function RoundedImage(props: any) {
  // const base64 = await getBase64(props.src)

  return (
    <figure>
      <Image
        alt={props.alt}
        className="rounded-lg"
        // blurDataURL={base64}
        {...props}
      />
      {props.alt && <figcaption>{props.alt}</figcaption>}
    </figure>
  )
}

function Callout(props: any) {
  return (
    <div className="text-grey-200 mb-8 flex items-center rounded-lg border border-gray-800 bg-gray-900 p-1 px-4 py-3 text-sm md:text-base">
      <div className="mr-4 flex items-center text-2xl">{props.emoji}</div>
      <div className="callout w-full">{props.children}</div>
    </div>
  )
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level: number) {
  // eslint-disable-next-line react/display-name
  return ({ children }: { children: React.ReactNode & string }) => {
    let slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor'
        })
      ],
      children
    )
  }
}

async function Code(codeProps: any) {
  const { children, ...props } = codeProps
  const lang = props?.className
    ? props?.className.substring(props?.className.indexOf('-') + 1)
    : ''
  if (!lang) {
    return (
      <code
        className="rounded-md border border-gray-800 bg-gray-900 px-1 py-0.5 text-base text-gray-200 md:text-lg"
        {...props}
      >
        {children}
      </code>
    )
  }

  const highlighter = await getHighlighter({
    langs: ['shell', 'ts', 'jsx', 'json'],
    themes: ['aurora-x']
  })
  let codeHTML = highlighter.codeToHtml(children, {
    lang,
    theme: 'aurora-x'
  })
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

export const customComponents = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  Callout,
  code: Code
}

export function MDXContent(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...customComponents, ...(props.components ?? {}) }}
    />
  )
}
