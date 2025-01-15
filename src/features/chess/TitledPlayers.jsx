import { Link, useLoaderData, useParams } from "react-router-dom";
import { getTitledPlayers } from "../../services/apiChess";
import { handleActiveLinkClass } from "../../utils/helpers";

function TitledPlayers() {
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
					{titleCategories.map((titleCategory) => (
						<Link
							to={`/app/titledPlayers/${titleCategory}`}
							key={titleCategory}
						>
							<li className="py-2 text-center border-b border-transparentWhite">
								<span
									className={`${handleActiveLinkClass(titleCategory, title)}`}
								>
									{titleCategory}
								</span>
							</li>
						</Link>
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

export default TitledPlayers;
