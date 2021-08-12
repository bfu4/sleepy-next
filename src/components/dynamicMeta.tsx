import Head from 'next/head';

/**
 * More dynamic head section.
 * @param props properties
 * @constructor
 */
export function DynamicMeta(props: {title: string; meta: MetaProps[]; children?: any}) {
	return (
		<Head>
			<title>{props.title}</title>
			<link rel="icon" href="/favicon.ico" />
			{props.meta.map(prop => {
				if (prop.name) {
					return <meta key={prop.name} name={prop.name} content={prop.content} />;
				}

				if (prop.property) {
					return <meta key={prop.name} property={prop.property} content={prop.content} />;
				}

				return null;
			})}
			{props.children}
		</Head>
	);
}

/**
 * Meta tag properties.
 */
export interface MetaProps {
	name?: string;
	property?: string;
	content: string;
}
