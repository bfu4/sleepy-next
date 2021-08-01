import '../styles/globals.css';
import '../styles/index.css';
import {AppProps} from 'next/app';
import {Navbar} from '../components/nav';
import {SWRConfig} from 'swr';
import {APIResponse} from 'nextkit';

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
		</SWRConfig>
	);
}
