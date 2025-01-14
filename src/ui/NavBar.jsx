import { Link } from "react-router-dom";
import Logo from "./Logo";
import Username from "../features/user/Username";
import { useState } from "react";

function NavBar() {
	const [activeLink, setActiveLink] = useState("searchPlayer");

	return (
		<header className="bg-smokyBlack">
			<nav className="flex items-center justify-between py-2 mx-auto mt-0 max-w-7xl">
				<Logo />
				<ul className="flex items-center space-x-5 text-transparentWhite">
					<li
						className={`transition-all duration-150 hover:text-oliveGreen" ${
							activeLink === "searchPlayer" ? "text-oliveGreen" : null
						}`}
						onClick={() => setActiveLink("searchPlayer")}
					>
						<Link to="searchPlayer">Search player</Link>
					</li>
					<li
						className={`transition-all duration-150 hover:text-oliveGreen" ${
							activeLink === "titledPlayers" ? "text-oliveGreen" : null
						}`}
						onClick={() => setActiveLink("titledPlayers")}
					>
						<Link to="titledPlayers/GM">Titled players</Link>
					</li>
					<li
						className={`transition-all duration-150 hover:text-oliveGreen" ${
							activeLink === "leaderBoards" ? "text-oliveGreen" : null
						}`}
						onClick={() => setActiveLink("leaderboards")}
					>
						<Link to="leaderboards/daily">Leaderboards</Link>
					</li>
					<li
						className={`transition-all duration-150 hover:text-oliveGreen" ${
							activeLink === "streamers" ? "text-oliveGreen" : null
						}`}
						onClick={() => setActiveLink("streamers")}
					>
						<Link to="streamers">Streamers</Link>
					</li>
					<li
						className={`transition-all duration-150 hover:text-oliveGreen" ${
							activeLink === "user" ? "text-oliveGreen" : null
						}`}
						onClick={() => setActiveLink("user")}
					>
						<Link to="user">
							<Username />
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default NavBar;
