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

function TitledPlayers(): React.JSX.Element {
	return (
		<>
			<div className="flex items-center justify-between mb-5">
				<h1 className="flex h-5 gap-4 text-base font-medium">
					<span>Titled Players</span>
					<Separator orientation="vertical" />
					<span className="text-oliveGreen">Grand Master (GM)</span>
				</h1>
				<Select>
					<SelectTrigger className="w-full max-w-48">
						<SelectValue placeholder="Select a category" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Grandmaster</SelectLabel>
							<SelectItem value="GM">Grandmaster (GM)</SelectItem>
							<SelectItem value="WGM">Woman Grandmaster (WGM)</SelectItem>
						</SelectGroup>
						<SelectSeparator />
						<SelectGroup>
							<SelectLabel>International Master</SelectLabel>
							<SelectItem value="IM">International Master (IM)</SelectItem>
							<SelectItem value="WIM">
								Woman International Master (WIM)
							</SelectItem>
						</SelectGroup>
						<SelectSeparator />
						<SelectGroup>
							<SelectLabel>FIDE Master</SelectLabel>
							<SelectItem value="FM">FIDE Master (FM)</SelectItem>
							<SelectItem value="WFM">Woman FIDE Master (WFM)</SelectItem>
						</SelectGroup>
						<SelectSeparator />
						<SelectGroup>
							<SelectLabel>National Master / Candidate Master</SelectLabel>
							<SelectItem value="NM">National Master (NM)</SelectItem>
							<SelectItem value="WNM">Woman National Master (WNM)</SelectItem>
							<SelectItem value="CM">Candidate Master (CM)</SelectItem>
							<SelectItem value="WCM">Woman Candidate Master (WCM)</SelectItem>
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
								<p>Hikaru Nakamura</p>
							</div>
						</TableCell>
						<TableCell className="font-medium">hikaru</TableCell>
						<TableCell className="font-medium">US</TableCell>
						<TableCell className="font-medium">Grand Master (GM)</TableCell>
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

export default TitledPlayers;
