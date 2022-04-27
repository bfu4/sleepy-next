import Link from 'next/link';
import {GitHub, Linkedin, Mail, Twitter} from 'react-feather';
import Image from 'next/image';
import {Spotify} from '../components/spotify';
import {Polywork} from '../components/polywork';
import {Google} from '../components/google';

export default function Index() {
	return (
		<div className="mx-10">
			<div className="grid grid-rows-2 pt-6">
				<div className="pb-2 text-lg">
					<div className="container flex row-start-1 max-w-full">
						<figure className="pt-3 pr-6 max-w-max">
							<Image
								className="mx-1 profile"
								src="https://avatars.githubusercontent.com/u/46942366?s=400&u=b06abbb9d3eb3adb0f8f696ce46de529775fae82&v=4"
								alt="image"
								layout="fixed"
								width={140}
								height={140}
							/>
							<div className="max-w-lg max-h-max">
								Bella Fusari <a className="pink-icon">(@bfu4)</a>
							</div>
						</figure>
					</div>
					<div className="row-start-2">
						<div className="pt-3 text-sm text-darker">
							Java/C++/Go. I like to play with software for experimental outcomes. I also like VMs.
							<div className="pt-6">Wanna see more? Check out my Github.</div>
							<div className="pt-6">
								Want to get in touch? You can email me or message me on Twitter.
							</div>
						</div>
						<Spotify />
						<div className="container flex pt-5">
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
							<Link href="https://linkedin.com/in/bella-fusari">
								<a target="_blank" rel="noreferrer" className="linkedin">
									<Linkedin size={30} />
								</a>
							</Link>
							<Link href="mailto:bella@localhost22.com">
								<a target="_blank" className="mail">
									<Mail size={30} />
								</a>
							</Link>
							<Link href="https://g.dev/bfu">
								<a target="_blank" className="google">
									<Google />
								</a>
							</Link>
							<Link href="https://polywork.com/bellafusari">
								<a target="_blank" className="polywork-svg">
									<Polywork />
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
