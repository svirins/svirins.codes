import { defineType, defineArrayMember } from 'sanity';
import { RiBallPenFill, RiLinksLine } from 'react-icons/ri';

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' }
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' }
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          { title: 'Highlight', value: 'highlight', icon: RiBallPenFill }
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'External link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL'
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean'
              }
            ]
          },
          {
            name: 'internalLink',
            type: 'object',
            icon: RiLinksLine,
            title: 'Internal link',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [{ type: 'post' }, { type: 'snippet' }]
              }
            ]
          }
        ]
      }
    }),
    defineArrayMember({
      type: 'image',
      options: { hotspot: true }
    }),
    defineArrayMember({
      type: 'messageBox'
    }),
    defineArrayMember({
      type: 'code',
      title: 'Code with all options',
      options: {
        language: 'javascript',
        languageAlternatives: [
          { title: 'TypeScript', value: 'typescript' },
          { title: 'CSS', value: 'css' },
          { title: 'bash', value: 'bash' },
          { title: 'jsx', value: 'jsx' }
        ],
        withFilename: true
      }
    })
  ]
});
