import { SanityAsset } from '@sanity/asset-utils';

import { urlForImage } from 'lib/sanity-client';
import { getImageDimensions } from '@sanity/asset-utils';
import { getPlaiceholder } from 'plaiceholder';

export async function createRemoteImageAttributes(src: SanityAsset) {
  const { width, height } = getImageDimensions(src);
  const actualHeight = Math.trunc((height / width) * 672);
  const sanityImageUrl = `${urlForImage(src)
    .format('webp')
    .url()}&w=${actualHeight}&h=672`;
  const { base64, img } = await getPlaiceholder(sanityImageUrl);
  return {
    width: 672,
    height: actualHeight,
    base64,
    img
  };
}
