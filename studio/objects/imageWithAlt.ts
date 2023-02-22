import { defineType, defineField } from 'sanity';
import { getExtension, getImageDimensions } from '@sanity/asset-utils';

export default defineType({
  title: 'Image',
  name: 'imageWithAlt',
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
    defineField({
      title: 'Alternative Text',
      name: 'alt',
      type: 'string',
      validation: (Rule: { required: () => any }) => Rule.required()
    })
  ],
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
});
