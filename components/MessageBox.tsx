import type { SanityBlock } from 'lib/sanity-api';
import { RiLightbulbLine } from 'react-icons';
interface MessageBox {
  _key: string;
  _type: 'messageBox';
  title: 'string';
  message: SanityBlock[];
}

export function MessageBox({ value }: { value: MessageBox }) {
  return <div>Message box</div>;
}
