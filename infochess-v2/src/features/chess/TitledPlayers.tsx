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
import { type TitleCategory, type TitledPlayersResponse } from "@/types";
import type { QueryClient } from "@tanstack/react-query";
import {
	useLoaderData,
	useNavigate,
	useParams,
	type LoaderFunctionArgs,
} from "react-router-dom";
import { getTitledPlayers } from "@/services/apiChess";
import TitledPlayersPlayerRow from "@/features/chess/TitledPlayersPlayerRow";
import { useState } from "react";

function TitledPlayers(): React.JSX.Element {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const { title = "GM" } = useParams();
	const navigate = useNavigate();
	const { players } = useLoaderData();

	const titleCategories: TitleCategory[] = [
		{ value: "GM", label: "Grand Master (GM)", group: "gm" },
		{ value: "WGM", label: "Woman Grand Master (WGM)", group: "gm" },

		{ value: "IM", label: "International Master (IM)", group: "im" },
		{ value: "WIM", label: "Woman International Master (WIM)", group: "im" },

		{ value: "FM", label: "FIDE Master (FM)", group: "fm" },
		{ value: "WFM", label: "Woman FIDE Master (WFM)", group: "fm" },

		{ value: "NM", label: "National Master (NM)", group: "nm/cm" },
		{ value: "WNM", label: "Woman National Master (WNM)", group: "nm/cm" },
		{ value: "CM", label: "Candidate Master (CM)", group: "nm/cm" },
		{ value: "WCM", label: "Woman Candidate Master (WCM)", group: "nm/cm" },
	];
	const groupedCategories = {
		gm: titleCategories.filter((c) => c.group === "gm"),
		im: titleCategories.filter((c) => c.group === "im"),
		fm: titleCategories.filter((c) => c.group === "fm"),
		nmCm: titleCategories.filter((c) => c.group === "nm/cm"),
	};
	const selectedTitleLabel =
		titleCategories.find((cat) => cat.value === title)?.label ??
		"Grand Master (GM)";

	// Pagination
	const MAX_VISIBLE_PAGES = 5;
	const PLAYERS_PER_PAGE = 10;

	const totalPlayers = players.length;
	const totalPages = Math.ceil(totalPlayers / PLAYERS_PER_PAGE);

	const pageStartIndex = (currentPage - 1) * PLAYERS_PER_PAGE;
	const pageEndIndex = pageStartIndex + PLAYERS_PER_PAGE;

	const currentPagePlayers = players.slice(pageStartIndex, pageEndIndex);

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
					<span>Titled Players</span>
					<Separator orientation="vertical" />
					<span className="text-oliveGreen">{selectedTitleLabel}</span>
				</h1>
				<Select
					value={title}
					onValueChange={(value) => {
						setCurrentPage(1);
						navigate(`/titledPlayers/${value}`);
					}}
				>
					<SelectTrigger className="w-full max-w-48">
						<SelectValue placeholder="Select a category" />
					</SelectTrigger>

					<SelectContent>
						<SelectGroup>
							<SelectLabel>Grand Master</SelectLabel>
							{groupedCategories.gm.map((cat) => (
								<SelectItem key={cat.value} value={cat.value}>
									{cat.label}
								</SelectItem>
							))}
						</SelectGroup>

						<SelectSeparator />

						<SelectGroup>
							<SelectLabel>International Master</SelectLabel>
							{groupedCategories.im.map((cat) => (
								<SelectItem key={cat.value} value={cat.value}>
									{cat.label}
								</SelectItem>
							))}
						</SelectGroup>

						<SelectSeparator />

						<SelectGroup>
							<SelectLabel>FIDE Master</SelectLabel>
							{groupedCategories.fm.map((cat) => (
								<SelectItem key={cat.value} value={cat.value}>
									{cat.label}
								</SelectItem>
							))}
						</SelectGroup>

						<SelectSeparator />

						<SelectGroup>
							<SelectLabel>National Master / Candidate Master</SelectLabel>
							{groupedCategories.nmCm.map((cat) => (
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
						<TableHead className="w-md">Player</TableHead>
						<TableHead className="w-md">Username</TableHead>
						<TableHead className="w-md">Country</TableHead>
						<TableHead className="w-md">Title</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{currentPagePlayers.map((player: string) => (
						<TitledPlayersPlayerRow key={player} player={player} />
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
							onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
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
	return async function ({ params }: LoaderFunctionArgs) {
		const title = params.title ?? "GM";
		const queryKey = ["titledPlayers", title];
		const cachedData =
			queryClient.getQueryData<TitledPlayersResponse>(queryKey);

		if (cachedData) return cachedData;

		const data: TitledPlayersResponse = await getTitledPlayers(title);

		queryClient.setQueryData(queryKey, data);

		return data;
	};
}

export default TitledPlayers;
