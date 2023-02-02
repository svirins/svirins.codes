import { RiPagesLine } from 'react-icons/ri';
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'post',
  type: 'document',
  title: 'Post',
  icon: RiPagesLine,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: { required: () => any }) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      },
      validation: (Rule: { required: () => any }) => Rule.required()
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'string',
      validation: (Rule: { required: () => any }) => Rule.required()
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }),
    defineField({
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
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage'
    }
  }
});
