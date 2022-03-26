import '../styles/globals.css';
import '../styles/index.css';
import {AppProps} from 'next/app';
import {Navbar} from '../components/nav';
import {SWRConfig} from 'swr';
import {APIResponse} from 'nextkit';
import {DynamicMeta, MetaProps} from '../components/dynamicMeta';

const DESCRIPTION_META: MetaProps = {name: 'description', content: 'bella fusari'};
const VIEW_META: MetaProps = {name: 'viewport', content: 'initial-scale=1.0, width=device-width'};
const THEME_COLOR: MetaProps = {name: 'theme-color', content: '#b8c5d6'};

export default function App({Component, pageProps}: AppProps) {
	return (
		<SWRConfig
			value={{
				async fetcher<T>(url: string) {
					return fetch(url).then(async res => {
						const body = (await res.json()) as APIResponse<T>;

						if (!body.success) {
							throw new Error(body.message);
						}

						return body.data;
					});
				},
			}}
		>
			<Navbar />
			<Component {...pageProps} />
			<DynamicMeta title="@bfu4" meta={[DESCRIPTION_META, VIEW_META, THEME_COLOR]} />
		</SWRConfig>
	);
}
