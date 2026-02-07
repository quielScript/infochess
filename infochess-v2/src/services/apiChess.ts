"use strict";

import type {
	ChessPlayer,
	ChessStats,
	LeaderboardsResponse,
	StreamersResponse,
	TitledPlayersResponse,
} from "@/types";

export async function searchPlayer(username: string): Promise<ChessPlayer> {
	try {
		const res = await fetch(`https://api.chess.com/pub/player/${username}`);

		const data = await res.json();

		if (!res.ok) {
			// Chess.com sends error details in the response body
			throw new Error(data.message || "Failed searching player");
		}

		return data;
	} catch (err: unknown) {
		if (err instanceof Error) {
			throw new Error(err.message);
		}

		throw new Error("Something went wrong. Please try again.");
	}
}

export async function getPlayerStats(username: string): Promise<ChessStats> {
	try {
		const res = await fetch(
			`https://api.chess.com/pub/player/${username}/stats`,
		);

		if (!res.ok) {
			throw new Error("Failed getting player stats");
		}

		const data: ChessStats = await res.json();

		return data;
	} catch (err: unknown) {
		if (err instanceof Error) {
			throw new Error(err.message);
		}

		throw new Error("Something went wrong. Please try again.");
	}
}

export async function getLeaderBoards(): Promise<LeaderboardsResponse> {
	try {
		const res = await fetch("https://api.chess.com/pub/leaderboards");

		if (!res.ok) {
			throw new Error("Failed getting leaderboards");
		}

		const data: LeaderboardsResponse = await res.json();

		return data;
	} catch (err: unknown) {
		if (err instanceof Error) {
			throw new Error(err.message);
		}

		throw new Error("Something went wrong. Please try again.");
	}
}

export async function getTitledPlayers(
	title: string,
): Promise<TitledPlayersResponse> {
	try {
		const res = await fetch(`https://api.chess.com/pub/titled/${title}`);

		if (!res.ok) {
			throw Error("Failed getting titled players");
		}

		const data: TitledPlayersResponse = await res.json();

		return data;
	} catch (err: unknown) {
		if (err instanceof Error) {
			throw new Error(err.message);
		}

		throw new Error("Something went wrong. Please try again.");
	}
}

// Function for getting player information for titled players
export async function getPlayersByUsernames(
	usernames: string[],
): Promise<ChessPlayer[]> {
	const requests = usernames.map(async (username) => {
		const res = await fetch(`https://api.chess.com/pub/player/${username}`);

		if (!res.ok) return null;
		return res.json();
	});

	const results = await Promise.all(requests);

	// Remove failed/null entries
	return results.filter(Boolean) as ChessPlayer[];
}

export async function getCountries(
	countryUrls: string[],
): Promise<Record<string, string>> {
	const uniqueUrls = [...new Set(countryUrls.filter(Boolean))];

	const requests = uniqueUrls.map(async (url) => {
		try {
			const res = await fetch(url);
			if (!res.ok) return null;
			const data = await res.json();
			return { url, name: data.name };
		} catch {
			return null;
		}
	});

	const results = await Promise.all(requests);

	// Create a mapping of URL -> country name
	const countryMap: Record<string, string> = {};
	results.forEach((result) => {
		if (result) {
			countryMap[result.url] = result.name;
		}
	});

	return countryMap;
}

export async function getStreamers(): Promise<StreamersResponse> {
	try {
		const res = await fetch("https://api.chess.com/pub/streamers");

		if (!res.ok) {
			throw Error("Failed getting streamers");
		}

		const data: StreamersResponse = await res.json();

		return data;
	} catch (err) {
		if (err instanceof Error) {
			throw new Error(err.message);
		}

		throw new Error("Something went wrong. Please try again.");
	}
}
