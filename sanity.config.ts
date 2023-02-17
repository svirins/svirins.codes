import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './studio';
import { codeInput } from '@sanity/code-input';

import { openaiImageAsset } from 'sanity-plugin-asset-source-openai';

// Define the actions that should be available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

// Define the singleton document types
const singletonTypes = new Set(['siteMeta']);

export default defineConfig({
  name: 'Studio',
  title: 'svirins-codes-studio',
  projectId: 'q60wk43i',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // singleton type has a list item with a custom child
            S.listItem().title('Site Meta').id('siteMeta').child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document()
                .schemaType('siteMeta')
                .documentId('80ae3d7d-426b-41cb-b9d5-6310d3f0cd8a')
            ),
            // Regular document types
            S.documentTypeListItem('post').title('Blog Posts'),
            S.documentTypeListItem('snippet').title('Snippet'),
            S.documentTypeListItem('tag').title('Tag')
          ])
    }),
    visionTool(),
    codeInput()
    // openaiImageAsset({
    //   API_KEY: openaiAPIkey
    // })
  ],

  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType))
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input
  }
});
