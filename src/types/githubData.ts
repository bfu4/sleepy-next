/**
 * Interface describing github data.
 */
export interface GithubData {
	login: string;
	name: string;
	blog?: string;
	email?: string;
	company?: string;
	html_url: string;
	location?: string;
	bio?: string;
	twitter_username?: string;
	followers: number;
	following: number;
	id: number;
	created_at: string;
	updated_at: string;
}
