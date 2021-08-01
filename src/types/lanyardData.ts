import {SpotifyData} from './spotifyData';
import {DiscordActivity, DiscordData} from './discord';

export interface LanyardData {
	spotify: SpotifyData;
	listening_to_spotify: boolean;
	discord_user: DiscordData;
	discord_status: string;
	activities: DiscordActivity[];
}
