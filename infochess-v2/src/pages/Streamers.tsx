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
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRightIcon } from "lucide-react";

function Streamers(): React.JSX.Element {
	return (
		<>
			<div className="flex items-center justify-between mb-5">
				<h1 className="text-base font-medium">Streamers</h1>
				<Select>
					<SelectTrigger className="w-full max-w-48">
						<SelectValue placeholder="Select a platform" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Streaming Platforms</SelectLabel>
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
					<TableRow>
						<TableCell className="font-medium">
							<div className="flex items-center gap-3">
								<Avatar>
									<AvatarImage
										src="https://github.com/shadcn.png"
										alt="@shadcn"
										className="grayscale"
									/>
									<AvatarFallback>HK</AvatarFallback>
								</Avatar>
								<p>hikaru</p>
							</div>
						</TableCell>
						<TableCell className="font-medium">
							<Badge variant="destructive">Live Now</Badge>
						</TableCell>
						<TableCell className="font-medium">
							<div className="flex items-center gap-3">
								<Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
									YouTube
								</Badge>
								<Badge className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
									Twitch
								</Badge>
							</div>
						</TableCell>
						<TableCell className="font-medium">
							<div className="flex items-center gap-3">
								<Badge asChild>
									<a href="#link">
										Twitch Live <ArrowUpRightIcon data-icon="inline-end" />
									</a>
								</Badge>
								<Badge asChild>
									<a href="#link">
										YouTube Live
										<ArrowUpRightIcon data-icon="inline-end" />
									</a>
								</Badge>
							</div>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">
							<div className="flex items-center gap-3">
								<Avatar>
									<AvatarImage
										src="https://github.com/shadcn.png"
										alt="@shadcn"
										className="grayscale"
									/>
									<AvatarFallback>HK</AvatarFallback>
								</Avatar>
								<p>hikaru</p>
							</div>
						</TableCell>
						<TableCell className="font-medium">
							<Badge>Offline</Badge>
						</TableCell>
						<TableCell className="font-medium">
							<div className="flex items-center  gap-3">
								<Badge className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
									Twitch
								</Badge>
							</div>
						</TableCell>
						<TableCell className="font-medium">
							<div className="flex items-center gap-3">
								<Badge variant="ghost">Offline</Badge>
							</div>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>

			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious href="#" />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">1</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#" isActive>
							2
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">3</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
					<PaginationItem>
						<PaginationNext href="#" />
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</>
	);
}

export default Streamers;
