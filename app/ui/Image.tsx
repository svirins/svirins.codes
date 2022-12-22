import Image, { ImageProps } from 'next/image';

// TODO: Implement Blur
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
