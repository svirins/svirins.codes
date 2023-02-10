import { defineType, defineArrayMember } from 'sanity';
import { RiBallPenFill } from 'react-icons/ri';

export default defineType({
  title: 'Simple Block Content',
  name: 'simpleBlockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [{ title: 'Normal', value: 'normal' }],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          { title: 'Highlight', value: 'highlight', icon: RiBallPenFill }
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                name: 'external',
                type: 'url',
                title: 'URL',
                hidden: ({ parent, value }) => !value && !!parent?.internal
              },
              {
                name: 'internal',
                type: 'reference',
                to: [{ type: 'snippet' }, { type: 'post' }],
                hidden: ({ parent, value }) => !value && !!parent?.external
              }
            ]
          }
        ]
      }
    })
  ]
});
