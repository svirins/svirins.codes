import { LightBulb } from 'components/Icons';
import type { PortableTextObject } from '@sanity/types';

interface MessageBox {
  _key: string;
  _type: 'messageBox';
  title: 'string';
  message: PortableTextObject;
}

export function MessageBox({ value }: { value: MessageBox }) {
  return (
    <div className='flex flex-col w-full bg-message rounded-lg p-4 mb-4'>
      <div className='flex-row'>
        <LightBulb />
        <h6 className='font-semibold text-gray-100'>{value.title}</h6>
      </div>
      <div>
        <span className='text-gray-300'>just text here</span>
      </div>
    </div>
  );
}
