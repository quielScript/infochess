import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationControlsProps {
	currentPage: number;
	visiblePages: (number | "ellipsis")[];
	canGoPrevious: boolean;
	canGoNext: boolean;
	onPageChange: (page: number) => void;
}

export function PaginationControls({
	currentPage,
	visiblePages,
	canGoPrevious,
	canGoNext,
	onPageChange,
}: PaginationControlsProps) {
	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						className={
							!canGoPrevious
								? "pointer-events-none opacity-50"
								: "cursor-pointer"
						}
						onClick={() => canGoPrevious && onPageChange(currentPage - 1)}
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
								onClick={() => onPageChange(page)}
							>
								{page}
							</PaginationLink>
						</PaginationItem>
					);
				})}

				<PaginationItem>
					<PaginationNext
						className={
							!canGoNext ? "pointer-events-none opacity-50" : "cursor-pointer"
						}
						onClick={() => canGoNext && onPageChange(currentPage + 1)}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
