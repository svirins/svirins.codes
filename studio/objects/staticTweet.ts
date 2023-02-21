import { defineType, defineField } from 'sanity';
import { RiTwitterLine } from 'react-icons/ri';

export default defineType({
  title: 'Tweet ID',
  name: 'tweet',
  type: 'object',
  icon: RiTwitterLine,
  fields: [
    defineField({
      name: 'id',
      title: 'Id',
      type: 'string',
      validation: (Rule: { required: () => any }) =>
        Rule.required().min(20).max(20)
    })
  ]
});
