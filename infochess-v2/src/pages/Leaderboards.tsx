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
import { Badge } from "@/components/ui/badge";
import RankBadge from "@/components/ui/RankBadge";

function Leaderboards(): React.JSX.Element {
	const rankBadgeStyles = {
		1: "bg-yellow-50 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300",
		2: "bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300",
		3: "bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300",
	};

	return (
		<>
			<div className="flex items-center justify-between mb-5">
				<h1 className="flex h-5 gap-4 text-base font-medium">
					<span>Leaderboards</span>
					<Separator orientation="vertical" />
					<span className="text-oliveGreen">Daily</span>
				</h1>
				<Select>
					<SelectTrigger className="w-full max-w-48">
						<SelectValue placeholder="Select a category" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Time Controls</SelectLabel>
							<SelectItem value="daily">Daily</SelectItem>
							<SelectItem value="daily960">Daily960</SelectItem>
						</SelectGroup>
						<SelectSeparator />
						<SelectGroup>
							<SelectLabel>Live / Fast Games</SelectLabel>
							<SelectItem value="live_rapid">Live Rapid</SelectItem>
							<SelectItem value="live_blitz">Live Blitz</SelectItem>
							<SelectItem value="live_bullet">Live Bullet</SelectItem>
						</SelectGroup>
						<SelectSeparator />
						<SelectGroup>
							<SelectLabel>Variant Games</SelectLabel>
							<SelectItem value="live_bughouse">Live Bughouse</SelectItem>
							<SelectItem value="live_blitz960">Live Blitz960</SelectItem>
							<SelectItem value="live_threecheck">Live Threecheck</SelectItem>
							<SelectItem value="live_crazyhouse">Live Crazyhouse</SelectItem>
							<SelectItem value="live_kingofthehill">
								Live Kingofthehill
							</SelectItem>
						</SelectGroup>
						<SelectSeparator />
						<SelectGroup>
							<SelectLabel>Other Skills & Modes</SelectLabel>
							<SelectItem value="tactics">Tactics</SelectItem>
							<SelectItem value="rush">Rush</SelectItem>
							<SelectItem value="battle">Battle</SelectItem>
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
					<TableRow>
						<TableCell className="font-medium">
							<RankBadge rank={1} />
						</TableCell>
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
								<p>Hikaru Nakamura</p>
							</div>
						</TableCell>
						<TableCell className="font-medium">hikaru</TableCell>
						<TableCell className="font-medium">Grand Master (GM)</TableCell>
						<TableCell className="font-medium">9000</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">
							<RankBadge rank={2} />
						</TableCell>
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
								<p>Hikaru Nakamura</p>
							</div>
						</TableCell>
						<TableCell className="font-medium">hikaru</TableCell>
						<TableCell className="font-medium">Grand Master (GM)</TableCell>
						<TableCell className="font-medium">9000</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">
							<RankBadge rank={3} />
						</TableCell>
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
								<p>Hikaru Nakamura</p>
							</div>
						</TableCell>
						<TableCell className="font-medium">hikaru</TableCell>
						<TableCell className="font-medium">Grand Master (GM)</TableCell>
						<TableCell className="font-medium">9000</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">
							<RankBadge rank={4} />
						</TableCell>
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
								<p>Hikaru Nakamura</p>
							</div>
						</TableCell>
						<TableCell className="font-medium">hikaru</TableCell>
						<TableCell className="font-medium">Grand Master (GM)</TableCell>
						<TableCell className="font-medium">9000</TableCell>
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

export default Leaderboards;
