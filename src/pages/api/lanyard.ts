import {NextApiRequest, NextApiResponse} from 'next';
import fetch from 'node-fetch';
import {LanyardData} from '../../types/lanyardData';

const DISCORD_ID = '606164529210064897';

async function lanyard(req: NextApiRequest, res: NextApiResponse) {
	const response = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
	if (response.status !== 200) {
		res.status(response.status);
		return;
	}

	const {data} = (await response.json()) as {data?: LanyardData};
	res.status(200).json(data);
}

export default lanyard;
