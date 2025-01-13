import { useLoaderData } from "react-router-dom";
import { getStreamers } from "../../services/apiChess";

function Streamers() {
	const { streamers } = useLoaderData();

	return (
		<main>
			<div className="p-10 mx-auto mt-20 rounded-t-md max-w-7xl bg-smokyBlack text-transparentWhite">
				<div className="flex items-center justify-between mb-5">
					<p className="font-bold">Player</p>
					<div className="flex items-center space-x-10">
						<p className="font-bold">Channel</p>
						<p className="font-bold">Status</p>
					</div>
				</div>
				<div className="space-y-4">
					{streamers.map((streamer) => (
						<div
							className="flex items-center justify-between pb-4 border-b border-transparentWhite"
							key={streamer.username}
						>
							<div className="flex items-center space-x-3">
								<img
									src={streamer.avatar}
									alt={streamer.username}
									className="border rounded-md w-14 h-14 border-oliveGreen"
								/>
								<p className="font-medium">{streamer.username}</p>
							</div>
							<div className="flex items-center space-x-16">
								<a
									href={streamer.twitch_url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-brightCyan"
								>
									View
								</a>
								<p
									className={`font-medium ${
										streamer.is_live ? "text-red-600" : "text-transparentWhite"
									}`}
								>
									{streamer.is_live ? "Live" : "Offline"}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}

export async function loader() {
	const streamers = getStreamers();
	return streamers;
}
export default Streamers;
