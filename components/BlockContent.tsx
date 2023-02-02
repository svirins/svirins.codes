import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import type { BlockContent as BlockContentType } from 'lib/sanity-api';

const BlockContent = ({ data }: { data: any }) => {
  console.log('text is', data[0].children.text);

  return (
    <PortableText
      value={data[0].children}
      components={{
        // types: {
        //   customImage: ({ value }) => (
        //     <Image data={value} width={960} height={600} />
        //   )
        // },
        marks: {
          link: ({ children, value }) => (
            <a href={`${value.href}`}>{children}</a>
          ),
          italic: ({ children }) => <i>{children}</i>
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
                <p className='pl-1 text-lg font-semibold'>{children}</p>
              </blockquote>
            </div>
          ),
          normal: ({ children }) => <p className='mt-1'>{children}</p>,
          span: ({ children }) => <span className='mt-1'>{children}</span>
        }
      }}
    />
  );
};

export default BlockContent;
