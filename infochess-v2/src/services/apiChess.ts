"use strict";

import type {
	ChessPlayer,
	ChessStats,
	LeaderboardsResponse,
	Streamers,
	TitledPlayersResponse,
} from "@/types";

export async function searchPlayer(username: string): Promise<ChessPlayer> {
	try {
		const res = await fetch(`https://api.chess.com/pub/player${username}`);

		if (!res.ok) {
			throw new Error("Failed searching player");
		}

		const data = await res.json();

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

		const data = await res.json();

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

export async function getStreamers(): Promise<Streamers> {
	try {
		const res = await fetch("https://api.chess.com/pub/streamers");

		if (!res.ok) {
			throw Error("Failed getting streamers");
		}

		const data = await res.json();

		return data;
	} catch (err) {
		if (err instanceof Error) {
			throw new Error(err.message);
		}

		throw new Error("Something went wrong. Please try again.");
	}
}
