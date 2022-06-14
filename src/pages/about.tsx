import Link from 'next/link';

export default function About() {
	return (
		<div className="grid grid-cols-1">
			<div className="col-start-1">
				<Link href="http://104.131.62.11:8080">
					<a target="_blank">ok!</a>
				</Link>
			</div>
		</div>
	);
}
