import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'default',
  title: 'svirins-codes-studio',

  projectId: 'q60wk43i',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes
  }
});
