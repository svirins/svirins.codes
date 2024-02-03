import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getHighlighter } from 'shikiji'

import { getBase64 } from '@/lib/getBase64'

function CustomLink(props: any) {
  const href = props.href as string

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
  const base64 = await getBase64(props.src)
  return (
    <figure>
      <Image
        alt={props.alt}
        className="rounded-lg"
        blurDataURL={base64}
        {...props}
      />
      {props.alt && <figcaption>{props.alt}</figcaption>}
    </figure>
  )
}

function Callout(props: any) {
  return (
    <div className="my-8 flex items-center rounded-lg border border-gray-800 bg-gray-900 bg-opacity-80 pl-4 pr-8 py-2 ">
      <div className="mr-4 flex items-center text-3xl md:text-5xl">
        {props.emoji}
      </div>
      <div className="text-sm md:text-[16px] w-full">
        {props.children}
      </div>
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
    themes: ['aurora-x', 'material-theme-ocean']
  })
  let codeHTML = highlighter.codeToHtml(children, {
    lang,
    theme: 'material-theme-ocean'
  })
  return (
    <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
  )
}

export const customComponents = {
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
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
      components={{
        ...customComponents,
        ...(props.components ?? {})
      }}
    />
  )
}
