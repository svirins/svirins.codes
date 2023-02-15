import { RiCodeBoxLine } from 'react-icons/ri';
import { defineType, defineField } from 'sanity';

const snippet = defineType({
  name: 'snippet',
  type: 'document',
  title: 'Snippet',
  icon: RiCodeBoxLine,
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
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule: { required: () => any }) => Rule.required()
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (Rule: { required: () => any }) => Rule.required()
    }),

    defineField({
      name: 'iconTitle',
      title: 'Icon Title',
      type: 'string',
      validation: (Rule: { required: () => any }) => Rule.required()
    }),
    defineField({
      name: 'openGraphData',
      title: 'Open Graph Data',
      type: 'openGraph'
    })
  ]
});

export default snippet;
