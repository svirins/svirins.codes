import { defineType, defineField } from 'sanity';
import { RiLightbulbLine } from 'react-icons/ri';

export default defineType({
  title: 'Message',
  name: 'messageBox',
  type: 'object',
  icon: RiLightbulbLine,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: { required: () => any }) => Rule.required()
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'simpleBlockContent',
      validation: (Rule: { required: () => any }) => Rule.required()
    })
  ]
});
