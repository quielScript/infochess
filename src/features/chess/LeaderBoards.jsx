import { Link, useLoaderData, useParams } from "react-router-dom";
import { getLeaderboards } from "../../services/apiChess";

function LeaderBoards() {
	const leaderboards = useLoaderData();
	const { category } = useParams();
	const categorizedLeaderboards = leaderboards[category];
	const leaderboardsCategories = [
		"daily",
		"daily960",
		"live_rapid",
		"live_blitz",
		"live_bullet",
		"live_bughouse",
		"live_blitz960",
		"live_threecheck",
		"live_crazyhouse",
		"live_kingofthehill",
		"tactics",
		"rush",
		"battle",
	];

	return (
		<main>
			<div className="grid grid-cols-3 p-10 mx-auto mt-20 rounded-t-md max-w-7xl bg-smokyBlack text-transparentWhite">
				<div className="col-span-2 pr-10 border-r border-transparentWhite">
					<div className="flex items-center justify-between mb-5">
						<div className="flex items-center space-x-20">
							<p className="font-bold">Rank</p>
							<p className="font-bold">Player</p>
						</div>
						<div className="flex items-center space-x-20">
							<p className="font-bold">Title</p>
							<p className="font-bold">Score</p>
						</div>
					</div>
					<div className="space-y-4">
						{categorizedLeaderboards.map((player) => (
							<div
								className="flex items-center justify-between pb-4 border-b border-transparentWhite"
								key={player.player_id}
							>
								<div className="flex items-center space-x-24">
									<p className="font-bold">#{player.rank}</p>
									<div className="flex items-center space-x-3">
										<img
											src={player.avatar}
											alt={player.username}
											className="border rounded-md w-14 h-14 border-oliveGreen"
										/>
										<p>{player.username}</p>
									</div>
								</div>
								<div className="flex items-center space-x-20">
									<p>{player.title}</p>
									<p>{player.score}</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="pl-10">
					<p className="font-bold text-center">Categories</p>
					<ul>
						{leaderboardsCategories.map((category) => (
							<Link to={`/app/leaderboards/${category}`} key={category}>
								<li className="py-2 text-center capitalize border-b border-transparentWhite">
									{category.split("_").join(" ")}
								</li>
							</Link>
						))}
					</ul>
				</div>
			</div>
		</main>
	);
}

export async function loader() {
	const leaderboards = getLeaderboards();
	return leaderboards;
}

export default LeaderBoards;
