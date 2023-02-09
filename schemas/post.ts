import { RiPagesLine } from 'react-icons/ri';
import { defineType, defineField } from 'sanity';
import { getExtension, getImageDimensions } from '@sanity/asset-utils';

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
      },
      validation: (rule) =>
        rule.custom((value) => {
          if (!value) {
            return true;
          }

          const filetype = getExtension(value.asset!._ref);

          if (filetype !== 'jpg' && filetype !== 'png' && filetype !== 'webp') {
            return 'Image must be a JPG or PNG or WEBP';
          }

          const { width, height } = getImageDimensions(value.asset!._ref);

          if (width < 672 || height < 152) {
            return 'Image must be at least 672x152 pixels';
          }

          return true;
        })
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
