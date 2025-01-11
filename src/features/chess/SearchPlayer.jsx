import { useState } from "react";
import { searchPlayer } from "../../services/apiChess";
import { useDispatch } from "react-redux";
import { setSearchedPlayer } from "./chessInfoSlice";

function SearchPlayer() {
	const [usernameQuery, setUsernameQuery] = useState("");
	const dispatch = useDispatch();

	async function handleSubmit(e) {
		e.preventDefault();
		if (!usernameQuery.trim()) return;

		try {
			const searchedPlayer = await searchPlayer(usernameQuery);
			dispatch(setSearchedPlayer(searchedPlayer));
		} catch (e) {
			console.log(e);
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="space-y-2">
				<label htmlFor="usernameQuery" className="text-transparentWhite">
					Search player by username
				</label>
				<div className="flex items-center">
					<input
						type="text"
						id="usernameQuery"
						className="bg-transparent border-[1px] w-80 rounded-md border-transparentWhite py-2 px-4  text-transparentWhite"
						value={usernameQuery}
						onChange={(e) => setUsernameQuery(e.target.value)}
					/>
					<button type="submit" className="-ml-9">
						<img
							src="/img/search-icon.png"
							alt="Magnifying glass icon"
							className="w-5 h-5"
						/>
					</button>
				</div>
			</div>
		</form>
	);
}

export default SearchPlayer;
