import { RiChatUploadLine } from 'react-icons/ri';
import { defineType, defineField } from 'sanity';

export default defineType({
  type: 'document',
  name: 'siteMeta',
  title: 'Site Configuration',
  icon: RiChatUploadLine,

  groups: [
    {
      name: 'meta',
      title: 'Site Info',
      default: true
    },
    {
      name: 'og',
      title: 'Social Share Info'
    }
  ],
  fields: [
    defineField({
      type: 'string',
      name: 'site_name',
      title: 'Site Name',
      group: ['og', 'meta']
      // fieldset: "optional"
    }),
    defineField({
      type: 'text',
      name: 'ogDescription',
      title: 'Social Share Description',
      group: ['og', 'meta']
    }),
    defineField({
      type: 'url',
      title: 'URL',
      name: 'url',
      description:
        'Most likely either the url of the page or its canonical url',
      validation: (Rule) => Rule.required(),
      group: ['og', 'meta']
      // fieldset: "basic"
    }),
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
      type: 'image',
      title: 'Image',
      name: 'ogImage',
      description:
        'URL of the image that should be used in social media previews. If you define this, you must define two other OG basic properties as well: title and type.',
      validation: (Rule) => Rule.required(),
      group: ['og']
      // fieldset: "basic"
    }),
    defineField({
      type: 'text',
      name: 'description',
      title: 'Describe This Site',
      group: ['meta', 'og']
    })
  ]
});
