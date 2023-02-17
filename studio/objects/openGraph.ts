import { defineType, defineField } from 'sanity';
import type { Rule } from '@sanity/types';

const LOCALES = [
  {
    title: 'American English',
    value: 'en-US'
  },
  {
    title: 'British English',
    value: 'en-GB'
  }
];

export default defineType({
  name: 'openGraph',
  title: 'Social Share Config',
  type: 'object',
  fields: [
    defineField({
      type: 'string',
      title: 'Page Title',
      name: 'ogTitle',
      description:
        'Set the title Open Graph should use. In most situations, this should be different from the value of the title prop',
      validation: (Rule) => Rule.required()
      // fieldset: "basic"
    }),
    defineField({
      type: 'text',
      name: 'ogDescription',
      title: 'Social Share Description'
      // group: ['og', 'meta']
    }),
    defineField({
      type: 'string',
      name: 'locale',
      title: 'Language',
      description: "used for informing the browser the site's language.'",
      options: {
        list: LOCALES
      },
      initialValue: LOCALES[0].value
    })
  ]
});
