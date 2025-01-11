import { useState } from "react";

function SearchPlayer() {
	const [usernameQuery, setUsernameQuery] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
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
