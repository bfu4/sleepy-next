import Head from 'next/head';
import Link from 'next/link';
import {Spotify} from '../components/spotify';
import {GitHub, Twitter} from 'react-feather';
import {Navbar} from '../components/nav';

export default function Index() {
  return (
    <>
      <Head>
        <title>@bfu4</title>
        <meta name="description" content=":check:" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mr-10 ml-10">
        <div className="grid grid-cols-1 pt-10">
          <div className="col-start-1 pb-4 text-lg">
            Bella Fusari <a className={'pink-icon'}>(@bfu4)</a>
          </div>
          <div className="text-sm">yooo?</div>
          <div className="container pt-6 flex">
            <Link href="https://github.com/bfu4">
              <a target="_blank" rel="noreferrer">
                <GitHub size={30} />
              </a>
            </Link>
            <Link href="https://twitter.com/bellafusari1">
              <a target="_blank" rel="noreferrer">
                <Twitter size={30} />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <footer>
        <Spotify />
      </footer>
    </>
  );
}
