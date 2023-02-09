import type { SanityBlock } from 'lib/sanity-api';
import { LightBulb } from 'components/Icons';
interface MessageBox {
  _key: string;
  _type: 'messageBox';
  title: 'string';
  message: SanityBlock[];
}

export function MessageBox({ value }: { value: MessageBox }) {
  return (
    <div className='flex bg-blue-100 rounded-lg p-4 mb-4 text-sm text-blue-700'>
      <LightBulb />

      <div>
        <span className='font-medium'>{value.title}</span>423234432342
      </div>
    </div>
  );
}
