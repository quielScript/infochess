import { TableCell, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { ChessPlayer } from "@/types";

interface TitledPlayersPlayerRowProps {
	player: ChessPlayer;
	countryName?: string;
}

function TitledPlayersPlayerRow({
	player,
	countryName,
}: TitledPlayersPlayerRowProps): React.JSX.Element {
	const countryDisplay = countryName || player.country?.split("/").pop() || "-";

	return (
		<TableRow>
			<TableCell className="font-medium">
				<div className="flex items-center gap-3">
					<Avatar>
						<AvatarImage src={player.avatar} alt={player.username} />
						<AvatarFallback>
							{player.username?.substring(0, 2).toUpperCase()}
						</AvatarFallback>
					</Avatar>
					<p>{player.name || player.username}</p>
				</div>
			</TableCell>
			<TableCell className="font-medium">{player.username}</TableCell>
			<TableCell className="font-medium">{countryDisplay}</TableCell>
			<TableCell className="font-medium">{player.title}</TableCell>
		</TableRow>
	);
}

export default TitledPlayersPlayerRow;
