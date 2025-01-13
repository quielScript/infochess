import { useSelector } from "react-redux";
import SearchPlayer from "./SearchPlayer";
import { getSearchedPlayer } from "./chessInfoSlice";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPlayerStats } from "../../services/apiChess";
import { formatDate } from "../../utils/helpers";

// Recursive function to render stats
function renderStatValue(value) {
	if (typeof value === "object" && value !== null) {
		// If the value is an object, iterate over its keys
		return (
			<div className="ml-4">
				{Object.entries(value).map(([key, nestedValue]) => (
					<div key={key}>
						<span className="font-semibold capitalize">
							{key.split("_").join(" ")}:
						</span>{" "}
						{key === "date" ? (
							<span>{formatDate(nestedValue)}</span>
						) : (
							renderStatValue(nestedValue)
						)}
					</div>
				))}
			</div>
		);
	} else if (typeof value === "string" && value.startsWith("http")) {
		// If the value is a URL, render it as a clickable link
		return (
			<a
				href={value}
				target="_blank"
				rel="noopener noreferrer"
				className="break-all text-brightCyan"
			>
				{value}
			</a>
		);
	} else {
		// For primitive values, directly render them
		return <span>{value}</span>;
	}
}

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
					setPlayerstats(playerStats);
				} catch (e) {
					console.log(e);
				}
			}
			awaitPlayerStats();
		},
		[usernameQuery]
	);

	const statsEntries = Object.entries(playerStats);

	return (
		<main>
			<div className="p-10 mx-auto mt-20 rounded-t-md max-w-7xl bg-smokyBlack">
				<SearchPlayer />

				{Object.keys(searchedPlayer).length > 0 && (
					<>
						<div className="flex mb-10 space-x-5 mt-14">
							<img
								src={avatar}
								alt="test"
								className="w-48 h-48 border rounded-md border-oliveGreen"
							/>
							<div className="space-y-2 text-transparentWhite">
								<p className="text-xl font-bold text-white">{username}</p>
								<p>
									<span className="font-semibold">Joined:</span>{" "}
									{formatDate(joined)}
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
						<p className="mb-10 text-lg font-bold text-center text-transparentWhite">
							Player statistics
						</p>
						<div className="grid grid-cols-4 gap-4 text-transparentWhite">
							{statsEntries.map(([statName, statValue], i) => (
								<div
									className="p-3 border rounded-md border-transparentWhite w-72"
									key={i}
								>
									<p className="mb-2 font-semibold capitalize">
										{statName.split("_").join(" ")}
									</p>
									{renderStatValue(statValue)}
								</div>
							))}
						</div>
					</>
				)}
			</div>
		</main>
	);
}

export default Player;
