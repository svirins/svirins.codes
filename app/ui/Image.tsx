import Image, { ImageProps } from 'next/image';

// TODO: Implement Blur
// TODO: https://github.com/vercel/next.js/blob/canary/examples/with-cloudinary/utils/generateBlurPlaceholder.ts

export default function BlurredImage(props: ImageProps) {
  return (
    <Image
      {...props}
      alt={props.alt}
      width={672}
      height={350}
      className="rounded-lg  h-auto"
    />
  );
}
