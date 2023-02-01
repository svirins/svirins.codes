import {RiAsterisk} from 'react-icons/ri'
import {defineType, defineField} from 'sanity'

const tag = defineType({
  name: 'tag',
  type: 'document',
  title: 'Tag',
  icon: RiAsterisk,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule: {required: () => any}) => Rule.required(),
    }),
  ],
})

export default tag
