"use strict";

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

export async function getPlayerStats(username) {
	try {
		const res = await fetch(
			`https://api.chess.com/pub/player/${username}/stats`
		);
		if (!res.ok) {
			throw Error("Failed getting player stats");
		}
		const data = await res.json();
		return data;
	} catch (e) {
		console.log(e);
	}
}

export async function getTitledPlayers(title) {
	try {
		const res = await fetch(`https://api.chess.com/pub/titled/${title}`);
		if (!res.ok) {
			throw Error("Failed getting titled players");
		}
		const data = await res.json();
		return data;
	} catch (e) {
		console.log(e);
	}
}

export async function getLeaderboards() {
	try {
		const res = await fetch("https://api.chess.com/pub/leaderboards");
		if (!res.ok) {
			throw Error("Failed getting leaderboards");
		}
		const data = await res.json();
		return data;
	} catch (e) {
		console.log(e);
	}
}

export async function getStreamers() {
	try {
		const res = await fetch("https://api.chess.com/pub/streamers");
		if (!res.ok) {
			throw Error("Failed getting streamers");
		}
		const data = await res.json();
		return data;
	} catch (e) {
		console.log(e);
	}
}
