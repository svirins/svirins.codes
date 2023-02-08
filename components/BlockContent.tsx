import produce from 'immer';
import { PortableText } from '@portabletext/react';
import { getDocumentById } from 'lib/sanity-api';
import Link from 'next/link';
import { CodeBlock } from 'components/CodeBlock';
import { InlineImage } from 'components/InineImage';

const BlockContent = async ({ section }: { section: any }) => {
  async function modifyInternalLink(section: any) {
    if (
      section.markDefs &&
      section.markDefs.length > 0 &&
      section.markDefs[0].internal
    ) {
      const { url } = await getDocumentById(section.markDefs[0].internal._ref);
      const modifiedSection = produce(section, (draft: any) => {
        draft.markDefs[0].internal.path = url;
      });
      return modifiedSection;
    } else {
      return section;
    }
  }

  const modifiedSection = await modifyInternalLink(section);
  return (
    <PortableText
      value={modifiedSection}
      onMissingComponent={false}
      components={{
        types: {
          image: ({ value }) => InlineImage(value),
          code: ({ value }) => <CodeBlock value={value} />
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
          link: ({ children, value }) => (
            <>
              {value?.internal ? (
                <Link
                  className=' text-gray-800 dark:text-gray-300  font-medium link-underline link-underline-gradient'
                  href={value.internal.path}
                >
                  {children}
                </Link>
              ) : value?.external ? (
                <a
                  className=' text-gray-800 dark:text-gray-300  font-medium link-underline link-underline-gradient'
                  href={value.external}
                >
                  {children}
                </a>
              ) : null}
            </>
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
