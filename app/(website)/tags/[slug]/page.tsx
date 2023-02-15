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
    <div className='flex flex-col max-w-2xl mx-auto pb-8 w-full'>
      <h1 className='mb-4 text-3xl font-bold capsize tracking-tight  md:text-5xl text-gray-100'>
        {`Posts with tag #${title}`}
      </h1>
      <div className='grid grid-cols-1 divide-y  divide-gray-300/25'>
        {posts.length > 0
          ? posts.map((post) => (
              <PostPreview
                key={post!.title}
                slug={post!.slug}
                title={post!.title}
                excerpt={`${post!.excerpt.substring(0, 196)} ...`}
                tags={post!.tags}
              />
            ))
          : notFound()}
      </div>
    </div>
  );
}
