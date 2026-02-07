import {
	Trophy,
	TrendingUp,
	Target,
	CheckCircle2,
	XCircle,
	Minus,
	ExternalLink,
	Zap,
	Clock,
	Crown,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import type { ChessMode } from "@/types";

interface ChessModeCardProps {
	title: string;
	mode?: ChessMode;
}

export function ChessModeCard({ title, mode }: ChessModeCardProps) {
	if (!mode) return null;

	const totalGames = mode.record
		? mode.record.win + mode.record.loss + mode.record.draw
		: 0;

	const winRate =
		mode.record && totalGames > 0
			? Math.round((mode.record.win / totalGames) * 100)
			: 0;

	// Get icon based on chess mode
	const getModeIcon = () => {
		switch (title.toLowerCase()) {
			case "rapid":
				return <Clock className="h-5 w-5" />;
			case "blitz":
				return <Zap className="h-5 w-5" />;
			case "bullet":
				return <Target className="h-5 w-5" />;
			case "daily":
				return <Crown className="h-5 w-5" />;
			default:
				return <Trophy className="h-5 w-5" />;
		}
	};

	return (
		<Card className="overflow-hidden hover:shadow-lg transition-shadow">
			<CardHeader className="pb-3">
				<div className="flex items-center justify-between">
					<CardTitle className="capitalize text-lg flex items-center gap-2">
						{getModeIcon()}
						{title}
					</CardTitle>
					{mode.last && (
						<Badge variant="secondary" className="font-mono text-base">
							{mode.last.rating}
						</Badge>
					)}
				</div>
			</CardHeader>

			<CardContent className="space-y-4">
				{/* Current Rating */}
				{mode.last && (
					<div className="space-y-2">
						<div className="flex items-center gap-2 text-xs text-muted-foreground">
							<TrendingUp className="h-3.5 w-3.5" />
							<span className="uppercase tracking-wide font-medium">
								Current
							</span>
						</div>
						<div className="flex items-baseline gap-3">
							<span className="text-2xl font-bold">{mode.last.rating}</span>
							<span className="text-xs text-muted-foreground">
								±{mode.last.rd}
							</span>
						</div>
					</div>
				)}

				{/* Best Rating */}
				{mode.best && (
					<div className="space-y-2">
						<div className="flex items-center gap-2 text-xs text-muted-foreground">
							<Trophy className="h-3.5 w-3.5" />
							<span className="uppercase tracking-wide font-medium">Peak</span>
						</div>
						<div className="flex items-center justify-between">
							<span className="text-lg font-semibold text-amber-600 dark:text-amber-400">
								{mode.best.rating}
							</span>
							<a
								href={mode.best.game}
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
							>
								View game
								<ExternalLink className="h-3 w-3" />
							</a>
						</div>
					</div>
				)}

				{/* Record */}
				{mode.record && (
					<div className="space-y-3 pt-2">
						<div className="flex items-center gap-2 text-xs text-muted-foreground">
							<Target className="h-3.5 w-3.5" />
							<span className="uppercase tracking-wide font-medium">
								Record
							</span>
						</div>

						{/* Win Rate Bar */}
						<div className="space-y-1.5">
							<div className="flex justify-between items-center text-xs">
								<span className="text-muted-foreground">Win rate</span>
								<span className="font-semibold">{winRate}%</span>
							</div>
							<div className="h-2 bg-muted rounded-full overflow-hidden">
								<div
									className="h-full bg-linear-to-r from-green-500 to-emerald-600 transition-all"
									style={{ width: `${winRate}%` }}
								/>
							</div>
						</div>

						{/* W/L/D Stats */}
						<div className="grid grid-cols-3 gap-2 text-center">
							<div className="space-y-1">
								<div className="flex items-center justify-center gap-1">
									<CheckCircle2 className="h-3.5 w-3.5 text-green-600 dark:text-green-500" />
								</div>
								<p className="font-semibold text-sm">{mode.record.win}</p>
								<p className="text-xs text-muted-foreground">Wins</p>
							</div>
							<div className="space-y-1">
								<div className="flex items-center justify-center gap-1">
									<XCircle className="h-3.5 w-3.5 text-red-600 dark:text-red-500" />
								</div>
								<p className="font-semibold text-sm">{mode.record.loss}</p>
								<p className="text-xs text-muted-foreground">Losses</p>
							</div>
							<div className="space-y-1">
								<div className="flex items-center justify-center gap-1">
									<Minus className="h-3.5 w-3.5 text-gray-600 dark:text-gray-400" />
								</div>
								<p className="font-semibold text-sm">{mode.record.draw}</p>
								<p className="text-xs text-muted-foreground">Draws</p>
							</div>
						</div>

						{/* Total Games */}
						<div className="text-center pt-1">
							<p className="text-xs text-muted-foreground">
								{totalGames} total game{totalGames !== 1 ? "s" : ""}
							</p>
						</div>
					</div>
				)}
			</CardContent>
		</Card>
	);
}
