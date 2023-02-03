import { PortableText } from '@portabletext/react';
import type { BlockContent } from 'lib/sanity-api';

import { CodeBlock } from 'components/CodeBlock';
import { InlineImage } from 'components/InineImage';

const BlockContent = ({ section }: { section: BlockContent }) => {
  return (
    <PortableText
      value={section}
      onMissingComponent={false}
      components={{
        types: {
          image: ({ value }) => InlineImage(value),
          code: ({ value }) => <CodeBlock value={value} />
        },
        list: {
          bullet: ({ children }) => <ul className='mt-xl'>{children}</ul>,
          number: ({ children }) => <ol className='mt-lg'>{children}</ol>
        },
        listItem: {
          bullet: ({ children }) => (
            <li style={{ listStyleType: 'disclosure-closed' }}>{children}</li>
          ),
          number: ({ children }) => <ol className='text-lg'>{children}</ol>
        },
        marks: {
          link: ({ children, value }) => (
            <a
              className=' text-gray-800 dark:text-gray-300  font-medium link-underline link-underline-gradient'
              href={`${value.href}`}
            >
              {children}
            </a>
          ),
          italic: ({ children }) => <i className='font-medium'>{children}</i>,
          em: ({ children }) => <em>{children}</em>,
          highlight: ({ children }) => (
            <span className='underline underline-offset-2 bg-code-pink'>
              {children}
            </span>
          )
        },
        block: {
          h1: ({ children }) => <h1>{children}</h1>,
          h2: ({ children }) => <h2>{children}</h2>,
          h3: ({ children }) => <h3>{children}</h3>,
          h4: ({ children }) => <h4>{children}</h4>,
          h5: ({ children }) => <h5>{children}</h5>,
          h6: ({ children }) => <h6>{children}</h6>,
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
