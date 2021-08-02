import {SpotifyData} from './spotifyData';
import {DiscordActivity, DiscordData} from './discord';

/**
 * Wrapper interface for the lanyard data pulled from {@code /api/lanyard}.
 */
export interface LanyardDataWrapper {
	data: LanyardData;
}

/**
 * The actual interface of lanyard data to be pulled.
 */
export interface LanyardData {
	spotify: SpotifyData;
	listening_to_spotify: boolean;
	discord_user: DiscordData;
	discord_status: string;
	activities: DiscordActivity[];
}
