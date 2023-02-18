import { LightBulb } from 'components/Icons';
import type { PortableTextObject } from '@sanity/types';
import SimpleBlockContent from 'components/SimpleBlockContent';
interface MessageBox {
  _key: string;
  _type: 'messageBox';
  title: 'string';
  message: PortableTextObject[];
}

export function MessageBox({ value }: { value: MessageBox }) {
  return (
    <div className='w-full bg-message rounded-lg p-4 mb-4'>
      <div className='flex-row flex'>
        <LightBulb />
        <h6 className='font-semibold font-2xl'>{value.title}</h6>
      </div>
      <div>
        <div className='w-full max-w-2xl prose prose-invert md:prose-lg'>
          {value.message.map((section) => {
            if (!section || Object.keys(section).length === 0) {
              return null;
            }
            return <SimpleBlockContent key={section._key} section={section} />;
          })}
        </div>
      </div>
    </div>
  );
}
