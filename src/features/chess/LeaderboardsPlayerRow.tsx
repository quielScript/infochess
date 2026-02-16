import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import RankBadge from "@/components/ui/RankBadge";
import { TableCell, TableRow } from "@/components/ui/table";

import type { LeaderboardPlayer } from "@/types";

interface LeaderboardsPlayerRowProps {
	player: LeaderboardPlayer;
}

function LeaderboardsPlayerRow({
	player,
}: LeaderboardsPlayerRowProps): React.JSX.Element {
	return (
		<TableRow>
			<TableCell className="font-medium">
				<RankBadge rank={player.rank} />
			</TableCell>
			<TableCell className="font-medium">
				<div className="flex items-center gap-3">
					<Avatar>
						<AvatarImage src={player.avatar} alt={player.username} />
						<AvatarFallback>
							{player.username?.substring(0, 2).toUpperCase()}
						</AvatarFallback>
					</Avatar>
					<p>{player.name}</p>
				</div>
			</TableCell>
			<TableCell className="font-medium">{player.username}</TableCell>
			<TableCell className="font-medium">{player.title}</TableCell>
			<TableCell className="font-medium">{player.score}</TableCell>
		</TableRow>
	);
}

export default LeaderboardsPlayerRow;
