import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import type { PortableTextBlock } from '@sanity/types';

const SimpleBlockContent = ({ section }: { section: PortableTextBlock }) => {
  return (
    <PortableText
      value={section}
      onMissingComponent={false}
      components={{
        types: {},
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
          normal: ({ children }) => <p className='mt-1'>{children}</p>
        }
      }}
    />
  );
};

export default SimpleBlockContent;
