import {useEffect, useState} from 'react';
import {ChevronDown} from 'react-feather';
import Link from 'next/link';
import {useRouter} from 'next/router';

/**
 * The type for a page.
 */
type Page = {name: string; path: string};

/**
 * The home page.
 */
const home: Page = {name: 'home', path: '/'};

/**
 * About page.
 */
const about: Page = {name: 'about', path: '/about'};

/**
 * Projects page.
 */
const projects: Page = {name: 'projects', path: '/projects'};

const pgp: Page = {
	name: 'pgp',
	path: 'https://keys.openpgp.org/search?q=B408F5D139474D24C6ED6DBCFD1D952871D22043',
};

/**
 * Array of the pages.
 */
export const pages: Page[] = [home, about, projects, pgp];

/**
 * The navbar component.
 * @constructor create's a navbar based off of the current page.
 */
export function Navbar() {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const pagesToRender = pages.filter(page => page.path !== router.pathname);

	const handleClick = () => {
		setOpen(!open);
	};

	useEffect(() => {
		setOpen(false);
	}, [router.asPath]);

	return (
		<div className="pt-2 pb-0.5 my-1 mx-3">
			<nav className="navbar">
				<button
					type="button"
					className="row-start-1 py-2 pt-4 pl-4 button menu"
					onClick={handleClick}
				>
					<MenuIcon open={open} size={30} />
				</button>
			</nav>
			{open && <Children pages={pagesToRender} />}
		</div>
	);
}

/**
 * The navbar children.
 * @param props if the component is active, the pages to render, the router, and a callback.
 * @constructor
 */
function Children(props: {pages: Page[]}) {
	return (
		<div className="flex pt-3 rounded-md">
			{props.pages.map(page => (
				<Link key={page.name} href={page.path}>
					<a className="py-3 px-5 mr-3 text-center nav-sel nav-button">{page.name}</a>
				</Link>
			))}
		</div>
	);
}

/**
 * The menu icon is a component for the menu icon in the nav bar.
 * @param props open, size.
 * @constructor creates the component.
 */
function MenuIcon(props: {open: boolean; size: number}) {
	if (props.open) {
		return <ChevronDown size={props.size} />;
	}

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			style={{width: props.size, height: props.size}}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M4 6h16M4 12h8m-8 6h16"
			/>
		</svg>
	);
}
