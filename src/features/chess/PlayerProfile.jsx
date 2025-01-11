import { useSelector } from "react-redux";
import SearchPlayer from "./SearchPlayer";
import { getSearchedPlayer } from "./chessInfoSlice";

function PlayerProfile() {
	const searchedPlayer = useSelector(getSearchedPlayer);
	const {
		avatar,
		username,
		joined,
		league = "none",
		player_id,
	} = searchedPlayer;

	return (
		<div className="p-10 mx-auto mt-20 rounded-t-md max-w-7xl bg-smokyBlack h-dvh">
			<SearchPlayer />

			<div className="flex space-x-5 mt-14">
				<img
					src={avatar}
					alt="test"
					className="w-48 h-48 border rounded-md border-oliveGreen"
				/>
				<div className="space-y-2 text-transparentWhite">
					<p className="text-xl font-bold text-white">{username}</p>
					<p>
						<span className="font-semibold">Joined:</span> {joined}
					</p>
					<p>
						<span className="font-semibold">League:</span>{" "}
						<span className="capitalize">{league}</span>
					</p>
					<p>
						<span className="font-semibold">Player Id:</span> {player_id}
					</p>
				</div>
			</div>
		</div>
	);
}

export default PlayerProfile;
