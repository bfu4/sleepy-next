import Image from 'next/image';
import {ArrowLeft} from 'react-feather';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="mt-20 text-center">
			<Image src="https://http.cat/404" alt="404" width={300} height={300} />
			<div className="grid py-6">
				<div>page not found.</div>
				<div className="flex justify-center text-center">
					<Link href="/">
						<a className="close dark">
							<ArrowLeft />
						</a>
					</Link>
					Go home
				</div>
			</div>
		</div>
	);
}
