import { Link } from "react-router-dom";
import Logo from "./Logo";
import Username from "../features/user/Username";
import { useState } from "react";
import { handleActiveLinkClass } from "../utils/helpers";

function NavBar() {
	const [activeNavLink, setActiveNavLink] = useState("searchPlayer");

	return (
		<header className="bg-smokyBlack">
			<nav className="flex items-center justify-between py-2 mx-auto mt-0 max-w-7xl">
				<Logo onClick={() => setActiveNavLink("searchPlayer")} />
				<ul className="flex items-center space-x-5 text-transparentWhite">
					<li
						className={`transition-all duration-150 hover:text-oliveGreen" ${handleActiveLinkClass(
							"searchPlayer",
							activeNavLink
						)}`}
						onClick={() => setActiveNavLink("searchPlayer")}
					>
						<Link to="searchPlayer">Search player</Link>
					</li>
					<li
						className={`transition-all duration-150 hover:text-oliveGreen" ${handleActiveLinkClass(
							"titledPlayers",
							activeNavLink
						)}`}
						onClick={() => setActiveNavLink("titledPlayers")}
					>
						<Link to="titledPlayers/GM">Titled players</Link>
					</li>
					<li
						className={`transition-all duration-150 hover:text-oliveGreen" ${handleActiveLinkClass(
							"leaderboards",
							activeNavLink
						)}`}
						onClick={() => setActiveNavLink("leaderboards")}
					>
						<Link to="leaderboards/daily">Leaderboards</Link>
					</li>
					<li
						className={`transition-all duration-150 hover:text-oliveGreen" ${handleActiveLinkClass(
							"streamers",
							activeNavLink
						)}`}
						onClick={() => setActiveNavLink("streamers")}
					>
						<Link to="streamers">Streamers</Link>
					</li>
					<li
						className={`transition-all duration-150 hover:text-oliveGreen" ${handleActiveLinkClass(
							"user",
							activeNavLink
						)}`}
						onClick={() => setActiveNavLink("user")}
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
