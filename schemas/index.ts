export const schemaTypes = [
  {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule: { required: () => any }) => Rule.required(),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
        },
        validation: (Rule: { required: () => any }) => Rule.required(),
      },
      {
        name: 'content',
        title: 'Content',
        type: 'markdown',
      },
      {
        name: 'excerpt',
        title: 'Excerpt',
        type: 'string',
        validation: (Rule: { required: () => any }) => Rule.required(),
      },
      {
        name: 'coverImage',
        title: 'Cover Image',
        type: 'image',
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              {
                type: 'tag',
              },
            ],
          },
        ],
        validation: (Rule: { required: () => any }) => Rule.required(),
      },
    ],
  },
  {
    name: 'snippet',
    type: 'document',
    title: 'Snippet',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule: { required: () => any }) => Rule.required(),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
        },
        validation: (Rule: { required: () => any }) => Rule.required(),
      },
      {
        name: 'content',
        title: 'Content',
        type: 'markdown',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
        validation: (Rule: { required: () => any }) => Rule.required(),
      },
      {
        name: 'iconTitle',
        title: 'Icon Title',
        type: 'string',
        validation: (Rule: { required: () => any }) => Rule.required(),
      },
    ],
  },
  {
    name: 'tag',
    type: 'document',
    title: 'Tag',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule: { required: () => any }) => Rule.required(),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
        },
        validation: (Rule: { required: () => any }) => Rule.required(),
      },
    ],
  },
];
