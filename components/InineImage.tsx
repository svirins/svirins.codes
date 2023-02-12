import type { SanityAssetExtended } from 'lib/sanity-api';
import Image from 'next/image';
import { createRemoteImageAttributes } from 'lib/createRemoteImageAttributes.ts';
// TODO: add alt tag completion for image

export function InlineImage(asset: SanityAssetExtended) {
  const { width, height, img } = createRemoteImageAttributes(asset);
  return (
    <Image
      src={img}
      width={width}
      height={height}
      alt='just text'
      className='rounded-lg h-auto w-auto'
      placeholder='blur'
      blurDataURL={asset.lqip}
    />
  );
}
