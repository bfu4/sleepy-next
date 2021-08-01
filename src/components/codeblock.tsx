import {highlight, languages} from 'prismjs';

import 'prismjs/components/prism-java';
import 'prismjs/components/prism-xml-doc';
import 'prismjs/components/prism-go';

export function CodeBlock(props: {language: string; data: string}) {
  const lang = props.language.toLowerCase();
  const grammar = languages[lang];

  if (!grammar) {
    return null;
  }

  const data = highlight(props.data, grammar, lang);
  return (
    <div className={'pt-1 pb-1 pr-2 pl-2 code-block'}>
      <pre dangerouslySetInnerHTML={{__html: data}} className={`language-${lang}`} />
    </div>
  );
}
