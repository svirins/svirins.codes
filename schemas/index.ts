import { RiFileTextLine } from 'react-icons/ri';
import { defineField } from 'sanity';

const blockContent = defineField({
  title: 'Block Content',
  name: 'blockContent',
  description: 'Text Block',
  type: 'object',
  hidden: false,
  icon: RiFileTextLine,
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'H5', value: 'h5' },
            { title: 'H6', value: 'h6' },
            {
              title: 'Normal Center',
              value: 'normal+center'
            },
            {
              title: 'H1 Center',
              value: 'h1+center'
            },
            {
              title: 'H2 Center',
              value: 'h2+center'
            },
            {
              title: 'H3 Center',
              value: 'h3+center'
            },
            {
              title: 'H4 Center',
              value: 'h4+center'
            },
            {
              title: 'H5 Center',
              value: 'h5+center'
            },
            {
              title: 'H6 Center',
              value: 'h6+center'
            },
            { title: 'Quote', value: 'blockquote' }
          ],
          marks: {
            decorators: [
              { value: 'strong', title: 'Strong' },
              {
                value: 'em',
                title: 'Italic'
              },
              { value: 'underline', title: 'Underline' },
              { value: 'code', title: 'Code' }
            ],
            annotations: [{ type: 'link' }]
          }
        },
        { name: 'customImage', type: 'mainImage' }
      ]
    }
  ]
});

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
        validation: (Rule: { required: () => any }) => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title'
        },
        validation: (Rule: { required: () => any }) => Rule.required()
      },
      {
        name: 'content',
        title: 'Content',
        type: 'markdown'
      },
      {
        name: 'excerpt',
        title: 'Excerpt',
        type: 'string',
        validation: (Rule: { required: () => any }) => Rule.required()
      },
      {
        name: 'new_content',
        type: 'array',
        title: 'New content section',
        of: [
          {
            type: 'block'
          }
        ]
      },
      {
        name: 'coverImage',
        title: 'Cover Image',
        type: 'image'
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
                type: 'tag'
              }
            ]
          }
        ],
        validation: (Rule: { required: () => any }) => Rule.required()
      }
    ]
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
        validation: (Rule: { required: () => any }) => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title'
        },
        validation: (Rule: { required: () => any }) => Rule.required()
      },
      {
        name: 'content',
        title: 'Content',
        type: 'markdown'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
        validation: (Rule: { required: () => any }) => Rule.required()
      },
      {
        name: 'iconTitle',
        title: 'Icon Title',
        type: 'string',
        validation: (Rule: { required: () => any }) => Rule.required()
      }
    ]
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
        validation: (Rule: { required: () => any }) => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title'
        },
        validation: (Rule: { required: () => any }) => Rule.required()
      }
    ]
  }
];
