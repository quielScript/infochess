import { Link, useLoaderData, useParams } from "react-router-dom";
import { getTitledPlayers } from "../../services/apiChess";

function TitledPlayersList() {
	const { title } = useParams();
	const { players } = useLoaderData();
	const titleCategories = [
		"GM",
		"WGM",
		"IM",
		"WIM",
		"FM",
		"WFM",
		"NM",
		"WNM",
		"CM",
		"WCM",
	];

	return (
		<div className="grid grid-cols-3 p-10 mx-auto mt-20 rounded-t-md max-w-7xl bg-smokyBlack text-transparentWhite">
			<div className="col-span-2 pr-10 border-r border-transparentWhite">
				<div className="flex items-center justify-between mb-2">
					<p className="font-bold">Player</p>
					<p className="font-bold">Title</p>
				</div>
				{players.map((player, i) => (
					<div
						className="flex items-center justify-between py-2 border-b border-transparentWhite"
						key={i}
					>
						<p>{player}</p>
						<p className="capitalize">{title}</p>
					</div>
				))}
			</div>
			<div className="pl-10">
				<p className="font-bold text-center">Categories</p>
				<ul>
					{titleCategories.map((title) => (
						<li
							className="py-2 text-center border-b border-transparentWhite"
							key={title}
						>
							<Link to={`/app/titledPlayers/${title}`}>{title}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export async function loader({ params }) {
	const titledPlayers = await getTitledPlayers(params.title);
	return titledPlayers;
}

export default TitledPlayersList;
