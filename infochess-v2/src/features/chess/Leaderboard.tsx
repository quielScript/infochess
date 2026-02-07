import { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";

import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
	SelectLabel,
	SelectSeparator,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { PaginationControls } from "@/components/customs/PaginationControls";

import LeaderboardsPlayerRow from "@/features/chess/LeaderboardsPlayerRow";

import { getLeaderBoards } from "@/services/apiChess";
import type {
	LeaderboardCategory,
	LeaderboardPlayer,
	LeaderboardsResponse,
} from "@/types";
import { usePagination } from "@/hooks/usePagination";

function Leaderboard(): React.JSX.Element {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const leaderboards = useLoaderData();
	const { category = "daily" } = useParams();
	const navigate = useNavigate();
	const categorizedLeaderboards = leaderboards[category];
	const leaderboardsCategories: LeaderboardCategory[] = [
		{ value: "daily", label: "Daily", group: "time" },
		{ value: "daily960", label: "Daily960", group: "time" },

		{ value: "live_rapid", label: "Live Rapid", group: "live" },
		{ value: "live_blitz", label: "Live Blitz", group: "live" },
		{ value: "live_bullet", label: "Live Bullet", group: "live" },

		{ value: "live_bughouse", label: "Live Bughouse", group: "variant" },
		{ value: "live_blitz960", label: "Live Blitz960", group: "variant" },
		{ value: "live_threecheck", label: "Live Threecheck", group: "variant" },
		{ value: "live_crazyhouse", label: "Live Crazyhouse", group: "variant" },
		{
			value: "live_kingofthehill",
			label: "Live King of the Hill",
			group: "variant",
		},

		{ value: "tactics", label: "Tactics", group: "other" },
		{ value: "rush", label: "Rush", group: "other" },
		{ value: "battle", label: "Battle", group: "other" },
	];
	const groupedCategories = {
		time: leaderboardsCategories.filter((c) => c.group === "time"),
		live: leaderboardsCategories.filter((c) => c.group === "live"),
		variant: leaderboardsCategories.filter((c) => c.group === "variant"),
		other: leaderboardsCategories.filter((c) => c.group === "other"),
	};

	// Pagination
	const PLAYERS_PER_PAGE = 10;
	const {
		pageStartIndex,
		pageEndIndex,
		visiblePages,
		canGoPrevious,
		canGoNext,
	} = usePagination({
		totalItems: categorizedLeaderboards.length,
		itemsPerPage: PLAYERS_PER_PAGE,
		currentPage,
	});

	const currentPagePlayers = categorizedLeaderboards.slice(
		pageStartIndex,
		pageEndIndex,
	);

	return (
		<>
			<div className="flex items-center justify-between mb-5">
				<h1 className="flex h-5 gap-4 text-base font-medium">
					<span>Leaderboards</span>
					<Separator orientation="vertical" />
					<span className="text-oliveGreen capitalize">
						{category.split("_").join(" ")}
					</span>
				</h1>
				<Select
					value={category}
					onValueChange={(value) => {
						setCurrentPage(1);
						navigate(`/leaderboards/${value}`);
					}}
				>
					<SelectTrigger className="w-full max-w-48">
						<SelectValue placeholder="Select a category" />
					</SelectTrigger>

					<SelectContent>
						<SelectGroup>
							<SelectLabel>Time Controls</SelectLabel>
							{groupedCategories.time.map((cat) => (
								<SelectItem key={cat.value} value={cat.value}>
									{cat.label}
								</SelectItem>
							))}
						</SelectGroup>

						<SelectSeparator />

						<SelectGroup>
							<SelectLabel>Live / Fast Games</SelectLabel>
							{groupedCategories.live.map((cat) => (
								<SelectItem key={cat.value} value={cat.value}>
									{cat.label}
								</SelectItem>
							))}
						</SelectGroup>

						<SelectSeparator />

						<SelectGroup>
							<SelectLabel>Variant Games</SelectLabel>
							{groupedCategories.variant.map((cat) => (
								<SelectItem key={cat.value} value={cat.value}>
									{cat.label}
								</SelectItem>
							))}
						</SelectGroup>

						<SelectSeparator />

						<SelectGroup>
							<SelectLabel>Other Skills & Modes</SelectLabel>
							{groupedCategories.other.map((cat) => (
								<SelectItem key={cat.value} value={cat.value}>
									{cat.label}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<Table className="mb-5">
				<TableHeader>
					<TableRow>
						<TableHead className="w-md">Rank</TableHead>
						<TableHead className="w-md">Player</TableHead>
						<TableHead className="w-md">Username</TableHead>
						<TableHead className="w-md">Title</TableHead>
						<TableHead className="w-md">Score</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{currentPagePlayers.map((player: LeaderboardPlayer) => (
						<LeaderboardsPlayerRow key={player.player_id} player={player} />
					))}
				</TableBody>
			</Table>

			<PaginationControls
				currentPage={currentPage}
				visiblePages={visiblePages}
				canGoPrevious={canGoPrevious}
				canGoNext={canGoNext}
				onPageChange={setCurrentPage}
			/>
		</>
	);
}

export function loader(queryClient: QueryClient) {
	return async function () {
		const queryKey = ["leaderboards"];
		const cachedData = queryClient.getQueryData<LeaderboardsResponse>(queryKey);

		if (cachedData) return cachedData;

		const data: LeaderboardsResponse = await getLeaderBoards();

		queryClient.setQueryData(queryKey, data);

		return data;
	};
}

export default Leaderboard;
