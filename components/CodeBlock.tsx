import React from 'react';
import Refractor from 'react-refractor';
import js from 'refractor/lang/javascript';
import typescript from 'refractor/lang/typescript';
import jsx from 'refractor/lang/jsx';
import css from 'refractor/lang/css';
import bash from 'refractor/lang/bash';

import { font_sans } from 'fonts';
Refractor.registerLanguage(js);
Refractor.registerLanguage(typescript);
Refractor.registerLanguage(jsx);
Refractor.registerLanguage(css);
Refractor.registerLanguage(bash);

export function CodeBlock({ value }: { value: any }) {
  console.log({ value });
  const language = value.filename.split('.').pop() ?? 'js';
  return (
    <Refractor
      // language={language}
      language='js'
      value={value.code}
      markers={value.highlightedLines}
    />
  );
}
