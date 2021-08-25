import {TooltipData} from './tooltip';
import {DevIcon} from './icons';
import {Position} from 'react-tippy';

export interface Project {
	name: string;
	language: string;
	description: string;
	icon: JSX.Element;
	url: string;
	usage: string;
	usageLanguage: string;
	tooltip: TooltipData;
}

// eslint-disable-next-line max-params
function newProject(
	name: string,
	language: string,
	description: string,
	icon: JSX.Element,
	url: string,
	usage: string,
	usageLanguage: string,
	tooltip: {
		data: string;
		position: Position;
	}
): Project {
	return {
		name,
		language,
		description,
		icon,
		url,
		usage,
		usageLanguage,
		tooltip: tooltip as TooltipData,
	};
}

const stringparse = newProject(
	'stringparse',
	'java',
	'Concept of lazy, custom, string parsing using optionals.',
	<DevIcon className="pt-1" name="java" size={25} />,
	'https://github.com/bfu4/stringparse',
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
		'</dependency>',
	'xml',
	{data: 'maven usage', position: 'bottom'}
);

const rf = newProject(
	'rf',
	'java',
	'simple reflection based on Function<?,?>s and friendly-to-use enums',
	<DevIcon className="pt-1" name="java" size={25} />,
	'https://github.com/bfu4/rf',
	'<repository>\n' +
		'<!-- repositories -->\n' +
		'    <id>public</id>\n' +
		'    <url>https://nexus.sleeeepyti.me/repository/public</url>\n' +
		'</repository>\n' +
		'\n' +
		'<!-- dependencies -->\n' +
		'<dependency>\n' +
		'    <groupId>com.localhost22</groupId>\n' +
		'    <artifactId>rf</artifactId>\n' +
		'    <version>1.0</version>\n' +
		'</dependency>',
	'xml',
	{data: 'maven usage', position: 'bottom'}
);

const golisten = newProject(
	'golisten',
	'go',
	'super simple and small event bus structure for golang that allows emissions as go routines.',
	<DevIcon className="pt-1" name="go" size={25} />,
	'https://github.com/bfu4/golisten',
	'import "github.com/bfu4/golisten"',
	'go',
	{data: 'importing', position: 'bottom'}
);

const gomap = newProject(
	'gomap',
	'go',
	'Map functions utilizing basic interfaces, assertions, and ptypes.',
	<DevIcon className="pt-1" name="go" size={25} />,
	'https://github.com/prequist/gomap',
	'import "github.com/prequist/gomap"',
	'go',
	{data: 'importing', position: 'bottom'}
);

const ptypes = newProject(
	'ptypes',
	'go',
	' ptypes is a pointer-based box typing system for golang.',
	<DevIcon className="pt-1" name="go" size={25} />,
	'https://github.com/prequist/ptypes',
	'import "github.com/prequist/ptypes"',
	'go',
	{data: 'importing', position: 'bottom'}
);
export const PROJECTS: Project[] = [stringparse, golisten, rf, gomap, ptypes];
