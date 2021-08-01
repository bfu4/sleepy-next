import {useEffect, useState} from 'react';
import {ChevronDown, Menu} from 'react-feather';
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

/**
 * Array of the pages.
 */
export const pages: Page[] = [home, about, projects];

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
		<nav className={'navbar ' + (open ? 'active' : '')}>
			<div className="pt-3 pl-6 button">
				<button type="button" onClick={handleClick}>
					<MenuIcon open={open} size={30} />
				</button>
				{open && <Children pages={pagesToRender} />}
			</div>
		</nav>
	);
}

/**
 * The navbar children.
 * @param props if the component is active, the pages to render, the router, and a callback.
 * @constructor
 */
function Children(props: {pages: Page[]}) {
	return (
		<div className="grid col-auto grid-rows-1 pl-3 nav-container">
			{props.pages.map(page => (
				<Link key={page.name} href={page.path}>
					<a className="nav-button">{page.name}</a>
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

	return <Menu size={props.size} />;
}
