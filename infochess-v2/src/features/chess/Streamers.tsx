import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import type { QueryClient } from "@tanstack/react-query";
import { ArrowUpRightIcon } from "lucide-react";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PaginationControls } from "@/components/customs/PaginationControls";

import StreamerPlatformBadge from "@/features/chess/StreamerPlatformBadge";

import { getStreamers } from "@/services/apiChess";
import { type Streamer, type StreamersResponse } from "@/types";
import { usePagination } from "@/hooks/usePagination";

function Streamers(): React.JSX.Element {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [platform, setPlatform] = useState<string>("all");
	const { streamers } = useLoaderData();
	const filteredStreamers = streamers.filter((streamer: Streamer) => {
		if (platform === "all") return true;

		return streamer.platforms.some((p) => p.type === platform);
	});

	const STREAMERS_PER_PAGE = 10;
	const {
		pageStartIndex,
		pageEndIndex,
		visiblePages,
		canGoPrevious,
		canGoNext,
	} = usePagination({
		totalItems: filteredStreamers.length,
		itemsPerPage: STREAMERS_PER_PAGE,
		currentPage,
	});

	const currentPageStreamers = filteredStreamers.slice(
		pageStartIndex,
		pageEndIndex,
	);

	// Helper function to check if streamer is live
	const isStreamerLive = (streamer: Streamer): boolean => {
		return streamer.platforms.some((platform) => platform.is_live);
	};

	// Helper function to get live platform channels
	const getLiveChannels = (streamer: Streamer) => {
		return streamer.platforms.filter((p) => {
			if (!p.is_live) return false;
			if (platform === "all") return true;
			return p.type === platform;
		});
	};

	return (
		<>
			<div className="flex items-center justify-between mb-5">
				<h1 className="flex h-5 gap-4 text-base font-medium">
					<span>Streamers</span>
					<Separator orientation="vertical" />
					<span className="text-oliveGreen capitalize">{platform}</span>
				</h1>
				<Select
					value={platform}
					onValueChange={(value) => {
						setCurrentPage(1);
						setPlatform(value);
					}}
				>
					<SelectTrigger className="w-full max-w-48">
						<SelectValue placeholder="Select a platform" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Streaming Platforms</SelectLabel>
							<SelectItem value="all">All Platforms</SelectItem>
							<SelectItem value="twitch">Twitch</SelectItem>
							<SelectItem value="youtube">YouTube</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<Table className="mb-5">
				<TableHeader>
					<TableRow>
						<TableHead className="w-md">Streamer</TableHead>
						<TableHead className="w-md">Status</TableHead>
						<TableHead className="w-md">Platform</TableHead>
						<TableHead className="w-md">Channel</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{currentPageStreamers.map((streamer: Streamer) => {
						const isLive = isStreamerLive(streamer);
						const liveChannels = getLiveChannels(streamer);

						return (
							<TableRow key={streamer.username}>
								<TableCell className="font-medium">
									<div className="flex items-center gap-3">
										<Avatar>
											<AvatarImage
												src={streamer.avatar}
												alt={streamer.username}
												className={!isLive ? "grayscale" : ""}
											/>
											<AvatarFallback>
												{streamer.username?.substring(0, 2).toUpperCase()}
											</AvatarFallback>
										</Avatar>
										<p>{streamer.username}</p>
									</div>
								</TableCell>
								<TableCell className="font-medium">
									{isLive ? (
										<Badge variant="destructive">Live Now</Badge>
									) : (
										<Badge>Offline</Badge>
									)}
								</TableCell>
								<TableCell className="font-medium">
									<div className="flex items-center gap-3">
										<StreamerPlatformBadge
											platforms={
												platform === "all"
													? streamer.platforms
													: streamer.platforms.filter(
															(p) => p.type === platform,
														)
											}
										/>
									</div>
								</TableCell>
								<TableCell className="font-medium">
									<div className="flex items-center gap-3">
										{liveChannels.length > 0 ? (
											liveChannels.map((channel) => (
												<Badge key={channel.type} asChild>
													<a
														href={channel.stream_url}
														target="_blank"
														rel="noopener noreferrer"
													>
														{channel.type === "youtube" ? "YouTube" : "Twitch"}{" "}
														Live
														<ArrowUpRightIcon data-icon="inline-end" />
													</a>
												</Badge>
											))
										) : (
											<Badge variant="ghost">Offline</Badge>
										)}
									</div>
								</TableCell>
							</TableRow>
						);
					})}
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
		const queryKey = ["streamers"];

		const cachedData = queryClient.getQueryData<StreamersResponse>(queryKey);

		if (cachedData) return cachedData;

		const data: StreamersResponse = await getStreamers();

		queryClient.setQueryData(queryKey, data);

		return data;
	};
}

export default Streamers;
