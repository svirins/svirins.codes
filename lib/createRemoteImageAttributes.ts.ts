import { urlForImage } from 'lib/sanity-client';
import { getImageDimensions } from '@sanity/asset-utils';
import { SanityAssetExtended } from 'lib/sanity-api';

export function createRemoteImageAttributes(src: SanityAssetExtended) {
  const { width, height } = getImageDimensions(src);
  const actualHeight = Math.trunc((height / width) * 672);
  const sanityImageUrl = `${urlForImage(src)
    .format('webp')
    .url()}&w=${actualHeight}&h=672`;
  return {
    width: 672,
    height: actualHeight,
    img: sanityImageUrl
  };
}
