import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import withPlaiceholder from '@plaiceholder/next';

import createMDX from '@next/mdx';
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    ppr: true
    // useLightningcss: true
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx']
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [rehypeHighlight]
  }
});

export default withPlaiceholder(withMDX(nextConfig));
