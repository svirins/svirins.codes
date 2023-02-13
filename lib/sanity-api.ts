import type { SanityAsset } from '@sanity/asset-utils';
import type { PortableTextBlock } from '@sanity/types';

import { sanityClient, clientFetch } from './sanity-server';

import {
  allSnippetsQuery,
  indexQuery,
  postQuery,
  postSlugsQuery,
  postUpdatedQuery,
  snippetSlugsQuery,
  snippetsQuery,
  tagRelatedPosts,
  tagSlugsQuery
} from './sanity-queries';

export interface ITag {
  _id: string;
  title: string;
  slug: string;
}
export interface SanityAssetExtended extends SanityAsset {
  aspectRatio: number;
  lqip: string;
  alt: string;
}

export interface IPost {
  _id: string;
  slug: string;
  content: string;
  body: PortableTextBlock[];
  title: string;
  date: string;
  excerpt: string;
  tags: ITag[];
  imageWithAlt: SanityAssetExtended;
  readingTime: number;
}

export interface ISnippet {
  _id: string;
  slug: string;
  body: PortableTextBlock[];
  title: string;
  description: string;
  iconTitle: string;
}

export interface ReferencedDocument {
  url: string;
}

export const getPosts = async (): Promise<IPost[]> => {
  const posts = await clientFetch(indexQuery);
  return posts ?? null;
};

export const getPostSlugs = async (): Promise<string[]> => {
  const slugs = await sanityClient.fetch(postSlugsQuery);
  return slugs;
};

export const getPost = async (slug: string): Promise<IPost> => {
  const { post } = await clientFetch(postQuery, { slug: slug });
  return post ?? null;
};

export const getUpdatedPostSlug = async (id: string): Promise<string> => {
  const slug = clientFetch(postUpdatedQuery, { id });
  return slug ?? null;
};

export const getSnippets = async (): Promise<ISnippet[]> => {
  const snippets = await clientFetch(allSnippetsQuery);
  return snippets ?? null;
};

export const getSnippetSlugs = async (): Promise<string[]> => {
  const slugs = await clientFetch(snippetSlugsQuery);
  return slugs ?? null;
};

export const getSnippet = async (slug: string): Promise<ISnippet> => {
  const { snippet } = await clientFetch(snippetsQuery, { slug });
  return snippet ?? null;
};

export const getTagSlugs = async (): Promise<string[]> => {
  const slugs = await clientFetch(tagSlugsQuery);
  return slugs ?? null;
};

export const getPostsByTag = async (
  slug: string
): Promise<{
  title: string;
  posts: Partial<IPost[]>;
}> => {
  const posts = await clientFetch(tagRelatedPosts, { slug });
  return posts ?? null;
};
