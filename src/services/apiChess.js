"use strict";

// const PLAYER_SEARCH_API_URL = "https://api.chess.com/pub/player/{username}";
// const TITLED_PLAYERS_API_URL = "://api.chess.com/pub/titled/{title}";
// const PLAYER_STATS_API_URL =
// 	"https://api.chess.com/pub/player/{username}/stats";
// const LEADERBOARDS_API_URL = "https://api.chess.com/pub/leaderboards";
// const STREAMERS_API_URL = "https://api.chess.com/pub/leaderboards";

export async function searchPlayer(username) {
	try {
		const res = await fetch(`https://api.chess.com/pub/player/${username}`);
		if (!res.ok) {
			throw Error("Failed searching player");
		}
		const data = await res.json();
		return data;
	} catch (e) {
		console.log(e);
	}
}
