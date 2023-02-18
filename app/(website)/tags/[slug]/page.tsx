import { notFound } from 'next/navigation';
import PostPreview from 'components/PostPreview';
import { getPostsByTag, getTagSlugs } from 'lib/sanity-api';

export async function generateStaticParams() {
  const paths = await getTagSlugs();
  return paths.map((slug) => ({ slug: slug }));
}

export default async function TagPage({
  params
}: {
  params: {
    slug: string;
  };
}) {
  const { posts, title } = await getPostsByTag(params.slug);

  return (
    <div className='container'>
      <div className='items-flex-col'>
        <h1 className='page-header'>{`Posts with tag #${title}`}</h1>
      </div>
      <hr className='horizontal-divider' />
      <div className='items-grid'>
        {posts && posts.length > 0
          ? posts.map((post) => (
              <PostPreview
                key={post.title}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                tags={post.tags}
              />
            ))
          : notFound()}
      </div>
    </div>
  );
}
