import { getContent } from "@/app/lib/mdx";
import type { Metadata } from "next";
import { formatDate } from "@/app/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = getContent("posts").find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }
  process.env.SITE_URL;
  const siteUrl =
    process.env.NODE_ENV === "production"
      ? process.env.SITE_URL
      : "http://localhost:3000";
  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    coverImage: image,
  } = post.metadata;
  let ogImage = image
    ? `${siteUrl}${image}`
    : `${siteUrl}/api/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${siteUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export async function generateStaticParams() {
  return getContent("posts").map((post) => ({
    slug: post.slug,
  }));
}
export default async function PostPage({
  params,
}: {
  params: {
    slug: string;
    searchParams: URLSearchParams;
  };
}) {
  const post = getContent("posts").find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }
  const readingTime = Math.round(String(post.content).length / 5 / 180) ?? 1;
  return (
    <section className="flex flex-col items-start justify-center w-full  mx-auto mb-12">
      <h1 className="my-2 text-3xl font-bold  tracking-tight capsize   md:text-5xl text-gray-100">
        {post.metadata.title}
      </h1>
      {post.metadata.coverImage && (
        <div className="flex flex-col w-full my-4">
          <Image src={post.metadata.coverImage} alt={post.metadata.title} />
        </div>
      )}
      <div className="flex flex-row items-start justify-between w-full mt-2 tems-center">
        <div className="flex items-center">
          <Image
            alt="Dzmitry Svirin"
            height={36}
            width={36}
            src="/svirins.png"
            className="rounded-full"
          />
          <p className="ml-2 text-xs md:text-sm lg:text-base  text-gray-400">
            <a
              className="  text-gray-300  font-medium link-underline link-underline-gradient"
              href="https://twitter.com/svirins"
            >
              Dzmitry Svirin
            </a>
            {` • `}
            {formatDate(post.metadata.publishedAt)}
          </p>
        </div>
        <p className="mt-2 text-xs md:text-sm lg:text-base  text-gray-400 min-w-32">
          {readingTime}
        </p>
      </div>
      <div className="w-full  mt-4 prose  prose-invert  md:prose-lg">
        {/* MDX Component */}
      </div>
    </section>
  );
}
