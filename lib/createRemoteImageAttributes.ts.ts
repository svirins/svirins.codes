import { SanityAsset } from '@sanity/asset-utils';

import { urlForImage } from 'lib/sanity-client';
import { getImageDimensions } from '@sanity/asset-utils';
import { getPlaiceholder } from 'plaiceholder';

export async function createRemoteImageAttributes(src: SanityAsset) {
  const { width, height } = getImageDimensions(src);
  const { base64, img } = await getPlaiceholder(urlForImage(src).url());
  const actualHeight = (height / width) * 672;
  return {
    width: 672,
    height: actualHeight,
    base64,
    img
  };
}
