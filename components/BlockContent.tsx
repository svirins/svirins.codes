import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import type { BlockContent } from 'lib/sanity-api';
import { urlForImage } from 'lib/sanity-client';
import { CodeBlock } from '@/components/CodeBlock';

const BlockContent = ({ section }: { section: BlockContent }) => {
  console.log('text is', section);

  return (
    <PortableText
      value={section}
      onMissingComponent={false}
      components={{
        types: {
          image: ({ value }) => (
            <Image
              src={urlForImage(value).url()}
              width={672}
              height={350}
              alt='just text'
              className='rounded-lg  h-auto'
            />
          )
          // code: ({ value }) => <CodeBlock value={value} />
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
