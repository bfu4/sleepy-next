import Link from 'next/link';
import {Spotify} from '../components/spotify';
import {GitHub, Linkedin, Mail, Twitter} from 'react-feather';
import {DynamicMeta, MetaProps} from '../components/dynamicMeta';

const DESCRIPTION_META: MetaProps = {name: 'description', content: ':check:'};
const VIEW_META: MetaProps = {name: 'viewport', content: 'initial-scale=1.0, width=device-width'};
const THEME_COLOR: MetaProps = {name: 'theme-color', content: '#b8c5d6'};

export default function Index() {
	return (
		<>
			<DynamicMeta title="@bfu4" meta={[DESCRIPTION_META, VIEW_META, THEME_COLOR]} />
			<div className="mx-10">
				<div className="grid grid-cols-1 pt-10">
					<div className="col-start-1 pb-4 text-lg">
<<<<<<< HEAD
						Bella Fusari <a>(@bfu4)</a>
=======
						Bella Fusari <a className="pink-icon">(@bfu4)</a>
>>>>>>> 4e68bf3 (fix: es-shit)
					</div>
					<div className="text-sm text-darker">yooo?</div>
					<div className="container flex pt-6">
						<Link href="https://github.com/bfu4">
							<a target="_blank" rel="noreferrer" className="github">
								<GitHub size={30} />
							</a>
						</Link>
						<Link href="https://twitter.com/bellafusari1">
							<a target="_blank" rel="noreferrer" className="twitter">
								<Twitter size={30} />
							</a>
						</Link>
						<Link href="https://linked.in/in/bella-fusari">
							<a target="_blank" rel="noreferrer" className="linkedin">
								<Linkedin size={30} />
							</a>
						</Link>
						<Link href="mailto:bella@localhost22.com">
							<a target="_blank" className="mail">
								<Mail size={30} />
							</a>
						</Link>
					</div>
					<Spotify className="pt-2" />
				</div>
			</div>
		</>
	);
}
