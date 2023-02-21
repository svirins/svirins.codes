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
      name: 'imageWithAlt',
      title: 'Cover image',
      type: 'imageWithAlt'
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
    // defineField({
    //   name: 'openGraphData',
    //   title: 'Open Graph Data',
    //   type: 'openGraph'
    // })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'imageWithAlt'
    }
  }
});
