import { Badge } from "@/components/ui/badge";

interface RankBadgeProps {
	rank: number;
}

const rankBadgeStyles: Record<1 | 2 | 3, string> = {
	1: "bg-yellow-50 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300",
	2: "bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300",
	3: "bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300",
};

function RankBadge({ rank }: RankBadgeProps): React.JSX.Element {
	if (rank === 1 || rank === 2 || rank === 3) {
		return <Badge className={rankBadgeStyles[rank]}># {rank}</Badge>;
	}

	return <Badge className="bg-muted text-muted-foreground"># {rank}</Badge>;
}

export default RankBadge;
