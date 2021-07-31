import {useState} from 'react';
import {Icon, Menu, ChevronDown} from 'react-feather';
import Link from 'next/link';
import {useRouter, NextRouter} from 'next/router';

/**
 * The type for a page.
 */
type Page = {name: string; path: string};

/**
 * The home page.
 */
const home = {name: 'home', path: '/'};

/**
 * About page.
 */
const about = {name: 'about', path: '/about'};

/**
 * Projects page.
 */
const projects = {name: 'projects', path: '/projects'};

/**
 * Array of the pages.
 */
export const pages = [home, about, projects];

/**
 * The navbar component.
 * @constructor create's a navbar based off of the current page.
 */
export function Navbar() {
  const router = useRouter();
  const [selected, setSelected] = useState(false);
  const [Icon, setIcon] = useState<Icon>(Menu);
  const pagesToRender = pages.filter(page => page.path !== router.pathname);

  const handleClick = () => {
    setSelected(!selected);
    if (selected) {
      setIcon(ChevronDown);
    } else {
      setIcon(Menu);
    }
  };

  const handler = (path: string) => {
    if (path !== router.pathname) {
      router.push(path).then(() => {
        setSelected(false);
      });
    }
  };

  return (
    <>
      <nav className={'navbar ' + (selected ? 'active' : '')}>
        <div className={'pl-6 pt-3 button'}>
          <Link href={router.pathname}>
            <a onClick={() => handleClick()}>
              <Icon size={30} />
            </a>
          </Link>
          <Children
            active={selected}
            pages={pagesToRender}
            router={router}
            // Turn it off.
            handler={handler}
          />
        </div>
      </nav>
    </>
  );
}

/**
 * The navbar children.
 * @param props if the component is active, the pages to render, the router, and a callback.
 * @constructor
 */
function Children(props: {
  active: boolean;
  pages: Page[];
  router: NextRouter;
  handler?: (path: string) => void;
}) {
  // Return nothing.
  if (!props.active) {
    return <></>;
  } else {
    // Render.
    return (
      <div className={'nav-container grid grid-rows-1 col-auto pl-3'}>
        {props.pages.map(page => {
          return (
            <div className={'nav-button'} key={page.name}>
              <a onClick={() => props.handler?.(page.path)}>
                <button>{page.name}</button>
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}
