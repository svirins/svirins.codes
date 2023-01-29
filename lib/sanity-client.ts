import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/asset-utils';

import { SANITY_CONFIG } from 'config';
export const imageBuilder = createImageUrlBuilder(SANITY_CONFIG);

export const urlForImage = (source: SanityImageSource) =>
  imageBuilder.image(source).auto('format').fit('max');
