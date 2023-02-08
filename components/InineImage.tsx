import { SanityAsset } from '@sanity/asset-utils';
import Image from 'next/image';
import { urlForImage } from 'lib/sanity-client';
import { createRemoteImageAttributes } from 'lib/createRemoteImageAttributes.ts';
// TODO: add alt tag completion for image
export async function InlineImage(asset: SanityAsset) {
  const { width, height, base64, img } = await createRemoteImageAttributes(
    asset
  );
  return (
    <Image
      src={img}
      width={width}
      height={height}
      alt='just text'
      className='rounded-lg  h-auto'
      placeholder='blur'
      blurDataURL={base64}
    />
  );
}
