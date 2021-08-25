import {CodeBlock} from '../components/codeblock';
import Link from 'next/link';
import {GitHub} from 'react-feather';
import {DevIcon} from '../components/icons';
import {HiddenElement} from '../components/hiddenElement';
import {Project, PROJECTS} from '../components/projects';

export default function Projects() {
	return (
		<div className="grid grid-cols-1">
			<div className="col-start-1">
				{PROJECTS.map(project => (
					<ProjectElement key={project.name} project={project} />
				))}
			</div>
		</div>
	);
}

function ProjectElement(props: {project: Project}): JSX.Element {
	return (
		<div className="project">
			<ProjectDeclaration
				name={props.project.name}
				description={props.project.description}
				icon={props.project.icon}
				github={props.project.url}
			/>
			<HiddenElement tooltip={props.project.tooltip}>
				<CodeBlock language={props.project.usageLanguage} data={props.project.usage} />
			</HiddenElement>
		</div>
	);
}

/**
 * Project declaration data.
 * @param props name, description, optional icon, github
 * @constructor
 */
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
					<button type="button">
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
