import Image, { ImageProps } from 'next/image';

function InlineBlogImage(props: ImageProps) {
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

const Underlined = ({ title, href }: { title: string; href: string }) => {
  return (
    <a
      className=" text-gray-800 dark:text-gray-300  font-medium link-underline link-underline-gradient"
      href={href}
      title={title}
    >
      {title}
    </a>
  );
};

const MDXComponents = {
  img: InlineBlogImage,
  Underlined
};

export default MDXComponents;
