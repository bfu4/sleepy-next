import {highlight, languages} from 'prismjs';
import 'prismjs/components/prism-java';

export function CodeBlock(props: {language: string; data: string}) {
  const lang = props.language.toLowerCase();
  const grammar = languages[lang];

  if (!grammar) {
    return null;
  }

  const data = highlight(props.data, grammar, props.data);

  return (
    <div className={'pt-1 pb-1 pr-2 pl-2 code-block'}>
      <div dangerouslySetInnerHTML={{__html: data}} className={`language-${lang}`} />
    </div>
  );
}
