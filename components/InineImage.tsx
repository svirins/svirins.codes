import { SanityAsset, getImageDimensions } from '@sanity/asset-utils';
import Image from 'next/image';
import { urlForImage } from 'lib/sanity-client';
// TODO: add alt tag completion for image
export function InlineImage(asset: SanityAsset) {
  const { width, height } = getImageDimensions(asset);
  return (
    <Image
      src={urlForImage(asset).url()}
      width={width}
      height={height}
      alt='just text'
      className='rounded-lg  h-auto'
    />
  );
}
