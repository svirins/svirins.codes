import React from 'react';
import Refractor from 'react-refractor';
import js from 'refractor/lang/javascript';
import typescript from 'refractor/lang/typescript';
import jsx from 'refractor/lang/jsx';
import css from 'refractor/lang/css';
import bash from 'refractor/lang/bash';
import { font_mono } from 'fonts';

Refractor.registerLanguage(js);
Refractor.registerLanguage(typescript);
Refractor.registerLanguage(jsx);
Refractor.registerLanguage(css);
Refractor.registerLanguage(bash);

export function CodeBlock({ value }: { value: any }) {
  // const language = value.filename.split('.').pop() ?? 'js';
  const language = value.language ?? 'js';
  const markers = value.highlightedLines ?? [];
  return (
    <div className={`font_mono ${font_mono.variable}`}>
      <Refractor language={language} value={value.code} markers={markers} />
    </div>
  );
}
