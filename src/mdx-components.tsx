import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
import CodeHeader from '@/app/ui/code-header';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 {...props} className="mb-4 text-4xl font-bold" />,
    p: (props) => <p {...props} className="mb-4" />,
    pre: (props) => <pre {...props} />,
    img: (props) => (
      // eslint-disable-next-line jsx-a11y/alt-text
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
      />
    ),
    CodeHeader,
    ...components
  };
}