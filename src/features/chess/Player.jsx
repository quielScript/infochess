import { useSelector } from "react-redux";
import SearchPlayer from "./SearchPlayer";
import { getSearchedPlayer } from "./chessInfoSlice";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPlayerStats } from "../../services/apiChess";

function Player() {
	const [playerStats, setPlayerstats] = useState({});
	const searchedPlayer = useSelector(getSearchedPlayer);
	const { usernameQuery } = useParams();
	const {
		avatar,
		username,
		joined,
		league = "none",
		player_id,
	} = searchedPlayer;

	useEffect(
		function () {
			async function awaitPlayerStats() {
				try {
					const playerStats = await getPlayerStats(usernameQuery);
					console.log(playerStats);
					setPlayerstats(playerStats);
				} catch (e) {
					console.log(e);
				}
			}
			awaitPlayerStats();
		},
		[usernameQuery]
	);

	// TODO: Display stats
	// const test = Object.entries(playerStats)[0];

	// console.log(test);
	// console.log(test[0].split("_").join(" ").toUpperCase());
	// console.log(test[1].best);
	// console.log(test[1].last);

	return (
		<div className="p-10 mx-auto mt-20 rounded-t-md max-w-7xl bg-smokyBlack h-dvh">
			<SearchPlayer />

			{Object.keys(searchedPlayer).length > 0 && (
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
			)}
		</div>
	);
}

export default Player;
