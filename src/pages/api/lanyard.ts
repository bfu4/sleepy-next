import {api} from 'nextkit';
import fetch from 'node-fetch';
import {LanyardData} from '../../types/lanyardData';

const DISCORD_ID = '606164529210064897';

export default api<LanyardData>({
	async GET() {
		return fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`).then(
			async res => res.json() as Promise<LanyardData>
		);
	},
});
