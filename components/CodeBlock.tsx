import React from 'react';
import Refractor from 'react-refractor';
import js from 'refractor/lang/javascript';
import typescript from 'refractor/lang/typescript';
import jsx from 'refractor/lang/jsx';
import css from 'refractor/lang/css';
import bash from 'refractor/lang/bash';
import { font_mono } from 'fonts';

interface CodeBlock {
  _key: 'string';
  _type: 'string';
  code: 'string';
  filename: 'string';
  language: 'string';
  highlightedLines?: number[];
}

Refractor.registerLanguage(js);
Refractor.registerLanguage(typescript);
Refractor.registerLanguage(jsx);
Refractor.registerLanguage(css);
Refractor.registerLanguage(bash);

// TODO: pre tag - styling, make top padding smaller
export function CodeBlock({ value }: { value: CodeBlock }) {
  const language = value.language ?? 'js';
  const markers = value.highlightedLines ?? [];
  return (
    <div className={`font_mono ${font_mono.variable}`}>
      {value.filename && <span className='code-title'>{value.filename}</span>}
      <Refractor
        className='scrollbar overflow-visible'
        language={language}
        value={value.code}
        markers={markers}
      />
    </div>
  );
}
