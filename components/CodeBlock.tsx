import Refractor from 'react-refractor';
import js from 'refractor/lang/javascript';
import ts from 'refractor/lang/typescript';
import css from 'refractor/lang/css';
import sh from 'refractor/lang/shell-session';
import jsx from 'refractor/lang/jsx';

Refractor.registerLanguage(js);
Refractor.registerLanguage(ts);
Refractor.registerLanguage(css);
Refractor.registerLanguage(sh);
Refractor.registerLanguage(jsx);

export function CodeBlock(props: any) {
  console.log({ props });
  return (
    <Refractor
      // In this example, `props` is the value of a `code` field
      language='jsx'
      value={props.code}
      markers={props.highlightedLines}
    />
  );
}
