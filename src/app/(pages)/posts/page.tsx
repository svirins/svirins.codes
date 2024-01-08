import { SearchBar } from '@/app/ui/search-bar';
import Link from 'next/link';
// import { allPosts } from 'contentlayer/generated';

type Props = {
  params: {};
  searchParams: { title?: string };
};

const isEmptyObject = (obj: Object) => {
  return JSON.stringify(obj) === '{}';
};

export default async function Posts(props: Props) {
  const searchParams = props.searchParams;
  const queryString = isEmptyObject(searchParams)
    ? '*'
    : `${searchParams.title}*`;
  // const posts = await searchPosts(queryString);
  // allPosts.map((e) => console.dir(e));
  return (
    <>
      <div className="flex flex-col  max-w-2xl mx-auto w-full">
        <div className="flex flex-col">
          <h1 className="mb-4 text-3xl font-bold tracking-tight capsize  md:text-5xl text-gray-100">
            Blog
          </h1>
          <p className=" font-semibold  text-gray-100 text-base mt-2 md:text-lg">
            Posts about code, dev life and various{' '}
            <span role="image" aria-label="technomagical">
              ⚗️
            </span>
            things.
          </p>
        </div>
      </div>
      <div className="flex flex-col  max-w-2xl mx-auto pb-16 w-full">
        <SearchBar />
        {/* <div className="grid grid-cols-1 divide-y  divide-gray-300/25">
          {allPosts.length ? (
            allPosts.map((post) => (
              <div key={post._id} className="w-full py-4">
                <div className="w-full">
                  <div className="flex flex-wrap w-full md:pb-2">
                    {post.tags &&
                      post.tags.map((tag) => (
                        <div
                          key={tag}
                          className="mr-2 text-sm md:text-base font-medium text-gray-400  lowercase"
                        >
                          {`#${tag}`}
                        </div>
                      ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className=" w-full  duration-150 ease-in-out py-4"
                  >
                    <h3 className="text-xl md:text-2xl font-medium text-left  hover:text-active text-gray-100">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-gray-400 md:text-lg">{post.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 italic text-lg">No results found</p>
          )}
        </div> */}
      </div>
    </>
  );
}
