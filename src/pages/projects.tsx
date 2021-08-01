import {CodeBlock} from '../components/codeblock';
import Link from 'next/link';
import {GitHub} from 'react-feather';
import {DevIcon} from '../components/icons';
import {HiddenElement} from '../components/hiddenElement';

export default function Projects() {
<<<<<<< HEAD
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
          <HiddenElement
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
            tooltip={{data: 'maven usage', position: 'bottom'}}
          />
        </div>
        <div className={'project'}>
          <ProjectDeclaration
            name={'golisten'}
            description={
              'super simple and small event bus structure for golang that allows emissions as go routines.'
            }
            icon={<DevIcon className={'pt-1'} name={'go'} size={25} />}
            github={'https://github.com/bfu4/golisten'}
          />
          <HiddenElement
            children={<CodeBlock language={'go'} data={'import "github.com/bfu4/golisten"'} />}
            tooltip={{data: 'importing', position: 'bottom'}}
          />
        </div>
      </div>
    </div>
  );
}

/**
 * Project declaration data.
 * @param props name, description, optional icon, github
 * @constructor
 */
=======
	return (
		<div className="grid grid-cols-1">
			<div className="col-start-1">
				<div className="project">
					<ProjectDeclaration
						name="stringparse"
						description={'' + 'Concept of lazy, custom, string parsing using optionals.'}
						icon={<DevIcon className="pt-1" name="java" size={25} />}
						github="https://github.com/bfu4/stringparse"
					/>
					<ShowElement
						children={
							<CodeBlock
								language="xml"
								data={
									'<!-- repositories -->\n'
                  + '<repository>\n'
                  + '    <id>public</id>\n'
                  + '    <url>https://nexus.sleeeepyti.me/repository/public</url>\n'
                  + '</repository>\n'
                  + '\n'
                  + '<!-- dependencies -->\n'
                  + '<dependency>\n'
                  + '    <groupId>com.github.bfu4</groupId>\n'
                  + '    <artifactId>stringparse</artifactId>\n'
                  + '    <version>1.0</version>\n'
                  + '</dependency>'
								}
							/>
						}
					/>
				</div>
				<div className="project">
					<ProjectDeclaration
						name="golisten"
						description="super simple and small event bus structure for golang that allows emissions as go routines."
						github="https://github.com/bfu4/golisten"
					/>
					<ShowElement
						children={<CodeBlock language="go" data={'import "github.com/bfu4/golisten"'} />}
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
			<button onClick={() => {
				setOpen(!open);
			}}
			>
				<a>
					<Info />
				</a>
			</button>
		);
	}

	return (
		<>
			<button className="close">
				<X onClick={() => {
					setOpen(!open);
				}} />
			</button>
			{props.children}
		</>
	);
}

>>>>>>> a6d7f3b (project cleanup)
function ProjectDeclaration(props: {
	name: string;
	description?: string;
	icon?: JSX.Element;
	github?: string;
}) {
	const id = props.name.replace('\u0020', '-').trim();
	return (
		<div id={id}>
			<div className="grid grid-cols-5 grid-rows-1 project-name">
				<div className="container flex col-start-1">
					<button>
						<Link href={`#${id}`}>
							<a>#</a>
						</Link>
					</button>
					<div className="pt-1 pl-2">{props.name}</div>
					<div className="pt-2.5 pl-2">
						{props.github ? (
							<Link href={props.github}>
								<a target="_blank" rel="noreferrer">
									<GitHub size={18} />
								</a>
							</Link>
						) : null}
					</div>
					<div className="pl-2">
						{props.icon ? <div className="project-icon">{props.icon}</div> : null}
					</div>
				</div>
			</div>
			<p className="project-description">{props.description}</p>
		</div>
	);
}
