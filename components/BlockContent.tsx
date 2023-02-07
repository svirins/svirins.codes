import { PortableText } from '@portabletext/react';
import { getDocumentById } from 'lib/sanity-api';
import Link from 'next/link';
import { CodeBlock } from 'components/CodeBlock';
import { InlineImage } from 'components/InineImage';
import produce from 'immer';
// TODO: implement external link processing
// TODO: add correct type to block content
const BlockContent = async ({ section }: { section: any }) => {
  // const replacedSection =
  // section.markDefs &&
  //   section.markDefs.length > 0 &&
  //   section.markDefs[0].internal;
  //     ? {
  //         ...section,
  //         urlwithAlt: await getDocumentById(section.markDefs[0].internal._ref)
  //       }
  //     : section;
  // if (
  //   section.markDefs &&
  //   section.markDefs.length > 0 &&
  //   section.markDefs[0].internal
  // ) {
  //   console.log('markdefs are:', replacedSection.children);
  //   console.log('whole section is:', replacedSection);
  // }
  async function modifyInternalLink(section) {
    if (
      section.markDefs &&
      section.markDefs.length > 0 &&
      section.markDefs[0].internal
    ) {
      const { url, alt } = await getDocumentById(
        section.markDefs[0].internal._ref
      );
      const modifiedSection = produce(section, (draft) => {
        draft.markDefs[0].internal._ref = url;
      });
      return modifiedSection;
    } else {
      return section;
    }
  }

  // const clonedSection = produce(section, (draft) => {
  //   if (
  //     section.markDefs &&
  //     section.markDefs.length > 0 &&
  //     section.markDefs[0].internal
  //   ) {
  //     const { url, alt } = await getDocumentById(
  //       section.markDefs[0].internal._ref
  //     );
  //     draft.markDefs[0].internal._ref = url;
  //   }
  // });
  const result = await modifyInternalLink(section);
  console.log(result.markDefs[0].internal);

  // // console.log('portable text is', section.);
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
          bullet: ({ children }) => <ul>{children}</ul>,
          number: ({ children }) => <ol>{children}</ol>
        },

        marks: {
          link: ({ children, value }) => (
            // <a
            //   className=' text-gray-800 dark:text-gray-300  font-medium link-underline link-underline-gradient'
            //   href={`${value.href}`}
            // >
            //   {children}
            // </a>
            <>
              {value?.internal ? (
                <Link
                  className=' text-gray-800 dark:text-gray-300  font-medium link-underline link-underline-gradient'
                  href={value.internal._ref}
                >
                  {value.urlwithAlt}
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
