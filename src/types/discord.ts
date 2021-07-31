export interface DiscordData {
	username: string;
	public_flags: number;
	id: string;
	discriminator: string;
	avatar: string;
}

export interface DiscordActivity {
	type: number;
	state: string;
	name: string;
	id: string;
	emoji: DiscordEmoji;
}

export interface DiscordEmoji {
	name: string;
	id: string;
	animated: string;
}
