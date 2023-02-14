import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { codeInput } from '@sanity/code-input';
import { openaiImageAsset } from 'sanity-plugin-asset-source-openai';
import { loadEnvConfig } from '@next/env';

const dev = process.env.NODE_ENV !== 'production';
loadEnvConfig(__dirname, dev, { info: () => null, error: console.error });

const openaiAPIkey = process.env.OPENAI_API_KEY as string;

export default defineConfig({
  name: 'default',
  title: 'svirins-codes-studio',

  projectId: 'q60wk43i',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    codeInput(),
    openaiImageAsset({
      API_KEY: openaiAPIkey
    })
  ],

  schema: {
    types: schemaTypes
  }
});
