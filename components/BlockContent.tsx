import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { CodeBlock } from 'components/CodeBlock';
import { InlineImage } from 'components/InineImage';
import { MessageBox } from 'components/MessageBox';
import type { PortableTextBlock } from '@sanity/types';
import type { SanityAssetExtended } from 'lib/sanity-api';

const BlockContent = ({ section }: { section: PortableTextBlock }) => {
  return (
    <PortableText
      value={section}
      onMissingComponent={false}
      components={{
        types: {
          image: ({ value }: { value: SanityAssetExtended }) =>
            InlineImage(value),
          code: ({ value }) => <CodeBlock value={value} />,
          messageBox: ({ value }) => <MessageBox value={value} />
        },
        list: {
          bullet: ({ children }) => <ul>{children}</ul>,
          number: ({ children }) => <ol>{children}</ol>
        },
        listItem: {
          bullet: ({ children }) => (
            <li style={{ listStyleType: 'square' }}>{children}</li>
          ),
          number: ({ children }) => (
            <li style={{ listStyleType: 'decimal' }}>{children}</li>
          )
        },
        marks: {
          internalLink: ({ children, value }) => {
            const { slug = {}, type } = value;
            const href = type === 'post' ? `/blog/${slug}` : `/snippet/${slug}`;
            return (
              <Link
                className='link-underline link-underline-gradient'
                href={href}
              >
                {children}
              </Link>
            );
          },
          externalLink: ({ children, value }) => {
            const { slug = {}, blank = false } = value;
            return (
              <a
                className='link-underline link-underline-gradient'
                href={slug.current}
                target={blank ? '_blank' : '_self'}
                rel='norefferer noreferrer'
              >
                {children}
              </a>
            );
          },
          italic: ({ children }) => <i className='font-medium'>{children}</i>,
          em: ({ children }) => <em>{children}</em>,
          highlight: ({ children }) => (
            <span className='underline underline-offset-2 bg-code-pink'>
              {children}
            </span>
          )
        },
        block: {
          h1: ({ children, value }) => (
            <h1 id={`h${value._key}`}>
              <a
                href={`#${value._key}`}
                aria-hidden='true'
                tabIndex={-1}
                className='anchor'
              ></a>
              {children}
            </h1>
          ),
          h2: ({ children, value }) => (
            <h2 id={`h${value._key}`}>
              <a
                href={`#${value._key}`}
                aria-hidden='true'
                tabIndex={-1}
                className='anchor'
              ></a>
              {children}
            </h2>
          ),
          h3: ({ children, value }) => (
            <h3 id={`h${value._key}`}>
              <a
                href={`#${value._key}`}
                aria-hidden='true'
                tabIndex={-1}
                className='anchor'
              ></a>
              {children}
            </h3>
          ),
          h4: ({ children, value }) => (
            <h4 id={`h${value._key}`}>
              <a
                href={`#${value._key}`}
                aria-hidden='true'
                tabIndex={-1}
                className='anchor'
              ></a>
              {children}
            </h4>
          ),
          blockquote: ({ children }) => (
            <div className='py-1'>
              <blockquote className='flex'>
                <p className='pl-1 font-medium'>{children}</p>
              </blockquote>
            </div>
          ),
          normal: ({ children }) => <p className='mt-1'>{children}</p>
        }
      }}
    />
  );
};

export default BlockContent;
