import { SanityAsset } from '@sanity/asset-utils';

import { sanityClient, clientFetch } from './sanity-server';

import {
  allSnippetsQuery,
  indexQuery,
  postBySlugQuery,
  postQuery,
  postSlugsQuery,
  postUpdatedQuery,
  snippetSlugsQuery,
  snippetsQuery,
  tagRelatedPosts,
  tagSlugsQuery,
  documentSlugById
} from './sanity-queries';

export interface ITag {
  _id: string;
  title: string;
  slug: string;
}

export interface SanityBlock {
  [key: string]: any;
  _type: 'block' | 'span';
  // _type: 'block' | 'image';
}

export interface BlockContent {
  _type: 'blockContent';
  _key: string;
  text: string;
}
export interface IPost {
  _id: string;
  slug: string;
  content: string;
  body: BlockContent[];
  title: string;
  date: string;
  excerpt: string;
  tags: ITag[];
  coverImage: SanityAsset;
  readingTime: number;
}

export interface ISnippet {
  _id: string;
  slug: string;
  body: BlockContent;
  title: string;
  description: string;
  iconTitle: string;
}

export interface ReferencedDocument {
  url: string;
}

export const getPosts = async (): Promise<IPost[]> => {
  // const posts = await sanityClient.fetch(indexQuery);
  const posts = await clientFetch(indexQuery);

  return posts;
};

export const getPostSlugs = async (): Promise<string[]> => {
  // const slugs = await sanityClient.fetch(postSlugsQuery);
  const slugs = await sanityClient.fetch(postSlugsQuery);
  return slugs;
};

export const getPost = async (slug: string): Promise<IPost> => {
  // const { post } = await sanityClient.fetch(postQuery, { slug: slug });
  const { post } = await clientFetch(postQuery, { slug: slug });
  return post ?? null;
};

export const getPostBySlug = async (slug: string): Promise<IPost> => {
  // const { post } = await sanityClient.fetch(postBySlugQuery, { slug });
  const { post } = await clientFetch(postBySlugQuery, { slug });
  return post ?? null;
};
export const getUpdatedPostSlug = async (id: string): Promise<string> => {
  // const slug = sanityClient.fetch(postUpdatedQuery, { id });
  const slug = clientFetch(postUpdatedQuery, { id });
  return slug ?? null;
};

export const getSnippets = async (): Promise<ISnippet[]> => {
  // const snippets = await sanityClient.fetch(allSnippetsQuery);
  const snippets = await clientFetch(allSnippetsQuery);
  return snippets ?? null;
};

export const getSnippetSlugs = async (): Promise<string[]> => {
  // const slugs = await sanityClient.fetch(snippetSlugsQuery);
  const slugs = await clientFetch(snippetSlugsQuery);
  return slugs ?? null;
};

export const getSnippet = async (slug: string): Promise<ISnippet> => {
  // const { snippet } = await sanityClient.fetch(snippetsQuery, { slug });
  const { snippet } = await clientFetch(snippetsQuery, { slug });
  return snippet ?? null;
};

export const getTagSlugs = async (): Promise<string[]> => {
  // const slugs = await sanityClient.fetch(tagSlugsQuery);
  const slugs = await clientFetch(tagSlugsQuery);
  return slugs ?? null;
};

export const getPostsByTag = async (
  slug: string
): Promise<{
  title: string;
  posts: IPost[];
}> => {
  // const posts = await sanityClient.fetch(tagRelatedPosts, { slug });
  const posts = await clientFetch(tagRelatedPosts, { slug });
  return posts ?? null;
};

export const getDocumentById = async (
  id: string
): Promise<ReferencedDocument> => {
  const document = await clientFetch(documentSlugById, { id });
  let url = '';
  let alt = document.title;
  switch (document._type) {
    case 'post':
      url = `/blog/${document.slug}`;
      break;
    case 'snippet':
      url = `/snippet/${document.slug}`;
      break;
    default:
      url = '/';
  }
  return { url };
};
