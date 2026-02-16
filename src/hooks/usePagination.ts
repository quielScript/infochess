import { useMemo } from "react";

interface UsePaginationProps {
	totalItems: number;
	itemsPerPage: number;
	currentPage: number;
	maxVisiblePages?: number;
}

interface UsePaginationReturn {
	totalPages: number;
	pageStartIndex: number;
	pageEndIndex: number;
	visiblePages: (number | "ellipsis")[];
	canGoPrevious: boolean;
	canGoNext: boolean;
}

export function usePagination({
	totalItems,
	itemsPerPage,
	currentPage,
	maxVisiblePages = 5,
}: UsePaginationProps): UsePaginationReturn {
	const totalPages = Math.ceil(totalItems / itemsPerPage);
	const pageStartIndex = (currentPage - 1) * itemsPerPage;
	const pageEndIndex = pageStartIndex + itemsPerPage;

	const visiblePages = useMemo(() => {
		const pages: (number | "ellipsis")[] = [];

		if (totalPages <= maxVisiblePages + 2) {
			return Array.from({ length: totalPages }, (_, i) => i + 1);
		}

		pages.push(1);

		let rangeStart = Math.max(2, currentPage - 1);
		let rangeEnd = Math.min(totalPages - 1, currentPage + 1);

		if (currentPage <= 3) {
			rangeStart = 2;
			rangeEnd = Math.min(maxVisiblePages, totalPages - 1);
		} else if (currentPage >= totalPages - 2) {
			rangeStart = Math.max(2, totalPages - maxVisiblePages + 1);
			rangeEnd = totalPages - 1;
		}

		if (rangeStart > 2) {
			pages.push("ellipsis");
		}

		for (let i = rangeStart; i <= rangeEnd; i++) {
			pages.push(i);
		}

		if (rangeEnd < totalPages - 1) {
			pages.push("ellipsis");
		}

		if (totalPages > 1) {
			pages.push(totalPages);
		}

		return pages;
	}, [currentPage, totalPages, maxVisiblePages]);

	return {
		totalPages,
		pageStartIndex,
		pageEndIndex,
		visiblePages,
		canGoPrevious: currentPage > 1,
		canGoNext: currentPage < totalPages,
	};
}
