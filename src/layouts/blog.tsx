import Container from '@/components/Container';
import BlurredImage from '@/components/Image';
import { Tags } from '@/components/Tags';
import { urlForImage } from '@/lib/sanity-client';
import { IPost } from '@/typings';
import { format, parseISO } from 'date-fns';
import Image from 'next/future/image';
import { PropsWithChildren, Suspense } from 'react';

export default function BlogLayout({
  children,
  post
}: PropsWithChildren<{ post: IPost }>) {
  return (
    <Container
      title={`${post.title} Dzmitry Svirin`}
      description={post.excerpt}
      image={urlForImage(post.coverImage!).url()}
      date={new Date(post.date).toISOString()}
      type="article"
      tags={post.tags?.map((tag) => tag.title)}
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-12">
        <Tags tags={post.tags} />
        <h1 className="my-2 text-3xl font-bold  tracking-tight text-gray-900 md:text-5xl dark:text-gray-100">
          {post.title}
        </h1>
        {post.coverImage && (
          <div className="flex flex-col w-full my-4">
            <BlurredImage
              src={urlForImage(post.coverImage!).url()}
              alt={`Image for ${post.title}`}
            />
          </div>
        )}
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt="Dzmitry Svirin"
              height={36}
              width={36}
              sizes="20vw"
              src="/svirins.png"
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-400">
              {`Dzmitry Svirin  • `}
              {format(parseISO(post.date), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
            {post.readingTime}
          </p>
        </div>
        <Suspense fallback={null}>
          <div className="w-full max-w-2xl mt-4 prose prose-slate dark:prose-invert prose-lg">
            {children}
          </div>
        </Suspense>
      </article>
    </Container>
  );
}
