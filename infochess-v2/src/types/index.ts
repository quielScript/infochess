// Chess Player Details
export interface StreamingPlatform {
	type: string;
	channel_url: string;
}

// Chess player base properties
export interface ChessPlayerBase {
	player_id: number;
	username: string;
	url: string;
	status: string;
	is_streamer: boolean;
	verified: boolean;
	followers: number;
	country: string;
	last_online: number;
	joined: number;
}

// Chess player optional properties
export interface ChessPlayer extends ChessPlayerBase {
	avatar?: string;
	name?: string;
	title?: string;
	location?: string;
	league?: string;
	twitch_url?: string;
	streaming_platforms?: StreamingPlatform[];
}

// Chess Player Stats
export interface RatingSnapshot {
	rating: number;
	date: number;
}

export interface RatingWithRD extends RatingSnapshot {
	rd: number;
}

export interface BestGame {
	rating: number;
	date: number;
	game: string;
}

export interface GameRecord {
	win: number;
	loss: number;
	draw: number;
	time_per_move?: number;
	timeout_percent?: number;
}

export interface ChessMode {
	last?: RatingWithRD;
	best?: BestGame;
	record?: GameRecord;
}

export interface TacticsStats {
	highest: RatingSnapshot;
	lowest: RatingSnapshot;
}

export interface PuzzleRushBest {
	total_attempts: number;
	score: number;
}

export interface PuzzleRush {
	best?: PuzzleRushBest;
}

export interface ChessStats {
	chess_daily?: ChessMode;
	chess960_daily?: ChessMode;
	chess_rapid?: ChessMode;
	chess_blitz?: ChessMode;
	chess_bullet?: ChessMode;

	fide?: number;

	tactics?: TacticsStats;
	puzzle_rush?: PuzzleRush;
}

// Leaderboards
export interface Trend {
	direction: number; // -1 | 0 | 1
	delta: number;
}

export interface LeaderboardCategory {
	value: string;
	label: string;
	group: "time" | "live" | "variant" | "other";
}

export interface LeaderboardPlayer {
	player_id: number;
	"@id": string;
	url: string;
	username: string;

	score: number;
	rank: number;

	country: string;
	status: "basic" | "premium";

	avatar: string;
	flair_code: string;

	win_count: number;
	loss_count: number;
	draw_count: number;

	trend_score: Trend;
	trend_rank: Trend;

	title?: string;
	name?: string;
}

export interface LeaderboardsResponse {
	daily: LeaderboardPlayer[];
	daily960: LeaderboardPlayer[];

	live_rapid: LeaderboardPlayer[];
	live_blitz: LeaderboardPlayer[];
	live_bullet: LeaderboardPlayer[];
	live_bughouse: LeaderboardPlayer[];
	live_blitz960: LeaderboardPlayer[];
	live_threecheck: LeaderboardPlayer[];

	tactics: LeaderboardPlayer[];
	rush: LeaderboardPlayer[];
	battle: LeaderboardPlayer[];
}

// Titled Players
export interface TitledPlayer {
	username: string;
}

export interface TitleCategory {
	value: string;
	label: string;
	group: "gm" | "im" | "fm" | "nm/cm";
}

export interface TitledPlayersResponse {
	players: string[];
}

// Streamers
export interface StreamingPlatform {
	type: "twitch" | "youtube" | string;
	channel_url: string;
	is_live: boolean;

	stream_url?: string;
	is_main_live_platform?: boolean;
}

export interface Streamer {
	username: string;
	avatar: string;
	url: string;

	is_live: boolean;
	is_community_streamer: boolean;

	platforms: StreamingPlatform[];

	twitch_url?: string;
}

export interface StreamersResponse {
	streamers: Streamer[];
}
