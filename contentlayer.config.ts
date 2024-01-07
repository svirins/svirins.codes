import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    slug: { type: 'string', required: true },
    image: { type: 'string', required: true },
    tags: { type: 'string', required: true }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post.slug}`
    }
  }
}));

export const Snippet = defineDocumentType(() => ({
  name: 'Snippet',
  filePathPattern: `snippets/**/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    slug: { type: 'string', required: true },
    image: { type: 'string', required: true }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (snippet) => `/snippets/${snippet.slug}`
    }
  }
}));



export default makeSource({
  contentDirPath: './content/posts',
  documentTypes: [Post]
});
