// const {getSnippets, getBlogPosts} from  '@/app/lib/db'
const homepage = 'https://svirins.codes';

export default async function sitemap() {
  // let blogs = getBlogPosts().map((post) => ({
  //   url: `${homepage}/blog/${post.slug}`,
  //   lastModified: post.metadata.publishedAt
  // }));

  const routes = [
    { url: '/', priority: 1 },
    { url: '/blog', priority: 1 },
    { url: '/snippets', priority: 1 }
  ].map((route) => ({
    url: `${homepage}${route.url}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: route.priority
  }));

  return [...routes];
}
