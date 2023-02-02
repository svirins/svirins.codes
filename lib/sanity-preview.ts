'use client';

import { definePreview } from 'next-sanity/preview';
import type { UsePreview } from 'next-sanity/preview';

const onPublicAccessOnly = () => {
  throw new Error(`Unable to load preview as you're not logged in`);
};

export const usePreview: UsePreview = definePreview({
  dataset: 'production',
  projectId: 'q60wk43i',
  onPublicAccessOnly
});
