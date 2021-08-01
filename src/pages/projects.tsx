import {CodeBlock} from '../components/codeblock';
import Link from 'next/link';
import {GitHub, Info, X} from 'react-feather';
import {useState} from 'react';
import {DevIcon} from '../components/icons';

export default function Projects() {
  return (
    <div className={'grid grid-cols-1'}>
      <div className={'col-start-1'}>
        <div className={'project'}>
          <ProjectDeclaration
            name={'stringparse'}
            description={'' + 'Concept of lazy, custom, string parsing using optionals.'}
            icon={<DevIcon className={'pt-1'} name={'java'} size={25} />}
            github={'https://github.com/bfu4/stringparse'}
          />
          <ShowElement
            children={
              <CodeBlock
                language={'xml'}
                data={
                  '<!-- repositories -->\n' +
                  '<repository>\n' +
                  '    <id>public</id>\n' +
                  '    <url>https://nexus.sleeeepyti.me/repository/public</url>\n' +
                  '</repository>\n' +
                  '\n' +
                  '<!-- dependencies -->\n' +
                  '<dependency>\n' +
                  '    <groupId>com.github.bfu4</groupId>\n' +
                  '    <artifactId>stringparse</artifactId>\n' +
                  '    <version>1.0</version>\n' +
                  '</dependency>'
                }
              />
            }
          />
        </div>
        <div className={'project'}>
          <ProjectDeclaration
            name={'golisten'}
            description={
              'super simple and small event bus structure for golang that allows emissions as go routines.'
            }
            github={'https://github.com/bfu4/golisten'}
          />
          <ShowElement
            children={<CodeBlock language={'go'} data={'import "github.com/bfu4/golisten"'} />}
          />
        </div>
      </div>
    </div>
  );
}

function ShowElement(props: {children: any}) {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <button onClick={() => setOpen(!open)}>
        <a>
          <Info />
        </a>
      </button>
    );
  }
  return (
    <>
      <button className={'close'}>
        <X onClick={() => setOpen(!open)} />
      </button>
      {props.children}
    </>
  );
}

function ProjectDeclaration(props: {
  name: string;
  description?: string;
  icon?: JSX.Element;
  github?: string;
}) {
  const id = props.name.replace('\u0020', '-').trim();
  return (
    <div id={id}>
      <div className={'project-name grid grid-cols-5 grid-rows-1'}>
        <div className={'col-start-1 container flex'}>
          <button>
            <Link href={`#${id}`}>
              <a>#</a>
            </Link>
          </button>
          <div className={'pl-2 pt-1'}>{props.name}</div>
          <div className={'pl-2 pt-2.5'}>
            {props.github ? (
              <Link href={props.github}>
                <a target={'_blank'} rel={'noreferrer'}>
                  <GitHub size={18} />
                </a>
              </Link>
            ) : null}
          </div>
          <div className={'pl-2'}>
            {props.icon ? <div className={'project-icon'}>{props.icon}</div> : null}
          </div>
        </div>
      </div>
      <p className={'project-description'}>{props.description}</p>
    </div>
  );
}
