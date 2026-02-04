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
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
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
import { getLeaderBoards } from "@/services/apiChess";
import type {
	LeaderboardCategory,
	LeaderboardPlayer,
	TitledPlayersResponse,
} from "@/types";
import LeaderboardsPlayerRow from "@/features/chess/LeaderboardsPlayerRow";

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
	const MAX_VISIBLE_PAGES = 5;
	const PLAYERS_PER_PAGE = 10;

	const totalPlayers = categorizedLeaderboards.length;
	const totalPages = Math.ceil(totalPlayers / PLAYERS_PER_PAGE);

	const pageStartIndex = (currentPage - 1) * PLAYERS_PER_PAGE;
	const pageEndIndex = pageStartIndex + PLAYERS_PER_PAGE;

	const currentPagePlayers = categorizedLeaderboards.slice(
		pageStartIndex,
		pageEndIndex,
	);

	// Pagination logic
	const getVisiblePages = () => {
		const pages: (number | "ellipsis")[] = [];

		if (totalPages <= MAX_VISIBLE_PAGES + 2) {
			// Show all pages if total is small
			return Array.from({ length: totalPages }, (_, i) => i + 1);
		}

		// Always show page 1
		pages.push(1);

		// Calculate the range around current page
		let rangeStart = Math.max(2, currentPage - 1);
		let rangeEnd = Math.min(totalPages - 1, currentPage + 1);

		// Adjust range to always show 5 pages when possible
		if (currentPage <= 3) {
			rangeStart = 2;
			rangeEnd = Math.min(MAX_VISIBLE_PAGES, totalPages - 1);
		} else if (currentPage >= totalPages - 2) {
			rangeStart = Math.max(2, totalPages - MAX_VISIBLE_PAGES + 1);
			rangeEnd = totalPages - 1;
		}

		// Add ellipsis after page 1 if needed
		if (rangeStart > 2) {
			pages.push("ellipsis");
		}

		// Add the range of pages
		for (let i = rangeStart; i <= rangeEnd; i++) {
			pages.push(i);
		}

		// Add ellipsis before last page if needed
		if (rangeEnd < totalPages - 1) {
			pages.push("ellipsis");
		}

		// Always show last page if there's more than 1 page
		if (totalPages > 1) {
			pages.push(totalPages);
		}

		return pages;
	};

	const visiblePages = getVisiblePages();

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

			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious
							className={
								currentPage === 1
									? "pointer-events-none opacity-50"
									: "cursor-pointer"
							}
							onClick={() =>
								setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
							}
						/>
					</PaginationItem>

					{visiblePages.map((page, index) => {
						if (page === "ellipsis") {
							return (
								<PaginationItem key={`ellipsis-${index}`}>
									<PaginationEllipsis />
								</PaginationItem>
							);
						}

						return (
							<PaginationItem key={page}>
								<PaginationLink
									className="cursor-pointer"
									isActive={currentPage === page}
									onClick={() => setCurrentPage(page)}
								>
									{page}
								</PaginationLink>
							</PaginationItem>
						);
					})}

					<PaginationItem>
						<PaginationNext
							className={
								currentPage === totalPages
									? "pointer-events-none opacity-50"
									: "cursor-pointer"
							}
							onClick={() =>
								setCurrentPage((prev) => Math.min(prev + 1, totalPages))
							}
						/>
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</>
	);
}

export function loader(queryClient: QueryClient) {
	return async function () {
		const queryKey = ["leaderboards"];
		const cachedData =
			queryClient.getQueryData<TitledPlayersResponse>(queryKey);

		if (cachedData) return cachedData;

		const data = await getLeaderBoards();

		queryClient.setQueryData(queryKey, data);

		return data;
	};
}

export default Leaderboard;
