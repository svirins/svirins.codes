import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { font_mono } from 'fonts';
import { getPost, getPostSlugs } from 'lib/sanity-api';
import { Tags } from 'components/Tags';
import BlockContent from 'components/BlockContent';
import { createRemoteImageAttributes } from 'lib/createRemoteImageAttributes.ts';
import Balancer from 'react-wrap-balancer';
import { format } from 'date-fns';

export async function generateStaticParams() {
  const paths = await getPostSlugs();
  return paths.map((slug) => ({ slug: slug }));
}

export async function generateMetadata({
  params
}: {
  params: any;
}): Promise<Metadata | undefined> {
  const post = await getPost(params.slug);
  if (!post) {
    return;
  }
  // const sanityOGImage = urlForImage(post.imageWithAlt);
  // todo: add og generation logic
  const { title, date: publishedTime, excerpt: description, slug } = post;

  const ogImage = 'https://www.svirins.codes/social-banner.webp';
  // ? `https://svirins.codes${image}`
  // : `https://svirins.codes/api/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://svirins.codes/blog/${slug}`,
      images: [
        {
          url: ogImage
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage]
    }
  };
}

export default async function PostPage({
  params
}: {
  params: {
    slug: string;
  };
}) {
  const post = await getPost(params.slug);
  if (!post) {
    return notFound();
  }

  const { width, height, img } = createRemoteImageAttributes(post.imageWithAlt);

  return (
    <article className='container items-start justify-center pb-4'>
      <div className={font_mono.variable}>
        <h1 className='page-header'>
          <Balancer ratio={0.65}>{post.title}</Balancer>
        </h1>
        <Tags tags={post.tags} />
        {post.imageWithAlt && (
          <div className='flex flex-col w-full my-4 max-w-2xl'>
            <Image
              src={img}
              alt={post.imageWithAlt.alt}
              width={width}
              height={height}
              quality='100'
              className='rounded-lg h-auto w-auto'
              priority={true}
              placeholder='blur'
              blurDataURL={post.imageWithAlt.lqip}
            />
          </div>
        )}
        <div className='flex flex-row items-start justify-between w-full mt-2'>
          <div className='flex items-center'>
            <a
              className='flex h-9 w-9'
              href='https://twitter.com/Svirins'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                alt='Dzmitry Svirin'
                height={36}
                width={36}
                quality='100'
                src='/svirins-light-small.webp'
                className='rounded-full flex  h-9 w-9'
              />
            </a>
            <a
              href='https://twitter.com/Svirins'
              target='_blank'
              rel='noopener noreferrer'
              className='author flex flex-col ml-4 !no-underline'
            >
              <span
                className='flex items-center font-semibold text-gray-100 leading-5 tracking-tight'
                title='Dzmitry Sviryn'
              >
                Dzmitry Sviryn
              </span>
              <span
                className='text-sm text-gray-400 leading-4 font-semibold'
                title='@svirins'
              >
                @svirins
              </span>
            </a>
            <div className='ml-auto flex text-right items-center'>
              <span className='flex font-semibold text-sm text-gray-400 '>
                <time
                  title={`Updated at: ${new Date(post.date).toUTCString()}`}
                  dateTime={new Date(post.date).toISOString()}
                >
                  {format(new Date(post.date), 'MMM d, y')}
                </time>
              </span>
              <span className='flex text-sm text-gray-400 font-semibold'>
                {`${post.readingTime && 1} min read`}
              </span>
            </div>
          </div>
        </div>

        <div className='w-full max-w-2xl mt-4 prose prose-invert md:prose-lg'>
          {post.body.map((section) => {
            if (!section || Object.keys(section).length === 0) {
              return null;
            }
            return <BlockContent key={section._key} section={section} />;
          })}
        </div>
      </div>
    </article>
  );
}
