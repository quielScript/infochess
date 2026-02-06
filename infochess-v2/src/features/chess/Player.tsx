import SearchForm from "@/components/customs/SearchForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getSearchedPlayer } from "@/features/chess/chessInfo";
import { ChessModeCard } from "@/features/chess/ChessModeCard";
import { formatDate } from "@/helpers/helpers";
import { useAppSelector } from "@/hooks";
import { getPlayerStats } from "@/services/apiChess";
import type { ChessStats } from "@/types";
import {
	useLoaderData,
	useParams,
	type LoaderFunctionArgs,
} from "react-router-dom";
import {
	Calendar,
	Hash,
	Shield,
	Award,
	TrendingUp,
	TrendingDown,
	Brain,
	Zap,
	Target,
} from "lucide-react";

function Player(): React.JSX.Element {
	const { usernameQuery } = useParams();
	const playerStats = useLoaderData() as ChessStats | undefined;
	const searchedPlayer = useAppSelector(getSearchedPlayer);

	const {
		avatar = "",
		username = "",
		joined = 0,
		league = "none",
		player_id = 0,
	} = searchedPlayer || {};

	return (
		<div className="max-w-7xl mx-auto px-4 py-10">
			<SearchForm />

			{/* Empty state */}
			{!usernameQuery && (
				<p className="mt-20 text-center text-sm text-muted-foreground">
					Nothing to show here... search a player first.
				</p>
			)}

			{/* Player Profile + Stats */}
			{searchedPlayer && playerStats && (
				<div className="mt-14 space-y-12">
					{/* Enhanced Profile */}
					<Card className="overflow-hidden">
						<CardContent className="pt-6 pb-6">
							<div className="flex flex-col sm:flex-row gap-6">
								{/* Avatar */}
								<Avatar className="h-32 w-32 shadow-lg">
									<AvatarImage src={avatar} alt={username} />
									<AvatarFallback className="text-2xl">
										{username.slice(0, 2).toUpperCase()}
									</AvatarFallback>
								</Avatar>

								{/* User Info */}
								<div className="flex-1 space-y-4">
									<div>
										<h1 className="text-3xl font-bold mb-2">{username}</h1>
										<div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
											<div className="flex items-center gap-1.5">
												<Calendar className="h-4 w-4" />
												<span>Joined {formatDate(joined)}</span>
											</div>
											<div className="flex items-center gap-1.5">
												<Hash className="h-4 w-4" />
												<span>ID: {player_id}</span>
											</div>
										</div>
									</div>

									{/* Stats Grid */}
									<div className="flex items-center flex-wrap gap-3">
										<Badge
											variant="secondary"
											className="capitalize px-3 py-1.5 text-sm"
										>
											<Shield className="h-3.5 w-3.5 mr-1.5" />
											{league}
										</Badge>

										{playerStats.fide != null && (
											<Badge
												variant="outline"
												className="px-3 py-1.5 text-sm font-mono font-bold"
											>
												<Award className="h-3.5 w-3.5 mr-1.5" />
												FIDE: {playerStats.fide ?? 0}
											</Badge>
										)}
									</div>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Chess Modes */}
					<div>
						<h2 className="text-xl font-semibold text-center mb-4">
							Player Statistics
						</h2>

						<Separator className="mb-6" />

						<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
							<ChessModeCard title="Rapid" mode={playerStats.chess_rapid} />
							<ChessModeCard title="Blitz" mode={playerStats.chess_blitz} />
							<ChessModeCard title="Bullet" mode={playerStats.chess_bullet} />
							<ChessModeCard title="Daily" mode={playerStats.chess_daily} />
							<ChessModeCard
								title="Chess960"
								mode={playerStats.chess960_daily}
							/>
						</div>
					</div>

					{/* Training & Puzzles Grid */}
					<div>
						<h2 className="text-xl font-semibold text-center mb-4">
							Training & Puzzles
						</h2>

						<Separator className="mb-6" />

						<div className="grid gap-4 sm:grid-cols-2">
							{/* Enhanced Tactics */}
							{playerStats.tactics && (
								<Card className="overflow-hidden hover:shadow-lg transition-shadow">
									<CardHeader>
										<CardTitle className="flex items-center gap-2">
											<Brain className="h-5 w-5" />
											Tactics
										</CardTitle>
									</CardHeader>
									<CardContent className="space-y-4 pt-4">
										{/* Highest Rating */}
										<div className="space-y-2">
											<div className="flex items-center gap-2 text-xs text-muted-foreground">
												<TrendingUp className="h-3.5 w-3.5" />
												<span className="uppercase tracking-wide font-medium">
													Peak Rating
												</span>
											</div>
											<div className="flex items-baseline gap-3">
												<span className="text-3xl font-bold text-purple-600 dark:text-purple-400">
													{playerStats.tactics.highest.rating}
												</span>
												<span className="text-xs text-muted-foreground">
													{new Date(
														playerStats.tactics.highest.date * 1000,
													).toLocaleDateString()}
												</span>
											</div>
										</div>

										{/* Lowest Rating */}
										<div className="space-y-2 pt-2 border-t">
											<div className="flex items-center gap-2 text-xs text-muted-foreground">
												<TrendingDown className="h-3.5 w-3.5" />
												<span className="uppercase tracking-wide font-medium">
													Starting Point
												</span>
											</div>
											<div className="flex items-baseline gap-3">
												<span className="text-2xl font-semibold">
													{playerStats.tactics.lowest.rating}
												</span>
												<span className="text-xs text-muted-foreground">
													{new Date(
														playerStats.tactics.lowest.date * 1000,
													).toLocaleDateString()}
												</span>
											</div>
										</div>

										{/* Rating Improvement */}
										<div className="pt-2 border-t">
											<div className="flex items-center justify-between text-sm">
												<span className="text-muted-foreground">
													Total Improvement
												</span>
												<span className="font-bold text-green-600 dark:text-green-500">
													+
													{playerStats.tactics.highest.rating -
														playerStats.tactics.lowest.rating}
												</span>
											</div>
										</div>
									</CardContent>
								</Card>
							)}

							{/* Enhanced Puzzle Rush */}
							{playerStats.puzzle_rush?.best && (
								<Card className="overflow-hidden hover:shadow-lg transition-shadow">
									<CardHeader>
										<CardTitle className="flex items-center gap-2">
											<Zap className="h-5 w-5" />
											Puzzle Rush
										</CardTitle>
									</CardHeader>
									<CardContent className="space-y-4 pt-4">
										{/* Best Score */}
										<div className="space-y-2">
											<div className="flex items-center gap-2 text-xs text-muted-foreground">
												<Target className="h-3.5 w-3.5" />
												<span className="uppercase tracking-wide font-medium">
													Best Score
												</span>
											</div>
											<div className="flex items-center justify-between">
												<span className="text-4xl font-bold text-orange-600 dark:text-orange-400">
													{playerStats.puzzle_rush.best.score}
												</span>
												<div className="text-right">
													<p className="text-xs text-muted-foreground">
														puzzles
													</p>
													<p className="text-xs text-muted-foreground">
														solved
													</p>
												</div>
											</div>
										</div>

										{/* Total Attempts */}
										<div className="space-y-2 pt-2 border-t">
											<div className="flex items-center justify-between">
												<span className="text-sm text-muted-foreground">
													Total Attempts
												</span>
												<span className="text-2xl font-semibold">
													{playerStats.puzzle_rush.best.total_attempts}
												</span>
											</div>
										</div>

										{/* Success Rate */}
										<div className="pt-2 border-t">
											<div className="flex items-center justify-between text-sm">
												<span className="text-muted-foreground">
													Success Rate
												</span>
												<span className="font-bold">
													{Math.round(
														(playerStats.puzzle_rush.best.score /
															playerStats.puzzle_rush.best.total_attempts) *
															100,
													)}
													%
												</span>
											</div>
											<div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
												<div
													className="h-full bg-linear-to-r from-orange-500 to-amber-600 transition-all"
													style={{
														width: `${(playerStats.puzzle_rush.best.score / playerStats.puzzle_rush.best.total_attempts) * 100}%`,
													}}
												/>
											</div>
										</div>
									</CardContent>
								</Card>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export async function loader({ params }: LoaderFunctionArgs) {
	const username = params.usernameQuery;

	if (!username) {
		throw new Response(null, {
			status: 400,
			statusText: "Username is required",
		});
	}

	const playerStats = getPlayerStats(username);

	return playerStats;
}

export default Player;
