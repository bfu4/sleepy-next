import {SpotifyData} from './spotifyData';
import {DiscordData, DiscordActivity} from './discord';

export interface LanyardData {
	spotify: SpotifyData;
	listening_to_spotify: boolean;
	discord_user: DiscordData;
	discord_status: string;
	activities: DiscordActivity[];
}
