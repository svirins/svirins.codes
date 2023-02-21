import { STACKS } from '../../components/Icons';
import { RiCodeBoxLine } from 'react-icons/ri';
import { defineType, defineField } from 'sanity';

const STACK_ICONS = STACKS.map((stack) => ({
  title: stack.iconTitle,
  value: stack.iconTitle
}));

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
      options: {
        list: STACK_ICONS
      },
      initialValue: STACK_ICONS[0].value,
      validation: (Rule: { required: () => any }) => Rule.required()
    })
    // defineField({
    //   name: 'openGraphData',
    //   title: 'Open Graph Data',
    //   type: 'openGraph'
    // })
  ]
});

export default snippet;
