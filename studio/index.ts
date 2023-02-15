import tag from './documents/tag';
import snippet from './documents/snippet';
import post from './documents/post';
import siteMeta from './documents/siteMeta';

import blockContent from './objects/blockContent';
import messageBox from './objects/messageBox';
import simpleBlockContent from './objects/simpleBlockContent';
import imageWithAlt from './objects/imageWithAlt';
import openGraph from './objects/openGraph';

export const schemaTypes = [
  post,
  tag,
  snippet,
  siteMeta,
  openGraph,
  blockContent,
  messageBox,
  simpleBlockContent,
  imageWithAlt
];
