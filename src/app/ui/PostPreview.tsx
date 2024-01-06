import Link from 'next/link';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  tags: {
    title: string;
    slug: string;
  }[];
};

export function PostPreview({ slug, title, excerpt, tags }: Post) {
  return (
    <div className=" w-full py-4">
      <div className="w-full">
        <div className="flex flex-wrap w-full md:pb-2">
          {tags &&
            tags.map((tag) => (
              <Link
                href={`/blog/tag/${tag.slug}`}
                key={tag.slug}
                className="mr-2 text-sm md:text-base font-medium   hover:text-active text-gray-400  ease-in-out transition-all duration-150 lowercase"
              >
                {`#${tag.title}`}
              </Link>
            ))}
        </div>
        <Link
          href={`/blog/${slug}`}
          className=" w-full  duration-150 ease-in-out py-4"
        >
          {' '}
          <h3 className="text-xl md:text-2xl font-medium text-left  hover:text-active text-gray-100">
            {title}
          </h3>
        </Link>

        <p className=" text-gray-400 md:text-lg">{excerpt}</p>
      </div>
    </div>
  );
}
