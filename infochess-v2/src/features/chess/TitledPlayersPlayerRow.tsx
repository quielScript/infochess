import { TableCell, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TitledPlayersPlayerRowProps {
	player: string;
}

function TitledPlayersPlayerRow({
	player,
}: TitledPlayersPlayerRowProps): React.JSX.Element {
	return (
		<TableRow>
			<TableCell className="font-medium">
				<div className="flex items-center gap-3">
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
						<AvatarFallback>HK</AvatarFallback>
					</Avatar>
					<p>name</p>
				</div>
			</TableCell>
			<TableCell className="font-medium">{player}</TableCell>
			<TableCell className="font-medium">country</TableCell>
			<TableCell className="font-medium">title</TableCell>
		</TableRow>
	);
}

export default TitledPlayersPlayerRow;
