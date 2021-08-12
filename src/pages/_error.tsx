import Image from 'next/image';
import Link from 'next/link';
import {ArrowLeft} from 'react-feather';

export default function Error() {
	return (
		<div className="mt-20 text-center">
			<Image src="https://http.cat/500" alt="error" width={300} height={300} />
			<div className="grid py-6">
				<div>an error occurred :&lt;</div>
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
